(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{420:function(e,t,s){e.exports=s.p+"assets/img/zowe-architecture.ce0b5ccf.png"},421:function(e,t,s){e.exports=s.p+"assets/img/zowe-architecture-docker.191b6bed.png"},422:function(e,t,s){e.exports=s.p+"assets/img/zowe-desktop.7a8aff81.png"},423:function(e,t,s){e.exports=s.p+"assets/img/api-mediationlayer.8fe48a2e.png"},424:function(e,t,s){e.exports=s.p+"assets/img/api-catalog.995e6aa0.png"},425:function(e,t,s){e.exports=s.p+"assets/img/api-discovery.9480971f.png"},426:function(e,t,s){e.exports=s.p+"assets/img/desktop-explorers.3473b599.png"},690:function(e,t,s){"use strict";s.r(t);var r=s(18),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"zowe-architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zowe-architecture"}},[e._v("#")]),e._v(" Zowe architecture")]),e._v(" "),r("p",[e._v("Zowe™ is a collection of components that together form a framework that allows Z-based functionality to be accessible across an organization. This includes exposing Z-based components such as z/OSMF as Rest APIs. The framework provides an environment where other components can be included and exposed to a broader non-Z based audience.")]),e._v(" "),r("p",[e._v("The following diagram depicts the high-level Zowe architecture.")]),e._v(" "),r("img",{attrs:{src:s(420),alt:"Zowe Architecture Diagram",width:"700px"}}),e._v(" "),r("p",[e._v("The diagram shows the default port numbers that are used by Zowe.  These are dependent on each instance of Zowe and are held in the Zowe instance directory configuration file "),r("code",[e._v("instance.env")]),e._v(". For more information, see "),r("RouterLink",{attrs:{to:"/user-guide/configure-instance-directory.html"}},[e._v("Creating and configuring the Zowe instance directory")]),e._v(".")],1),e._v(" "),r("p",[e._v("Zowe components can be categorized by location: server or client. While the client is always an end user tool such as a PC, browser or mobile device, the server components can be further categorized by what machine they run on.")]),e._v(" "),r("p",[e._v("Zowe server components can be installed and run entirely on z/OS, but a subset of the components can alternatively run on Linux or z/Linux via Docker. While on z/OS, many of these components run under Unix System Services (USS). The ones that do not run under USS must remain on z/OS when using Docker in order to provide connectivity to the mainframe.")]),e._v(" "),r("h2",{attrs:{id:"zowe-architecture-when-using-docker-image"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zowe-architecture-when-using-docker-image"}},[e._v("#")]),e._v(" Zowe architecture when using Docker image")]),e._v(" "),r("Badge",{attrs:{text:"Technical Preview"}}),e._v(" The Zowe Docker build is a technical preview. \n"),r("p",[e._v("The following diagram depicts the difference in locations of Zowe components when using Docker as opposed to running all components on z/OS.")]),e._v(" "),r("img",{attrs:{src:s(421),alt:"Zowe Architecture Diagram using Docker",width:"700px"}}),e._v(" "),r("p",[e._v("The components on z/OS run under the Zowe started task "),r("code",[e._v("ZWESVSTC")]),e._v(", which has its own user ID "),r("code",[e._v("ZWESVUSR")]),e._v(" and includes a number of servers each with their own address space.  The "),r("code",[e._v("ZWESVSTC")]),e._v(" started task has a "),r("code",[e._v("STDOUT")]),e._v(" file that includes log and trace information for its servers.  Sever error messages are written to "),r("code",[e._v("STDERR")]),e._v(". For problem determination, see "),r("RouterLink",{attrs:{to:"/troubleshoot/troubleshooting.html"}},[e._v("Troubleshooting")]),e._v(".")],1),e._v(" "),r("p",[e._v("When Docker is used, server components not running on z/OS instead run in a Linux environment provided via the Docker container technology. The servers run as processes within the container which log to "),r("code",[e._v("STDOUT")]),e._v(" and "),r("code",[e._v("STDERR")]),e._v(" of that container, with some components also write to the Zowe instance's log directory.")]),e._v(" "),r("h2",{attrs:{id:"app-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#app-server"}},[e._v("#")]),e._v(" App Server")]),e._v(" "),r("p",[e._v("The App Server is a node.js server that is responsible for the Zowe Application Framework. It provides the Zowe desktop, which is accessible through a web browser via port 8544. The Zowe desktop includes a number of applications that run inside the Application Framework such as a 3270 emulator and a File Editor.")]),e._v(" "),r("img",{attrs:{src:s(422),alt:"Zowe Desktop Diagram",width:"600px"}}),e._v(" "),r("p",[e._v("The App Server server logs are written to "),r("code",[e._v("<INSTANCE_DIR>/logs/appServer-yyyy-mm-dd-hh-mm.log")]),e._v(".  The Application Framework provides REST APIs for its services that are included on the API catalog tile "),r("code",[e._v("Zowe Application Framework")]),e._v(" that can be viewed at "),r("code",[e._v("https://<ZOWE_HOST_IP>:7554/ui/v1/apicatalog/#/tile/ZLUX/zlux")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"zss"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zss"}},[e._v("#")]),e._v(" ZSS")]),e._v(" "),r("p",[e._v("The Zowe desktop delegates a number of its services to the ZSS server which it accesses through the http port 8542.  ZSS is written in C and has native calls to z/OS to provide its services.  ZSS logs are written "),r("code",[e._v("STDOUT")]),e._v(" and "),r("code",[e._v("STDERR")]),e._v(" for capture into job logs, but also as a file into "),r("code",[e._v("<INSTANCE_DIR>/logs/zssServer-yyyy-mm-dd-hh-mm.log")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"api-gateway"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api-gateway"}},[e._v("#")]),e._v(" API Gateway")]),e._v(" "),r("p",[e._v("The API Gateway is a proxy server that routes requests from clients on its northbound edge, such as web browsers or the Zowe command line interface, to servers on its southbound edge that are able to provide data to serve the request.  It is also responsible for generating the authentication token used to provide single sign-on (SSO) functionality.  The API Gateway homepage is "),r("code",[e._v("https://<ZOWE_HOST_IP>:7554")]),e._v(", that after authentication allows you to navigate to the API Catalog.")]),e._v(" "),r("img",{attrs:{src:s(423),alt:"Zowe API Mediation Layer",width:"600px"}}),e._v(" "),r("h2",{attrs:{id:"api-catalog"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api-catalog"}},[e._v("#")]),e._v(" API Catalog")]),e._v(" "),r("p",[e._v("The API Catalog provides a list of the API services that have registered themselves as catalog tiles.  These allow you to view the available APIs from Zowe's southbound servers as well as test REST API calls.")]),e._v(" "),r("img",{attrs:{src:s(424),alt:"Zowe API Catalog",width:"600px"}}),e._v(" "),r("h2",{attrs:{id:"api-discovery"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api-discovery"}},[e._v("#")]),e._v(" API Discovery")]),e._v(" "),r("p",[e._v("The API Discovery server acts as the registration service broker between the API Gateway and its southbound servers.  It can be accessed through the URL "),r("code",[e._v("https://<ZOWE_HOST_IP>:7552")]),e._v(".  You can view a list of registered API services on the API discovery homepage.")]),e._v(" "),r("img",{attrs:{src:s(425),alt:"Zowe API Discovery",width:"600px"}}),e._v(" "),r("h2",{attrs:{id:"mvs-jes-and-uss-ui"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mvs-jes-and-uss-ui"}},[e._v("#")]),e._v(" MVS, JES, and USS UI")]),e._v(" "),r("p",[e._v("Zowe provides a number of rich GUI web applications for working with z/OS.  This includes the MVS Explorer for data sets, the JES Explorer for jobs, and the USS Explorer for the Unix File System. You can access them through the Zowe desktop.")]),e._v(" "),r("img",{attrs:{src:s(426),alt:"Zowe Desktop Explorers",width:"600px"}}),e._v(" "),r("h3",{attrs:{id:"file-api-and-jes-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#file-api-and-jes-api"}},[e._v("#")]),e._v(" File API and JES API")]),e._v(" "),r("p",[e._v("The File API server provides a set of REST APIs for working with z/OS data sets and Unix files.  These APIs are used by the MVS and USS Explorer apps.")]),e._v(" "),r("p",[e._v("The JES API server provides a set of REST APIs for working with JES.  These APIs are used by the JES Explorer application.")]),e._v(" "),r("p",[e._v("Both the File API and JES API servers are registered as tiles on the API catalog, so you can view the Swagger definition and test API requests and responses.")]),e._v(" "),r("h2",{attrs:{id:"cross-memory-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cross-memory-server"}},[e._v("#")]),e._v(" Cross memory server")]),e._v(" "),r("p",[e._v("The Cross memory server is a low-level privileged server for managing mainframe data securely.\nFor security reasons, it is not an HTTP server. Instead, it has a trust relationship with ZSS. Other Zowe components can work through ZSS in order to handle z/OS data that would otherwise be unavailable or insecure to access from higher-level languages and software.")]),e._v(" "),r("p",[e._v("Unlike all of the servers described above which run under the "),r("code",[e._v("ZWESVSTC")]),e._v(" started task as address spaces for USS processes, the cross memory server has its own separate started task "),r("code",[e._v("ZWESISTC")]),e._v(" and its own user ID "),r("code",[e._v("ZWESIUSR")]),e._v(" that runs the program "),r("code",[e._v("ZWESIS01")]),e._v(".")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);