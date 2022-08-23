"use strict";(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[2641],{6899:function(e,n,t){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var r=l(t(3264)),a=t(9371);n.default=function(e){var n=e.date,t=e.type,l=void 0===t?"relative":t,i=e.extraTitle,o=e.tooltipProps,c=n instanceof Date?n:new Date(n),u=null==n||"Invalid Date"===c.toString()?"invalid":l;return r.default.createElement(r.default.Fragment,null,(0,a.dateByType)(u,o,i)(c))}},9371:function(e,n,t){var l=this&&this.__assign||function(){return l=Object.assign||function(e){for(var n,t=1,l=arguments.length;t<l;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},l.apply(this,arguments)},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.dateByType=n.dateStringByType=n.addTooltip=void 0;var a=r(t(3264)),i=t(8071),o=36e5,c=24*o,u=30*c,s=365*c,m=function(e,n){return"".concat(e," ").concat(e>1?"".concat(n,"s"):n," ago")},d=[{rightBound:1/0,description:function(e){return m(Math.round(e/s),"year")}},{rightBound:s,description:function(e){return m(Math.round(e/u),"month")}},{rightBound:u,description:function(e){return m(Math.round(e/c),"day")}},{rightBound:c,description:function(e){return m(Math.round(e/o),"hour")}},{rightBound:o,description:function(e){return m(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],f=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()};n.addTooltip=function(e,n,t,r){return void 0===r&&(r=""),a.default.createElement(i.Tooltip,l({},t,{content:a.default.createElement("div",null,r,e)}),n)},n.dateStringByType=function(e){return{exact:function(e){return f(e)+" UTC"},onlyDate:function(e){return f(e).slice(0,-6)},relative:function(e){return d.reduce((function(n,t){return t.rightBound>Date.now()-e.getTime()?t.description(Date.now()-e.getTime()):n}),f(e))},invalid:function(){return"Invalid date"}}[e]},n.dateByType=function(e,t,l){return{exact:function(t){return(0,n.dateStringByType)(e)(t)},onlyDate:function(t){return(0,n.dateStringByType)(e)(t)},relative:function(r){return(0,n.addTooltip)((0,n.dateStringByType)("exact")(r),a.default.createElement("span",null,(0,n.dateStringByType)(e)(r)),t,l)},invalid:function(){return"Invalid date"}}[e]}},9767:(e,n,t)=>{t.d(n,{t:()=>E,Z:()=>P});var l=t(4942),r=t(7462),a=t(3366),i=t(5664),o=t(448),c=t.n(o),u=t(3264),s=t.n(u),m=t(4184),d=t.n(m),f=function(){return f=Object.assign||function(e){for(var n,t=1,l=arguments.length;t<l;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},f.apply(this,arguments)};const p=function(e){var n,t=e.centered,l=e.className,r=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)n.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(t[l[r]]=e[l[r]])}return t}(e,["centered","className"]),a=d()("ins-c-spinner",((n={})["ins-m-center"]=t,n),l);return s().createElement("div",f({role:"status",className:a},r),s().createElement("span",{className:"pf-u-screen-reader"},"Loading..."))};var b=t(5697),h=t.n(b),v=t(3193),y=t(8071),g=["isLoading","variant","children","size"];function S(){var e="/home/travis/build/RedHatInsights/vuln4shift-frontend/src/Components/PresentationalComponents/WithLoader.js",n=new Function("return this")(),t="__coverage__",l=n[t]||(n[t]={});l[e]&&"e60a8df2cffff972f364e9f3f15492bac71c76f9"===l[e].hash||(l[e]={path:"/home/travis/build/RedHatInsights/vuln4shift-frontend/src/Components/PresentationalComponents/WithLoader.js",statementMap:{0:{start:{line:12,column:26},end:{line:19,column:1}},1:{start:{line:21,column:19},end:{line:46,column:1}},2:{start:{line:22,column:2},end:{line:43,column:3}},3:{start:{line:23,column:4},end:{line:42,column:5}},4:{start:{line:25,column:8},end:{line:25,column:47}},5:{start:{line:27,column:8},end:{line:27,column:44}},6:{start:{line:29,column:8},end:{line:29,column:75}},7:{start:{line:31,column:8},end:{line:31,column:54}},8:{start:{line:33,column:8},end:{line:39,column:10}},9:{start:{line:41,column:8},end:{line:41,column:70}},10:{start:{line:45,column:2},end:{line:45,column:18}},11:{start:{line:48,column:0},end:{line:54,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:21,column:19},end:{line:21,column:20}},loc:{start:{line:21,column:73},end:{line:46,column:1}},line:21}},branchMap:{0:{loc:{start:{line:22,column:2},end:{line:43,column:3}},type:"if",locations:[{start:{line:22,column:2},end:{line:43,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:22},1:{loc:{start:{line:23,column:4},end:{line:42,column:5}},type:"switch",locations:[{start:{line:24,column:6},end:{line:25,column:47}},{start:{line:26,column:6},end:{line:27,column:44}},{start:{line:28,column:6},end:{line:29,column:75}},{start:{line:30,column:6},end:{line:31,column:54}},{start:{line:32,column:6},end:{line:39,column:10}},{start:{line:40,column:6},end:{line:41,column:70}}],line:23},2:{loc:{start:{line:35,column:18},end:{line:35,column:41}},type:"binary-expr",locations:[{start:{line:35,column:18},end:{line:35,column:22}},{start:{line:35,column:26},end:{line:35,column:41}}],line:35},3:{loc:{start:{line:41,column:31},end:{line:41,column:54}},type:"binary-expr",locations:[{start:{line:41,column:31},end:{line:41,column:35}},{start:{line:41,column:39},end:{line:41,column:54}}],line:41}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0},f:{0:0},b:{0:[0,0],1:[0,0,0,0,0,0],2:[0,0],3:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"e60a8df2cffff972f364e9f3f15492bac71c76f9"});var r=l[e];return S=function(){return r},r}function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}S();var E=(S().s[0]++,{spinner:"spinner",table:"table",compactTable:"compactTable",rectangle:"rectangle",inlineSkeleton:"inlineSkeleton",skeleton:"skeleton"});S().s[1]++;var O=function(e){var n,t,l=e.isLoading,o=e.variant,u=e.children,m=e.size,d=function(e,n){if(null==e)return{};var t,l,r=(0,a.Z)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,g);if(S().f[0]++,S().s[2]++,l)switch(S().b[0][0]++,S().s[3]++,o){case E.spinner:return S().b[1][0]++,S().s[4]++,s().createElement(p,(0,r.Z)({centered:!0},d));case E.table:return S().b[1][1]++,S().s[5]++,s().createElement(c(),d);case E.compactTable:return S().b[1][2]++,S().s[6]++,s().createElement(c(),(0,r.Z)({variant:v.TableVariant.compact},d));case E.rectangle:return S().b[1][3]++,S().s[7]++,s().createElement(i.Z,(0,r.Z)({shape:"square"},d));case E.inlineSkeleton:return S().b[1][4]++,S().s[8]++,s().createElement(y.Skeleton,(0,r.Z)({size:null!==(S().b[2][0]++,n=m)&&void 0!==n?n:(S().b[2][1]++,i.i.lg)},d,{style:C({display:"inline-block"},d.style)}));default:return S().b[1][5]++,S().s[9]++,s().createElement(i.Z,(0,r.Z)({size:null!==(S().b[3][0]++,t=m)&&void 0!==t?t:(S().b[3][1]++,i.i.lg)},d))}else S().b[0][1]++;return S().s[10]++,u};S().s[11]++,O.propTypes={isLoading:h().bool,variant:h().oneOf(Object.keys(E)),style:h().object,children:h().node,size:h().string};const P=O},9171:(e,n,t)=>{t.r(n),t.d(n,{default:()=>I});var l=t(3264),r=t.n(l),a=t(4748),i=t(8071),o=t(885),c=t(8100),u=t(4494),s=t(7534),m=t(971),d=t(6530),f=t(6743),p=t(5084),b=t(5862),h=t(9499),v=t(4724),y=t(1341),g=t(7903),S=t(3459),_=t(2245);function C(){var e="/home/travis/build/RedHatInsights/vuln4shift-frontend/src/Components/SmartComponents/ClusterDetail/ClusterDetailTable.js",n=new Function("return this")(),t="__coverage__",l=n[t]||(n[t]={});l[e]&&"3387ef46ba9cc55b5823cc6805d1f41073bafd51"===l[e].hash||(l[e]={path:"/home/travis/build/RedHatInsights/vuln4shift-frontend/src/Components/SmartComponents/ClusterDetail/ClusterDetailTable.js",statementMap:{0:{start:{line:31,column:27},end:{line:122,column:1}},1:{start:{line:32,column:16},end:{line:32,column:31}},2:{start:{line:34,column:48},end:{line:36,column:3}},3:{start:{line:35,column:32},end:{line:35,column:50}},4:{start:{line:38,column:16},end:{line:44,column:4}},5:{start:{line:46,column:54},end:{line:46,column:58}},6:{start:{line:48,column:43},end:{line:48,column:79}},7:{start:{line:50,column:19},end:{line:54,column:3}},8:{start:{line:56,column:18},end:{line:102,column:3}},9:{start:{line:105,column:4},end:{line:105,column:70}},10:{start:{line:107,column:2},end:{line:121,column:4}},11:{start:{line:111,column:30},end:{line:111,column:62}},12:{start:{line:119,column:28},end:{line:119,column:50}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:31,column:27},end:{line:31,column:28}},loc:{start:{line:31,column:33},end:{line:122,column:1}},line:31},1:{name:"(anonymous_1)",decl:{start:{line:35,column:4},end:{line:35,column:5}},loc:{start:{line:35,column:32},end:{line:35,column:50}},line:35},2:{name:"(anonymous_2)",decl:{start:{line:111,column:21},end:{line:111,column:22}},loc:{start:{line:111,column:30},end:{line:111,column:62}},line:111},3:{name:"(anonymous_3)",decl:{start:{line:119,column:16},end:{line:119,column:17}},loc:{start:{line:119,column:28},end:{line:119,column:50}},line:119}},branchMap:{0:{loc:{start:{line:117,column:18},end:{line:117,column:72}},type:"cond-expr",locations:[{start:{line:117,column:41},end:{line:117,column:59}},{start:{line:117,column:62},end:{line:117,column:72}}],line:117}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0,2:0,3:0},b:{0:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"3387ef46ba9cc55b5823cc6805d1f41073bafd51"});var r=l[e];return C=function(){return r},r}C(),C().s[0]++;const E=function(){C().f[0]++;var e=(C().s[1]++,(0,d.useRouteMatch)()),n=(C().s[2]++,(0,u.v9)((function(e){var n=e.ClusterDetailStore;return C().f[1]++,C().s[3]++,n}))),t=n.cves,l=n.isTableLoading,a=n.meta,i=n.error,E=(C().s[4]++,(0,f.eh)({allowedParams:c.wG,initialParams:a,additionalParam:e.params.clusterId,fetchAction:s.FP,changeParamsAction:s.W9})),O=(C().s[5]++,a),P=O.search,j=O.cvss_score,w=O.severity,D=O.published,T=(C().s[6]++,(0,p.MG)(j)),Z=(0,o.Z)(T,2),M=Z[0],x=Z[1],I=(C().s[7]++,(0,f.S)(c.l3,_.V2,e.params.clusterId)),L=(C().s[8]++,[(0,b.Z)({urlParam:"search",label:"CVE",placeholder:"Search ID or description",value:P,apply:E,chipLabel:"Search term"}),(0,y.Z)({urlParam:"published",label:"Publish date",value:D,items:c.ab,placeholder:"Filter by publish date",apply:E,chipLabel:"Publish date"}),(0,v.Z)({urlParam:"severity",label:"Severity",value:w,items:c.og,placeholder:"Filter by severity",apply:E,chipLabel:"Severity"}),(0,h.Z)({urlParam:"cvss_score",label:"CVSS score",minMaxLabels:{min:"Min CVSS",max:"Max CVSS"},range:{min:0,max:10},value:{min:M,max:x},placeholder:"Filter by CVSS score range",apply:E,chipLabel:"CVSS base score"})]),B=(C().s[9]++,(0,p.KW)(L,a,c.LH,E)),k=(0,o.Z)(B,3),H=k[0],V=k[1],F=k[2];return C().s[10]++,r().createElement(g.Z,{isLoading:l,isExpandable:!0,rows:t.map((function(e){return C().f[2]++,C().s[11]++,(0,c.Y7)(e)})),columns:c.Jy,filterConfig:H,activeFiltersConfig:V,meta:a,error:i,emptyState:F?(C().b[0][0]++,r().createElement(S.Z,null)):(C().b[0][1]++,r().createElement(m.Z,null)),apply:E,onExport:function(e){return C().f[3]++,C().s[12]++,I(e,a)}})};var O=t(123),P=t(9173),j=t(6899),w=t.n(j),D=t(9767);function T(){var e="/home/travis/build/RedHatInsights/vuln4shift-frontend/src/Components/SmartComponents/ClusterDetail/ClusterDetailPageHeader.js",n=new Function("return this")(),t="__coverage__",l=n[t]||(n[t]={});l[e]&&"ab5c8a92f8de41ff514cbc42853d29b5d938597f"===l[e].hash||(l[e]={path:"/home/travis/build/RedHatInsights/vuln4shift-frontend/src/Components/SmartComponents/ClusterDetail/ClusterDetailPageHeader.js",statementMap:{0:{start:{line:15,column:32},end:{line:84,column:1}},1:{start:{line:16,column:16},end:{line:16,column:31}},2:{start:{line:17,column:19},end:{line:17,column:32}},3:{start:{line:19,column:39},end:{line:21,column:3}},4:{start:{line:20,column:32},end:{line:20,column:50}},5:{start:{line:23,column:2},end:{line:25,column:9}},6:{start:{line:24,column:4},end:{line:24,column:58}},7:{start:{line:28,column:4},end:{line:36,column:17}},8:{start:{line:39,column:2},end:{line:83,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:15,column:32},end:{line:15,column:33}},loc:{start:{line:15,column:38},end:{line:84,column:1}},line:15},1:{name:"(anonymous_1)",decl:{start:{line:20,column:4},end:{line:20,column:5}},loc:{start:{line:20,column:32},end:{line:20,column:50}},line:20},2:{name:"(anonymous_2)",decl:{start:{line:23,column:12},end:{line:23,column:13}},loc:{start:{line:23,column:18},end:{line:25,column:3}},line:23}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0,1:0,2:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ab5c8a92f8de41ff514cbc42853d29b5d938597f"});var r=l[e];return T=function(){return r},r}T(),T().s[0]++;const Z=function(){T().f[0]++;var e=(T().s[1]++,(0,d.useRouteMatch)()),n=(T().s[2]++,(0,u.I0)()),t=(T().s[3]++,(0,u.v9)((function(e){var n=e.ClusterDetailStore;return T().f[1]++,T().s[4]++,n}))),a=t.cluster,o=t.isDetailLoading;T().s[5]++,(0,l.useEffect)((function(){T().f[2]++,T().s[6]++,n((0,s.ZH)(e.params.clusterId))}),[]);var c=(T().s[7]++,r().createElement(D.Z,{variant:D.t.inlineSkeleton,width:"300px",fontSize:"lg",isLoading:o,style:{verticalAlign:-4}},a.display_name));return T().s[8]++,r().createElement(O.Z,null,r().createElement(i.Breadcrumb,{className:"pf-u-mb-md"},r().createElement(i.BreadcrumbItem,null,r().createElement(d.Link,{to:"/"},"Vulnerability")),r().createElement(i.BreadcrumbItem,null,r().createElement(d.Link,{to:"/clusters"},"Clusters")),r().createElement(i.BreadcrumbItem,null,r().createElement(D.Z,{variant:D.t.inlineSkeleton,width:"200px",fontSize:"sm",isLoading:o,style:{verticalAlign:-4}},a.display_name))),r().createElement(P.Z,{title:c,className:"pf-u-mb-sm"}),"UUID: ",r().createElement(D.Z,{variant:D.t.inlineSkeleton,width:"300px",fontSize:"sm",isLoading:o,style:{verticalAlign:-4}},e.params.clusterId),r().createElement("br",null),"Last seen: ",r().createElement(D.Z,{variant:D.t.inlineSkeleton,width:"200px",fontSize:"sm",isLoading:o,style:{verticalAlign:-4}},r().createElement(w(),{date:a.last_seen,type:"exact"})))};var M=t(5670);function x(){var e="/home/travis/build/RedHatInsights/vuln4shift-frontend/src/Components/SmartComponents/ClusterDetail/ClusterDetailPage.js",n=new Function("return this")(),t="__coverage__",l=n[t]||(n[t]={});l[e]&&"621f4432cc54cfd3b6b0bc441fa094555a6b6b94"===l[e].hash||(l[e]={path:"/home/travis/build/RedHatInsights/vuln4shift-frontend/src/Components/SmartComponents/ClusterDetail/ClusterDetailPage.js",statementMap:{0:{start:{line:9,column:26},end:{line:25,column:1}},1:{start:{line:10,column:20},end:{line:10,column:79}},2:{start:{line:10,column:60},end:{line:10,column:78}},3:{start:{line:12,column:2},end:{line:24,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:9,column:26},end:{line:9,column:27}},loc:{start:{line:9,column:32},end:{line:25,column:1}},line:9},1:{name:"(anonymous_1)",decl:{start:{line:10,column:32},end:{line:10,column:33}},loc:{start:{line:10,column:60},end:{line:10,column:78}},line:10}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"621f4432cc54cfd3b6b0bc441fa094555a6b6b94"});var r=l[e];return x=function(){return r},r}x(),x().s[0]++;const I=function(){x().f[0]++;var e=(x().s[1]++,(0,u.v9)((function(e){var n=e.ClusterDetailStore;return x().f[1]++,x().s[2]++,n}))).error;return x().s[3]++,r().createElement(M.Z,{error:e},r().createElement(Z,null),r().createElement(a.Z,null,r().createElement(i.TextContent,null,r().createElement(i.Text,{component:i.TextVariants.h2,className:"pf-u-mb-md"},"CVEs")),r().createElement(E,null)))}}}]);