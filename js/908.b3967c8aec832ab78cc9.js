(self.webpackChunkocpVulnerability=self.webpackChunkocpVulnerability||[]).push([[908],{68509:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var s=a(28416),l=a.n(s),r=a(34890),i=a(51663),o=a(45697),n=a.n(o),m=a(67955),c=a(83328);const u=(0,s.lazy)((()=>Promise.all([a.e(9121),a.e(8188),a.e(6043),a.e(1025),a.e(325),a.e(5307),a.e(6941),a.e(5430),a.e(1237),a.e(316),a.e(8026)]).then(a.bind(a,80137)))),p=(0,s.lazy)((()=>Promise.all([a.e(9121),a.e(8188),a.e(6043),a.e(1025),a.e(5307),a.e(4439),a.e(316),a.e(9053)]).then(a.bind(a,13127)))),d=(0,s.lazy)((()=>Promise.all([a.e(9121),a.e(8188),a.e(6043),a.e(1025),a.e(5190),a.e(5307),a.e(6941),a.e(5430),a.e(5778),a.e(4439),a.e(1560)]).then(a.bind(a,82177)))),_=(0,s.lazy)((()=>Promise.all([a.e(9121),a.e(8188),a.e(6043),a.e(1025),a.e(2396),a.e(1640),a.e(4933),a.e(8100),a.e(325),a.e(100),a.e(5307),a.e(6941),a.e(1237),a.e(5778),a.e(2641)]).then(a.bind(a,31989)))),v=({element:e})=>l().createElement(s.Suspense,{fallback:l().createElement(m.Bullseye,null,l().createElement(c.Spinner,null))},e);v.propTypes={element:n().element.isRequired};const y=()=>l().createElement(i.Routes,null,l().createElement(i.Route,{path:"/cves/:cveId",element:l().createElement(v,{element:l().createElement(d,null)})}),l().createElement(i.Route,{path:"/clusters/:clusterId",element:l().createElement(v,{element:l().createElement(_,null)})}),l().createElement(i.Route,{path:"/cves",element:l().createElement(v,{element:l().createElement(u,null)})}),l().createElement(i.Route,{path:"/clusters",element:l().createElement(v,{element:l().createElement(p,null)})}),l().createElement(i.Route,{path:"*",element:l().createElement(i.Navigate,{to:"cves",replace:!0})})),E=e=>l().createElement(s.Fragment,null,l().createElement(r.ZP,null),l().createElement(y,{childProps:e}))},47469:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var s=a(28416),l=a.n(s),r=a(45697),i=a.n(r),o=a(31455),n=a(67955),m=a(94270);const c=({...e})=>l().createElement(n.Bullseye,null,l().createElement(o.EmptyState,{variant:"lg",...e},l().createElement(m.Text,null,l().createElement("strong",null,"No description available")),l().createElement(o.EmptyStateBody,null,"This CVE has been published, however metadata about this CVE is not yet available on Red Hat Insights. Metadata is usually available on Insights within 24 hours of a CVE being published.")));c.propTypes={props:i().object};const u=c},75928:(e,t,a)=>{"use strict";a.d(t,{wG:()=>B,LH:()=>J,l3:()=>W,Jy:()=>N,Y7:()=>F,aB:()=>H,vI:()=>O,Bs:()=>j,IR:()=>w,LM:()=>$,uk:()=>k,eE:()=>C,a1:()=>P,v0:()=>A,Wb:()=>Z,tW:()=>q,bs:()=>z,P4:()=>S,ZZ:()=>V,R:()=>G,of:()=>M,_l:()=>Y,_I:()=>I,Eu:()=>R,UZ:()=>f,f9:()=>T,vD:()=>D,ab:()=>h,og:()=>g});var s=a(28416),l=a.n(s),r=a(51663),i=a(35240),o=a(90496),n=a(89687),m=a(45697),c=a.n(m),u=a(66934),p=a.n(u),d=a(38966);const _=({count:e,linkTo:t})=>l().createElement("div",{className:"shield-set"},g.map((a=>l().createElement(d.Tooltip,{key:a.value,content:`${a.label} severity`},a.hasIcon&&(0===e[a.value]?l().createElement("a",{className:"disabled-shield nowrap"},l().createElement(p(),{style:{color:"var(--pf-global--disabled-color--200)"}}),l().createElement("span",null,"0")):l().createElement(r.Link,{key:a.value,to:`${t}?severity=${a.value}`,className:"nowrap"},l().createElement(p(),{style:{color:a.iconColor}}),l().createElement("span",null,e[a.value])))))));_.propTypes={count:c().shape({critical:c().number,important:c().number,moderate:c().number,low:c().number}).isRequired,linkTo:c().string};const v=_;var y=a(94270),E=a(62410),b=a(23395),L=a(47469);const D="vuln4shift:header-alert-dismissed",f=20,h=[{value:"all",label:"All"},{value:"last7days",label:"Last 7 days",from:(0,b.YD)(new Date,7)},{value:"last30days",label:"Last 30 days",from:(0,b.YD)(new Date,30)},{value:"last90days",label:"Last 90 days",from:(0,b.YD)(new Date,90)},{value:"lastYear",label:"Last year",from:(0,b.qc)(new Date,1)},{value:"moreThanYear",label:"More than 1 year ago",to:(0,b.qc)(new Date,1)}],g=[{value:"critical",label:"Critical",iconColor:"var(--pf-global--danger-color--100)",textColor:"var(--pf-global--danger-color--100)",hasIcon:!0},{value:"important",label:"Important",iconColor:"var(--pf-global--palette--orange-300)",textColor:"var(--pf-global--palette--orange-400)",hasIcon:!0},{value:"moderate",label:"Moderate",iconColor:"var(--pf-global--warning-color--100)",textColor:"var(--pf-global--warning-color--200)",hasIcon:!0},{value:"low",label:"Low",iconColor:"var(--pf-global--Color--200)",textColor:"var(--pf-global--default-color--300)",hasIcon:!0},{value:"none",label:"Unknown"}],C=[{value:"any",label:"All clusters"},{value:"critical",label:"Critical"},{value:"important",label:"Important"},{value:"moderate",label:"Moderate"},{value:"low",label:"Low"}],T=[{value:"oneOrMore",label:"1 or more"},{value:"none",label:"None"}],P=[{value:"Connected",label:"Connected"},{value:"Disconnected",label:"Disconnected"},{value:"Stale",label:"Stale"},{value:"N/A",label:"Unknown"}],A=[{value:"N/A",label:"Unknown"}],k=[{value:"N/A",label:"Unknown"}],I=[{title:"CVE ID",sortParam:"synopsis"},{title:"Publish date",sortParam:"publish_date"},{title:"Severity",sortParam:"severity"},{title:"CVSS base score",sortParam:"cvss_score"},{title:"Exposed clusters",sortParam:"clusters_exposed"},{title:"Exposed images",sortParam:"images_exposed"}],w=[{title:"Name",sortParam:"display_name",sortDefaultDirection:"asc"},{title:"Status",sortParam:"status",sortDefaultDirection:"asc"},{title:"Type"},{title:"Version",sortParam:"version"},{title:"CVEs severity",sortParam:"cluster_severity"},{title:"Provider",sortParam:"provider",sortDefaultDirection:"asc"},{title:"Last seen",sortParam:"last_seen"}],S=[{title:"Name",sortParam:"display_name",sortDefaultDirection:"asc"},{title:"Status",sortParam:"status",sortDefaultDirection:"asc"},{title:"Type"},{title:"Version",sortParam:"version"},{title:"Provider",sortParam:"provider",sortDefaultDirection:"asc"},{title:"Last seen",sortParam:"last_seen"}],N=[{title:"CVE ID",sortParam:"synopsis"},{title:"Publish date",sortParam:"publish_date"},{title:"Severity",sortParam:"severity"},{title:"CVSS base score",sortParam:"cvss_score"}],U=e=>l().createElement(s.Fragment,null,"unknown"===e.description?l().createElement(L.Z,{variant:"large",style:{padding:0}}):l().createElement(y.TextContent,null,l().createElement(y.Text,{component:y.TextVariants.h6,style:{fontSize:14}},"CVE description"),e.description),l().createElement(r.Link,{to:"../cves/"+e.synopsis,className:"pf-u-mt-md pf-u-display-block"},"View more information about this CVE")),R=e=>({key:e.synopsis,cells:[l().createElement(r.Link,{to:"../cves/"+e.synopsis,key:e.synopsis},e.synopsis),(0,i.Un)(e.publish_date),l().createElement(n.Z,{hasLabel:!0,impact:e.severity,key:e.synopsis}),(0,o.Z)(e.cvss2_score,e.cvss3_score,!0),l().createElement(r.Link,{to:"../cves/"+e.synopsis,key:e.synopsis},e.clusters_exposed),l().createElement(r.Link,{to:"../cves/"+e.synopsis,key:e.synopsis},e.images_exposed)],expandableContent:U(e)}),$=e=>({key:e.id,cells:[l().createElement(r.Link,{to:"../clusters/"+e.id,key:e.id},e.display_name),e.status,e.type,e.version,l().createElement(v,{key:e.id,count:{...e.cves_severity},linkTo:`./${e.id}`}),e.provider,l().createElement(E.Z,{key:e.id,date:e.last_seen,type:"relative"})]}),V=e=>({key:e.id,cells:[l().createElement(r.Link,{to:"../clusters/"+e.id,key:e.id},e.display_name),e.status,e.type,e.version,e.provider,l().createElement(E.Z,{key:e.id,date:e.last_seen,type:"relative"})]}),F=e=>({key:e.synopsis,cells:[l().createElement(r.Link,{to:"../cves/"+e.synopsis,key:e.synopsis},e.synopsis),(0,i.Un)(e.publish_date),l().createElement(n.Z,{hasLabel:!0,impact:e.severity,key:e.synopsis}),(0,o.Z)(e.cvss2_score,e.cvss3_score,!0)],expandableContent:U(e)}),x=["limit","offset","sort"],G=[...x,"search","published","severity","cvss_score","affected_clusters"],H=[...x,"search","status","version","cluster_severity","provider"],Z=[...x,"search","status","version","provider"],B=[...x,"search","published","severity","cvss_score"],M={affected_clusters:"oneOrMore"},O={cluster_severity:"any"},q={},J={},Y="ocp-vulnerability_cves--",j="ocp-vulnerability_clusters--",z="ocp-vulnerability_exposed-clusters--",W="ocp-vulnerability_cluster-cves--"},23395:(e,t,a)=>{"use strict";a.d(t,{KW:()=>m,MG:()=>r,OD:()=>c,YD:()=>o,_A:()=>i,qc:()=>n});var s=a(18446),l=a.n(s);const r=e=>{e?.includes(",")||(e=",");const t=e.split(",")[0],a=e.split(",")[1];let s,l;return s=""===t?0:Number(t),l=""===a?10:Number(a),[s,l]},i=e=>{const t=Object.getOwnPropertyNames(e);for(const a of t){const t=e[a];t&&"object"==typeof t&&i(t)}return Object.freeze(e)},o=(e,t)=>e.setDate(e.getDate()-t),n=(e,t)=>e.setFullYear(e.getFullYear()-t),m=(e,t,a,s)=>{if(0===e.length)return[void 0,void 0];const r=e.map((e=>e.filterConfig.key)),i=(({currentParams:e,defaultParams:t,filterParams:a})=>{const s=a.reduce(((t,a)=>({...t,...e[a]&&{[a]:e[a]}})),{});return!l()(s,t)})({currentParams:t,defaultParams:a,filterParams:r});let o={items:[]},n={filters:[],onDelete:(e,l,r)=>r?s({...a,offset:0,limit:t.limit},!0):l.forEach((e=>e.onDelete(e.chips))),deleteTitle:"Reset filter",showDeleteButton:i};return e.forEach((e=>{o.items.push(e.filterConfig),e.activeFiltersConfig?.isShown&&n.filters.push(e.activeFiltersConfig)})),[o,n,i]},c=(e,t)=>t>=e},12949:(e,t,a)=>{"use strict";a.d(t,{A_:()=>r,GA:()=>u,H1:()=>n,UU:()=>l,Vh:()=>o,eG:()=>s,ol:()=>c,pj:()=>m,pq:()=>i,r9:()=>p});const s="FETCH_CVE_LIST_TABLE",l="FETCH_CVE_DETAIL_TABLE",r="FETCH_CLUSTER_LIST_TABLE",i="FETCH_CLUSTER_DETAIL_TABLE",o="FETCH_CVE_DETAILS",n="FETCH_CLUSTER_DETAILS",m="CHANGE_CVE_LIST_TABLE_PARAMS",c="CHANGE_CVE_DETAIL_TABLE_PARAMS",u="CHANGE_CLUSTER_LIST_TABLE_PARAMS",p="CHANGE_CLUSTER_DETAIL_TABLE_PARAMS"},99066:(e,t,a)=>{"use strict";a.d(t,{S:()=>f});var s=a(32103),l=a(39603),r=a.n(l),i=a(84885),o=a(83215),n=a(75928),m=a(23395),c=a(12949);const u=(0,m._A)({cves:[],isLoading:!0,timestamp:new Date,meta:{limit:n.UZ,offset:0,total_items:0,sort:"-publish_date",...n.of}}),p=(e=u,t)=>{switch(t.type){case`${c.eG}_PENDING`:return{...e,isLoading:!0,error:void 0,timestamp:t.meta.timestamp};case`${c.eG}_FULFILLED`:return(0,m.OD)(e.timestamp,t.meta.timestamp)?{...e,cves:t.payload.data.data,meta:{...e.meta,total_items:t.payload.data.meta.total_items},isLoading:!1}:e;case`${c.eG}_REJECTED`:return{...e,isLoading:!1,error:{...t.payload}};case`${c.pj}`:return{...e,meta:{total_items:e.meta.total_items,sort:e.meta.sort,limit:e.meta.limit,...t.payload}}}return e},d=(0,m._A)({clusters:[],isLoading:!0,timestamp:new Date,meta:{limit:n.UZ,offset:0,total_items:0,sort:"-last_seen",...n.vI}}),_=(e=d,t)=>{switch(t.type){case`${c.A_}_PENDING`:return{...e,isLoading:!0,error:void 0,timestamp:t.meta.timestamp};case`${c.A_}_FULFILLED`:{const{data:a,meta:s}=t.payload.data;return(0,m.OD)(e.timestamp,t.meta.timestamp)?{...e,clusters:a,meta:{...e.meta,total_items:s.total_items,dynamic_provider_options:s.cluster_providers_all,dynamic_status_options:s.cluster_statuses_all,dynamic_version_options:s.cluster_versions_all},isLoading:!1}:e}case`${c.A_}_REJECTED`:return{...e,isLoading:!1,error:{...t.payload}};case`${c.GA}`:return{...e,meta:{total_items:e.meta.total_items,sort:e.meta.sort,limit:e.meta.limit,dynamic_provider_options:e.meta.dynamic_provider_options,dynamic_status_options:e.meta.dynamic_status_options,dynamic_version_options:e.meta.dynamic_version_options,...t.payload}}}return e},v=(0,m._A)({cve:{},clusters:[],isDetailLoading:!0,isTableLoading:!0,timestamp:new Date,meta:{limit:n.UZ,offset:0,total_items:0,sort:"-last_seen",...n.tW}}),y=(e=v,t)=>{switch(t.type){case`${c.UU}_PENDING`:return{...e,isTableLoading:!0,error:void 0,timestamp:t.meta.timestamp};case`${c.UU}_FULFILLED`:if((0,m.OD)(e.timestamp,t.meta.timestamp)){const{data:a,meta:s}=t.payload.data;return{...e,clusters:a,meta:{...e.meta,total_items:s.total_items,dynamic_provider_options:s.cluster_providers_all,dynamic_status_options:s.cluster_statuses_all,dynamic_version_options:s.cluster_versions_all},isTableLoading:!1}}return e;case`${c.UU}_REJECTED`:return{...e,isTableLoading:!1,error:{...t.payload}};case`${c.ol}`:return{...e,meta:{total_items:e.meta.total_items,sort:e.meta.sort,limit:e.meta.limit,dynamic_provider_options:e.meta.dynamic_provider_options,dynamic_status_options:e.meta.dynamic_status_options,dynamic_version_options:e.meta.dynamic_version_options,...t.payload}};case`${c.Vh}_PENDING`:return{...e,isDetailLoading:!0,error:void 0};case`${c.Vh}_FULFILLED`:return{...e,cve:t.payload.data.data,isDetailLoading:!1};case`${c.Vh}_REJECTED`:return{...e,isDetailLoading:!1,error:{...t.payload}}}return e},E=(0,m._A)({cluster:{},cves:[],isDetailLoading:!0,isTableLoading:!0,timestamp:new Date,meta:{limit:n.UZ,offset:0,total_items:0,sort:"-publish_date",...n.LH}}),b=(e=E,t)=>{switch(t.type){case`${c.pq}_PENDING`:return{...e,isTableLoading:!0,error:void 0,timestamp:t.meta.timestamp};case`${c.pq}_FULFILLED`:return(0,m.OD)(e.timestamp,t.meta.timestamp)?{...e,cves:t.payload.data.data,meta:{...e.meta,total_items:t.payload.data.meta.total_items},isTableLoading:!1}:e;case`${c.pq}_REJECTED`:return{...e,isTableLoading:!1,error:{...t.payload}};case`${c.r9}`:return{...e,meta:{total_items:e.meta.total_items,sort:e.meta.sort,limit:e.meta.limit,...t.payload}};case`${c.H1}_PENDING`:return{...e,isDetailLoading:!0,error:void 0};case`${c.H1}_FULFILLED`:return{...e,cluster:t.payload.data.data,isDetailLoading:!1};case`${c.H1}_REJECTED`:return{...e,isDetailLoading:!1,error:{...t.payload}}}return e};let L;const D=()=>e=>t=>{t.type.match(new RegExp("_REJECTED$"))&&t.meta?.noNotificationOnError&&(t.meta={...t.meta,noError:!0}),e(t)};function f(...e){return L=(0,s.JH)({},[r(),D,(0,i.ZP)({errorDescriptionKey:"detail",autoDismiss:!1}),...e]),L.register({notifications:o.ee}),L.register({CveListStore:p}),L.register({ClusterListStore:_}),L.register({CveDetailStore:y}),L.register({ClusterDetailStore:b}),L}},11452:()=>{},34946:()=>{},10108:()=>{},81320:()=>{},88361:()=>{},66822:()=>{},314:()=>{},53519:()=>{}}]);
//# sourceMappingURL=../sourcemaps/908.fea4399ad82901aa90339901ec90a180.js.map