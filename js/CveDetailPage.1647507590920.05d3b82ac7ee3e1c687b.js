/*! For license information please see CveDetailPage.1647507590920.05d3b82ac7ee3e1c687b.js.LICENSE.txt */
(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[560],{5183:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const a=r(655),n=a.__importStar(r(3264));var o;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o=t.IconSize||(t.IconSize={})),t.getSize=e=>{switch(e){case o.sm:return"1em";case o.md:return"1.5em";case o.lg:return"2em";case o.xl:return"3em";default:return"1em"}};let l=0;t.createIcon=function({name:e,xOffset:r=0,yOffset:i=0,width:c,height:s,svgPath:u}){var p;return p=class extends n.Component{constructor(){super(...arguments),this.id="icon-title-"+l++}render(){const e=this.props,{size:o,color:l,title:p,noVerticalAlign:m}=e,d=a.__rest(e,["size","color","title","noVerticalAlign"]),f=Boolean(p),h=t.getSize(o),y=-.125*Number.parseFloat(h),v=m?null:{verticalAlign:`${y}em`},g=[r,i,c,s].join(" ");return n.createElement("svg",Object.assign({style:v,fill:l,height:h,width:h,viewBox:g,"aria-labelledby":f?this.id:null,"aria-hidden":!f||null,role:"img"},d),f&&n.createElement("title",{id:this.id},p),n.createElement("path",{d:u}))}},p.displayName=e,p.defaultProps={color:"currentColor",size:o.sm,noVerticalAlign:!1},p}},9210:(e,t,r)=>{"use strict";t.e2={name:"SecurityIcon",height:1024,width:896,svgPath:"M861.5,0 L34.5,0 C15.4,0 0,14.3 0,32 L0,452.1 C0,768 387.7,1024 448.5,1024 C509.3,1024 896,768 896,452.2 L896,32 C896,14.3 880.6,0 861.5,0 Z M490.7,768 L405.3,768 C393.5,767.8 384.2,757.5 384,744.7 L384,663.3 C384.2,650.5 393.6,640.3 405.3,640 L490.7,640 C502.5,640.2 511.8,650.5 512,663.3 L512,744.7 L512.1,744.7 C511.8,757.5 502.4,767.8 490.7,768 Z M543.9,162.7 L517.2,514.4 C515.8,530.9 502,544 485.3,544 L410.6,544 C394,544 380.1,531.2 378.7,514.7 L352.1,163 C350.5,144.3 365.3,128.3 384,128.3 L512,128 C530.7,128 545.4,144 543.9,162.7 Z",yOffset:0,xOffset:0},t.J8=r(5183).createIcon(t.e2),t.ZP=t.J8},448:function(e,t,r){"use strict";var a,n=this&&this.__extends||(a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},a(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=l(r(3264)),c=r(8877),s=r(8595),u=l(r(4184)),p=l(r(5697));r(9998);var m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.createColumns=function(){var e=t.props,r=e.colSize,a=e.isDark;return o([],Array(r),!0).map((function(){return{title:i.default.createElement(s.Skeleton,{isDark:a,size:s.SkeletonSize.sm})}}))},t.getColumns=function(){var e=t.props,r=e.paddingColumnSize,a=e.columns;return t.newArray(r).map((function(){return""})).concat(a||t.createColumns())},t.createRows=function(){var e=t.props,r=e.colSize,a=e.rowSize,n=e.columns,o=e.paddingColumnSize,l=e.isDark,c=n?n.length:r;return t.newArray(a).map((function(){return{disableSelection:!0,cells:t.newArray(o).map((function(){return""})).concat(t.newArray(c).map((function(){return{title:i.default.createElement(s.Skeleton,{isDark:l,size:s.SkeletonSize.md})}})))}}))},t.selectVariant=function(){return t.props.hasRadio?(null===c.RowSelectVariant||void 0===c.RowSelectVariant?void 0:c.RowSelectVariant.radio)||"radio":(null===c.RowSelectVariant||void 0===c.RowSelectVariant?void 0:c.RowSelectVariant.checkbox)||"checkbox"},t.newArray=function(e){return o([],Array(e),!0)},t}return n(t,e),t.prototype.render=function(){var e=this.props,t=e.canSelectAll,r=e.isSelectable,a=e.sortBy,n=e.variant,o=e.isDark;return i.default.createElement(c.Table,{className:(0,u.default)({"ins-c-skeleton-table__dark":o}),cells:this.getColumns(),rows:this.createRows(),sortBy:a,"aria-label":"Loading",onSelect:r,selectVariant:r?this.selectVariant():null,canSelectAll:t,variant:n},i.default.createElement(c.TableHeader,null),i.default.createElement(c.TableBody,null))},t}(i.default.Component);m.propTypes={colSize:p.default.number,rowSize:p.default.number,columns:p.default.array,paddingColumnSize:p.default.number,sortBy:p.default.shape({index:p.default.number,direction:p.default.oneOf(["asc","desc"])}),isSelectable:p.default.bool,canSelectAll:p.default.bool,hasRadio:p.default.bool,variant:p.default.string,isDark:p.default.bool},m.defaultProps={rowSize:0,paddingColumnSize:0,canSelectAll:!1,isSelectable:!1,hasRadio:!1,variant:null,isDark:!1},t.default=m},3754:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(3264);const n=r.n(a)().createContext("light")},6350:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var a=r(3264),n=r.n(a),o=r(4184),l=r.n(o),i=r(4494),c=r(3754),s=function(){return s=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},u=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))};const p=(0,i.$j)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,r=e.params,a=void 0===r?{}:r,o=e.children,i=e.className,p=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["path","params","children","className"]),m=function(){var e,r,n;if(null===(n=null===(r=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===r?void 0:r.$internal)||void 0===n?void 0:n.store){var o=window.insights.chrome.$internal.store.getState();if(t&&o)return t.split("/").reduce((function(e,t){var r,n;return 0===t.indexOf(":")?e.dynamic=s(s({},e.dynamic),((r={})["data-".concat((n=t.substr(1),n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=a[t.substr(1)],r)):e.staticPart=u(u([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[o.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),d=m.dynamic,f=m.staticPart;return n().createElement(c.Z.Consumer,null,(function(e){var t;void 0===e&&(e="light");var r=l()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:n().createElement("section",s({},p,d,{"page-type":f.join("-"),className:"".concat(l()(i,"pf-l-page__main-section pf-c-page__main-section")," ").concat(r)}),n().Children.map(o,(function(e){return n().cloneElement(e,{className:"pf-m-dark"})}))),light:n().createElement("section",s({},p,d,{"page-type":f.join("-"),className:"".concat(l()(i,"pf-l-page__main-section pf-c-page__main-section"))}),o)}[e]}))}))},8716:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(3264),n=r.n(a),o=r(4184),l=r.n(o),i=r(3754),c=function(){return c=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)};const s=function(e){var t=e.className,r=e.children,a=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["className","children"]),o=l()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return n().createElement(i.Z.Consumer,null,(function(e){var t,i;void 0===e&&(e="light");var s=l()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((i={})["pf-m-light"]="light"===e,i));return n().createElement("section",c({},a,{className:"".concat(o," ").concat(s),"widget-type":"InsightsPageHeader"}),r)}))}},9173:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var a=r(3264),n=r.n(a),o=r(4184),l=r.n(o),i=r(943);const c=function(e){var t=e.className,r=e.title,a=l()(t);return n().createElement(i.Title,{headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},r)}},8595:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Skeleton:()=>u,SkeletonSize:()=>s,default:()=>u});var a=r(3264),n=r.n(a),o=r(943),l=r(4184),i=r.n(l),c=function(){return c=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)},s={xs:"xs",sm:"sm",md:"md",lg:"lg"};const u=function(e){var t,r=e.size,a=void 0===r?s.md:r,l=e.isDark,u=void 0!==l&&l,p=e.className,m=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["size","isDark","className"]);return n().createElement(o.Skeleton,c({className:i()("ins-c-skeleton","ins-c-skeleton__".concat(a),(t={},t["ins-m-dark"]=u,t),p)},m))}},4258:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>T});var a=r(3264),n=r.n(a),o=r(6350),l=r(8716),i=r(9173),c=r(8097),s=r(885),u=r(5697),p=r.n(u),m={critical:{label:"Critical",iconColor:"var(--pf-global--danger-color--100)",isInShieldSet:!0},important:{label:"Important",iconColor:"var(--pf-global--palette--orange-300)",isInShieldSet:!0},moderate:{label:"Moderate",iconColor:"var(--pf-global--warning-color--100)",isInShieldSet:!0},low:{label:"Low",iconColor:"var(--pf-global--Color--200)",isInShieldSet:!0},unknown:{label:"Unknown"}},d=r(9210),f=r(6530),h=function(e){var t=e.count;return n().createElement("div",{className:"shield-set"},Object.entries(m).map((function(e){var r=(0,s.Z)(e,2),a=r[0],o=r[1];return o.isInShieldSet&&(0===t[a]?n().createElement(f.Link,{key:a,className:"disabled-shield"},n().createElement(d.ZP,{style:{color:"var(--pf-global--disabled-color--200)"}}),n().createElement("span",null,"0")):n().createElement(f.Link,{key:a},n().createElement(d.ZP,{style:{color:o.iconColor}}),n().createElement("span",null,t[a])))})))};h.propTypes={count:p().shape({critical:p().number,important:p().number,moderate:p().number,low:p().number}).isRequired};const y=h;var v=r(943),g=r(400);const b=(0,g.IU)({name:"QuestionIcon",height:512,width:384,svgPath:"M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z",yOffset:0,xOffset:0}),w=(0,g.IU)({name:"SecurityIcon",height:1024,width:896,svgPath:"M861.5,0 L34.5,0 C15.4,0 0,14.3 0,32 L0,452.1 C0,768 387.7,1024 448.5,1024 C509.3,1024 896,768 896,452.2 L896,32 C896,14.3 880.6,0 861.5,0 Z M490.7,768 L405.3,768 C393.5,767.8 384.2,757.5 384,744.7 L384,663.3 C384.2,650.5 393.6,640.3 405.3,640 L490.7,640 C502.5,640.2 511.8,650.5 512,663.3 L512,744.7 L512.1,744.7 C511.8,757.5 502.4,767.8 490.7,768 Z M543.9,162.7 L517.2,514.4 C515.8,530.9 502,544 485.3,544 L410.6,544 C394,544 380.1,531.2 378.7,514.7 L352.1,163 C350.5,144.3 365.3,128.3 384,128.3 L512,128 C530.7,128 545.4,144 543.9,162.7 Z",yOffset:0,xOffset:0});var S="#737679",O="#a30000",C="#f0ab00",E="#ec7a08",k="This rating is given to flaws that could be easily exploited by a         remote unauthenticated attacker and lead to system compromise         (arbitrary code execution) without requiring user interaction. These         are the types of vulnerabilities that can be exploited by worms.         Flaws that require an authenticated remote user, a local user,         or an unlikely configuration are not classed as Critical impact.",_="This rating is given to flaws that can easily compromise the     confidentiality, integrity, or availability of resources. These are the     types of vulnerabilities that allow local users to gain privileges, allow     unauthenticated remote users to view resources that should otherwise be     protected by authentication, allow authenticated remote users to execute     arbitrary code, or allow remote users to cause a denial of service.",L="This rating is given to flaws that may be more difficult to exploit         but could still lead to some compromise of the confidentiality,         integrity, or availability of resources, under certain circumstances.         These are the types of vulnerabilities that could have had a Critical         impact or Important impact but are less easily exploited based on a         technical evaluation of the flaw, or affect unlikely configurations.",x="This rating is given to all other issues that have a security         impact. These are the types of vulnerabilities that are believed to         require unlikely circumstances to be able to be exploited, or where         a successful exploit would give minimal consequences.",z={Critical:{title:"Critical",color:O,message:k},4:{title:"Critical",color:O,message:k},High:{title:"High",color:E,message:_},Important:{title:"Important",color:E,message:_},3:{title:"High",color:E,message:_},Medium:{title:"Medium",color:C,message:L},Moderate:{title:"Moderate",color:C,message:L},2:{title:"Medium",color:C,message:L},Low:{title:"Low",color:S,message:x},1:{title:"Low",color:S,message:x},Unknown:{title:"Unknown",color:S,message:"Red Hat Product Security has determined that this vulnerability does         not impact Red Hat products."}},P=function(){return P=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},P.apply(this,arguments)},j=function(e){var t,r=e.impact,a=e.hasLabel,o=e.hasTooltip,l=e.size,i=null!==(t=null==z?void 0:z[r])&&void 0!==t?t:z.Unknown,c={"aria-hidden":"false","aria-label":i.title,color:i.color,size:l},s="Unknown"===i.title?n().createElement(b,P({},c)):n().createElement(w,P({},c)),u=n().createElement("span",null,s," ",a&&i.title);return n().createElement("span",null,o?n().createElement(v.Tooltip,{content:n().createElement("div",null,i.message),position:"bottom"},u):u)};j.defaultProps={impact:"N/A",hasLabel:!1,size:"sm",hasTooltip:!0},j.propTypes={impact:p().oneOfType([p().string,p().number]),hasLabel:p().bool,size:p().string,label:p().bool,hasTooltip:p().bool};const I=j;var A=function(e){var t=e.match;return n().createElement(a.Fragment,null,n().createElement(l.Z,null,n().createElement(v.Breadcrumb,null,n().createElement(v.BreadcrumbItem,null,n().createElement(f.Link,{to:"/"},"Vulnerability")),n().createElement(v.BreadcrumbItem,null,n().createElement(f.Link,{to:"/cves"},"CVEs")),n().createElement(v.BreadcrumbItem,null,t.params.cveId)),n().createElement(i.Z,{title:t.params.cveId}),"Shield example: ",n().createElement(I,{impact:"Critical",hasLabel:!0}),n().createElement("br",null),"Shield set example:",n().createElement(y,{count:{critical:1,important:2,moderate:0,low:4}})),n().createElement(o.Z,null,n().createElement(c.Z,null)))};A.propTypes={match:p().object};const T=A},8097:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(3264),n=r.n(a),o=r(448),l=r.n(o);const i=function(){return n().createElement(l(),{colSize:6,rowSize:20})}},4184:(e,t)=>{var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var l=n.apply(null,r);l&&e.push(l)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)a.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},9998:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=../sourcemaps/CveDetailPage.5cc4a3af7b58adb098fddc807226d28a.js.map