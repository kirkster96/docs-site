(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{579:function(e,t,a){"use strict";a.r(t);var s=a(18),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"secure-credential-store-plug-in-for-zowe-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secure-credential-store-plug-in-for-zowe-cli"}},[e._v("#")]),e._v(" Secure Credential Store Plug-in for Zowe CLI")]),e._v(" "),a("p",[e._v("The Secure Credential Store (SCS) Plug-in for Zowe CLI lets you store your credentials securely in the credential manager of your operating system. The plug-in invokes a native Node module, "),a("a",{attrs:{href:"https://github.com/atom/node-keytar",target:"_blank",rel:"noopener noreferrer"}},[e._v("keytar"),a("OutboundLink")],1),e._v(", that manages user IDs and passwords in a credential manager.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#use-cases"}},[e._v("Use Cases")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#commands"}},[e._v("Commands")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#software-requirements"}},[e._v("Software requirements")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#installing"}},[e._v("Installing")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#using"}},[e._v("Using")])])]),e._v(" "),a("h2",{attrs:{id:"use-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use Cases")]),e._v(" "),a("p",[e._v("Zowe CLI stores credentials (mainframe username and password) in plaintext on your computer by default. You can use the SCS plug-in to store credentials more securely and prevent your credentials from being compromised as a result of a malware attack or unlawful actions by others.")]),e._v(" "),a("h2",{attrs:{id:"commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[e._v("#")]),e._v(" Commands")]),e._v(" "),a("p",[e._v("For detailed command, actions, and option documentation for this plug-in, see our Web Help (available online or as PDF or ZIP):")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"../web_help/index.html",target:"_blank"}},[e._v("Browse Online")])]),e._v(" "),a("li",[a("a",{attrs:{href:"../zowe_web_help.zip"}},[e._v("Download (ZIP)")])]),e._v(" "),a("li",[a("a",{attrs:{href:"../CLIReference_Zowe.pdf"}},[e._v("Download (PDF)")])])]),e._v(" "),a("h2",{attrs:{id:"software-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-requirements"}},[e._v("#")]),e._v(" Software requirements")]),e._v(" "),a("p",[e._v("Before you install the plug-in, meet the software requirements in "),a("RouterLink",{attrs:{to:"/user-guide/cli-swreqplugins.html"}},[e._v("Software requirements for Zowe CLI plug-ins")]),e._v(".")],1),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" If you're using npm@7, an Internet connection is required during installation of the Secure Credential Store plug-in. Additionally, there is a prerequisite on Windows for npm@7 users: "),a("code",[e._v("npm install -g prebuild-install")])]),e._v(" "),a("h2",{attrs:{id:"installing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[e._v("#")]),e._v(" Installing")]),e._v(" "),a("p",[e._v("Use one of the following methods to install or update the plug-in:")]),e._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/user-guide/cli-installplugins.html#installing-plug-ins-from-an-online-registry"}},[e._v("Installing plug-ins from an online registry")])],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/user-guide/cli-installplugins.html#installing-plug-ins-from-a-local-package"}},[e._v("Installing plug-ins from a local package")])],1)])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" Existing user profiles are "),a("em",[e._v("not")]),e._v(" automatically updated to securely store credentials.")]),e._v(" "),a("h2",{attrs:{id:"using"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using"}},[e._v("#")]),e._v(" Using")]),e._v(" "),a("p",[e._v("The plug-in introduces a new command group, "),a("code",[e._v("zowe scs")]),e._v(", that lets you update existing user profiles and enable/disable the plug-in.")]),e._v(" "),a("h3",{attrs:{id:"securing-your-credentials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#securing-your-credentials"}},[e._v("#")]),e._v(" Securing your credentials")]),e._v(" "),a("p",[e._v("User profiles that you create "),a("em",[e._v("after")]),e._v(" installing the plug-in will automatically store your credentials securely.")]),e._v(" "),a("p",[e._v("To secure credentials in existing user profiles (profiles that you created prior to installing the SCS plug-in), issue the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("zowe scs update\n")])])]),a("p",[e._v("Profiles are updated with secured credentials.")]),e._v(" "),a("p",[a("strong",[e._v("Example: Secure credentials")])]),e._v(" "),a("p",[e._v("The following is an example of securely stored credentials in a user profile configuration file:")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" zosmf\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" test\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1234")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'managed by @zowe/secure-credential-store-for-zowe-cli'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'managed by @zowe/secure-credential-store-for-zowe-cli'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("rejectUnauthorized")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("false")]),e._v("\n")])])]),a("p",[a("strong",[e._v("Example: Default credential management")])]),e._v(" "),a("p",[e._v("The following is an example of credentials that are stored with the "),a("em",[e._v("default")]),e._v(" credential manager:")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" zosmf\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" test\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1234")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" USERNAME\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" PASSWORD\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("rejectUnauthorized")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("false")]),e._v("\n")])])]),a("h3",{attrs:{id:"deactivating-the-plug-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deactivating-the-plug-in"}},[e._v("#")]),e._v(" Deactivating the plug-in")]),e._v(" "),a("p",[e._v("If you do not want to use the SCS Plug-in for Zowe CLI, choose one of the following methods to deactivate the plug-in:")]),e._v(" "),a("p",[a("strong",[e._v("Uninstall the Plug-in")])]),e._v(" "),a("p",[e._v("Issue the "),a("code",[e._v("zowe plugins uninstall @zowe/secure-credential-store-for-zowe-cli")]),e._v(" command to delete the plug-in from your computer.")]),e._v(" "),a("p",[e._v("When you uninstall the plug-in, existing profiles become invalid and you must recreate them. For more information, see "),a("RouterLink",{attrs:{to:"/user-guide/cli-usingcli.html#using-profiles.html"}},[e._v("Using profiles")]),e._v(".")],1),e._v(" "),a("p",[a("strong",[e._v("Reset the Configuration of Credential Manager")])]),e._v(" "),a("p",[e._v("Issue the "),a("code",[e._v("zowe config reset CredentialManager")]),e._v(" command to reset the value of the credential manager configuration to default, which deactivates the plug-in.")])])}),[],!1,null,null,null);t.default=r.exports}}]);