"use strict";(self.webpackChunkocpVulnerability=self.webpackChunkocpVulnerability||[]).push([[9053],{68441:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(28416),r=a.n(l),n=a(95376),i=a(74503);const s=()=>r().createElement(i.Bullseye,null,r().createElement(n.EmptyState,{variant:"lg"},r().createElement(n.EmptyStateHeader,{titleText:"No matching clusters found",headingLevel:"h5"}),r().createElement(n.EmptyStateBody,null,"To continue, edit your filter settings and search again.")))},13127:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var l=a(28416),r=a.n(l),n=a(5904),i=a(99087),s=a(63456),o=a(39173),c=a(75928),m=a(95998),u=a(73710),p=a(95376),y=a(31055),v=a(74503),d=a(47826),h=a.n(d);const E=()=>r().createElement(v.Bullseye,null,r().createElement(p.EmptyState,{variant:"lg"},r().createElement(p.EmptyStateHeader,{titleText:"No clusters yet",icon:r().createElement(p.EmptyStateIcon,{icon:h(),size:"sm"}),headingLevel:"h5"}),r().createElement(p.EmptyStateBody,null,"To get started, create or register your cluster to get information from Insights Vulnerability."),r().createElement(p.EmptyStateFooter,null,r().createElement(y.Button,{variant:"primary",component:"a",href:"https://console.redhat.com/openshift/create/",target:"_blank"},"Create Cluster"),r().createElement("br",null),r().createElement(y.Button,{variant:"link",component:"a",href:"https://console.redhat.com/openshift/register/",target:"_blank",className:"pf-u-mt-md"},"Register Cluster"))));var b=a(60395),f=a(46046),g=a(98249),C=a(23395),P=a(68441),S=a(41533),B=a(55027),Z=a(44439);const V=()=>{const{clusters:e,isLoading:t,meta:a,error:l}=(0,m.v9)((({ClusterListStore:e})=>e)),n=(0,f.eh)({allowedParams:c.aB,initialParams:a,fetchAction:u.Ew,changeParamsAction:u.h}),{search:i,status:s,dynamic_status_options:o,version:p,dynamic_version_options:y,cluster_severity:v,provider:d,dynamic_provider_options:h}=a,V=(0,f.S)({filenamePrefix:c.Bs,fetchAction:S.Zz,allowedParams:c.aB}),L=[(0,b.Z)({urlParam:"search",label:"Name",placeholder:"Filter by name",value:i,apply:n,chipLabel:"Search term"}),(0,B.Z)({urlParam:"status",label:"Status",value:s,items:(0,Z.uniqBy)(c.a1.concat((o??[]).map((e=>({label:e,value:e})))),"value"),placeholder:"Filter by status",apply:n,chipLabel:"Status"}),(0,B.Z)({urlParam:"version",label:"Version",value:p,items:(0,Z.uniqBy)(c.v0.concat((y??[]).map((e=>({label:e,value:e})))),"value"),placeholder:"Filter by version",apply:n,chipLabel:"Version"}),(0,B.Z)({urlParam:"cluster_severity",label:"CVEs severity",value:v,items:c.eE,placeholder:"Filter by CVEs severity",apply:n,chipLabel:"CVEs severity"}),(0,B.Z)({urlParam:"provider",label:"Provider",value:d,items:(0,Z.uniqBy)(c.uk.concat((h??[]).map((e=>({label:e,value:e})))),"value"),placeholder:"Filter by provider",apply:n,chipLabel:"Provider"})],[_,k,F]=(0,C.KW)(L,a,c.vI,n);return r().createElement(g.Z,{isLoading:t,rows:e.map((e=>(0,c.LM)(e))),columns:c.IR,filterConfig:_,activeFiltersConfig:k,meta:a,error:l,emptyState:F?r().createElement(P.Z,null):r().createElement(E,null),apply:n,onExport:e=>V(e,a)})};var L=a(55140);const _=()=>{const e=(0,L.Z)(),[t,a]=(0,f._)(c.vD);return(0,l.useEffect)((()=>{e.updateDocumentTitle("Clusters - Vulnerability Dashboard | Red Hat Insights | console.redhat.com")}),[]),r().createElement(l.Fragment,null,r().createElement(s.Z,null,r().createElement(o.Z,{title:"Vulnerable clusters",className:"pf-u-mb-sm"}),!t&&r().createElement(n.Alert,{variant:n.AlertVariant.info,isInline:!0,className:"pf-u-mt-md",title:"Vulnerability information applies to OCP4.8+ version only",actionClose:r().createElement(n.AlertActionCloseButton,{onClose:()=>a(!0)})})),r().createElement(i.ZP,null,r().createElement(V,null)))}}}]);
//# sourceMappingURL=../sourcemaps/ClusterListPage.70d767a4c21d459b938543909cec5590.js.map