use anyhow::{Context, Result};
use ldap3::{LdapConn, Scope, SearchEntry};
use serde::{Deserialize, Serialize};
use tracing::info;
use std::env;

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct LdapUser {
    pub username: String,
    pub display_name: String,
    pub email: String,
    pub department: String,
    pub dn: String,
}

#[derive(Clone)]
pub struct LdapService {
    server_url: String,
    base_dn: String,
    bind_dn: Option<String>,
    bind_password: Option<String>,
}

impl LdapService {
    /// Initialize LDAP service
    pub fn new() -> Result<Self> {
        let server_url = env::var("LDAP_URL")
            .context("LDAP_URL must be set")?;

        let base_dn = env::var("LDAP_BASE_DN")
            .context("LDAP_BASE_DN must be set")?;

        // Optional service account for search operations
        let bind_dn = env::var("LDAP_BIND_DN").ok();
        let bind_password = env::var("LDAP_BIND_PASSWORD").ok();

        info!("🔐 LDAP Service initialized with server: {}", server_url);

        Ok(Self {
            server_url,
            base_dn,
            bind_dn,
            bind_password,
        })
    }

    /// Authenticate user against LDAP
    pub async fn authenticate(&self, username: &str, password: &str) -> Result<LdapUser> {
        // First, search for the user to get their DN
        let user_dn = self.find_user_dn(username).await?;

        // Then bind with the user's credentials
        self.bind_user(&user_dn, password).await?;

        // If authentication succeeds, get user details
        self.get_user_details(username).await
    }

    /// Find user DN by username
    async fn find_user_dn(&self, username: &str) -> Result<String> {
        let server_url = self.server_url.clone();
        let bind_dn = self.bind_dn.clone();
        let bind_password = self.bind_password.clone();
        let base_dn = self.base_dn.clone();
        let username = username.to_string();

        tokio::task::spawn_blocking(move || -> Result<String> {
            let mut ldap = LdapConn::new(&server_url)?;

            // If we have bind credentials, use them; otherwise use anonymous bind
            if let (Some(bind_dn), Some(bind_password)) = (&bind_dn, &bind_password) {
                ldap.simple_bind(bind_dn, bind_password)?;
            } else {
                ldap.simple_bind("", "")?; // Anonymous bind
            }

            // Search for the user
            let search_filter = format!("(sAMAccountName={})", username);
            let (rs, _res) = ldap.search(
                &base_dn,
                Scope::Subtree,
                &search_filter,
                vec!["distinguishedName"]
            )?.success()?;

            if rs.is_empty() {
                return Err(anyhow::anyhow!("User '{}' not found in LDAP", username));
            }

            let entry = SearchEntry::construct(rs[0].clone());
            let dn = entry.attrs.get("distinguishedName")
                .and_then(|v| v.first())
                .ok_or_else(|| anyhow::anyhow!("No DN found for user"))?;

            Ok(dn.clone())
        }).await?
    }

    /// Bind with user credentials to verify password
    async fn bind_user(&self, user_dn: &str, password: &str) -> Result<()> {
        let server_url = self.server_url.clone();
        let user_dn = user_dn.to_string();
        let password = password.to_string();

        tokio::task::spawn_blocking(move || -> Result<()> {
            let mut ldap = LdapConn::new(&server_url)?;

            ldap.simple_bind(&user_dn, &password)
                .context("LDAP authentication failed")?;

            info!("✅ LDAP authentication successful for DN: {}", user_dn);
            Ok(())
        }).await?
    }

    /// Get detailed user information from LDAP
    pub async fn get_user_details(&self, username: &str) -> Result<LdapUser> {
        let server_url = self.server_url.clone();
        let bind_dn = self.bind_dn.clone();
        let bind_password = self.bind_password.clone();
        let base_dn = self.base_dn.clone();
        let username = username.to_string();

        tokio::task::spawn_blocking(move || -> Result<LdapUser> {
            let mut ldap = LdapConn::new(&server_url)?;

            // Use service account for search if available
            if let (Some(bind_dn), Some(bind_password)) = (&bind_dn, &bind_password) {
                ldap.simple_bind(bind_dn, bind_password)?;
            } else {
                ldap.simple_bind("", "")?;
            }

            // Search for user details
            let search_filter = format!("(sAMAccountName={})", username);
            let (rs, _res) = ldap.search(
                &base_dn,
                Scope::Subtree,
                &search_filter,
                vec!["displayName", "mail", "department", "distinguishedName", "cn"]
            )?.success()?;

            if rs.is_empty() {
                return Err(anyhow::anyhow!("User '{}' not found in LDAP", username));
            }

            let entry = SearchEntry::construct(rs[0].clone());

            // Extract user information
            let display_name = entry.attrs.get("displayName")
                .or_else(|| entry.attrs.get("cn"))
                .and_then(|v| v.first())
                .map(|s| s.as_str())
                .unwrap_or(&username)
                .to_string();

            let email = entry.attrs.get("mail")
                .and_then(|v| v.first())
                .map(|s| s.clone())
                .unwrap_or_else(|| format!("{}@nwfth.com", username));

            let department = entry.attrs.get("department")
                .and_then(|v| v.first())
                .map(|s| s.as_str())
                .unwrap_or("Unknown")
                .to_string();

            let dn = entry.attrs.get("distinguishedName")
                .and_then(|v| v.first())
                .map(|s| s.as_str())
                .unwrap_or("")
                .to_string();

            Ok(LdapUser {
                username: username.to_string(),
                display_name,
                email,
                department,
                dn,
            })
        }).await?
    }

    /// Test LDAP connection
    pub async fn test_connection(&self) -> Result<()> {
        let server_url = self.server_url.clone();
        let bind_dn = self.bind_dn.clone();
        let bind_password = self.bind_password.clone();

        tokio::task::spawn_blocking(move || -> Result<()> {
            let mut ldap = LdapConn::new(&server_url)
                .context("Failed to connect to LDAP server")?;

            if let (Some(bind_dn), Some(bind_password)) = (&bind_dn, &bind_password) {
                ldap.simple_bind(bind_dn, bind_password)
                    .context("Failed to bind with service account")?;
            } else {
                ldap.simple_bind("", "")
                    .context("Failed to perform anonymous bind")?;
            }

            info!("✅ LDAP connection test successful");
            Ok(())
        }).await?
    }
}