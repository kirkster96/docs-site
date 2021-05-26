(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{640:function(e,a,t){"use strict";t.r(a);var n=t(18),o=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"using-conda-to-make-and-manage-packages-of-application-framework-plugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-conda-to-make-and-manage-packages-of-application-framework-plugins"}},[e._v("#")]),e._v(" Using Conda to make and manage packages of Application Framework Plugins")]),e._v(" "),t("p",[e._v("As Zowe is composed of components which can be extended by Plugins,\na standardized and simple way to find, install, upgrade, and list Plugins in your Zowe environment\nis important to make it easy to get the most out of Zowe.")]),e._v(" "),t("p",[e._v("Package management as a concept generally provides a way to find packages such as plugins,\ncheck and possible co-install dependencies the package has, and ultimately install the desired package.\nPost-install, management tasks such as upgrading and uninstalling are common.")]),e._v(" "),t("p",[e._v("Conda is one such package manager, and if you are familiar with apt, yum, or npm, you will find\nthat using Conda is very similar. But, there are some important abilities that make Conda stand out:")]),e._v(" "),t("ul",[t("li",[e._v("Very cross platform: Conda is available, and acts very similar on z/OS, Windows, Linux, macOS, and various Unix.\nPackages can state which platforms they support, so it easy to know what packages you can install.")]),e._v(" "),t("li",[e._v("Tagging: On z/OS, Conda packages can contain tagging information, to avoid issues around the difference between EBCDIC & ASCII.")]),e._v(" "),t("li",[e._v("Software neutrality: Language-specific package managers are becoming popular, but Conda does not assume the purpose of the package, so you can install almost anything.")]),e._v(" "),t("li",[e._v("Environments: If desired, every user can have a different set of packages, because Conda can install & manage packages in personal folders instead of system ones.\nA user can even have multiple such environments, and switch between them rapidly to work with different sets of related software without conflict.")])]),e._v(" "),t("h2",{attrs:{id:"initial-conda-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initial-conda-setup"}},[e._v("#")]),e._v(" Initial Conda setup")]),e._v(" "),t("p",[e._v('If you have not installed Conda yet, it can be downloaded as an all-in-one package that has no extra dependencies, known as "miniconda".\nFor Linux, Unix, macOS, and Windows, this can be downloaded at https://docs.conda.io/en/latest/miniconda.html\nFor z/OS, Conda can be downloaded from Rocket Software at https://www.rocketsoftware.com/zos-open-source')]),e._v(" "),t("p",[e._v("Conda will prompt during the install for certain setup options,\nand ultimately you'll want to put some Conda initialization content into your startup script\nso that whenever you open your terminal, Conda will be ready for your use.")]),e._v(" "),t("p",[e._v('Once you have Conda downloaded and installed, you\'ll want to create your first Conda "environment"\nthis can be done by providing a path or a nickname')]),e._v(" "),t("p",[t("code",[e._v("conda create --prefix PATH")]),e._v(" "),t("code",[e._v("conda create --name ENVIRONMENT")])]),e._v(" "),t("p",[e._v("Either will work, but path helps you better separate your content from content others use by placing it in a folder that you can have stricter permissions on.")]),e._v(" "),t("p",[e._v("If you need to know more about certain commands, you can use the help command for any.")]),e._v(" "),t("p",[t("code",[e._v("conda create --help")])]),e._v(" "),t("p",[e._v("Or, check the official documentation: https://docs.conda.io/en/latest/index.html")]),e._v(" "),t("p",[e._v("Once you have an environment, you should activate it so that the actions you do are on that environment, as opposed to the base one.")]),e._v(" "),t("p",[t("code",[e._v("conda activate PATH_OR_NAME")])]),e._v(" "),t("p",[e._v("Conda will detect whether the parameter is a path or a nickname, so this command works for both.")]),e._v(" "),t("p",[e._v('Finally, you can view the Conda environment and other information by checking "info"')]),e._v(" "),t("p",[t("code",[e._v("conda info")])]),e._v(" "),t("h2",{attrs:{id:"managing-conda-channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#managing-conda-channels"}},[e._v("#")]),e._v(" Managing Conda channels")]),e._v(" "),t("p",[e._v('When downloading a package, such as a Zowe Plugin, the place that you download from is configurable.\nThese are called "Channels", but are very similar to "Repositories" seen in other package managers.\nWith Conda, you can install from:')]),e._v(" "),t("ul",[t("li",[e._v("A network channel (Internet or company internal)")]),e._v(" "),t("li",[e._v("A local channel (Collection of plugins on your computer)")]),e._v(" "),t("li",[e._v("Just an individual package, without a channel")])]),e._v(" "),t("p",[e._v("You can have multiple of each, and if a package is present in more than one location, you can specify which one to use.")]),e._v(" "),t("h2",{attrs:{id:"searching-for-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searching-for-packages"}},[e._v("#")]),e._v(" Searching for packages")]),e._v(" "),t("p",[e._v("Conda has a search utility that searches for all Channels,")]),e._v(" "),t("p",[t("code",[e._v("conda search anything_you_want")])]),e._v(" "),t("p",[e._v("but it's important to note that because any type of software can be installed through Conda, you probably want to search through a detailed view to help identify which ones are meant for Zowe, or use Channels that are distinctly for Zowe so that you can get packages that are strictly for Zowe.")]),e._v(" "),t("p",[t("code",[e._v("conda search --info anything_you_want")])]),e._v(" "),t("h2",{attrs:{id:"using-conda-with-zowe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-conda-with-zowe"}},[e._v("#")]),e._v(" Using Conda with Zowe")]),e._v(" "),t("p",[e._v("Zowe is not yet available in the form of Conda packages yet, so it must be installed separately.\nIf you have Zowe installed on the same system as Conda, some Zowe Plugins installed through Conda will automatically register into Zowe.\nIn order to do this, the Plugins must be able to find Zowe. You should set environment variables before trying to install the Plugins:")]),e._v(" "),t("h3",{attrs:{id:"setting-environment-variables-temporarily"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-environment-variables-temporarily"}},[e._v("#")]),e._v(" Setting environment variables temporarily:")]),e._v(" "),t("p",[e._v("z/OS, Linux, Unix:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export ZOWE_INSTANCE_DIR=/path/to/zowe/instance\nexport ZOWE_ROOT_DIR=/path/to/zowe/installation\n")])])]),t("p",[e._v("Windows cmd.exe:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("set ZOWE_INSTANCE_DIR=\\path\\to\\zowe\\instance\nset ZOWE_ROOT_DIR=\\path\\to\\zowe\\installation\n")])])]),t("p",[t("code",[e._v("INSTANCE_DIR")]),e._v(" and "),t("code",[e._v("ROOT_DIR")]),e._v(" are also supported, but the "),t("code",[e._v("ZOWE_")]),e._v(" prefix helps distinguish its purpose.")]),e._v(" "),t("h3",{attrs:{id:"setting-environment-variables-persistently"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-environment-variables-persistently"}},[e._v("#")]),e._v(" Setting environment variables persistently")]),e._v(" "),t("p",[e._v("z/OS, Linux, Unix:\nYou can put the "),t("code",[e._v("export")]),e._v(" statements into the "),t("code",[e._v(".profile")]),e._v(" file in your home directory to have them apply on login.")]),e._v(" "),t("p",[e._v("Windows:\nThere is a UI to set variables, but it varies depending on Windows version.\nTry typing 'environment variable' into the Windows search bar to get to the relevant menu.")]),e._v(" "),t("h3",{attrs:{id:"installing-a-zowe-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-a-zowe-plugin"}},[e._v("#")]),e._v(" Installing a Zowe plugin")]),e._v(" "),t("p",[e._v("A Conda package could contain one or more Zowe Plugins, and a Conda package could contain non-Zowe code alongside Zowe Plugins.\nThis is left up to the program vendor and regardless the install process is the same:")]),e._v(" "),t("p",[t("code",[e._v("conda install package_name")])]),e._v(" "),t("p",[e._v("If the Zowe environment variables are set, such a package may automatically register Plugins into the Zowe instance of your choice.")]),e._v(" "),t("h3",{attrs:{id:"zowe-plugin-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zowe-plugin-configuration"}},[e._v("#")]),e._v(" Zowe plugin configuration")]),e._v(" "),t("p",[e._v("Aside from possible automation during install and uninstall, Conda does not manage Zowe, its configuration, or configuration of the Plugins.\nHowever, Conda does manage the package files, and therefore you can do additional Zowe tasks on the Plugins by going into the Conda environment.\nZowe Plugins are intended to be found in a standardized location in the Conda environment,")]),e._v(" "),t("p",[t("code",[e._v("/opt/zowe/plugins")])]),e._v(" "),t("p",[e._v("This folder contains Plugins, which in turn contain sub-folders that are the Zowe components that they utilize.\nIf a plugin uses multiple Zowe components, its contents could be found within multiple component folders.")]),e._v(" "),t("p",[t("code",[e._v("/opt/zowe/plugins/my_plugin/app-server")]),e._v(" "),t("code",[e._v("/opt/zowe/plugins/my_plugin/cli")])]),e._v(" "),t("h3",{attrs:{id:"zowe-package-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zowe-package-structure"}},[e._v("#")]),e._v(" Zowe package structure")]),e._v(" "),t("p",[e._v("Zowe Plugins packaged into Conda follow the structure outlined here: https://github.com/zowe/zowe-install-packaging/issues/1569\nThis structure allows for plugin to have content meant for one or more Zowe components.\nThe Conda packages extend this by allowing for more than one Plugin, or a mix of Zowe Plugins and other software to be within a single package.")]),e._v(" "),t("h2",{attrs:{id:"building-conda-packages-for-zowe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-conda-packages-for-zowe"}},[e._v("#")]),e._v(" Building Conda packages for Zowe")]),e._v(" "),t("p",[e._v("This document is intended to be provided with example scripts by the Zowe community, which shows you how you can build a simple Zowe plugin into a Conda package.\nYou can find the example scripts on the "),t("a",{attrs:{href:"https://github.com/zowe/zlux-build/tree/master/conda",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe zlux-build github repository."),t("OutboundLink")],1),e._v("\nThis is not intended to be a one-size-fits-all set of scripts. If you have more advanced needs, you can use these scripts as a basis for writing your own scripts.")]),e._v(" "),t("p",[e._v("To make a Conda package, you need conda-build, which you can install into a Conda environment:")]),e._v(" "),t("p",[t("code",[e._v("conda install conda-build")])]),e._v(" "),t("p",[e._v("Once you have it, you can build a package via")]),e._v(" "),t("p",[t("code",[e._v("conda build path/to/build/scripts")])]),e._v(" "),t("p",[e._v("However, first you must set up the build information.")]),e._v(" "),t("h3",{attrs:{id:"defining-package-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#defining-package-properties"}},[e._v("#")]),e._v(" Defining package properties")]),e._v(" "),t("p",[e._v("Conda needs a metadata file, "),t("code",[e._v("meta.yaml")]),e._v(" to state information about the package, such as dependencies, what OS it supports, its name and version.\nThis information can be programmatically found, and Zowe provides examples of how to do this by reading Zowe's own metadata files into this one.")]),e._v(" "),t("h3",{attrs:{id:"creating-build-step"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-build-step"}},[e._v("#")]),e._v(" Creating build step")]),e._v(" "),t("p",[e._v("It's recommended not to build your code from scratch to put into Conda.\nRather, build your code however you want, and then just copy the contents into a Conda package. This keeps the Conda scripting small and simple.")]),e._v(" "),t("p",[e._v("In the same folder as "),t("code",[e._v("meta.yaml")]),e._v(", Conda requires "),t("code",[e._v("build.sh")]),e._v(" for building on Unix, Linux, or z/OS and "),t("code",[e._v("build.bat")]),e._v(" for Windows.\nExcept for z/OS, this script does not determine where your package can be used, it's just about where you are building it.\nz/OS is the exception because when you build on z/OS, unix file tagging information is preserved.\nSo, it's highly recommended that you tag your files so that users do not have to deal with encoding issues.\nFor code that works equally well on all platforms, a simple way to build for all is:")]),e._v(" "),t("ol",[t("li",[e._v("Build your code on Linux")]),e._v(" "),t("li",[e._v("Transfer the output to z/OS")]),e._v(" "),t("li",[e._v("Run a Conda build on the output on Linux")]),e._v(" "),t("li",[e._v("Run a Conda build on the output on z/OS")]),e._v(" "),t("li",[e._v("Deliver the Linux package as 'noarch' content, and the z/OS package as 'zos-z' content.")])]),e._v(" "),t("h3",{attrs:{id:"lifecycle-scripts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle-scripts"}},[e._v("#")]),e._v(" Lifecycle scripts")]),e._v(" "),t("p",[e._v("When a Conda package is installed or uninstalled, a script from the package can be run.\nFor Zowe, the scripts "),t("code",[e._v("post-link.sh")]),e._v(" and "),t("code",[e._v("pre-unlink.sh")]),e._v(" can be important, and you must put them into the same folder as "),t("code",[e._v("meta.yaml")]),e._v(" for building.")]),e._v(" "),t("h4",{attrs:{id:"install-automation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-automation"}},[e._v("#")]),e._v(" Install automation")]),e._v(" "),t("p",[t("code",[e._v("post-link.sh")]),e._v(" runs at install, after Conda has put the package content onto the system.\nAt this time, registration into Zowe is recommended if the Plugin does not require any information from the user for configuration.\nIf the Plugin is okay to be automatically installed, we recommend putting a script into the package folder named "),t("code",[e._v("autoinstall.sh")]),e._v("\nZowe's provided Conda examples will utilize "),t("code",[e._v("autoinstall.sh")]),e._v(" to do any install steps your package needs, and provides Zowe information to make install simple.\nHowever, it's possible to do what you want in your own "),t("code",[e._v("post-link.sh")]),e._v(" script instead.")]),e._v(" "),t("h4",{attrs:{id:"uninstall-automation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uninstall-automation"}},[e._v("#")]),e._v(" Uninstall automation")]),e._v(" "),t("p",[t("code",[e._v("pre-unlink.sh")]),e._v(" is the opposite of "),t("code",[e._v("post-link.sh")]),e._v(". It allows you to do anything you need to before the package is removed from the system.\nThis is a good time to remove any package information from Zowe, but you should be careful because users may uninstall and later re-install,\nso you should not remove configuration information without consent.")]),e._v(" "),t("h3",{attrs:{id:"adding-configuration-to-conda-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-configuration-to-conda-packages"}},[e._v("#")]),e._v(" Adding configuration to Conda packages")]),e._v(" "),t("p",[e._v("As a package manager, Conda is not responsible for configuration. Your packages can include defaults to utilize,\nbut if configuration is needed you should alert the user to perform a post-install task. "),t("code",[e._v("post-link.sh")]),e._v(" could be used to print such an alert.")])])}),[],!1,null,null,null);a.default=o.exports}}]);