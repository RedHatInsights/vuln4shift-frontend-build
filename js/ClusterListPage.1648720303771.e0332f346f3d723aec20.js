/*! For license information please see ClusterListPage.1648720303771.e0332f346f3d723aec20.js.LICENSE.txt */
(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[53],{448:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=i(n(3264)),c=n(8877),s=n(9573),u=i(n(4184)),f=i(n(5697));n(9998);var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.createColumns=function(){var e=t.props,n=e.colSize,r=e.isDark;return o([],Array(n),!0).map((function(){return{title:l.default.createElement(s.Skeleton,{isDark:r,size:s.SkeletonSize.sm})}}))},t.getColumns=function(){var e=t.props,n=e.paddingColumnSize,r=e.columns;return t.newArray(n).map((function(){return""})).concat(r||t.createColumns())},t.createRows=function(){var e=t.props,n=e.colSize,r=e.rowSize,a=e.columns,o=e.paddingColumnSize,i=e.isDark,c=a?a.length:n;return t.newArray(r).map((function(){return{disableSelection:!0,cells:t.newArray(o).map((function(){return""})).concat(t.newArray(c).map((function(){return{title:l.default.createElement(s.Skeleton,{isDark:i,size:s.SkeletonSize.md})}})))}}))},t.selectVariant=function(){return t.props.hasRadio?(null===c.RowSelectVariant||void 0===c.RowSelectVariant?void 0:c.RowSelectVariant.radio)||"radio":(null===c.RowSelectVariant||void 0===c.RowSelectVariant?void 0:c.RowSelectVariant.checkbox)||"checkbox"},t.newArray=function(e){return o([],Array(e),!0)},t}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.canSelectAll,n=e.isSelectable,r=e.sortBy,a=e.variant,o=e.isDark;return l.default.createElement(c.Table,{className:(0,u.default)({"ins-c-skeleton-table__dark":o}),cells:this.getColumns(),rows:this.createRows(),sortBy:r,"aria-label":"Loading",onSelect:n,selectVariant:n?this.selectVariant():null,canSelectAll:t,variant:a},l.default.createElement(c.TableHeader,null),l.default.createElement(c.TableBody,null))},t}(l.default.Component);p.propTypes={colSize:f.default.number,rowSize:f.default.number,columns:f.default.array,paddingColumnSize:f.default.number,sortBy:f.default.shape({index:f.default.number,direction:f.default.oneOf(["asc","desc"])}),isSelectable:f.default.bool,canSelectAll:f.default.bool,hasRadio:f.default.bool,variant:f.default.string,isDark:f.default.bool},p.defaultProps={rowSize:0,paddingColumnSize:0,canSelectAll:!1,isSelectable:!1,hasRadio:!1,variant:null,isDark:!1},t.default=p},3754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3264);const a=n.n(r)().createContext("light")},6350:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(3264),a=n.n(r),o=n(4184),i=n.n(o),l=n(4494),c=n(3754),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)},u=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};const f=(0,l.$j)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,n=e.params,r=void 0===n?{}:n,o=e.children,l=e.className,f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["path","params","children","className"]),p=function(){var e,n,a;if(null===(a=null===(n=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===n?void 0:n.$internal)||void 0===a?void 0:a.store){var o=window.insights.chrome.$internal.store.getState();if(t&&o)return t.split("/").reduce((function(e,t){var n,a;return 0===t.indexOf(":")?e.dynamic=s(s({},e.dynamic),((n={})["data-".concat((a=t.substr(1),a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=r[t.substr(1)],n)):e.staticPart=u(u([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[o.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),d=p.dynamic,m=p.staticPart;return a().createElement(c.Z.Consumer,null,(function(e){var t;void 0===e&&(e="light");var n=i()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:a().createElement("section",s({},f,d,{"page-type":m.join("-"),className:"".concat(i()(l,"pf-l-page__main-section pf-c-page__main-section")," ").concat(n)}),a().Children.map(o,(function(e){return a().cloneElement(e,{className:"pf-m-dark"})}))),light:a().createElement("section",s({},f,d,{"page-type":m.join("-"),className:"".concat(i()(l,"pf-l-page__main-section pf-c-page__main-section"))}),o)}[e]}))}))},8716:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(3264),a=n.n(r),o=n(4184),i=n.n(o),l=n(3754),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)};const s=function(e){var t=e.className,n=e.children,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children"]),o=i()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return a().createElement(l.Z.Consumer,null,(function(e){var t,l;void 0===e&&(e="light");var s=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((l={})["pf-m-light"]="light"===e,l));return a().createElement("section",c({},r,{className:"".concat(o," ").concat(s),"widget-type":"InsightsPageHeader"}),n)}))}},9173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(3264),a=n.n(r),o=n(4184),i=n.n(o),l=n(943);const c=function(e){var t=e.className,n=e.title,r=i()(t);return a().createElement(l.Title,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"},n)}},6455:(e,t,n)=>{"use strict";n.d(t,{i:()=>s,Z:()=>u});var r=n(3264),a=n.n(r),o=n(943),i=n(4184),l=n.n(i),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},s={xs:"xs",sm:"sm",md:"md",lg:"lg"};const u=function(e){var t,n=e.size,r=void 0===n?s.md:n,i=e.isDark,u=void 0!==i&&i,f=e.className,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["size","isDark","className"]);return a().createElement(o.Skeleton,c({className:l()("ins-c-skeleton","ins-c-skeleton__".concat(r),(t={},t["ins-m-dark"]=u,t),f)},p))}},9573:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.Z,Skeleton:()=>r.Z,SkeletonSize:()=>r.i});var r=n(6455)},5195:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(3264),a=n.n(r),o=n(943),i=n(6350),l=n(8716),c=n(9173),s=n(8097),u=n(9656);const f=function(){return a().createElement(r.Fragment,null,a().createElement(l.Z,null,a().createElement(c.Z,{title:"Vulnerable clusters",className:"pf-u-mb-sm"}),a().createElement(o.Alert,{variant:o.AlertVariant.info,isInline:!0,className:"pf-u-mt-md",title:"Vulnerability information applies to OCP4.8+ version only"}),a().createElement(u.rU,{to:"/clusters/ce7e3b0d-216e-410d-9111-3e1a06ff409e"},"Go to cluster detail page")),a().createElement(i.Z,null,a().createElement(s.Z,null)))}},8097:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(3264),a=n.n(r),o=n(448),i=n.n(o);const l=function(){return a().createElement(i(),{colSize:6,rowSize:20})}},4184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},9998:(e,t,n)=>{"use strict";n.r(t)},9656:(e,t,n)=>{"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n(5977),o=r(n(3264)),i=n(71);n(5697),n(5298);var l=r(n(2177));function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}function u(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(a[n]=e[n]);return a}(function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).history=i.createBrowserHistory(t.props),t}s(t,e),t.prototype.render=function(){return o.createElement(a.Router,{history:this.history,children:this.props.children})}})(o.Component),function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).history=i.createHashHistory(t.props),t}s(t,e),t.prototype.render=function(){return o.createElement(a.Router,{history:this.history,children:this.props.children})}}(o.Component);var f=function(e,t){return"function"==typeof e?e(t):e},p=function(e,t){return"string"==typeof e?i.createLocation(e,null,null,t):e},d=function(e){return e},m=o.forwardRef;void 0===m&&(m=d);var y=m((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,i=u(e,["innerRef","navigate","onClick"]),l=i.target,s=c({},i,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||l&&"_self"!==l||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return s.ref=d!==m&&t||n,o.createElement("a",s)})),v=m((function(e,t){var n=e.component,r=void 0===n?y:n,i=e.replace,s=e.to,v=e.innerRef,h=u(e,["component","replace","to","innerRef"]);return o.createElement(a.__RouterContext.Consumer,null,(function(e){e||l(!1);var n=e.history,a=p(f(s,e.location),e.location),u=a?n.createHref(a):"",y=c({},h,{href:u,navigate:function(){var t=f(s,e.location);(i?n.replace:n.push)(t)}});return d!==m?y.ref=t||v:y.innerRef=v,o.createElement(r,y)}))})),h=function(e){return e},g=o.forwardRef;void 0===g&&(g=h);g((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,i=e.activeClassName,s=void 0===i?"active":i,d=e.activeStyle,m=e.className,y=e.exact,b=e.isActive,w=e.location,O=e.sensitive,S=e.strict,_=e.style,k=e.to,j=e.innerRef,E=u(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.createElement(a.__RouterContext.Consumer,null,(function(e){e||l(!1);var n=w||e.location,i=p(f(k,n),n),u=i.pathname,C=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),P=C?a.matchPath(n.pathname,{path:C,exact:y,sensitive:O,strict:S}):null,A=!!(b?b(P,n):P),x=A?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(m,s):m,R=A?c({},_,{},d):_,z=c({"aria-current":A&&r||null,className:x,style:R,to:i},E);return h!==g?z.ref=t||j:z.innerRef=j,o.createElement(v,z)}))}));t.rU=v},5298:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=function(e,t){}}}]);
//# sourceMappingURL=../sourcemaps/ClusterListPage.92c4ce14db9b8e262c45c017f033b860.js.map