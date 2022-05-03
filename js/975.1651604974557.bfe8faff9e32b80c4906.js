/*! For license information please see 975.1651604974557.bfe8faff9e32b80c4906.js.LICENSE.txt */
(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[975],{5183:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const a=r(655),n=a.__importStar(r(3264));var i;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(i=t.IconSize||(t.IconSize={})),t.getSize=e=>{switch(e){case i.sm:return"1em";case i.md:return"1.5em";case i.lg:return"2em";case i.xl:return"3em";default:return"1em"}};let o=0;t.createIcon=function({name:e,xOffset:r=0,yOffset:l=0,width:s,height:c,svgPath:u}){var p;return p=class extends n.Component{constructor(){super(...arguments),this.id="icon-title-"+o++}render(){const e=this.props,{size:i,color:o,title:p,noVerticalAlign:d}=e,f=a.__rest(e,["size","color","title","noVerticalAlign"]),m=Boolean(p),h=t.getSize(i),y=-.125*Number.parseFloat(h),v=d?null:{verticalAlign:`${y}em`},g=[r,l,s,c].join(" ");return n.createElement("svg",Object.assign({style:v,fill:o,height:h,width:h,viewBox:g,"aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img"},f),m&&n.createElement("title",{id:this.id},p),n.createElement("path",{d:u}))}},p.displayName=e,p.defaultProps={color:"currentColor",size:i.sm,noVerticalAlign:!1},p}},470:(e,t,r)=>{"use strict";t.mq={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},t.LA=r(5183).createIcon(t.mq),t.ZP=t.LA},5795:(e,t,r)=>{"use strict";t.sN={name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0},t.iC=r(5183).createIcon(t.sN),t.ZP=t.iC},496:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(3264),n=r.n(a),i=r(5224);const o=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a="Prior to 2016 (approximately), CVEs were scored with Common Vulnerability Scoring System v2.",o="CVEs published before 2005 (approximately) did not have a CVSS Base Score.";return t&&parseFloat(t).toFixed(1)||e&&n().createElement(i.u,{content:a,position:"left"},n().createElement("span",null,"".concat(parseFloat(e).toFixed(1))," ",r&&"(CVSSv2)"))||n().createElement(i.u,{content:o,position:"left"},n().createElement("span",null,"N/A"))}},448:function(e,t,r){"use strict";var a,n=this&&this.__extends||(a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},a(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var a,n=0,i=t.length;n<i;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=o(r(3264)),s=r(8877),c=r(9573),u=o(r(4184)),p=o(r(5697));r(9998);var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.createColumns=function(){var e=t.props,r=e.colSize,a=e.isDark;return i([],Array(r),!0).map((function(){return{title:l.default.createElement(c.Skeleton,{isDark:a,size:c.SkeletonSize.sm})}}))},t.getColumns=function(){var e=t.props,r=e.paddingColumnSize,a=e.columns;return t.newArray(r).map((function(){return""})).concat(a||t.createColumns())},t.createRows=function(){var e=t.props,r=e.colSize,a=e.rowSize,n=e.columns,i=e.paddingColumnSize,o=e.isDark,s=n?n.length:r;return t.newArray(a).map((function(){return{disableSelection:!0,cells:t.newArray(i).map((function(){return""})).concat(t.newArray(s).map((function(){return{title:l.default.createElement(c.Skeleton,{isDark:o,size:c.SkeletonSize.md})}})))}}))},t.selectVariant=function(){return t.props.hasRadio?(null===s.RowSelectVariant||void 0===s.RowSelectVariant?void 0:s.RowSelectVariant.radio)||"radio":(null===s.RowSelectVariant||void 0===s.RowSelectVariant?void 0:s.RowSelectVariant.checkbox)||"checkbox"},t.newArray=function(e){return i([],Array(e),!0)},t}return n(t,e),t.prototype.render=function(){var e=this.props,t=e.canSelectAll,r=e.isSelectable,a=e.sortBy,n=e.variant,i=e.isDark;return l.default.createElement(s.Table,{className:(0,u.default)({"ins-c-skeleton-table__dark":i}),cells:this.getColumns(),rows:this.createRows(),sortBy:a,"aria-label":"Loading",onSelect:r,selectVariant:r?this.selectVariant():null,canSelectAll:t,variant:n},l.default.createElement(s.TableHeader,null),l.default.createElement(s.TableBody,null))},t}(l.default.Component);d.propTypes={colSize:p.default.number,rowSize:p.default.number,columns:p.default.array,paddingColumnSize:p.default.number,sortBy:p.default.shape({index:p.default.number,direction:p.default.oneOf(["asc","desc"])}),isSelectable:p.default.bool,canSelectAll:p.default.bool,hasRadio:p.default.bool,variant:p.default.string,isDark:p.default.bool},d.defaultProps={rowSize:0,paddingColumnSize:0,canSelectAll:!1,isSelectable:!1,hasRadio:!1,variant:null,isDark:!1},t.default=d},3754:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(3264);const n=r.n(a)().createContext("light")},6350:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var a=r(3264),n=r.n(a),i=r(4184),o=r.n(i),l=r(4494),s=r(3754),c=function(){return c=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)},u=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,i=t.length;n<i;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))};const p=(0,l.$j)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,r=e.params,a=void 0===r?{}:r,i=e.children,l=e.className,p=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["path","params","children","className"]),d=function(){var e,r,n;if(null===(n=null===(r=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===r?void 0:r.$internal)||void 0===n?void 0:n.store){var i=window.insights.chrome.$internal.store.getState();if(t&&i)return t.split("/").reduce((function(e,t){var r,n;return 0===t.indexOf(":")?e.dynamic=c(c({},e.dynamic),((r={})["data-".concat((n=t.substr(1),n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=a[t.substr(1)],r)):e.staticPart=u(u([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[i.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),f=d.dynamic,m=d.staticPart;return n().createElement(s.Z.Consumer,null,(function(e){var t;void 0===e&&(e="light");var r=o()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:n().createElement("section",c({},p,f,{"page-type":m.join("-"),className:"".concat(o()(l,"pf-l-page__main-section pf-c-page__main-section")," ").concat(r)}),n().Children.map(i,(function(e){return n().cloneElement(e,{className:"pf-m-dark"})}))),light:n().createElement("section",c({},p,f,{"page-type":m.join("-"),className:"".concat(o()(l,"pf-l-page__main-section pf-c-page__main-section"))}),i)}[e]}))}))},8716:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var a=r(3264),n=r.n(a),i=r(4184),o=r.n(i),l=r(3754),s=function(){return s=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)};const c=function(e){var t=e.className,r=e.children,a=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["className","children"]),i=o()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return n().createElement(l.Z.Consumer,null,(function(e){var t,l;void 0===e&&(e="light");var c=o()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((l={})["pf-m-light"]="light"===e,l));return n().createElement("section",s({},a,{className:"".concat(i," ").concat(c),"widget-type":"InsightsPageHeader"}),r)}))}},9173:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(3264),n=r.n(a),i=r(4184),o=r.n(i),l=r(943);const s=function(e){var t=e.className,r=e.title,a=o()(t);return n().createElement(l.Title,{headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},r)}},9492:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var a=r(943),n=r(400);const i=(0,n.IU)({name:"QuestionIcon",height:512,width:384,svgPath:"M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z",yOffset:0,xOffset:0}),o=(0,n.IU)({name:"SecurityIcon",height:1024,width:896,svgPath:"M861.5,0 L34.5,0 C15.4,0 0,14.3 0,32 L0,452.1 C0,768 387.7,1024 448.5,1024 C509.3,1024 896,768 896,452.2 L896,32 C896,14.3 880.6,0 861.5,0 Z M490.7,768 L405.3,768 C393.5,767.8 384.2,757.5 384,744.7 L384,663.3 C384.2,650.5 393.6,640.3 405.3,640 L490.7,640 C502.5,640.2 511.8,650.5 512,663.3 L512,744.7 L512.1,744.7 C511.8,757.5 502.4,767.8 490.7,768 Z M543.9,162.7 L517.2,514.4 C515.8,530.9 502,544 485.3,544 L410.6,544 C394,544 380.1,531.2 378.7,514.7 L352.1,163 C350.5,144.3 365.3,128.3 384,128.3 L512,128 C530.7,128 545.4,144 543.9,162.7 Z",yOffset:0,xOffset:0});var l=r(5697),s=r.n(l),c=r(3264),u=r.n(c),p="#737679",d="#a30000",f="#f0ab00",m="#ec7a08",h="This rating is given to flaws that could be easily exploited by a         remote unauthenticated attacker and lead to system compromise         (arbitrary code execution) without requiring user interaction. These         are the types of vulnerabilities that can be exploited by worms.         Flaws that require an authenticated remote user, a local user,         or an unlikely configuration are not classed as Critical impact.",y="This rating is given to flaws that can easily compromise the     confidentiality, integrity, or availability of resources. These are the     types of vulnerabilities that allow local users to gain privileges, allow     unauthenticated remote users to view resources that should otherwise be     protected by authentication, allow authenticated remote users to execute     arbitrary code, or allow remote users to cause a denial of service.",v="This rating is given to flaws that may be more difficult to exploit         but could still lead to some compromise of the confidentiality,         integrity, or availability of resources, under certain circumstances.         These are the types of vulnerabilities that could have had a Critical         impact or Important impact but are less easily exploited based on a         technical evaluation of the flaw, or affect unlikely configurations.",g="This rating is given to all other issues that have a security         impact. These are the types of vulnerabilities that are believed to         require unlikely circumstances to be able to be exploited, or where         a successful exploit would give minimal consequences.",b={Critical:{title:"Critical",color:d,message:h},4:{title:"Critical",color:d,message:h},High:{title:"High",color:m,message:y},Important:{title:"Important",color:m,message:y},3:{title:"High",color:m,message:y},Medium:{title:"Medium",color:f,message:v},Moderate:{title:"Moderate",color:f,message:v},2:{title:"Medium",color:f,message:v},Low:{title:"Low",color:p,message:g},1:{title:"Low",color:p,message:g},Unknown:{title:"Unknown",color:p,message:"Red Hat Product Security has determined that this vulnerability does         not impact Red Hat products."}},w=function(){return w=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},w.apply(this,arguments)},O=function(e){var t,r=e.impact,n=e.hasLabel,l=e.hasTooltip,s=e.size,c=null!==(t=null==b?void 0:b[r])&&void 0!==t?t:b.Unknown,p={"aria-hidden":"false","aria-label":c.title,color:c.color,size:s},d="Unknown"===c.title?u().createElement(i,w({},p)):u().createElement(o,w({},p)),f=u().createElement("span",null,d," ",n&&c.title);return u().createElement("span",null,l?u().createElement(a.Tooltip,{content:u().createElement("div",null,c.message),position:"bottom"},f):f)};O.defaultProps={impact:"N/A",hasLabel:!1,size:"sm",hasTooltip:!0},O.propTypes={impact:s().oneOfType([s().string,s().number]),hasLabel:s().bool,size:s().string,label:s().bool,hasTooltip:s().bool};const S=O},6455:(e,t,r)=>{"use strict";r.d(t,{i:()=>c,Z:()=>u});var a=r(3264),n=r.n(a),i=r(943),o=r(4184),l=r.n(o),s=function(){return s=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},c={xs:"xs",sm:"sm",md:"md",lg:"lg"};const u=function(e){var t,r=e.size,a=void 0===r?c.md:r,o=e.isDark,u=void 0!==o&&o,p=e.className,d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["size","isDark","className"]);return n().createElement(i.Skeleton,s({className:l()("ins-c-skeleton","ins-c-skeleton__".concat(a),(t={},t["ins-m-dark"]=u,t),p)},d))}},9573:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a.Z,Skeleton:()=>a.Z,SkeletonSize:()=>a.i});var a=r(6455)},4184:(e,t)=>{var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=n.apply(null,r);o&&e.push(o)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var l in r)a.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},9998:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=../sourcemaps/975.95c41cc856b6e484bdbce7df5d2b3a70.js.map