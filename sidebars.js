module.exports = {
  "getting-started": [
    //id of the sidebar
    {
      type: "category", // doc(default), 'link'(external links), 'ref'(page without without sidebar)
      label: "Zowe fundamentals",
      className: "ToCheadercolor",
      link: {type:"doc", id:"getting-started/overview"},
      collapsed: false,
      items: [
        "getting-started/zowe-architecture",
        {
          type: "category",
          label: "Zowe security",
          link: {type: "doc", id: "getting-started/zowe-security-overview"},
          items: [
            { type: "doc",
              label: "Digital Certificates",
              id: "getting-started/zowe-certificates-overview",
            },
            { type: "doc",
              label: "User authentication",
              id: "getting-started/zowe-security-authentication",
            }
          ],
        },
        "getting-started/zowe-high-availability"
      ],
    },
    "appendix/zowe-glossary", 
    {
      type: "category",
      label: "Zowe FAQ",
      className: "ToCheadercolor",
      link: {type: "doc", id: "getting-started/zowe_faq"},
      items: [
        "getting-started/zowe_v2_faq",
      ],
    },
    {
      type: "category",
      label: "Release notes",
      className: "ToCheadercolor",
      link: {type:"doc", id:"getting-started/release-notes/release-notes-overview"},
      items: [
        "getting-started/release-notes/v2_11_0",
        "getting-started/release-notes/v2_10_0",
        "getting-started/release-notes/v2_9_0",
        "getting-started/release-notes/v2_8_0",
        "getting-started/release-notes/v2_7_0",
        "getting-started/release-notes/v2_6_1",
        "getting-started/release-notes/v2_6_0",
        "getting-started/release-notes/v2_5_0",
        "getting-started/release-notes/v2_4_0",
        "getting-started/release-notes/v2_3_1",
        "getting-started/release-notes/v2_3_0",
        "getting-started/release-notes/v2_2_0",
        "getting-started/release-notes/v2_1_0",
        "getting-started/release-notes/v2_0_0",
        "getting-started/zowe-office-hours"
      ],
    },
    {
      type: "doc",
      label: "Zowe CLI quick start",
      className: "ToCitemcolor",
      id:"getting-started/cli-getting-started",
    },
    {
      type: "doc",
      label: "Migrating Zowe server component from V1 to V2",
      className: "ToCitemcolor",
      id:"extend/migrate-extensions",
    },
    {
      type: "doc",
      label: "Zowe learning resources",
      className: "ToCitemcolor",
      id:"getting-started/zowe-resources",
    },
  ],

  "setup": [
    "user-guide/install-overview",
    {
      type: "category",
      label: "Zowe server-side installation overview",
      link: {type:"doc", id:"user-guide/install-zos"},
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Installing convenience, SMP/E, and PSWI builds",
          items: [
            "user-guide/zos-components-installation-checklist",
            "user-guide/zos-components-installation-checklist-dev",
            {
              type: "category",
              label: "Planning",
              link: {type:"doc", id:"user-guide/installandconfig"},
              items: [
                "user-guide/configure-uss",
              ],
            },
            {
              type: "category",
              label: "System requirements",
              link: {type:"doc", id:"user-guide/systemrequirements-zos"},
              items: [
                "user-guide/install-nodejs-zos",
                "user-guide/systemrequirements-zosmf",
                "user-guide/systemrequirements-zosmf-lite",
              ],
            },
            {
              type: "category",
              label: "Installing",
              items: [
                "user-guide/install-zowe-zos-convenience-build",
                {
                  type: "category",
                  label: "Installing Zowe SMP/E build",
                  link: {type:"doc", id:"user-guide/install-zowe-smpe"},
                  items: [
                    "user-guide/install-zowe-smpe-zosmf-workflow",
                  ],
                },
                {
                  type: "category",
                  label: "Installing Zowe Portable Software Instance",
                  link: {type:"doc", id:"user-guide/install-zowe-pswi"},
                  items: [
                    "user-guide/install-zowe-pswi-address-requirements",
                    "user-guide/install-zowe-pswi-acquire",
                    "user-guide/install-zowe-pswi-deployment",
                  ],
                },
                {
                  type: "category",
                  label: "Upgrading server-side components",
                  items: [
                    "user-guide/api-mediation/upgrade-zowe-no-downtime"
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Configuring",
              items: [
                "user-guide/initialize-zos-system",
                "user-guide/initialize-mvs-datasets",
                "user-guide/initialize-security-configuration",
                "user-guide/configure-zos-system",
                "user-guide/grant-user-permission-zosmf",
                "user-guide/apf-authorize-load-library",
                {
                  type: "category",
                  label: "Configuring certificates",
                  link: {type:"doc", id:"user-guide/configure-certificates"},
                  items: [
                    "user-guide/certificates-configuration-questionnaire",
                    "user-guide/certificate-configuration-scenarios",
                    "user-guide/import-certificates",
                    "user-guide/generate-certificates",
                    "user-guide/use-certificates",
                    "user-guide/certificates-setup",
                  ],
                },
                "user-guide/initialize-vsam-dataset",
                "user-guide/install-stc-members",
                "user-guide/configure-xmem-server",
                "user-guide/configure-auxiliary-address-space",
                "user-guide/configure-zowe-zosmf-workflow",
                "user-guide/configmgr-using",
                "user-guide/install-configure-zos-extensions"
              ],
            },
            {
              type: "category",
              label: "High Availability",
              link: {type:"doc", id:"user-guide/zowe-ha-overview"},
              items: [
                "user-guide/configure-sysplex",
                "user-guide/systemrequirements-zosmf-ha",
                "user-guide/configure-caching-service-ha",
              ],
            },
            "user-guide/start-zowe-zos",
            "user-guide/verify-zowe-runtime-install",            
          ],
        },            
        {
          "type": "category",
          "label": "Installing containerization build",
          link: {type:"doc", id:"user-guide/k8s-introduction"},
          "items": [
            "user-guide/k8s-prereqs",
            "user-guide/k8s-downloading",
            "user-guide/k8s-config",
            "user-guide/k8s-using"
          ],
        }, 
        {
          type: "category",
          label: "Advanced server-side configuration",
          items: [
            "user-guide/mvd-configuration",
            {
              type: "category",
              label: "API Mediation Layer",
              items: [
                "user-guide/configure-data-sets-jobs-api",
                "user-guide/api-mediation/api-catalog-configuration",
                "user-guide/api-mediation/api-gateway-configuration",
                "user-guide/api-mediation/discovery-service-configuration",
                "user-guide/api-mediation/api-mediation-internal-configuration",
                "extend/extend-apiml/api-mediation-passtickets",
              ],
            },
          ],
        },       
      ],
    },    
    {
      type: "category",
      label: "Zowe client-side components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Zowe CLI",
          link: {type:"doc", id:"user-guide/user-roadmap-zowe-cli"},
          items: [
            "user-guide/systemrequirements-cli",
            "user-guide/cli-install-cli-checklist",
          {
          type: "category",
          label: "Installing Zowe CLI",
          link: {type:"doc", id:"user-guide/cli-installcli"},
          items: [
            "user-guide/cli-configure-scs-on-headless-linux-os",
            "user-guide/cli-configure-cli-on-os-where-scs-unavailable",
            "user-guide/cli-install-cli-nodejs-windows",
          ],
          },
            "user-guide/install-cli-via-proxy",
            "user-guide/cli-updatingcli",
            "user-guide/cli-uninstall",   
            {
              type: "category",
              label: "Advanced Zowe CLI configuration",
              items: [
                "user-guide/cli-configuringcli-ev",
                "user-guide/cli-configuringcli-evfile",
              ],
            }, 
          ],
        },
        {
          type: "category",
          label: "Zowe Explorer",
          link: {type:"doc", id:"getting-started/user-roadmap-zowe-explorer"},
          items: [
            "getting-started/ZE-system-reqs",
            "user-guide/ze-install",
            "user-guide/ze-profiles",
          ],
        },
        {
          type: "category",
          label: "Zowe Chat (Technical Preview)",
          link: {type:"doc", id:"user-guide/zowe-chat/introduction"},
          items: [
            "user-guide/zowe-chat/systemrequirements-chat",
            {
              type: "category",
              label: "Configuring chat platforms",
              link: {type:"doc", id:"user-guide/zowe-chat/chat_configure_chat_platforms"},
              items: [
                {
                  type: "category",
                  label: "Configuring Mattermost",
                  link: {type:"doc", id:"user-guide/zowe-chat/chat_prerequisite_mattermost"},
                  items: [
                    "user-guide/zowe-chat/chat_prerequisite_install_mattermost",
                    "user-guide/zowe-chat/chat_prerequisite_mattermost_admin_account",
                    "user-guide/zowe-chat/chat_prerequisite_mattermost_bot_account",
                    "user-guide/zowe-chat/chat_prerequisite_mattermost_invite_team",
                    "user-guide/zowe-chat/chat_prerequisite_mattermost_invite_channel",
                    "user-guide/zowe-chat/chat_prerequisite_mattermost_enable_connection",
                  ],
                },
                {
                  type: "category",
                  label: "Configuring Microsoft Teams",
                  link: {type:"doc", id:"user-guide/zowe-chat/chat_prerequisite_teams"},
                  items: [
                    "user-guide/zowe-chat/chat_prerequisite_teams_create_app_developer_portal",
                    {
                      type: "category",
                      label: "Creating a bot for Microsoft Teams bot app",
                      link: {type:"doc", id:"user-guide/zowe-chat/chat_prerequisite_teams_create_bot"},
                      items: [
                        "user-guide/zowe-chat/chat_prerequisite_teams_create_bot_framework",
                        "user-guide/zowe-chat/chat_prerequisite_teams_create_bot_azure",
                      ],
                    },
                    {
                      type: "category",
                      label: "Configuring messaging endpoint",
                      link: {type:"doc", id:"user-guide/zowe-chat/chat_prerequisite_teams_configure_endpoint"},
                      items: [
                        "user-guide/zowe-chat/chat_prerequisite_teams_configure_endpoint_framework",
                        "user-guide/zowe-chat/chat_prerequisite_teams_configure_endpoint_azure",
                      ],
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Configuring Slack",
                  link: {type:"doc", id:"user-guide/zowe-chat/chat_prerequisite_slack"},
                  items: [
                    "user-guide/zowe-chat/chat_prerequisite_slack_create_app",
                    {
                      type: "category",
                      label: "Configuring and connecting Slack app",
                      items: [
                        "user-guide/zowe-chat/chat_prerequisite_slack_configure_app",
                        "user-guide/zowe-chat/chat_prerequisite_slack_socket_mode",
                        "user-guide/zowe-chat/chat_prerequisite_slack_http_endpoint",
                      ],
                    },
                    "user-guide/zowe-chat/chat_prerequisite_slack_install",
                    "user-guide/zowe-chat/chat_prerequisite_slack_invite_app_to_channel",
                  ],
                },
              ],
            },
            "user-guide/zowe-chat/chat_install_overview",
            {
              type: "category",
              label: "Configuring Zowe Chat",
              link: {type:"doc", id:"user-guide/zowe-chat/chat_configure_server"},
              items: [
                "user-guide/zowe-chat/chat_configure_mattermost",
                "user-guide/zowe-chat/chat_configure_teams",
                "user-guide/zowe-chat/chat_configure_slack",
              ],
            },
            "user-guide/zowe-chat/chat_start_stop",
            "user-guide/zowe-chat/chat_uninstall",
          ],
        },
        {
          type: "category",
          label: "Zowe IntelliJ Plug-in",
          link: {type:"doc", id:"user-guide/intellij-install"},
          items: [
            "user-guide/intellij-configure",
          ],
        },
      ],
    },    
  ],  
  "use": [
    "user-guide/zowe-getting-started-tutorial",
    {
      type: "category",
      label: "Zowe server-side components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Using Zowe Desktop",
          link: {type:"doc", id:"user-guide/mvd-using"},
          items: [
            "user-guide/mvd-editor",
          ],
        },
        {
          type: "category",
          label: "Using Zowe API Mediation Layer",
          link: {type:"doc", id:"user-guide/api-mediation/using-api-mediation-layer"},
          items: [
            "getting-started/user-roadmap-apiml",
            {
              type: "category",
              label: "Using API Catalog",
              items: [
                "user-guide/api-mediation-view-service-information-and-api-doc",
                "user-guide/api-mediation-swagger-try-it-out",
                "user-guide/api-mediation-swagger-code-snippets",
                "user-guide/api-mediation-static-api-refresh",
                "user-guide/api-mediation-change-password-via-catalog",
                "user-guide/onboard-wizard",
              ],
            },
            "user-guide/api-mediation-metrics-service",
            "extend/extend-apiml/api-mediation-routing",
            "extend/extend-apiml/service-information",
            "extend/extend-apiml/websocket",
            "user-guide/api-mediation/api-gateway-rest-apis-documentation",
            "user-guide/api-mediation/api-mediation-smf",
          ],
        },        
      ],
    },
    {
      type: "category",
      label: "Zowe client-side components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Using Zowe CLI",
          link: {type:"doc", id:"user-guide/cli-using-usingcli"},
          items: [
            "user-guide/cli-using-displaying-help",
            "user-guide/cli-using-command-precedence",
            "user-guide/cli-using-understanding-core-command-groups",
            "user-guide/cli-using-issuing-first-command",
            {
              type: "category",
              label: "Using team profiles",
              link: {type:"doc", id:"user-guide/cli-using-using-team-profiles"},
              items: [
                "user-guide/cli-using-initializing-team-configuration",
                "user-guide/cli-using-test-zosmf-connection",
                "user-guide/cli-using-team-configuration-application-developers",
                "user-guide/cli-using-team-configuration-team-leaders",
                "user-guide/cli-using-sharing-team-config-files",
                "user-guide/cli-using-understand-profiles-configs",
                "user-guide/cli-using-team-managing-credential-security",
                "user-guide/cli-using-global-storing-properties-automatically",
              ],
            },
            {
              type: "category",
              label: "Configuring daemon mode",
              link: {type:"doc", id:"user-guide/cli-using-using-daemon-mode"},
              items: [
                "user-guide/cli-configure-daemon-on-zlinux-os",
              ],
            },
            "user-guide/cli-using-using-profiles-v1",
            "user-guide/cli-using-integrating-apiml",
            "user-guide/cli-using-working-certificates",
    
            {
              type: "category",
              label: "Using environment variables",
              link: {type:"doc", id:"user-guide/cli-using-using-environment-variables"},
              items: [
                "user-guide/cli-using-formatting-environment-variables",
                "user-guide/cli-using-setting-environment-variables-in-automation-server",
              ],
            },
            "user-guide/cli-using-using-prompt-feature",
            "user-guide/cli-using-writing-scripts",
            {
              type: "category",
              label: "Zowe CLI plug-ins",
              link: {type:"doc", id:"user-guide/cli-extending"},
              items: [
                "user-guide/cli-swreqplugins",
                "user-guide/cli-installplugins",
                "user-guide/cli-cicsplugin",
                {
                  type: "category",
                  label: "IBM® Db2® Database Plug-in for Zowe CLI",
                  link: {type:"doc", id:"user-guide/cli-db2plugin"},
                  items: [
                    "user-guide/cli-db2-install-m1",
                  ],
                },
                "user-guide/cli-ftpplugin",
                "user-guide/cli-imsplugin",
                "user-guide/cli-mqplugin",
                "user-guide/cli-idfplugin",
              ],
            },    
          ],
        },        
        {
          type: "category",
          label: "Using Zowe Explorer",
          link: {type:"doc", id:"user-guide/ze-usage"},
          items: [
            "user-guide/ze-use-cases",
            {
              type: "category",
              label: "Zowe Explorer extensions",
              items: [
                {
                  type: "category",
                  label: "Zowe Explorer CICS Extension",
                  link: {type:"doc", id:"user-guide/ze-install-zowe-explorer-cics-ext"},
                  items: [
                    "user-guide/ze-using-zowe-explorer-cics-ext",
                    "user-guide/ze-create-zowe-explorer-cics-ext-profiles",
                    "user-guide/ze-use-cics-resources",
                    "user-guide/ze-override-tls-certs",
                    "user-guide/ze-usage-tips",
                    "user-guide/ze-provide-feedback-contribute",
                  ],
                },
                {
                  type: "category",
                  label: "Zowe Explorer FTP Extension",
                  link: {type:"doc", id:"user-guide/ze-ftp-install-ze-ftp-ext"},
                  items: [
                    "user-guide/ze-ftp-using-ze-ftp-ext",
                    "user-guide/ze-ftp-supported-functions",
                    "user-guide/ze-ftp-provide-feedback-contribute",
                  ],
                },
              ],
            },
          ],
        },
        "user-guide/zowe-chat/chat_use_interact_methods",
        {
          type: "category",
          label: "Using Zowe IntelliJ Plug-in",
          link: {type:"doc", id:"user-guide/intellij-using"},
          items: [
            "user-guide/intellij-working-sets",
          ],
        },
        "user-guide/sdks-using",        
      ],
    },
  ],
  extending: [
    "extend/extend-zowe-overview",
    "extend/zowe-conformance-program",  
    {
      type: "category",
      label: "Developing server-side components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Fundamentals",
          items: [
            "extend/packaging-zos-extensions",
            "extend/server-schemas",
            "extend/component-registries",
            "extend/lifecycling-with-zwesvstc",
            "extend/k8s-extend",
            "extend/k8s-conformance",
          ],
        },
        {
          type: "category",
          label: "Developing for Zowe API Mediation Layer",
          items: [
            "extend/extend-apiml/onboard-overview",
            "extend/extend-apiml/onboard-plain-java-enabler",
            "extend/extend-apiml/onboard-plain-java-enabler-external-configuration",
            "extend/extend-apiml/onboard-direct-eureka-call",
            "extend/extend-apiml/onboard-spring-boot-enabler",
            "extend/extend-apiml/onboard-micronaut-enabler",
            "extend/extend-apiml/onboard-nodejs-enabler",
            "extend/extend-apiml/onboard-static-definition",
            "extend/extend-apiml/api-mediation-sso",
            "extend/extend-apiml/create-apiml-extension",
            "extend/extend-apiml/api-mediation-message-service",
            "extend/extend-apiml/custom-metadata",
            "extend/extend-apiml/api-mediation-versioning",
            "extend/extend-apiml/implement-new-saf-provider",
            {
              type: "category",
              label: "Zowe API Mediation Layer Security",
              items: [
                "extend/extend-apiml/zowe-api-mediation-layer-security-overview",
                "extend/extend-apiml/authentication-for-apiml-services",
                "extend/extend-apiml/zaas-client",
                "extend/extend-apiml/certificate-management-in-zowe-apiml",
                "extend/extend-apiml/api-mediation-oidc-authentication",
              ],
            },
            {
              type: "category",
              label: "Caching service",
              items: [
                "extend/extend-apiml/api-mediation-caching-service",
                "extend/extend-apiml/api-mediation-vsam",
                "extend/extend-apiml/api-mediation-redis",
              ],
            }
          ],
        },
        {
          type: "category",
          label: "Developing for Zowe Application Framework",
          items: [
            "extend/extend-desktop/mvd-extendingzlux",
            "extend/extend-desktop/mvd-plugindefandstruct",
            "extend/extend-desktop/mvd-buildingplugins",
            "extend/extend-desktop/mvd-installplugins",
            "extend/extend-desktop/mvd-embeddingplugins",
            "extend/extend-desktop/mvd-dataservices",
            "extend/extend-desktop/mvd-authentication-api",
            "extend/extend-desktop/mvd-internationalization",
            "extend/extend-desktop/mvd-desktopandwindowmgt",
            "extend/extend-desktop/mvd-configdataservice",
            "extend/extend-desktop/mvd-uribroker",
            "extend/extend-desktop/mvd-apptoappcommunication",
            "extend/extend-desktop/mvd-iframecomm",
            "extend/extend-desktop/mvd-errorreportingui",
            "extend/extend-desktop/mvd-logutility",
            "extend/extend-desktop/mvd-conda",
          ],
        },        
      ],
    },
    {
      type: "category",
      label: "Developing client-side components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Developing for Zowe CLI",
          link: {type:"doc", id:"extend/extend-cli/cli-devTutorials"},
          items: [
            "extend/extend-cli/cli-setting-up",
            "extend/extend-cli/cli-creating-plug-in-lifecycle-actions",
            "extend/extend-cli/cli-installing-sample-plugin",
            "extend/extend-cli/cli-extending-a-plugin",
            "extend/extend-cli/cli-developing-a-plugin",
            "extend/extend-cli/cli-implement-profiles",
          ],
        },
        
        "extend/extend-ze/ze-extensions",
        "extend/extend-sdks",      
      ],
    },    
  ],
  troubleshooting: [
    {
      type: "category",
      label: "Troubleshooting overview",
      link: {type:"doc", id:"troubleshoot/troubleshooting"},
      items: [
        "troubleshoot/troubleshoot-zowe-release",
        "troubleshoot/troubleshoot-check-your-zowe-version",
      ],
    },
    {
      type: "category",
      label: "Zowe server-side components",
      collapsed: false,
      items: [
        "troubleshoot/servers/must-gather",
        "troubleshoot/verify-fingerprint",
        "troubleshoot/k8s-troubleshoot",
        "troubleshoot/servers/return-codes",
        "troubleshoot/troubleshoot-zos-certificate",
        {
          type: "category",
          label: "Troubleshooting Zowe API Mediation Layer",
          link: {type:"doc", id:"troubleshoot/troubleshoot-apiml",},
          items: [
            "troubleshoot/troubleshoot-apiml-error-codes",
          ],
        },
        {
          type: "category",
          label: "Troubleshooting Zowe Application Framework",
          link: {type:"doc", id:"troubleshoot/app-framework/app-troubleshoot"},
          items: [
            "troubleshoot/app-framework/app-mustgather",
            "troubleshoot/app-framework/app-issue",
            "troubleshoot/app-framework/app-return-codes",
            "troubleshoot/app-framework/appserver-error-codes",
            "troubleshoot/app-framework/zss-error-codes",
            "troubleshoot/app-framework/zis-error-codes",
          ],
        },
        {
          type: "category",
          label: "Troubleshooting Zowe Launcher",
          link: {type:"doc", id:"troubleshoot/launcher/launcher-troubleshoot"},
          items: [
            "troubleshoot/launcher/launcher-error-codes"
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Zowe client-side components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Troubleshooting Zowe CLI",
          link: {type:"doc", id:"troubleshoot/cli/troubleshoot-cli"},
          items: [
            "troubleshoot/cli/mustgather-cli",
            "troubleshoot/cli/use-individual-troubleshoot-commands",
            "troubleshoot/cli/cli-use-curl-to-troubleshoot",
            "troubleshoot/cli/zosmf-cli",
            "troubleshoot/cli/known-cli",
            "troubleshoot/cli/cli-issue",
            "troubleshoot/cli/troubleshoot-cli-plugins",
          ],
        },
        {
          type: "category",
          label: "Troubleshooting Zowe Explorer",
          link: {type:"doc", id:"troubleshoot/ze/troubleshoot-ze"},
          items: [
            "troubleshoot/ze/known-ze",
            "troubleshoot/ze/ze-known-limits",
            "troubleshoot/ze/ze-issues",
          ],
        },
        "troubleshoot/zowe-chat-troubleshoot/troubleshooting",
        "troubleshoot/troubleshoot-intellij",        
      ],
    }  
  ],
  contributing: [
    "contribute/roadmap-contribute",
    {
      type: "category",
      label: "Code Guidelines",
      items: [
        "contribute/guidelines-code/categories",
        "contribute/guidelines-code/general",
        "contribute/guidelines-code/code-and-patches",
        "contribute/guidelines-code/documentation",
      ],
    },
    {
      type: "category",
      label: "UI Guidelines",
      link: {type:"doc", id:"contribute/guidelines-ui/ui"},
      items: [
        "contribute/guidelines-ui/colors",
        "contribute/guidelines-ui/typography",
        "contribute/guidelines-ui/grid",
        "contribute/guidelines-ui/icon",
        "contribute/guidelines-ui/appicon",
      ],
    },
    "contribute/contributing",
  ],
  reference: [
    "appendix/zowe-cli-command-reference",
    "appendix/zowe-api-reference",
    {
      type: "category",
      label: "ZWE Server Command Reference",
      link: {type:"doc", id:"appendix/zwe_server_command_reference_overview"},
      items: [
        {
          type: "autogenerated",
          dirName: "appendix/zwe_server_command_reference"
        }
      ]
    },
    {
      type: "category",
      label: "Zowe Chat command reference",
      link: {type:"doc", id:"appendix/zowe-chat-command-reference/zos/zowe-chat-command-reference"},
      items: [
        {
          type: "category",
          label: "zos commands",
          link: {type:"doc", id:"appendix/zowe-chat-command-reference/zos/zos-article"},
          items: [
            {
              type: "category",
              label: "zos job",
              link: {type:"doc", id:"appendix/zowe-chat-command-reference/zos/job/job-article"},
              items: [
                {
                  type: "category",
                  label: "zos job list",
                  link: {type:"doc", id:"appendix/zowe-chat-command-reference/zos/job/list/list-article"},
                  items: [
                    "appendix/zowe-chat-command-reference/zos/job/list/zos-job-list-status",
                  ]
                },
              ]
            },
            {
              type: "category",
              label: "zos dataset",
              link: {type:"doc", id:"appendix/zowe-chat-command-reference/zos/dataset/dataset-article"},
              items: [
                {
                  type: "category",
                  label: "zos dataset list",
                  link: {type:"doc", id:"appendix/zowe-chat-command-reference/zos/dataset/list/list-article"},
                  items: [
                    "appendix/zowe-chat-command-reference/zos/dataset/list/zos-dataset-list-status",
                    "appendix/zowe-chat-command-reference/zos/dataset/list/zos-dataset-list-member",
                  ]
                },
              ]
            },
            {
              type: "category",
              label: "zos file",
              link: {type:"doc", id:"appendix/zowe-chat-command-reference/zos/file/file-article"},
              items: [
                {
                  type: "category",
                  label: "zos file list",
                  link: {type:"doc", id:"appendix/zowe-chat-command-reference/zos/file/list/list-article"},
                  items: [
                    "appendix/zowe-chat-command-reference/zos/file/list/zos-file-list-status",
                    "appendix/zowe-chat-command-reference/zos/file/list/zos-file-list-mounts",
                  ]
                },
              ]
            },
            {
              type: "category",
              label: "zos command",
              link: {type:"doc", id:"appendix/zowe-chat-command-reference/zos/command/command-article"},
              items: [
                {
                  type: "category",
                  label: "zos command issue",
                  link: {type:"doc", id:"appendix/zowe-chat-command-reference/zos/command/issue/issue-article"},
                  items: [
                    "appendix/zowe-chat-command-reference/zos/command/issue/zos-command-issue-console",
                  ]
                },
              ]
            },
            {
              type: "category",
              label: "zos help",
              link: {type:"doc", id:"appendix/zowe-chat-command-reference/zos/help/help-article"},
              items: [
                {
                  type: "category",
                  label: "zos help list",
                  link: {type:"doc", id:"appendix/zowe-chat-command-reference/zos/help/list/list-article"},
                  items: [
                    "appendix/zowe-chat-command-reference/zos/help/list/zos-help-list-command",
                  ]
                },
              ]
            },
          ]
        },
      ]
    },
    "appendix/zowe-yaml-configuration",
    "appendix/server-component-manifest",    
    "appendix/bill-of-materials",
    {
      type: "link",
      label: "Third Party Software Requirements",
      href: "https://github.com/zowe/docs-site/tree/master/tpsr/tpsr-v2.11.x.md",
    },
  ],
};

// "appendix/tpsr",
//items should be array of only strings, or array of object and strings
//the object should be 'string': array, not 'string': 'string'
