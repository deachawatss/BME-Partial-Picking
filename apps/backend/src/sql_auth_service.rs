use anyhow::{Context, Result};
use serde::{Deserialize, Serialize};
use tiberius::{Client, Config, AuthMethod};
use tokio::net::TcpStream;
use tokio_util::compat::{TokioAsyncWriteCompatExt, Compat};
use tracing::{info, warn, error};
use std::env;
use chrono::{DateTime, Utc, NaiveDateTime};

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct SqlUser {
    pub userid: i32,
    pub username: String,
    pub first_name: Option<String>,
    pub last_name: Option<String>,
    pub email: Option<String>,
    pub department: Option<String>,
    pub auth_source: String,
    pub ldap_username: Option<String>,
    pub ldap_dn: Option<String>,
    pub last_ldap_sync: Option<DateTime<Utc>>,
    pub ad_enabled: bool,
    pub app_permissions: Option<String>,
}

#[derive(Clone)]
pub struct SqlAuthService {
    connection_string: String,
}

impl SqlAuthService {
    /// Initialize SQL authentication service
    pub fn new() -> Result<Self> {
        let server = env::var("TFCPILOT3_SERVER")
            .unwrap_or_else(|_| "192.168.0.86".to_string());

        let port: u16 = env::var("TFCPILOT3_PORT")
            .unwrap_or_else(|_| "49381".to_string())
            .parse()
            .unwrap_or(49381);

        let database = env::var("PRIMARY_DB")
            .unwrap_or_else(|_| "TFCPILOT3".to_string());

        let username = env::var("DB_USERNAME")
            .unwrap_or_else(|_| "NSW".to_string());

        let password = env::var("DB_PASSWORD")
            .unwrap_or_else(|_| "B3sp0k3".to_string());

        let connection_string = format!(
            "server={};port={};database={};username={};password={};TrustServerCertificate=yes;",
            server, port, database, username, password
        );

        info!("🗄️ SQL Auth Service initialized for database: {}", database);

        Ok(Self {
            connection_string,
        })
    }

    /// Create database connection
    async fn get_connection(&self) -> Result<Client<Compat<TcpStream>>> {
        let config = Config::from_ado_string(&self.connection_string)?;
        let tcp = TcpStream::connect(config.get_addr()).await?;
        let client = Client::connect(config, tcp.compat_write()).await?;
        Ok(client)
    }

    /// Authenticate user with SQL Server password
    pub async fn authenticate_local(&self, username: &str, password: &str) -> Result<SqlUser> {
        let mut client = self.get_connection().await?;

        let query = "
            SELECT userid, uname, Fname, Lname, email, department,
                   auth_source, ldap_username, ldap_dn, last_ldap_sync,
                   ad_enabled, app_permissions, pword
            FROM tbl_user
            WHERE uname = @P1 AND auth_source = 'LOCAL'
        ";

        let stream = client.query(query, &[&username]).await?;
        let rows = stream.into_first_result().await?;

        if rows.is_empty() {
            return Err(anyhow::anyhow!("User '{}' not found or not configured for local authentication", username));
        }

        let row = &rows[0];

        // Get stored password
        let stored_password: Option<&str> = row.get("pword");

        match stored_password {
            Some(stored_pwd) => {
                // Simple password comparison (in production, use bcrypt)
                if stored_pwd != password {
                    return Err(anyhow::anyhow!("Invalid password for user '{}'", username));
                }
            }
            None => {
                return Err(anyhow::anyhow!("No password set for user '{}'", username));
            }
        }

        info!("✅ SQL local authentication successful for user: {}", username);

        // Convert row to SqlUser
        self.row_to_user(row, username)
    }

    /// Get user by username (for LDAP user lookup/creation)
    pub async fn get_user(&self, username: &str) -> Result<Option<SqlUser>> {
        let mut client = self.get_connection().await?;

        let query = "
            SELECT userid, uname, Fname, Lname, email, department,
                   auth_source, ldap_username, ldap_dn, last_ldap_sync,
                   ad_enabled, app_permissions, pword
            FROM tbl_user
            WHERE uname = @P1 OR ldap_username = @P1
        ";

        let stream = client.query(query, &[&username]).await?;
        let rows = stream.into_first_result().await?;

        if rows.is_empty() {
            return Ok(None);
        }

        let row = &rows[0];
        let user = self.row_to_user(row, username)?;
        Ok(Some(user))
    }

    /// Create or update LDAP user in database
    pub async fn upsert_ldap_user(&self, ldap_user: &crate::ldap_service::LdapUser) -> Result<SqlUser> {
        let mut client = self.get_connection().await?;

        // First check if user exists
        if let Some(existing_user) = self.get_user(&ldap_user.username).await? {
            // Update existing user
            self.update_ldap_user(&mut client, &existing_user, ldap_user).await
        } else {
            // Create new user
            self.create_ldap_user(&mut client, ldap_user).await
        }
    }

    /// Update existing LDAP user
    async fn update_ldap_user(
        &self,
        client: &mut Client<Compat<TcpStream>>,
        existing_user: &SqlUser,
        ldap_user: &crate::ldap_service::LdapUser
    ) -> Result<SqlUser> {
        let query = "
            UPDATE tbl_user
            SET Fname = @P1, Lname = @P2, email = @P3, department = @P4,
                ldap_username = @P5, ldap_dn = @P6, last_ldap_sync = GETUTCDATE(),
                auth_source = 'LDAP'
            WHERE userid = @P7
        ";

        // Split display name into first and last name
        let name_parts: Vec<&str> = ldap_user.display_name.split_whitespace().collect();
        let first_name = name_parts.first().unwrap_or(&ldap_user.username.as_str()).to_string();
        let last_name = name_parts.get(1..).map(|parts| parts.join(" "))
            .unwrap_or_else(|| "".to_string());

        client.execute(query, &[
            &first_name,
            &last_name,
            &ldap_user.email,
            &ldap_user.department,
            &ldap_user.username,
            &ldap_user.dn,
            &existing_user.userid
        ]).await?;

        info!("✅ Updated LDAP user in database: {}", ldap_user.username);

        // Return updated user
        self.get_user(&ldap_user.username).await?
            .ok_or_else(|| anyhow::anyhow!("Failed to retrieve updated user"))
    }

    /// Create new LDAP user
    async fn create_ldap_user(
        &self,
        client: &mut Client<Compat<TcpStream>>,
        ldap_user: &crate::ldap_service::LdapUser
    ) -> Result<SqlUser> {
        let query = "
            INSERT INTO tbl_user (uname, Fname, Lname, email, department,
                                 auth_source, ldap_username, ldap_dn,
                                 last_ldap_sync, ad_enabled, app_permissions, pword)
            VALUES (@P1, @P2, @P3, @P4, @P5, 'LDAP', @P6, @P7, GETUTCDATE(), 1, '1', 'LDAP_USER')
        ";

        // Split display name into first and last name
        let name_parts: Vec<&str> = ldap_user.display_name.split_whitespace().collect();
        let first_name = name_parts.first().unwrap_or(&ldap_user.username.as_str()).to_string();
        let last_name = name_parts.get(1..).map(|parts| parts.join(" "))
            .unwrap_or_else(|| "".to_string());

        client.execute(query, &[
            &ldap_user.username,
            &first_name,
            &last_name,
            &ldap_user.email,
            &ldap_user.department,
            &ldap_user.username,
            &ldap_user.dn
        ]).await?;

        info!("✅ Created new LDAP user in database: {}", ldap_user.username);

        // Return created user
        self.get_user(&ldap_user.username).await?
            .ok_or_else(|| anyhow::anyhow!("Failed to retrieve created user"))
    }

    /// Convert database row to SqlUser
    fn row_to_user(&self, row: &tiberius::Row, username: &str) -> Result<SqlUser> {
        let userid: i32 = row.get("userid").unwrap_or(0);
        let uname: &str = row.get("uname").unwrap_or(username);
        let first_name: Option<&str> = row.get("Fname");
        let last_name: Option<&str> = row.get("Lname");
        let email: Option<&str> = row.get("email");
        let department: Option<&str> = row.get("department");
        let auth_source: &str = row.get("auth_source").unwrap_or("LOCAL");
        let ldap_username: Option<&str> = row.get("ldap_username");
        let ldap_dn: Option<&str> = row.get("ldap_dn");
        let ad_enabled: bool = row.get("ad_enabled").unwrap_or(true);
        let app_permissions: Option<&str> = row.get("app_permissions");

        // Convert last_ldap_sync if present - simplified for now
        let last_ldap_sync: Option<DateTime<Utc>> = None; // TODO: Fix datetime conversion later

        Ok(SqlUser {
            userid,
            username: uname.to_string(),
            first_name: first_name.map(|s| s.to_string()),
            last_name: last_name.map(|s| s.to_string()),
            email: email.map(|s| s.to_string()),
            department: department.map(|s| s.to_string()),
            auth_source: auth_source.to_string(),
            ldap_username: ldap_username.map(|s| s.to_string()),
            ldap_dn: ldap_dn.map(|s| s.to_string()),
            last_ldap_sync,
            ad_enabled,
            app_permissions: app_permissions.map(|s| s.to_string()),
        })
    }

    /// Test database connection
    pub async fn test_connection(&self) -> Result<()> {
        let mut client = self.get_connection().await
            .context("Failed to connect to SQL Server")?;

        let stream = client.query("SELECT 1 as test", &[]).await?;
        let _rows = stream.into_first_result().await?;

        info!("✅ SQL Server connection test successful");
        Ok(())
    }
}