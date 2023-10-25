/*! For license information please see 6043.35f17329e382e0afa296.js.LICENSE.txt */
"use strict";(self.webpackChunkocpVulnerability=self.webpackChunkocpVulnerability||[]).push([[6043],{46043:(e,t,n)=>{n.d(t,{J:()=>V,I:()=>B});var o=n(65353),r=n(28416),a=n(1774);n(91993);const i="pf-m-no-padding",c="pf-m-width-auto",l="pf-m-top",s="pf-m-top-left",u="pf-m-top-right",d="pf-m-bottom",f="pf-m-bottom-left",p="pf-m-bottom-right",v="pf-m-left",b="pf-m-left-top",m="pf-m-left-bottom",h="pf-m-right",y="pf-m-right-top",g="pf-m-right-bottom",w="pf-m-danger",N="pf-m-warning",E="pf-m-success",O="pf-m-custom",S="pf-m-info";var T=n(38296);const F=r.createContext({}),C=e=>{var{className:t=null,children:n}=e,a=(0,o._T)(e,["className","children"]);return r.createElement("div",Object.assign({className:(0,T.i)("pf-v5-c-popover__content",t)},a),n)};C.displayName="PopoverContent";const k=e=>{var{children:t,id:n,className:a}=e,i=(0,o._T)(e,["children","id","className"]);return r.createElement("div",Object.assign({className:(0,T.i)("pf-v5-c-popover__body",a),id:n},i),t)};k.displayName="PopoverBody";const P=e=>{var{children:t,className:n}=e,a=(0,o._T)(e,["children","className"]);return r.createElement("span",Object.assign({className:(0,T.i)("pf-v5-c-popover__title-icon",n)},a),t)};P.displayName="PopoverHeaderIcon";const D=e=>{var{children:t,className:n,headingLevel:a}=e,i=(0,o._T)(e,["children","className","headingLevel"]);const c=a;return r.createElement(c,Object.assign({className:(0,T.i)("pf-v5-c-popover__title-text",n)},i),t)};D.displayName="PopoverHeaderText";const R=e=>{var{children:t,icon:n,className:a,titleHeadingLevel:i="h6",alertSeverityVariant:c,id:l,alertSeverityScreenReaderText:s}=e,u=(0,o._T)(e,["children","icon","className","titleHeadingLevel","alertSeverityVariant","id","alertSeverityScreenReaderText"]);return r.createElement("header",Object.assign({className:(0,T.i)("pf-v5-c-popover__header",a)},u),r.createElement("div",{className:(0,T.i)("pf-v5-c-popover__title"),id:l},n&&r.createElement(P,null,n),r.createElement(D,{headingLevel:i},c&&s&&r.createElement("span",{className:"pf-v5-screen-reader"},s),t)))};R.displayName="PopoverHeader";const x=e=>{var{children:t,className:n=""}=e,a=(0,o._T)(e,["children","className"]);return r.createElement("footer",Object.assign({className:(0,T.i)("pf-v5-c-popover__footer",n)},a),t)};x.displayName="PopoverFooter";var I=n(47173),L=n(24307);const A=e=>{var{onClose:t=(()=>{})}=e,n=(0,o._T)(e,["onClose"]);return r.createElement("div",{className:(0,T.i)("pf-v5-c-popover__close")},r.createElement(I.zx,Object.assign({onClick:t,variant:"plain","aria-label":!0},n,{style:{pointerEvents:"auto"}}),r.createElement(L.ZP,null)))};A.displayName="PopoverCloseButton";const j=e=>{var{className:t=""}=e,n=(0,o._T)(e,["className"]);return r.createElement("div",Object.assign({className:(0,T.i)("pf-v5-c-popover__arrow",t)},n))};j.displayName="PopoverArrow";const _={name:"--pf-v5-c-popover--MaxWidth",value:"none",var:"var(--pf-v5-c-popover--MaxWidth)"},G={name:"--pf-v5-c-popover--MinWidth",value:"auto",var:"var(--pf-v5-c-popover--MinWidth)"};var B,M=n(27017),H=n(69121),W=n(80164);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(B||(B={}));const K={custom:O,info:S,success:E,warning:N,danger:w},V=e=>{var{children:t,position:n="top",enableFlip:w=!0,className:N="",isVisible:E=null,shouldClose:O=(()=>null),shouldOpen:S=(()=>null),"aria-label":P="",bodyContent:D,headerContent:I=null,headerComponent:L="h6",headerIcon:B=null,alertSeverityVariant:V,alertSeverityScreenReaderText:$,footerContent:U=null,appendTo:z=(()=>document.body),hideOnOutsideClick:q=!0,onHide:Y=(()=>null),onHidden:Z=(()=>null),onShow:J=(()=>null),onShown:X=(()=>null),onMount:Q=(()=>null),zIndex:ee=9999,triggerAction:te="click",minWidth:ne=G&&G.value,maxWidth:oe=_&&_.value,closeBtnAriaLabel:re="Close",showClose:ae=!0,distance:ie=25,flipBehavior:ce=["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],animationDuration:le=300,id:se,withFocusTrap:ue,triggerRef:de,hasNoPadding:fe=!1,hasAutoWidth:pe=!1,elementToFocus:ve}=e,be=(0,o._T)(e,["children","position","enableFlip","className","isVisible","shouldClose","shouldOpen","aria-label","bodyContent","headerContent","headerComponent","headerIcon","alertSeverityVariant","alertSeverityScreenReaderText","footerContent","appendTo","hideOnOutsideClick","onHide","onHidden","onShow","onShown","onMount","zIndex","triggerAction","minWidth","maxWidth","closeBtnAriaLabel","showClose","distance","flipBehavior","animationDuration","id","withFocusTrap","triggerRef","hasNoPadding","hasAutoWidth","elementToFocus"]);const me=se||(0,W.Ki)(),he=null!==E,[ye,ge]=r.useState(!1),[we,Ne]=r.useState(Boolean(ue)),Ee=r.useRef(null);r.useEffect((()=>{Q()}),[]),r.useEffect((()=>{he&&(E?Oe(void 0,!0):Se())}),[E,he]);const Oe=(e,t)=>{e&&J(e),ge(!0),!1!==ue&&t&&Ne(!0)},Se=e=>{e&&Y(e),ge(!1)},Te={top:l,bottom:d,left:v,right:h,"top-start":s,"top-end":u,"bottom-start":f,"bottom-end":p,"left-start":b,"left-end":m,"right-start":y,"right-end":g},Fe=ne!==G.value,Ce=oe!==_.value,ke=e=>{he?S(e,Oe):Oe(e,!1)},Pe=e=>{he?O(e,Se):Se(e)},De=r.createElement(M.i,Object.assign({ref:Ee,active:we,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0,initialFocus:ve||void 0,checkCanFocusTrap:e=>new Promise((t=>{const n=setInterval((()=>{e.every((e=>"hidden"!==getComputedStyle(e).visibility))&&(t(),clearInterval(n))}),10)})),tabbableOptions:{displayCheck:"none"},fallbackFocus:()=>{let e=null;return document&&document.activeElement&&(e=document.activeElement),e}},preventScrollOnDeactivate:!0,className:(0,T.i)("pf-v5-c-popover",V&&K[V],fe&&i,pe&&c,N),role:"dialog","aria-modal":"true","aria-label":I?void 0:P,"aria-labelledby":I?`popover-${me}-header`:void 0,"aria-describedby":`popover-${me}-body`,onMouseDown:()=>{we&&Ne(!1)},style:{minWidth:Fe?ne:null,maxWidth:Ce?oe:null}},be),r.createElement(j,null),r.createElement(C,null,ae&&"click"===te&&r.createElement(A,{onClose:e=>{e.stopPropagation(),he?O(e,Se):Se(e)},"aria-label":re}),I&&r.createElement(R,{id:`popover-${me}-header`,icon:B,alertSeverityVariant:V,alertSeverityScreenReaderText:$||`${V} alert:`,titleHeadingLevel:L},"function"==typeof I?I(Se):I),r.createElement(k,{id:`popover-${me}-body`},"function"==typeof D?D(Se):D),U&&r.createElement(x,{id:`popover-${me}-footer`},"function"==typeof U?U(Se):U)));return r.createElement(F.Provider,{value:{headerComponent:L}},r.createElement(H.Popper,{trigger:t,triggerRef:de,popper:De,popperRef:Ee,minWidth:ne,appendTo:z,isVisible:ye,onMouseEnter:"hover"===te&&ke,onMouseLeave:"hover"===te&&Pe,onPopperMouseEnter:"hover"===te&&ke,onPopperMouseLeave:"hover"===te&&Pe,onFocus:"hover"===te&&(e=>{he?S(e,Oe):Oe(e,!1)}),onBlur:"hover"===te&&(e=>{he?O(e,Se):Se(e)}),positionModifiers:Te,distance:ie,placement:n,onTriggerClick:"click"===te&&(e=>{he?ye?O(e,Se):S(e,Oe):ye?Se(e):Oe(e,!0)}),onDocumentClick:(e,t,n)=>{if(q&&ye){if(n&&n.contains(e.target))return;he?O(e,Se):Se(e)}},onDocumentKeyDown:e=>{e.key===a.yu.Escape&&ye&&(he?O(e,Se):Se(e))},enableFlip:w,zIndex:ee,flipBehavior:ce,animationDuration:le,onHidden:Z,onShown:X,onHide:()=>Ne(!1)}))};V.displayName="Popover"},27017:(e,t,n)=>{n.d(t,{i:()=>G});var o=n(65353),r=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],a=r.join(","),i="undefined"==typeof Element,c=i?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,l=!i&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},s=function e(t,n){var o;void 0===n&&(n=!0);var r=null==t||null===(o=t.getAttribute)||void 0===o?void 0:o.call(t,"inert");return""===r||"true"===r||n&&t&&e(t.parentNode)},u=function(e,t,n){if(s(e))return[];var o=Array.prototype.slice.apply(e.querySelectorAll(a));return t&&c.call(e,a)&&o.unshift(e),o.filter(n)},d=function e(t,n,o){for(var r=[],i=Array.from(t);i.length;){var l=i.shift();if(!s(l,!1))if("SLOT"===l.tagName){var u=l.assignedElements(),d=e(u.length?u:l.children,!0,o);o.flatten?r.push.apply(r,d):r.push({scopeParent:l,candidates:d})}else{c.call(l,a)&&o.filter(l)&&(n||!t.includes(l))&&r.push(l);var f=l.shadowRoot||"function"==typeof o.getShadowRoot&&o.getShadowRoot(l),p=!s(f,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(l));if(f&&p){var v=e(!0===f?l.children:f.children,!0,o);o.flatten?r.push.apply(r,v):r.push({scopeParent:l,candidates:v})}else i.unshift.apply(i,l.children)}}return r},f=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},p=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!f(e)?0:e.tabIndex},v=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},b=function(e){return"INPUT"===e.tagName},m=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},h=function(e,t){return!(t.disabled||s(t)||function(e){return b(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var r=c.call(e,"details>summary:first-of-type")?e.parentElement:e;if(c.call(r,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return m(e)}else{if("function"==typeof o){for(var a=e;e;){var i=e.parentElement,s=l(e);if(i&&!i.shadowRoot&&!0===o(i))return m(e);e=e.assignedSlot?e.assignedSlot:i||s===e.ownerDocument?i:s.host}e=a}if(function(e){var t,n,o,r,a=e&&l(e),i=null===(t=a)||void 0===t?void 0:t.host,c=!1;if(a&&a!==e)for(c=!!(null!==(n=i)&&void 0!==n&&null!==(o=n.ownerDocument)&&void 0!==o&&o.contains(i)||null!=e&&null!==(r=e.ownerDocument)&&void 0!==r&&r.contains(e));!c&&i;){var s,u,d;c=!(null===(u=i=null===(s=a=l(i))||void 0===s?void 0:s.host)||void 0===u||null===(d=u.ownerDocument)||void 0===d||!d.contains(i))}return c}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!!c.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},y=function(e,t){return!(function(e){return function(e){return b(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||l(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)}(t)||p(t)<0||!h(e,t))},g=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},w=function e(t){var n=[],o=[];return t.forEach((function(t,r){var a=!!t.scopeParent,i=a?t.scopeParent:t,c=function(e,t){var n=p(e);return n<0&&t&&!f(e)?0:n}(i,a),l=a?e(t.candidates):i;0===c?a?n.push.apply(n,l):n.push(i):o.push({documentOrder:r,tabIndex:c,item:t,isScope:a,content:l})})),o.sort(v).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},N=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==c.call(e,a)&&y(t,e)},E=r.concat("iframe").join(","),O=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==c.call(e,E)&&h(t,e)};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(e){return"Tab"===(null==e?void 0:e.key)||9===(null==e?void 0:e.keyCode)},k=function(e){return C(e)&&!e.shiftKey},P=function(e){return C(e)&&e.shiftKey},D=function(e){return setTimeout(e,0)},R=function(e,t){var n=-1;return e.every((function(e,o){return!t(e)||(n=o,!1)})),n},x=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"==typeof e?e.apply(void 0,n):e},I=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},L=[],A=function(e,t){var n,o=(null==t?void 0:t.document)||document,r=(null==t?void 0:t.trapStack)||L,a=T({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:k,isKeyBackward:P},t),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},c=function(e,t,n){return e&&void 0!==e[t]?e[t]:a[n||t]},l=function(e,t){var n="function"==typeof(null==t?void 0:t.composedPath)?t.composedPath():void 0;return i.containerGroups.findIndex((function(t){var o=t.container,r=t.tabbableNodes;return o.contains(e)||(null==n?void 0:n.includes(o))||r.find((function(t){return t===e}))}))},s=function(e){var t=a[e];if("function"==typeof t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t=t.apply(void 0,r)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var c=t;if("string"==typeof t&&!(c=o.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return c},f=function(){var e=s("initialFocus");if(!1===e)return!1;if(void 0===e||!O(e,a.tabbableOptions))if(l(o.activeElement)>=0)e=o.activeElement;else{var t=i.tabbableGroups[0];e=t&&t.firstTabbableNode||s("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},v=function(){if(i.containerGroups=i.containers.map((function(e){var t=function(e,t){var n;return n=(t=t||{}).getShadowRoot?d([e],t.includeContainer,{filter:y.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:g}):u(e,t.includeContainer,y.bind(null,t)),w(n)}(e,a.tabbableOptions),n=function(e,t){return(t=t||{}).getShadowRoot?d([e],t.includeContainer,{filter:h.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):u(e,t.includeContainer,h.bind(null,t))}(e,a.tabbableOptions),o=t.length>0?t[0]:void 0,r=t.length>0?t[t.length-1]:void 0,i=n.find((function(e){return N(e)})),c=n.slice().reverse().find((function(e){return N(e)})),l=!!t.find((function(e){return p(e)>0}));return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:l,firstTabbableNode:o,lastTabbableNode:r,firstDomTabbableNode:i,lastDomTabbableNode:c,nextTabbableNode:function(e){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=t.indexOf(e);return r<0?o?n.slice(n.indexOf(e)+1).find((function(e){return N(e)})):n.slice(0,n.indexOf(e)).reverse().find((function(e){return N(e)})):t[r+(o?1:-1)]}}})),i.tabbableGroups=i.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),i.tabbableGroups.length<=0&&!s("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(i.containerGroups.find((function(e){return e.posTabIndexesFound}))&&i.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},b=function e(t){!1!==t&&t!==o.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!a.preventScroll}),i.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(f()))},m=function(e){var t=s("setReturnFocus",e);return t||!1!==t&&e},E=function(e){var t=e.target,n=e.event,o=e.isBackward,r=void 0!==o&&o;t=t||I(n),v();var c=null;if(i.tabbableGroups.length>0){var u=l(t,n),d=u>=0?i.containerGroups[u]:void 0;if(u<0)c=r?i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:i.tabbableGroups[0].firstTabbableNode;else if(r){var f=R(i.tabbableGroups,(function(e){var n=e.firstTabbableNode;return t===n}));if(f<0&&(d.container===t||O(t,a.tabbableOptions)&&!N(t,a.tabbableOptions)&&!d.nextTabbableNode(t,!1))&&(f=u),f>=0){var b=0===f?i.tabbableGroups.length-1:f-1,m=i.tabbableGroups[b];c=p(t)>=0?m.lastTabbableNode:m.lastDomTabbableNode}else C(n)||(c=d.nextTabbableNode(t,!1))}else{var h=R(i.tabbableGroups,(function(e){var n=e.lastTabbableNode;return t===n}));if(h<0&&(d.container===t||O(t,a.tabbableOptions)&&!N(t,a.tabbableOptions)&&!d.nextTabbableNode(t))&&(h=u),h>=0){var y=h===i.tabbableGroups.length-1?0:h+1,g=i.tabbableGroups[y];c=p(t)>=0?g.firstTabbableNode:g.firstDomTabbableNode}else C(n)||(c=d.nextTabbableNode(t))}}else c=s("fallbackFocus");return c},S=function(e){var t=I(e);l(t,e)>=0||(x(a.clickOutsideDeactivates,e)?n.deactivate({returnFocus:a.returnFocusOnDeactivate}):x(a.allowOutsideClick,e)||e.preventDefault())},F=function(e){var t=I(e),n=l(t,e)>=0;if(n||t instanceof Document)n&&(i.mostRecentlyFocusedNode=t);else{var o;e.stopImmediatePropagation();var r=!0;if(i.mostRecentlyFocusedNode)if(p(i.mostRecentlyFocusedNode)>0){var c=l(i.mostRecentlyFocusedNode),s=i.containerGroups[c].tabbableNodes;if(s.length>0){var u=s.findIndex((function(e){return e===i.mostRecentlyFocusedNode}));u>=0&&(a.isKeyForward(i.recentNavEvent)?u+1<s.length&&(o=s[u+1],r=!1):u-1>=0&&(o=s[u-1],r=!1))}}else i.containerGroups.some((function(e){return e.tabbableNodes.some((function(e){return p(e)>0}))}))||(r=!1);else r=!1;r&&(o=E({target:i.mostRecentlyFocusedNode,isBackward:a.isKeyBackward(i.recentNavEvent)})),b(o||i.mostRecentlyFocusedNode||f())}i.recentNavEvent=void 0},A=function(e){if(("Escape"===(null==(t=e)?void 0:t.key)||"Esc"===(null==t?void 0:t.key)||27===(null==t?void 0:t.keyCode))&&!1!==x(a.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();var t;(a.isKeyForward(e)||a.isKeyBackward(e))&&function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i.recentNavEvent=e;var n=E({event:e,isBackward:t});n&&(C(e)&&e.preventDefault(),b(n))}(e,a.isKeyBackward(e))},j=function(e){var t=I(e);l(t,e)>=0||x(a.clickOutsideDeactivates,e)||x(a.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},_=function(){if(i.active)return function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var o=e.indexOf(t);-1===o||e.splice(o,1),e.push(t)}(r,n),i.delayInitialFocusTimer=a.delayInitialFocus?D((function(){b(f())})):b(f()),o.addEventListener("focusin",F,!0),o.addEventListener("mousedown",S,{capture:!0,passive:!1}),o.addEventListener("touchstart",S,{capture:!0,passive:!1}),o.addEventListener("click",j,{capture:!0,passive:!1}),o.addEventListener("keydown",A,{capture:!0,passive:!1}),n},G=function(){if(i.active)return o.removeEventListener("focusin",F,!0),o.removeEventListener("mousedown",S,!0),o.removeEventListener("touchstart",S,!0),o.removeEventListener("click",j,!0),o.removeEventListener("keydown",A,!0),n},B="undefined"!=typeof window&&"MutationObserver"in window?new MutationObserver((function(e){e.some((function(e){return Array.from(e.removedNodes).some((function(e){return e===i.mostRecentlyFocusedNode}))}))&&b(f())})):void 0,M=function(){B&&(B.disconnect(),i.active&&!i.paused&&i.containers.map((function(e){B.observe(e,{subtree:!0,childList:!0})})))};return(n={get active(){return i.active},get paused(){return i.paused},activate:function(e){if(i.active)return this;var t=c(e,"onActivate"),n=c(e,"onPostActivate"),r=c(e,"checkCanFocusTrap");r||v(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=o.activeElement,null==t||t();var a=function(){r&&v(),_(),M(),null==n||n()};return r?(r(i.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(e){if(!i.active)return this;var t=T({onDeactivate:a.onDeactivate,onPostDeactivate:a.onPostDeactivate,checkCanReturnFocus:a.checkCanReturnFocus},e);clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,G(),i.active=!1,i.paused=!1,M(),function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}(r,n);var o=c(t,"onDeactivate"),l=c(t,"onPostDeactivate"),s=c(t,"checkCanReturnFocus"),u=c(t,"returnFocus","returnFocusOnDeactivate");null==o||o();var d=function(){D((function(){u&&b(m(i.nodeFocusedBeforeActivation)),null==l||l()}))};return u&&s?(s(m(i.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(e){if(i.paused||!i.active)return this;var t=c(e,"onPause"),n=c(e,"onPostPause");return i.paused=!0,null==t||t(),G(),M(),null==n||n(),this},unpause:function(e){if(!i.paused||!i.active)return this;var t=c(e,"onUnpause"),n=c(e,"onPostUnpause");return i.paused=!1,null==t||t(),v(),_(),M(),null==n||n(),this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return i.containers=t.map((function(e){return"string"==typeof e?o.querySelector(e):e})),i.active&&v(),M(),this}}).updateContainerElements(e),n},j=n(28416),_=n.n(j);const G=(0,j.forwardRef)((function(e,t){var{active:n=!0,paused:r=!1,focusTrapOptions:a={},preventScrollOnDeactivate:i=!1}=e,c=(0,o._T)(e,["active","paused","focusTrapOptions","preventScrollOnDeactivate"]);const l=(0,j.useRef)(null);(0,j.useImperativeHandle)(t,(()=>l.current));const s=(0,j.useRef)(null);(0,j.useEffect)((()=>{const e=A(l.current,Object.assign(Object.assign({},a),{returnFocusOnDeactivate:!1}));return s.current=e,()=>{e.deactivate()}}),[]),(0,j.useEffect)((()=>{const e=s.current;n?null==e||e.activate():null==e||e.deactivate()}),[n]),(0,j.useEffect)((()=>{const e=s.current;r?null==e||e.pause():null==e||e.unpause()}),[r]);const u=(0,j.useRef)("undefined"!=typeof document?document.activeElement:null);return function(e){const t=(0,j.useRef)(e);t.current=e,(0,j.useEffect)((()=>()=>{t.current()}),[])}((()=>{!1!==a.returnFocusOnDeactivate&&u.current instanceof HTMLElement&&u.current.focus({preventScroll:i})})),_().createElement("div",Object.assign({ref:l},c))}));G.displayName="FocusTrap"},24307:(e,t,n)=>{n.d(t,{ZP:()=>o});const o=(0,n(40400).I)({name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0})}}]);
//# sourceMappingURL=../sourcemaps/6043.1c3e48108de4f26b8a172236fb8c4dfe.js.map