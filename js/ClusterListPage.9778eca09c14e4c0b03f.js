"use strict";(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[53],{20777:(e,t,a)=>{t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=a(35183).IU(t.lb),t.ZP=t.wl},620:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(93264),r=a.n(l),n=a(6848);const i=function(){return r().createElement(n.Bullseye,null,r().createElement(n.EmptyState,{variant:n.EmptyStateVariant.large},r().createElement(n.Title,{headingLevel:"h5",size:"lg"},"No matching clusters found"),r().createElement(n.EmptyStateBody,null,"To continue, edit your filter settings and search again.")))}},70715:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var l=a(70885),r=a(93264),n=a.n(r),i=a(6848),s=a(14748),c=a(89376),o=a(39173),u=a(98100),m=a(39704),p=a(97534),v=a(20777);const h=function(){return n().createElement(i.Bullseye,null,n().createElement(i.EmptyState,{variant:i.EmptyStateVariant.large},n().createElement(i.EmptyStateIcon,{icon:v.ZP,size:"sm"}),n().createElement(i.Title,{headingLevel:"h5",size:"lg"},"No clusters yet"),n().createElement(i.EmptyStateBody,null,"To get started, create or register your cluster to get information from Insights Vulnerability."),n().createElement(i.Button,{variant:"primary",component:"a",href:"https://console.redhat.com/openshift/create/",target:"_blank"},"Create Cluster"),n().createElement("br",null),n().createElement(i.Button,{variant:"link",component:"a",href:"https://console.redhat.com/openshift/register/",target:"_blank",className:"pf-u-mt-md"},"Register Cluster")))};var y=a(95862),f=a(76743),d=a(57903),E=a(5084),b=a(620),g=a(82245),C=a(24724),P=a(44439);const Z=function(){var e=(0,m.v9)((function(e){return e.ClusterListStore})),t=e.clusters,a=e.isLoading,r=e.meta,i=e.error,s=(0,f.eh)({allowedParams:u.aB,initialParams:r,fetchAction:p.Ew,changeParamsAction:p.h}),c=r.search,o=r.status,v=r.dynamic_status_options,Z=r.version,_=r.dynamic_version_options,S=r.cluster_severity,B=r.provider,V=r.dynamic_provider_options,L=(0,f.S)({filenamePrefix:u.Bs,fetchAction:g.Zz,allowedParams:u.aB}),w=[(0,y.Z)({urlParam:"search",label:"Name",placeholder:"Filter by name",value:c,apply:s,chipLabel:"Search term"}),(0,C.Z)({urlParam:"status",label:"Status",value:o,items:(0,P.uniqBy)(u.a1.concat((null!=v?v:[]).map((function(e){return{label:e,value:e}}))),"value"),placeholder:"Filter by status",apply:s,chipLabel:"Status"}),(0,C.Z)({urlParam:"version",label:"Version",value:Z,items:(0,P.uniqBy)(u.v0.concat((null!=_?_:[]).map((function(e){return{label:e,value:e}}))),"value"),placeholder:"Filter by version",apply:s,chipLabel:"Version"}),(0,C.Z)({urlParam:"cluster_severity",label:"CVEs severity",value:S,items:u.eE,placeholder:"Filter by CVEs severity",apply:s,chipLabel:"CVEs severity"}),(0,C.Z)({urlParam:"provider",label:"Provider",value:B,items:(0,P.uniqBy)(u.uk.concat((null!=V?V:[]).map((function(e){return{label:e,value:e}}))),"value"),placeholder:"Filter by provider",apply:s,chipLabel:"Provider"})],k=(0,E.KW)(w,r,u.vI,s),I=(0,l.Z)(k,3),A=I[0],F=I[1],z=I[2];return n().createElement(d.Z,{isLoading:a,rows:t.map((function(e){return(0,u.LM)(e)})),columns:u.IR,filterConfig:A,activeFiltersConfig:F,meta:r,error:i,emptyState:z?n().createElement(b.Z,null):n().createElement(h,null),apply:s,onExport:function(e){return L(e,r)}})};var _=a(55140);const S=function(){var e=(0,_.Z)(),t=(0,f._)(u.vD),a=(0,l.Z)(t,2),m=a[0],p=a[1];return(0,r.useEffect)((function(){e.updateDocumentTitle("Clusters - Vulnerability Dashboard | Red Hat Insights | console.redhat.com")}),[]),n().createElement(r.Fragment,null,n().createElement(c.Z,null,n().createElement(o.Z,{title:"Vulnerable clusters",className:"pf-u-mb-sm"}),!m&&n().createElement(i.Alert,{variant:i.AlertVariant.info,isInline:!0,className:"pf-u-mt-md",title:"Vulnerability information applies to OCP4.8+ version only",actionClose:n().createElement(i.AlertActionCloseButton,{onClose:function(){return p(!0)}})})),n().createElement(s.ZP,null,n().createElement(Z,null)))}}}]);