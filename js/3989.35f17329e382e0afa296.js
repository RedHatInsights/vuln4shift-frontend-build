"use strict";(self.webpackChunkocpVulnerability=self.webpackChunkocpVulnerability||[]).push([[3989],{22025:(e,n,t)=>{t.d(n,{k:()=>c});var r=t(65353),a=t(28416),i=t(47376),l=t(38296);const s=e=>{var{children:n,className:t="",label:s="",titleId:c,innerRef:u,labelHeadingLevel:o="h1"}=e,d=(0,r._T)(e,["children","className","label","titleId","innerRef","labelHeadingLevel"]);const m="function"==typeof s?s:o;return a.createElement("section",Object.assign({},d,{className:(0,l.i)(i.Z.menuGroup,t),ref:u}),a.createElement(a.Fragment,null,["function","string"].includes(typeof s)?a.createElement(m,{className:(0,l.i)(i.Z.menuGroupTitle),id:c},s):s,n))},c=a.forwardRef(((e,n)=>a.createElement(s,Object.assign({},e,{innerRef:n}))));c.displayName="MenuGroup"},53989:(e,n,t)=>{t.r(n),t.d(n,{DrilldownMenu:()=>M,Menu:()=>r.v,MenuBreadcrumb:()=>h,MenuContainer:()=>E,MenuContent:()=>a.D,MenuFooter:()=>o,MenuGroup:()=>v.k,MenuItem:()=>p.s,MenuItemAction:()=>g.U,MenuList:()=>f.q,MenuSearch:()=>d,MenuSearchInput:()=>m});var r=t(47680),a=t(56726),i=t(65353),l=t(28416),s=t.n(l),c=t(47376),u=t(38296);const o=e=>{var{children:n,className:t=""}=e,r=(0,i._T)(e,["children","className"]);return l.createElement("div",Object.assign({},r,{className:(0,u.i)(c.Z.menuFooter,t)}),n)};o.displayName="MenuFooter";const d=l.forwardRef(((e,n)=>l.createElement("div",Object.assign({},e,{className:(0,u.i)(c.Z.menuSearch,e.className),ref:n}))));d.displayName="MenuSearch";const m=l.forwardRef(((e,n)=>l.createElement("div",Object.assign({},e,{className:(0,u.i)("pf-v5-c-menu__search-input",e.className),ref:n}))));m.displayName="MenuSearchInput";var v=t(22025),p=t(49732),f=t(46820),g=t(44404),b=t(16930);const M=e=>{var{children:n,id:t,isMenuDrilledIn:l=!1,getHeight:c}=e,u=(0,i._T)(e,["children","id","isMenuDrilledIn","getHeight"]);return s().createElement(b.p.Consumer,null,(e=>{var{menuId:o,parentMenu:d,flyoutRef:m,setFlyoutRef:v,disableHover:p}=e,g=(0,i._T)(e,["menuId","parentMenu","flyoutRef","setFlyoutRef","disableHover"]);return s().createElement(r.v,Object.assign({id:t,parentMenu:o,isMenuDrilledIn:l,isRootMenu:!1,ref:s().createRef()},g,u),s().createElement(a.D,{getHeight:c},s().createElement(f.q,null,n)))}))};M.displayName="DrilldownMenu";const h=e=>{var{children:n}=e,t=(0,i._T)(e,["children"]);return s().createElement("div",Object.assign({className:(0,u.i)(c.Z.menuBreadcrumb)},t),n)};h.displayName="MenuBreadcrumb";var y=t(69121);const E=({menu:e,menuRef:n,isOpen:t,toggle:r,toggleRef:a,onOpenChange:i,zIndex:l=9999,popperProps:c,onOpenChangeKeys:u=["Escape","Tab"]})=>(s().useEffect((()=>{const e=e=>{var r,l,s;(t&&i&&(null===(r=n.current)||void 0===r?void 0:r.contains(e.target))||(null===(l=a.current)||void 0===l?void 0:l.contains(e.target)))&&u.includes(e.key)&&(i(!1),null===(s=a.current)||void 0===s||s.focus())},r=e=>{var r,l,s;t&&(null===(r=a.current)||void 0===r?void 0:r.contains(e.target))&&0===e.detail&&setTimeout((()=>{var e;const t=null===(e=null==n?void 0:n.current)||void 0===e?void 0:e.querySelector('li button:not(:disabled),li input:not(:disabled),li a:not([aria-disabled="true"])');t&&t.focus()}),0),t&&i&&!(null===(l=null==a?void 0:a.current)||void 0===l?void 0:l.contains(e.target))&&t&&!(null===(s=n.current)||void 0===s?void 0:s.contains(e.target))&&i(!1)};return window.addEventListener("keydown",e),window.addEventListener("click",r),()=>{window.removeEventListener("keydown",e),window.removeEventListener("click",r)}}),[t,n,i,u,a]),s().createElement(y.Popper,Object.assign({trigger:r,triggerRef:a,popper:e,popperRef:n,isVisible:t,zIndex:l},c)));E.displayName="MenuContainer"}}]);
//# sourceMappingURL=../sourcemaps/3989.dce06621bff3df2694b590af19d05d66.js.map