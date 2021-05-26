(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{617:function(t,e,s){"use strict";s.r(e);var a=s(18),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"onboarding-a-node-js-based-rest-api-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onboarding-a-node-js-based-rest-api-service"}},[t._v("#")]),t._v(" Onboarding a Node.js based REST API service")]),t._v(" "),s("p",[t._v("This article is part of a series of onboarding articles, which outline the process of onboarding REST API services to the Zowe API Mediation Layer (API ML). As a service developer, you can onboard a REST service based on NodeJS with the API ML with the Zowe API Mediation Layer using our Node.js Enabler.")]),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v(" For more information about onboarding API services with the API ML, see the "),s("RouterLink",{attrs:{to:"/extend/extend-apiml/onboard-overview.html"}},[t._v("Onboarding Overview")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://www.npmjs.com/package/@zowe/apiml-onboarding-enabler-nodejs",target:"_blank",rel:"noopener noreferrer"}},[t._v("API ML onboarding Node.js enabler"),s("OutboundLink")],1),t._v(" is an NPM package which helps to simplify the process of onboarding a REST service written in Node.js with the API ML.")]),t._v(" "),s("p",[t._v("For more information about how to utilize another API ML enablers, see the "),s("RouterLink",{attrs:{to:"/extend/extend-apiml/onboard-overview.html"}},[t._v("Onboarding Overview")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"onboarding-your-node-js-service-with-api-ml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onboarding-your-node-js-service-with-api-ml"}},[t._v("#")]),t._v(" Onboarding your Node.js service with API ML")]),t._v(" "),s("p",[t._v("The following steps outline the overall process to onboard a REST service with the API ML using the onboarding Node.js enabler. Each step is described in further detail in this article.")]),t._v(" "),s("ol",[s("li",[s("p",[s("a",{attrs:{href:"#prerequisites"}},[t._v("Prerequisites")])])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"#installing-the-npm-dependency"}},[t._v("Install the npm dependency")])])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"#configuring-your-service"}},[t._v("Configure your service")])])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"#registering-your-service-with-api-ml"}},[t._v("Register your service with API ML")])])]),t._v(" "),s("li",[s("p",[t._v("(Optional) "),s("a",{attrs:{href:"#validating-the-discoverability-of-your-api-service-by-the-discovery-service"}},[t._v("Validate the discoverability of your API service by the Discovery Service")])])])]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("p",[t._v("Ensure that you meet the following prerequisites:")]),t._v(" "),s("ul",[s("li",[t._v("You satisfy the prerequisites from the "),s("RouterLink",{attrs:{to:"/extend/extend-apiml/onboard-overview.html"}},[t._v("Onboarding Overview")]),t._v(".")],1),t._v(" "),s("li",[t._v("The REST API service to onboard is written in Node.js.")]),t._v(" "),s("li",[t._v("The service is enabled to communicate with API ML Discovery Service over a TLS v1.2 secured connection.")])]),t._v(" "),s("h2",{attrs:{id:"installing-the-npm-dependency"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-npm-dependency"}},[t._v("#")]),t._v(" Installing the npm dependency")]),t._v(" "),s("p",[t._v("Install the onboarding Node.js enabler package as a dependency of your service. Run the following npm command from your project directory:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm i @zowe/apiml-onboarding-enabler-nodejs@latest --dev-save\n")])])]),s("p",[s("strong",[t._v("Note:")]),t._v(" If you have a multi-module project, you have to run the npm command from the submodule where your Node.js project is located.")]),t._v(" "),s("h2",{attrs:{id:"configuring-your-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-your-service"}},[t._v("#")]),t._v(" Configuring your service")]),t._v(" "),s("p",[t._v("Create a yaml file named "),s("code",[t._v("service-configuration.yml")]),t._v(" inside a "),s("code",[t._v("/config")]),t._v(" directory at the same level of your "),s("code",[t._v("index.js")]),t._v(", and add the following configuration properties.")]),t._v(" "),s("p",[t._v("The following example shows a sample configuration.")]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hwexpress\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Hello World express REST API\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eureka")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ssl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" localhost\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ipAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10011")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servicePath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/eureka/apps/'")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxRetries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requestRetryDelay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("registryFetchInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n \n \n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Hello World REST API Service implemented in Express and Node.js\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("baseUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10020/hwexpress\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("homePageRelativeUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10020/\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("statusPageRelativeUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10020/info\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("healthCheckRelativeUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10020/status\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discoveryServiceUrls")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10011/eureka\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gatewayUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" api/v1\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceRelativeUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /api/v1\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zowe.apiml.hwexpress\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gatewayUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api/v1"')]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("swaggerUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10020/swagger.json\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("catalogUiTile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cademoapps\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Sample API Mediation Layer Applications\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Applications which demonstrate how to make a service integrated to the API Mediation Layer ecosystem\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.0.0\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hwexpress\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vipAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hwexpress\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instanceId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hwexpress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10020")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("homePageUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10020/\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ipAddr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secureVipAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hwexpress\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10020")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'@enabled'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("securePort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10020")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'@enabled'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n \n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dataCenterInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'@class'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MyOwn\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiml.catalog.tile.id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'samplenodeservice'")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiml.catalog.tile.title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Zowe Sample Node Service'")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiml.catalog.tile.description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NodeJS Sample service running'")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiml.catalog.tile.version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.0.0'")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiml.routes.api_v1.gatewayUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api/v1"')]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiml.routes.api_v1.serviceUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/v1"')]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiml.apiInfo.0.apiId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zowe.apiml.hwexpress\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiml.apiInfo.0.gatewayUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api/v1"')]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiml.apiInfo.0.swaggerUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10020/swagger.json\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiml.service.title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Zowe Sample Node Service'")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiml.service.description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The Proxy Server is an HTTP HTTPS, and Websocket server built upon NodeJS and ExpressJS.'")]),t._v("\n \n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ssl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("certificate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ssl/localhost.keystore.cer\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keystore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ssl/localhost.keystore.key\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("caFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ssl/localhost.pem\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keyPassword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" password\n \n")])])]),s("h2",{attrs:{id:"registering-your-service-with-api-ml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registering-your-service-with-api-ml"}},[t._v("#")]),t._v(" Registering your service with API ML")]),t._v(" "),s("p",[t._v("To register your service with API ML, use the following procedure.")]),t._v(" "),s("p",[s("strong",[t._v("Follow these steps:")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Inside your Node.js service "),s("code",[t._v("index.js")]),t._v(", add the following code block to register your service with Eureka:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" apiLayerService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@zowe/apiml-onboarding-enabler-nodejs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n tlsOptions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" apiLayerService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tlsOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" httpsServer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tlsOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n httpsServer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     apiLayerService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connectToEureka")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n")])])])]),t._v(" "),s("li",[s("p",[t._v("Start your Node.js service and verify that the service is registered to the Zowe API Mediation Layer.")])])]),t._v(" "),s("h2",{attrs:{id:"validating-the-discoverability-of-your-api-service-by-the-discovery-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validating-the-discoverability-of-your-api-service-by-the-discovery-service"}},[t._v("#")]),t._v(" Validating the discoverability of your API service by the Discovery Service")]),t._v(" "),s("p",[t._v("Once you build and start your service successfully, you can use the option of validating that your service is registered correctly with the API ML Discovery Service.")]),t._v(" "),s("p",[s("strong",[t._v("Follow these steps:")])]),t._v(" "),s("ol",[s("li",[s("p",[s("RouterLink",{attrs:{to:"/extend/extend-apiml/onboard-overview.html#verify-successful-onboarding-to-the-api-ml"}},[t._v("Validate successful onboarding")])],1)]),t._v(" "),s("li",[s("p",[t._v("Check that you can access your API service endpoints through the Gateway.")])]),t._v(" "),s("li",[s("p",[t._v("(Optional) Check that you can access your API service endpoints directly outside of the Gateway.")])])]),t._v(" "),s("p",[t._v("Specific addresses and user credentials for the individual API ML components depend on your target runtime environment.")]),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v(" If you are working with a local installation of API ML, and you are using our dummy identity provider, enter "),s("code",[t._v("user")]),t._v(" for both "),s("code",[t._v("username")]),t._v(" and "),s("code",[t._v("password")]),t._v(". If API ML was installed by system administrators, ask them to provide you\nwith actual addresses of API ML components and the respective user credentials.")]),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v(" Wait for the Discovery Service to fully register your service. This process may take a few minutes after your\nservice starts successfully.")])])}),[],!1,null,null,null);e.default=n.exports}}]);