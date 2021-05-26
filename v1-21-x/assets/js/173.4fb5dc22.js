(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{531:function(e,t,o){"use strict";o.r(t);var r=o(18),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"upgrading-the-z-os-system-for-zowe"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-the-z-os-system-for-zowe"}},[e._v("#")]),e._v(" Upgrading the z/OS system for Zowe")]),e._v(" "),o("p",[e._v("If you installed Zowe previously, the system is already prepared and configured to launch a Zowe instance. A Zowe configuration consists of three USS directories. See "),o("RouterLink",{attrs:{to:"/user-guide/installandconfig.html#topology-of-the-zowe-z/OS-launch-process"}},[e._v("Topology of the Zowe z/OS launch process")]),e._v(" for more information.")],1),e._v(" "),o("ul",[o("li",[e._v("The runtime directory that contains the binary and executable files. See "),o("RouterLink",{attrs:{to:"/user-guide/installandconfig.html#runtime-dir"}},[e._v("RUNTIME_DIR")]),e._v(" for more information.  This directory is read only and contains a "),o("code",[e._v("manifest.json")]),e._v(" file that can be used to identify its release number. See "),o("RouterLink",{attrs:{to:"/troubleshoot/troubleshoot-zowe-release.html#check-the-zowe-release-number"}},[e._v("Check the Zowe release number")]),e._v(" for more information. A new Zowe runtime directory is created when a new version of Zowe is installed.")],1),e._v(" "),o("li",[e._v("The instance directory that is used to launch the Zowe started task "),o("code",[e._v("ZWESVSTC")]),e._v(". See "),o("RouterLink",{attrs:{to:"/user-guide/installandconfig.html#instance-dir"}},[e._v("INSTANCE_DIR")]),e._v(" for more information.  The instance directory is read/write as it contains log files and the file "),o("code",[e._v("instance.env")]),e._v(" that contains environment launch values.")],1),e._v(" "),o("li",[e._v("The keystore directory that contains details about certificates used by Zowe. See "),o("RouterLink",{attrs:{to:"/user-guide/installandconfig.html#instance-dir"}},[e._v("KEYSTORE_DIRECTORY")]),e._v(" for more information.")],1)]),e._v(" "),o("p",[e._v("Zowe installation also creates two data sets.")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("SZWESAMP")])]),e._v(" "),o("p",[e._v("This contains 10 members. Four of them are JCLs to configure (and unconfigure Zowe). Three are PROCLIB members. One contains PPT entries. One is a PARMLIB member and one contains console commands. See "),o("RouterLink",{attrs:{to:"/user-guide/install-zowe-zos-convenience-build.html#step-3-choose-a-dataset-hlq-for-the-samplib-and-loadlib"}},[e._v("SZWESAMP data set")]),e._v(" for more information.")],1)]),e._v(" "),o("li",[o("p",[o("strong",[e._v("SZWEAUTH")])]),e._v(" "),o("p",[e._v("This is an APF-authorized PDSE load library containing the load modules "),o("code",[e._v("ZWESIS01")]),e._v(" for the cross memory server and "),o("code",[e._v("ZWESAUX")]),e._v(" for the auxiliary address space. See "),o("RouterLink",{attrs:{to:"/user-guide/install-zowe-zos-convenience-build.html#step-3-choose-a-dataset-hlq-for-the-samplib-and-loadlib"}},[e._v("SZWEAUTH data set")]),e._v(" for more information.")],1)])]),e._v(" "),o("h2",{attrs:{id:"upgrading-the-instance-directory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-the-instance-directory"}},[e._v("#")]),e._v(" Upgrading the instance directory")]),e._v(" "),o("p",[e._v("A Zowe instance directory is created using the script "),o("code",[e._v("zowe-configure-instance.sh")]),e._v(" in the "),o("code",[e._v("<RUNTIME_DIR>/bin")]),e._v(" directory.")]),e._v(" "),o("p",[e._v("After installing a new version of Zowe, the new runtime will either be in the same directory as the previous version, for example, "),o("code",[e._v("/usr/lpp/zowe")]),e._v(" if SMP/E has been used, or else may be in a different directory, for example, "),o("code",[e._v("~/zowe/zowe-r.M.m")]),e._v(" if using a convenience build installation.")]),e._v(" "),o("p",[e._v("In both situations, you can keep and reuse the instance directory that is used for the previous version of Zowe to launch the new version of Zowe. To do this, run the script "),o("code",[e._v("zowe-configure-instance.sh")]),e._v(" from the new "),o("code",[e._v("<RUNTIME_DIR>/bin")]),e._v(" directory with the "),o("code",[e._v("-c")]),e._v(" argument pointing to the location of the existing instance directory. This is the same method used to create an instance directory with default values in an empty target directory, however if "),o("code",[e._v("-c")]),e._v(" argument is a pre-existing instance directory rather than wiping and creating fresh contents, the contents are updated.  In the situation where the previous instance directory was created from a different runtime directory, the "),o("code",[e._v("ROOT_DIR=")]),e._v(" value in "),o("code",[e._v("instance.env")]),e._v(" will be updated to reference the "),o("code",[e._v("<RUNTIME_DIR>")]),e._v(" from which "),o("code",[e._v("zowe-configure-instance.sh")]),e._v(" was executed.  In addition the "),o("code",[e._v("manifest.json")]),e._v(" file in the instance directory will be updated with the "),o("code",[e._v('"version:"')]),e._v(" of the "),o("code",[e._v("<RUNTIME_DIR>")]),e._v(".  This can be used as a way to see the Zowe version that an instance was last configured from. See "),o("RouterLink",{attrs:{to:"/troubleshoot/troubleshoot-zowe-release.html#check-the-zowe-release-number"}},[e._v("Check the Zowe release number")]),e._v(".")],1),e._v(" "),o("p",[e._v("The "),o("code",[e._v("zowe-configure-instance.sh")]),e._v(" script will detect if there are new configuration values that have been introduced since the instance directory was last created, and append these to "),o("code",[e._v("instance.env")]),e._v(" with default values.  New values added will be echoed in the shell running the "),o("code",[e._v("zowe-configure-instance.sh")]),e._v(" script, and are be described in "),o("RouterLink",{attrs:{to:"/user-guide/configure-instance-directory.html#reviewing-the-instance.env-file"}},[e._v("Reviewing the instance.env file")]),e._v(".  Values in "),o("code",[e._v("instance.env")]),e._v(" previously changed from their default, such as port values or locations of dependent runtimes, are not modified.")],1),e._v(" "),o("p",[e._v("The "),o("code",[e._v("zowe-configure-instance.sh")]),e._v(" script will echo any values that are added to the "),o("code",[e._v("instance.env")]),e._v(" file.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Missing properties that will be appended to /u/winchj/zowe-instance/instance.env:\n")])])]),o("h2",{attrs:{id:"updating-the-proclib-members"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-proclib-members"}},[e._v("#")]),e._v(" Updating the PROCLIB members")]),e._v(" "),o("p",[e._v("Zowe releases contain two proclib members, "),o("code",[e._v("ZWESISTC")]),e._v(" and "),o("code",[e._v("ZWESVSTC")]),e._v(" in the PDS "),o("code",[e._v("SZWESAMP")]),e._v(".  When the previous release of Zowe was installed, these would have been copied to a PDS in the proclib concatenation path and defined to run under their respective user IDs of "),o("code",[e._v("ZWESVUSR")]),e._v(" and "),o("code",[e._v("ZWESIUSR")]),e._v(". See "),o("RouterLink",{attrs:{to:"/user-guide/configure-zowe-server.html"}},[e._v("Installing the Zowe started task (ZWESVSTC)")]),e._v(" and "),o("RouterLink",{attrs:{to:"/user-guide/configure-xmem-server.html"}},[e._v("Installing the Zowe cross memory server (ZWESISTC)")]),e._v(".")],1),e._v(" "),o("p",[e._v("The proclib members do not usually get updated between Zowe releases, so during an upgrade you may keep the previous JCL proclibs.  If the proclib members are updated then the HOLDDATA and the "),o("RouterLink",{attrs:{to:"/getting-started/summaryofchanges.html"}},[e._v("release notes")]),e._v(" will describe any changes and alert you that the proclibs need to be updated.  If you are upgrading Zowe and jumping releases, for example moving from 1.12 to 1.16, then you should check the HOLDDATA (for SMP/E) and the release notes for all intervening releases (1.12, 1.13, 1.14, 1.15) to see if the proclibs have changed.")],1),e._v(" "),o("h2",{attrs:{id:"updating-the-cross-memory-server-load-modules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-cross-memory-server-load-modules"}},[e._v("#")]),e._v(" Updating the cross memory server load modules")]),e._v(" "),o("p",[e._v("Zowe releases contain two load modules, "),o("code",[e._v("ZWESIS00")]),e._v(" for the cross memory server and "),o("code",[e._v("ZWESAUX")]),e._v(" for the auxiliary server.  There are delivered in a PDSE "),o("code",[e._v("SZWEAUTH")]),e._v(" that is created by the installation process.")]),e._v(" "),o("p",[e._v("If this PDSE is the same one used by the "),o("code",[e._v("ZWESISTC")]),e._v(" proclib that starts the cross memory server, then because the installation replaces the data set and its contents no action is required.  This is the recommended approach to configure a Zowe environment.")]),e._v(" "),o("p",[e._v("If you have copied the "),o("code",[e._v("SZWEAUTH")]),e._v(" members to another PDSE that you are using as a runtime load module, then you should recopy the updated members to the runtime location.")]),e._v(" "),o("h2",{attrs:{id:"updating-the-system-and-security-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-system-and-security-configuration"}},[e._v("#")]),e._v(" Updating the system and security configuration")]),e._v(" "),o("p",[e._v("The JCL member "),o("code",[e._v("ZWESECUR")]),e._v(" delivered in the PDS member "),o("code",[e._v("SZWESAMP")]),e._v(" contains the TSO commands used to configure a z/OS environment for launching Zowe.")]),e._v(" "),o("p",[e._v("The contents of "),o("code",[e._v("ZWESECUR")]),e._v(" do not usually get updated between Zowe releases, so during an upgrade you should not need to rerun the JCL.  If there are additions, then the HOLDDATA for the SMP/E release and the "),o("RouterLink",{attrs:{to:"/getting-started/summaryofchanges.html"}},[e._v("release notes")]),e._v(" will describe the changes.")],1),e._v(" "),o("h2",{attrs:{id:"upgrading-the-keystore-directory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-the-keystore-directory"}},[e._v("#")]),e._v(" Upgrading the keystore directory")]),e._v(" "),o("p",[e._v("When the previous release of Zowe was configured, a keystore directory would have been created.  This would either contain the Zowe certificate, or else reference a SAF keyring that contains the Zowe certificate. See "),o("RouterLink",{attrs:{to:"/user-guide/configure-certificates.html"}},[e._v("Configuring Zowe certificates")]),e._v(".  The USS keystore directory is created using the script "),o("code",[e._v("<RUNTIME_DIR>/bin/zowe-setup-certificates.sh")]),e._v(" that is delivered with the new Zowe release, and creates the USS file "),o("code",[e._v("<KEYSTORE_DIRECTORY/zowe-setup-certificates.env")]),e._v(" containing key value parameters used by the Zowe runtime to locate its certificate.")],1),e._v(" "),o("p",[e._v("Typically, the "),o("code",[e._v("<KEYSTORE_DIRECTORY>")]),e._v(" is compatible with later versions and can be used when moving forward to a new Zowe release.  There are situations when new functionality is introduced into a Zowe release when new key values pairs may be introduced to the "),o("code",[e._v("<KEYSTORE_DIRECTORY>/zowe-setup-certificates.env")]),e._v(" file, in which case the new release will describe the new functionality in its HOLDDATA (for SMP/E) or release notes.  If this occurs, it will be necessary to create a new "),o("code",[e._v("KEYSTORE_DIRECTORY")]),e._v(" in order to use the new functionality.  This was the case when Zowe 1.15 introduced support for storing certificates in a SAF keyring.")]),e._v(" "),o("p",[e._v("Zowe provides a JCL member "),o("code",[e._v("SZWESAMP(ZWEKRING)")]),e._v(" to create the keystore and populate it with the Zowe certificate. Unless instructed by the HOLDDATA or release notes, there is no need to re-create the keystore or certificate and ones used with previous Zowe releases can be reused.")]),e._v(" "),o("h2",{attrs:{id:"service-disruption-during-upgrades"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#service-disruption-during-upgrades"}},[e._v("#")]),e._v(" Service disruption during upgrades")]),e._v(" "),o("p",[e._v("When Zowe is upgraded, the started tasks "),o("code",[e._v("ZWESVSTC")]),e._v(" and "),o("code",[e._v("ZWESISTC")]),e._v(" need to be stopped and started for the changes to take effect.  This will cause active operations to fail.  Idle, or passive operations, such as an open webpage on the Zowe desktop may continue to work without disruption under the following circumstances:")]),e._v(" "),o("ul",[o("li",[e._v("SSO is being used")]),e._v(" "),o("li",[e._v("SSO is not being used, but a new page in the browser is opened to re-login to Zowe")])]),e._v(" "),o("p",[e._v("In both cases, the original webpages will have access to currently valid credentials, allowing the web page to issue new operations without reloading a page.  However, in-process operations that failed during the upgrade, unless retired manually or automatically may necessitate a page reload.")]),e._v(" "),o("h3",{attrs:{id:"zowe-extensions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zowe-extensions"}},[e._v("#")]),e._v(" Zowe extensions")]),e._v(" "),o("p",[e._v("Zowe extensions can depend on servers, databases, and other software that is outside the scope of Zowe. Therefore, you should refer to each plug-in's documentation to understand what to expect when an upgrade occurs.")]),e._v(" "),o("h4",{attrs:{id:"zowe-desktop"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zowe-desktop"}},[e._v("#")]),e._v(" Zowe desktop")]),e._v(" "),o("p",[e._v("A system programmer with admin rights may invoke the role base access control (RBAC) controlled App Server endpoint "),o("code",[e._v("/server/reload")]),e._v(" to reload the server without the need for an end user webpage reload.  This endpoint and more are documented in swagger "),o("a",{attrs:{href:"https://github.com/zowe/zlux-app-server/blob/staging/doc/swagger/server-plugins-api.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("If the plug-in uses the ZSS server to provide a REST API, ZSS must be restarted causing the same disruption behavior as a Zowe server upgrade.")]),e._v(" "),o("p",[e._v("If the plug-in has web content that shows in the Zowe desktop without an iframe, you must reload the desktop to see the updated content.")])])}),[],!1,null,null,null);t.default=a.exports}}]);