(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{647:function(e,t,a){"use strict";a.r(t);var o=a(18),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"configuring-iframe-communication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-iframe-communication"}},[e._v("#")]),e._v(" Configuring IFrame communication")]),e._v(" "),a("p",[e._v("The Zowe Application Framework provides the following shared resource functions through a "),a("a",{attrs:{href:"https://github.com/zowe/zlux-platform/blob/master/interface/src/index.d.ts#L720",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZoweZLUX object"),a("OutboundLink")],1),e._v(": "),a("code",[e._v("pluginManager")]),e._v(", "),a("code",[e._v("uriBroker")]),e._v(", "),a("code",[e._v("dispatcher")]),e._v(", "),a("code",[e._v("logger")]),e._v(", "),a("code",[e._v("registry")]),e._v(", "),a("code",[e._v("notificationManager")]),e._v(", and "),a("code",[e._v("globalization")])]),e._v(" "),a("p",[e._v("Like REACT and Angular apps, IFrame apps can use the ZoweZLUX object to communicate with the framework and other apps. To enable communication in an IFrame app, you must add the following javascript to your app, for example in your "),a("code",[e._v("index.html")]),e._v(" file:")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" ZoweZLUX_tempExports "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"__esModule"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("script type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"text/javascript"')]),e._v(" src"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"../../../../../lib/org.zowe.zlux.logger/0.9.0/logger.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("script type"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"text/javascript"')]),e._v(" src"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"../../../org.zowe.zlux.bootstrap/web/iframe-adapter.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n")])])]),a("p",[a("code",[e._v("logger.js")]),e._v(" is the javascript version of "),a("code",[e._v("logger.ts")]),e._v(" and is capable of the same functions, including access to the "),a("code",[e._v("Logger")]),e._v(" and "),a("code",[e._v("ComponentLogger")]),e._v(" classes. The "),a("code",[e._v("Logger")]),e._v(" class determines the behavior of all the "),a("code",[e._v("ComponentLoggers")]),e._v(" created from it. "),a("code",[e._v("ComponentLoggers")]),e._v(" are what the user implements to perform logging.")]),e._v(" "),a("p",[a("code",[e._v("Iframe-adapter.js")]),e._v(" is designed to mimic the ZoweZLUX object that is available to apps within the virtual-desktop, and serves as the middle-man for communication between IFrame apps and the Zowe desktop.")]),e._v(" "),a("p",[e._v("You can see an implementation of this functionality in the "),a("a",{attrs:{href:"https://github.com/zowe/sample-iframe-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("sample IFrame app"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The version of ZoweZLUX adapted for IFrame apps is not complete and only implements the functions needed to allow the Sample IFrame App to function. The "),a("code",[e._v("notificationManager")]),e._v(", "),a("code",[e._v("logger")]),e._v(", "),a("code",[e._v("globalization")]),e._v(", "),a("code",[e._v("dispatcher")]),e._v(", "),a("code",[e._v("windowActions")]),e._v(", "),a("code",[e._v("windowEvents")]),e._v(", and "),a("code",[e._v("viewportEvents")]),e._v(" are fully implemented. The "),a("code",[e._v("pluginManager")]),e._v(" and "),a("code",[e._v("uriBroker")]),e._v(" are only partially implemented. The "),a("code",[e._v("registry")]),e._v(" is not implemented.")]),e._v(" "),a("p",[e._v("Unlike REACT and Angular apps, in IFrame apps the ZoweZLUX and initialization objects communicate with Zowe using the browser's onmessage and postmessage APIs. That means that communication operations are asynchronous, and you must account for this in your app, for example by using "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"}},[e._v("Promise objects"),a("OutboundLink")],1),e._v(" and "),a("code",[e._v("await")]),e._v(" or "),a("code",[e._v("then")]),e._v(" functions.")])])}),[],!1,null,null,null);t.default=r.exports}}]);