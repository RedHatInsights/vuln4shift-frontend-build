"use strict";(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[641],{5029:(e,s,t)=>{t.r(s),t.d(s,{default:()=>f});var i=t(3264),a=t.n(i),n=t(6350),l=t(8716),r=t(9173),o=t(2834),c=t(5697),p=t.n(c),u=t(943),d=t(6530),h=function(e){var s=e.match;return a().createElement(i.Fragment,null,a().createElement(l.Z,null,a().createElement(u.Breadcrumb,{className:"pf-u-mb-md"},a().createElement(u.BreadcrumbItem,null,a().createElement(d.Link,{to:"/"},"Vulnerability")),a().createElement(u.BreadcrumbItem,null,a().createElement(d.Link,{to:"/clusters"},"Clusters")),a().createElement(u.BreadcrumbItem,null,"rhel-9.0")),a().createElement(r.Z,{title:"rhel-9.0",className:"pf-u-mb-sm"}),a().createElement(i.Fragment,null,"UUID: ",s.params.clusterId,a().createElement("br",null),"Last seen: 31 Mar 2022 06:33 UTC")),a().createElement(n.Z,null,a().createElement(o.Z,null)))};h.propTypes={match:p().object};const f=h},2834:(e,s,t)=>{t.d(s,{Z:()=>x});var i=t(885),a=t(3264),n=t.n(a),l=t(448),r=t.n(l),o=t(2982),c=t(5697),p=t.n(c),u=t(8877),d=function(e){var s=e.columns,t=e.rows,l=(0,a.useState)([]),r=(0,i.Z)(l,2),c=r[0],p=r[1],d=function(e){return c.includes(e)};return n().createElement(u.TableComposable,{variant:"compact"},n().createElement(u.Thead,null,n().createElement(u.Tr,null,n().createElement(u.Th,null)," ",s.map((function(e){return n().createElement(u.Th,{key:e.title,sort:!0},e.title)})))),n().createElement(u.Tbody,null,t.map((function(e,s){return n().createElement(a.Fragment,{key:s},n().createElement(u.Tr,null,n().createElement(u.Td,{expand:{rowIndex:s,isExpanded:d(e.key),onToggle:function(){return function(e,s){return p((function(t){var i=t.filter((function(s){return s!==e}));return s?[].concat((0,o.Z)(i),[e]):i}))}(e.key,!d(e.key))}}}),e.cells.map((function(e,s){return n().createElement(u.Td,{key:s},e)}))),n().createElement(u.Tr,{isExpanded:d(e.key)},n().createElement(u.Td,{colspan:100},n().createElement(u.ExpandableRowContent,null,e.expandableContent))))}))))};d.propTypes={columns:p().arrayOf(p().shape({title:p().node.isRequired,sortParam:p().string})).isRequired,rows:p().arrayOf(p().shape({key:p().string.isRequired,cells:p().arrayOf(p().node).isRequired,expandableContent:p().node})).isRequired};const h=d;var f=t(6634),_=t(4494),g=t(5910);const m=JSON.parse('{"data":[{"cvss2_score":null,"cvss3_score":"7.800","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Critical","publish_date":"2022-03-07T12:00:00+00:00","synopsis":"CVE-2022-0001","clusters_exposed":3,"images_exposed":5},{"cvss2_score":null,"cvss3_score":"9.800","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Important","publish_date":"2022-03-12T12:00:00+00:00","synopsis":"CVE-2022-0002","clusters_exposed":1,"images_exposed":1},{"cvss2_score":null,"cvss3_score":"7.800","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Critical","publish_date":"2021-11-01T12:00:00+00:00","synopsis":"CVE-2022-0003","clusters_exposed":3,"images_exposed":4},{"cvss2_score":null,"cvss3_score":"7.200","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Low","publish_date":"2022-04-07T12:00:00+00:00","synopsis":"CVE-2022-0004","clusters_exposed":3,"images_exposed":4},{"cvss2_score":null,"cvss3_score":"5.800","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Low","publish_date":"2022-03-01:00:00+00:00","synopsis":"CVE-2022-0005","clusters_exposed":8,"images_exposed":10},{"cvss2_score":null,"cvss3_score":"7.800","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Critical","publish_date":"2021-02-26T12:00:00+00:00","synopsis":"CVE-2022-0006","clusters_exposed":3,"images_exposed":8},{"cvss2_score":null,"cvss3_score":"9.800","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Important","publish_date":"2022-03-07T12:00:00+00:00","synopsis":"CVE-2022-0007","clusters_exposed":1,"images_exposed":1},{"cvss2_score":null,"cvss3_score":"7.800","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Critical","publish_date":"2022-03-07T12:00:00+00:00","synopsis":"CVE-2022-0008","clusters_exposed":3,"images_exposed":7},{"cvss2_score":null,"cvss3_score":"7.200","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Low","publish_date":"2022-03-07T12:00:00+00:00","synopsis":"CVE-2022-0009","clusters_exposed":3,"images_exposed":4},{"cvss2_score":null,"cvss3_score":"5.800","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Low","publish_date":"2022-03-07T12:00:00+00:00","synopsis":"CVE-2022-0010","clusters_exposed":8,"images_exposed":10},{"cvss2_score":null,"cvss3_score":"7.800","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Critical","publish_date":"2022-03-07T12:00:00+00:00","synopsis":"CVE-2022-0011","clusters_exposed":3,"images_exposed":9},{"cvss2_score":null,"cvss3_score":"9.800","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Important","publish_date":"2022-03-07T12:00:00+00:00","synopsis":"CVE-2022-0012","clusters_exposed":1,"images_exposed":1},{"cvss2_score":null,"cvss3_score":"7.800","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Critical","publish_date":"2022-03-07T12:00:00+00:00","synopsis":"CVE-2022-0013","clusters_exposed":3,"images_exposed":20},{"cvss2_score":null,"cvss3_score":"7.200","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Low","publish_date":"2022-03-07T12:00:00+00:00","synopsis":"CVE-2022-0014","clusters_exposed":3,"images_exposed":4},{"cvss2_score":null,"cvss3_score":"5.800","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Low","publish_date":"2022-03-07T12:00:00+00:00","synopsis":"CVE-2022-0015","clusters_exposed":8,"images_exposed":10},{"cvss2_score":null,"cvss3_score":"7.800","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Critical","publish_date":"2022-03-07T12:00:00+00:00","synopsis":"CVE-2022-0016","clusters_exposed":3,"images_exposed":27},{"cvss2_score":null,"cvss3_score":"9.800","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Important","publish_date":"2022-03-07T12:00:00+00:00","synopsis":"CVE-2022-0017","clusters_exposed":9,"images_exposed":11},{"cvss2_score":null,"cvss3_score":"7.800","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Critical","publish_date":"2022-03-07T12:00:00+00:00","synopsis":"CVE-2022-0018","clusters_exposed":3,"images_exposed":2},{"cvss2_score":null,"cvss3_score":"7.200","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Low","publish_date":"2022-03-07T12:00:00+00:00","synopsis":"CVE-2022-0019","clusters_exposed":3,"images_exposed":4},{"cvss2_score":null,"cvss3_score":"5.800","description":"A flaw was found in the way the \\"flags\\" member of the new pipe buffer structure was lacking proper initialization in copy_page_to_iter_pipe and push_pipe functions in the Linux kernel and could thus contain stale values. An unprivileged local user could use this flaw to write to pages in the page cache backed by read only files and as such escalate their privileges on the system.","severity":"Low","publish_date":"2022-03-07T12:00:00+00:00","synopsis":"CVE-2022-0020","clusters_exposed":8,"images_exposed":10}],"meta":{"data_format":"json","total_items":20,"limit":20,"offset":0,"sort":"-publish_date","filters":{"cvss_from":1,"cvss_to":9,"search":"CVE-2022-","severity":"important,critical,low","published_from":"20210331T000000+0100","published_to":"20220331T000000+0100"}}}');var y=t(4107);const w=function(){return n().createElement(y.Z,{pagination:{isDisabled:!1,itemCount:20,page:1,perPage:20,ouiaId:"pagination-top"}})};var v=t(943),b=function(e){var s=e.page,t=e.perPage,i=e.itemCount;return n().createElement(v.Pagination,{page:s,itemCount:i,perPage:t,variant:v.PaginationVariant.bottom,ouiaId:"pagination-bottom",isDisabled:0===i})};b.propTypes={page:p().number,perPage:p().number,itemCount:p().number};const k=b,x=function(){var e=(0,_.I0)(),s=(0,_.v9)((function(e){return e.CveListStore.cves})),t=(0,a.useState)(!0),l=(0,i.Z)(t,2),o=l[0],c=l[1];return(0,a.useEffect)((function(){setTimeout((function(){return c(!1)}),1e3),e({type:g.eG,meta:{timestamp:new Date},payload:function(){return m}})}),[]),o?n().createElement(r(),{colSize:f._I.length,rowSize:20}):n().createElement(a.Fragment,null,n().createElement(w,null),n().createElement(h,{columns:f._I,rows:s.map((function(e){return(0,f.Eu)(e)}))}),n().createElement(k,{page:1,perPage:20,itemCount:20}))}},6634:(e,s,t)=>{t.d(s,{og:()=>c,_I:()=>p,Eu:()=>u});var i=t(3264),a=t.n(i),n=t(6530),l=t(5240),r=t(496),o=t(9492),c={critical:{label:"Critical",iconColor:"var(--pf-global--danger-color--100)",textColor:"var(--pf-global--danger-color--100)",isInShieldSet:!0},important:{label:"Important",iconColor:"var(--pf-global--palette--orange-300)",textColor:"var(--pf-global--palette--orange-400)",isInShieldSet:!0},moderate:{label:"Moderate",iconColor:"var(--pf-global--warning-color--100)",textColor:"var(--pf-global--warning-color--200)",isInShieldSet:!0},low:{label:"Low",iconColor:"var(--pf-global--Color--200)",textColor:"var(--pf-global--default-color--300)",isInShieldSet:!0},unknown:{label:"Unknown"}},p=[{title:"CVE ID"},{title:"Publish date"},{title:"Severity"},{title:"CVSS base score"},{title:"Clusters exposed"},{title:"Images exposed"}],u=function(e){return{key:e.synopsis,cells:[a().createElement(n.Link,{to:"/cves/"+e.synopsis,key:e.synopsis},e.synopsis),(0,l.Un)(e.publish_date),a().createElement(o.Z,{hasLabel:!0,impact:e.severity,key:e.synopsis}),(0,r.Z)(e.cvss2_score,e.cvss3_score,!0),a().createElement(n.Link,{to:"/cves/"+e.synopsis,key:e.synopsis},e.clusters_exposed),e.images_exposed],expandableContent:e.description}}}}]);
//# sourceMappingURL=../sourcemaps/ClusterDetailPage.645f4ab046e03da6ca320904bc1eddd5.js.map