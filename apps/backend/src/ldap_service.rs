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

    /// Authenticate user against LDAP using direct UPN binding
    pub async fn authenticate(&self, username: &str, password: &str) -> Result<LdapUser> {
        // Try direct UPN binding with multiple domain formats
        let upn_domains = vec!["NWFTH.com", "newlywedsfoods.co.th"];

        for domain in &upn_domains {
            let upn = format!("{}@{}", username, domain);
            info!("🔐 Attempting LDAP authentication with UPN: {}", upn);

            match self.try_upn_bind(&upn, password).await {
                Ok(()) => {
                    info!("✅ LDAP authentication successful for UPN: {}", upn);
                    // Authentication succeeded, get user details
                    return self.get_user_details(username).await;
                }
                Err(e) => {
                    info!("❌ LDAP authentication failed for UPN {}: {}", upn, e);
                    // Continue to next domain
                    continue;
                }
            }
        }

        // If all UPN attempts failed, return error
        Err(anyhow::anyhow!("LDAP authentication failed for all domain formats"))
    }


    /// Try UPN binding for authentication
    async fn try_upn_bind(&self, upn: &str, password: &str) -> Result<()> {
        let server_url = self.server_url.clone();
        let upn = upn.to_string();
        let password = password.to_string();

        tokio::task::spawn_blocking(move || -> Result<()> {
            let mut ldap = LdapConn::new(&server_url)?;

            ldap.simple_bind(&upn, &password)
                .context("LDAP UPN authentication failed")?;

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

            // Try to use service account for search if available
            let search_result = if let (Some(bind_dn), Some(bind_password)) = (&bind_dn, &bind_password) {
                ldap.simple_bind(bind_dn, bind_password)?;

                // Search for user details
                let search_filter = format!("(sAMAccountName={})", username);
                ldap.search(
                    &base_dn,
                    Scope::Subtree,
                    &search_filter,
                    vec!["displayName", "mail", "department", "distinguishedName", "cn"]
                )?.success()
            } else {
                // No service account - return basic user info
                info!("No service account configured, returning basic user info for: {}", username);
                return Ok(LdapUser {
                    username: username.to_string(),
                    display_name: username.to_string(),
                    email: format!("{}@nwfth.com", username),
                    department: "Unknown".to_string(),
                    dn: format!("CN={},CN=Users,{}", username, base_dn),
                });
            };

            let (rs, _res) = search_result?;

            if rs.is_empty() {
                // If search returns empty, return basic info
                info!("User '{}' not found in LDAP search, returning basic info", username);
                return Ok(LdapUser {
                    username: username.to_string(),
                    display_name: username.to_string(),
                    email: format!("{}@nwfth.com", username),
                    department: "Unknown".to_string(),
                    dn: format!("CN={},CN=Users,{}", username, base_dn),
                });
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
                .unwrap_or(&format!("CN={},CN=Users,{}", username, base_dn))
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