(self.webpackChunkocp_vulnerability_frontend=self.webpackChunkocp_vulnerability_frontend||[]).push([[219],{5826:n=>{n.exports=Array.isArray||function(n){return"[object Array]"==Object.prototype.toString.call(n)}},4779:(n,t,e)=>{var r=e(5826);n.exports=function n(t,e,o){return r(e)||(o=e||o,e=[]),o=o||{},t instanceof RegExp?function(n,t){var e=n.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(n,t)}(t,e):r(t)?function(t,e,r){for(var o=[],i=0;i<t.length;i++)o.push(n(t[i],e,r).source);return l(new RegExp("(?:"+o.join("|")+")",f(r)),e)}(t,e,o):function(n,t,e){return p(i(n,e),t,e)}(t,e,o)},n.exports.parse=i,n.exports.compile=function(n,t){return c(i(n,t),t)},n.exports.tokensToFunction=c,n.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(n,t){for(var e,r=[],i=0,a=0,c="",l=t&&t.delimiter||"/";null!=(e=o.exec(n));){var f=e[0],p=e[1],h=e.index;if(c+=n.slice(a,h),a=h+f.length,p)c+=p[1];else{var d=n[a],v=e[2],m=e[3],y=e[4],g=e[5],w=e[6],x=e[7];c&&(r.push(c),c="");var b=null!=v&&null!=d&&d!==v,E="+"===w||"*"===w,P="?"===w||"*"===w,C=e[2]||l,O=y||g;r.push({name:m||i++,prefix:v||"",delimiter:C,optional:P,repeat:E,partial:b,asterisk:!!x,pattern:O?s(O):x?".*":"[^"+u(C)+"]+?"})}}return a<n.length&&(c+=n.substr(a)),c&&r.push(c),r}function a(n){return encodeURI(n).replace(/[\/?#]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()}))}function c(n,t){for(var e=new Array(n.length),o=0;o<n.length;o++)"object"==typeof n[o]&&(e[o]=new RegExp("^(?:"+n[o].pattern+")$",f(t)));return function(t,o){for(var i="",c=t||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<n.length;s++){var l=n[s];if("string"!=typeof l){var f,p=c[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=u(p[h]),!e[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===h?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})):u(p),!e[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function u(n){return n.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(n){return n.replace(/([=!:$\/()])/g,"\\$1")}function l(n,t){return n.keys=t,n}function f(n){return n&&n.sensitive?"":"i"}function p(n,t,e){r(t)||(e=t||e,t=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<n.length;c++){var s=n[c];if("string"==typeof s)a+=u(s);else{var p=u(s.prefix),h="(?:"+s.pattern+")";t.push(s),s.repeat&&(h+="(?:"+p+h+")*"),a+=h=s.optional?s.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=u(e.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",l(new RegExp("^"+a,f(e)),t)}},2703:(n,t,e)=>{"use strict";var r=e(414);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,t,e,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return n}n.isRequired=n;var e={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return e.PropTypes=e,e}},5697:(n,t,e)=>{n.exports=e(2703)()},414:n=>{"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},219:(n,t,e)=>{"use strict";function r(n,t){return r=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},r(n,t)}function o(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,r(n,t)}e.r(t),e.d(t,{BrowserRouter:()=>bn,HashRouter:()=>En,Link:()=>An,MemoryRouter:()=>Y,NavLink:()=>Ln,Prompt:()=>Q,Redirect:()=>en,Route:()=>cn,Router:()=>G,StaticRouter:()=>hn,Switch:()=>dn,generatePath:()=>tn,matchPath:()=>an,useHistory:()=>yn,useLocation:()=>gn,useParams:()=>wn,useRouteMatch:()=>xn,withRouter:()=>vn});var i=e(3264),a=e.n(i),c=e(7462);function u(n){return"/"===n.charAt(0)}function s(n,t){for(var e=t,r=e+1,o=n.length;r<o;e+=1,r+=1)n[e]=n[r];n.pop()}function l(n){return n.valueOf?n.valueOf():Object.prototype.valueOf.call(n)}const f=function n(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every((function(t,r){return n(t,e[r])}));if("object"==typeof t||"object"==typeof e){var r=l(t),o=l(e);return r!==t||o!==e?n(r,o):Object.keys(Object.assign({},t,e)).every((function(r){return n(t[r],e[r])}))}return!1};const p=function(n,t){if(!n)throw new Error("Invariant failed")};function h(n){return"/"===n.charAt(0)?n:"/"+n}function d(n){return"/"===n.charAt(0)?n.substr(1):n}function v(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function m(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function y(n){var t=n.pathname,e=n.search,r=n.hash,o=t||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function g(n,t,e,r){var o;"string"==typeof n?(o=function(n){var t=n||"/",e="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(e=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===e?"":e,hash:"#"===r?"":r}}(n),o.state=t):(void 0===(o=(0,c.Z)({},n)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(n){throw n instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):n}return e&&(o.key=e),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=function(n,t){void 0===t&&(t="");var e,r=n&&n.split("/")||[],o=t&&t.split("/")||[],i=n&&u(n),a=t&&u(t),c=i||a;if(n&&u(n)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var l=o[o.length-1];e="."===l||".."===l||""===l}else e=!1;for(var f=0,p=o.length;p>=0;p--){var h=o[p];"."===h?s(o,p):".."===h?(s(o,p),f++):f&&(s(o,p),f--)}if(!c)for(;f--;f)o.unshift("..");!c||""===o[0]||o[0]&&u(o[0])||o.unshift("");var d=o.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d}(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function w(){var n=null,t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,r,o){if(null!=n){var i="function"==typeof n?n(t,e):n;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(n){var e=!0;function r(){e&&n.apply(void 0,arguments)}return t.push(r),function(){e=!1,t=t.filter((function(n){return n!==r}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];t.forEach((function(n){return n.apply(void 0,e)}))}}}var x=!("undefined"==typeof window||!window.document||!window.document.createElement);function b(n,t){t(window.confirm(n))}var E="popstate",P="hashchange";function C(){try{return window.history.state||{}}catch(n){return{}}}function O(n){void 0===n&&(n={}),x||p(!1);var t,e=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=n,a=i.forceRefresh,u=void 0!==a&&a,s=i.getUserConfirmation,l=void 0===s?b:s,f=i.keyLength,d=void 0===f?6:f,O=n.basename?m(h(n.basename)):"";function k(n){var t=n||{},e=t.key,r=t.state,o=window.location,i=o.pathname+o.search+o.hash;return O&&(i=v(i,O)),g(i,r,e)}function R(){return Math.random().toString(36).substr(2,d)}var A=w();function T(n){(0,c.Z)(W,n),W.length=e.length,A.notifyListeners(W.location,W.action)}function _(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||S(k(n.state))}function L(){S(k(C()))}var U=!1;function S(n){U?(U=!1,T()):A.confirmTransitionTo(n,"POP",l,(function(t){t?T({action:"POP",location:n}):function(n){var t=W.location,e=Z.indexOf(t.key);-1===e&&(e=0);var r=Z.indexOf(n.key);-1===r&&(r=0);var o=e-r;o&&(U=!0,I(o))}(n)}))}var M=k(C()),Z=[M.key];function j(n){return O+y(n)}function I(n){e.go(n)}var B=0;function H(n){1===(B+=n)&&1===n?(window.addEventListener(E,_),o&&window.addEventListener(P,L)):0===B&&(window.removeEventListener(E,_),o&&window.removeEventListener(P,L))}var N=!1,W={length:e.length,action:"POP",location:M,createHref:j,push:function(n,t){var o="PUSH",i=g(n,t,R(),W.location);A.confirmTransitionTo(i,o,l,(function(n){if(n){var t=j(i),a=i.key,c=i.state;if(r)if(e.pushState({key:a,state:c},null,t),u)window.location.href=t;else{var s=Z.indexOf(W.location.key),l=Z.slice(0,s+1);l.push(i.key),Z=l,T({action:o,location:i})}else window.location.href=t}}))},replace:function(n,t){var o="REPLACE",i=g(n,t,R(),W.location);A.confirmTransitionTo(i,o,l,(function(n){if(n){var t=j(i),a=i.key,c=i.state;if(r)if(e.replaceState({key:a,state:c},null,t),u)window.location.replace(t);else{var s=Z.indexOf(W.location.key);-1!==s&&(Z[s]=i.key),T({action:o,location:i})}else window.location.replace(t)}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(n){void 0===n&&(n=!1);var t=A.setPrompt(n);return N||(H(1),N=!0),function(){return N&&(N=!1,H(-1)),t()}},listen:function(n){var t=A.appendListener(n);return H(1),function(){H(-1),t()}}};return W}var k="hashchange",R={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+d(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:d,decodePath:h},slash:{encodePath:h,decodePath:h}};function A(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function T(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function _(n){window.location.replace(A(window.location.href)+"#"+n)}function L(n){void 0===n&&(n={}),x||p(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),r=e.getUserConfirmation,o=void 0===r?b:r,i=e.hashType,a=void 0===i?"slash":i,u=n.basename?m(h(n.basename)):"",s=R[a],l=s.encodePath,f=s.decodePath;function d(){var n=f(T());return u&&(n=v(n,u)),g(n)}var E=w();function P(n){(0,c.Z)(N,n),N.length=t.length,E.notifyListeners(N.location,N.action)}var C=!1,O=null;function L(){var n,t,e=T(),r=l(e);if(e!==r)_(r);else{var i=d(),a=N.location;if(!C&&(t=i,(n=a).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(O===y(i))return;O=null,function(n){if(C)C=!1,P();else{E.confirmTransitionTo(n,"POP",o,(function(t){t?P({action:"POP",location:n}):function(n){var t=N.location,e=Z.lastIndexOf(y(t));-1===e&&(e=0);var r=Z.lastIndexOf(y(n));-1===r&&(r=0);var o=e-r;o&&(C=!0,j(o))}(n)}))}}(i)}}var U=T(),S=l(U);U!==S&&_(S);var M=d(),Z=[y(M)];function j(n){t.go(n)}var I=0;function B(n){1===(I+=n)&&1===n?window.addEventListener(k,L):0===I&&window.removeEventListener(k,L)}var H=!1,N={length:t.length,action:"POP",location:M,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=A(window.location.href)),e+"#"+l(u+y(n))},push:function(n,t){var e="PUSH",r=g(n,void 0,void 0,N.location);E.confirmTransitionTo(r,e,o,(function(n){if(n){var t=y(r),o=l(u+t);if(T()!==o){O=t,function(n){window.location.hash=n}(o);var i=Z.lastIndexOf(y(N.location)),a=Z.slice(0,i+1);a.push(t),Z=a,P({action:e,location:r})}else P()}}))},replace:function(n,t){var e="REPLACE",r=g(n,void 0,void 0,N.location);E.confirmTransitionTo(r,e,o,(function(n){if(n){var t=y(r),o=l(u+t);T()!==o&&(O=t,_(o));var i=Z.indexOf(y(N.location));-1!==i&&(Z[i]=t),P({action:e,location:r})}}))},go:j,goBack:function(){j(-1)},goForward:function(){j(1)},block:function(n){void 0===n&&(n=!1);var t=E.setPrompt(n);return H||(B(1),H=!0),function(){return H&&(H=!1,B(-1)),t()}},listen:function(n){var t=E.appendListener(n);return B(1),function(){B(-1),t()}}};return N}function U(n,t,e){return Math.min(Math.max(n,t),e)}function S(n){void 0===n&&(n={});var t=n,e=t.getUserConfirmation,r=t.initialEntries,o=void 0===r?["/"]:r,i=t.initialIndex,a=void 0===i?0:i,u=t.keyLength,s=void 0===u?6:u,l=w();function f(n){(0,c.Z)(x,n),x.length=x.entries.length,l.notifyListeners(x.location,x.action)}function p(){return Math.random().toString(36).substr(2,s)}var h=U(a,0,o.length-1),d=o.map((function(n){return g(n,void 0,"string"==typeof n?p():n.key||p())})),v=y;function m(n){var t=U(x.index+n,0,x.entries.length-1),r=x.entries[t];l.confirmTransitionTo(r,"POP",e,(function(n){n?f({action:"POP",location:r,index:t}):f()}))}var x={length:d.length,action:"POP",location:d[h],index:h,entries:d,createHref:v,push:function(n,t){var r="PUSH",o=g(n,t,p(),x.location);l.confirmTransitionTo(o,r,e,(function(n){if(n){var t=x.index+1,e=x.entries.slice(0);e.length>t?e.splice(t,e.length-t,o):e.push(o),f({action:r,location:o,index:t,entries:e})}}))},replace:function(n,t){var r="REPLACE",o=g(n,t,p(),x.location);l.confirmTransitionTo(o,r,e,(function(n){n&&(x.entries[x.index]=o,f({action:r,location:o}))}))},go:m,goBack:function(){m(-1)},goForward:function(){m(1)},canGo:function(n){var t=x.index+n;return t>=0&&t<x.entries.length},block:function(n){return void 0===n&&(n=!1),l.setPrompt(n)},listen:function(n){return l.appendListener(n)}};return x}var M=e(5697),Z=e.n(M),j=1073741823,I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:{};function B(n){var t=[];return{on:function(n){t.push(n)},off:function(n){t=t.filter((function(t){return t!==n}))},get:function(){return n},set:function(e,r){n=e,t.forEach((function(t){return t(n,r)}))}}}const H=a().createContext||function(n,t){var e,r,a,c="__create-react-context-"+((I[a="__global_unique_id__"]=(I[a]||0)+1)+"__"),u=function(n){function e(){var t;return(t=n.apply(this,arguments)||this).emitter=B(t.props.value),t}o(e,n);var r=e.prototype;return r.getChildContext=function(){var n;return(n={})[c]=this.emitter,n},r.componentWillReceiveProps=function(n){if(this.props.value!==n.value){var e,r=this.props.value,o=n.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof t?t(r,o):j,0!=(e|=0)&&this.emitter.set(n.value,e))}var i,a},r.render=function(){return this.props.children},e}(i.Component);u.childContextTypes=((e={})[c]=Z().object.isRequired,e);var s=function(t){function e(){var n;return(n=t.apply(this,arguments)||this).state={value:n.getValue()},n.onUpdate=function(t,e){0!=((0|n.observedBits)&e)&&n.setState({value:n.getValue()})},n}o(e,t);var r=e.prototype;return r.componentWillReceiveProps=function(n){var t=n.observedBits;this.observedBits=null==t?j:t},r.componentDidMount=function(){this.context[c]&&this.context[c].on(this.onUpdate);var n=this.props.observedBits;this.observedBits=null==n?j:n},r.componentWillUnmount=function(){this.context[c]&&this.context[c].off(this.onUpdate)},r.getValue=function(){return this.context[c]?this.context[c].get():n},r.render=function(){return(n=this.props.children,Array.isArray(n)?n[0]:n)(this.state.value);var n},e}(i.Component);return s.contextTypes=((r={})[c]=Z().object,r),{Provider:u,Consumer:s}};var N=e(4779),W=e.n(N),$=(e(9864),e(3366)),D=e(8679),F=e.n(D),V=function(n){var t=H();return t.displayName=n,t},q=V("Router-History"),K=function(n){var t=H();return t.displayName=n,t},J=K("Router"),G=function(n){function t(t){var e;return(e=n.call(this,t)||this).state={location:t.history.location},e._isMounted=!1,e._pendingLocation=null,t.staticContext||(e.unlisten=t.history.listen((function(n){e._isMounted?e.setState({location:n}):e._pendingLocation=n}))),e}o(t,n),t.computeRootMatch=function(n){return{path:"/",url:"/",params:{},isExact:"/"===n}};var e=t.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&this.unlisten()},e.render=function(){return a().createElement(J.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},a().createElement(q.Provider,{children:this.props.children||null,value:this.props.history}))},t}(a().Component),Y=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=S(t.props),t}return o(t,n),t.prototype.render=function(){return a().createElement(G,{history:this.history,children:this.props.children})},t}(a().Component),z=function(n){function t(){return n.apply(this,arguments)||this}o(t,n);var e=t.prototype;return e.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},e.componentDidUpdate=function(n){this.props.onUpdate&&this.props.onUpdate.call(this,this,n)},e.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},e.render=function(){return null},t}(a().Component);function Q(n){var t=n.message,e=n.when,r=void 0===e||e;return a().createElement(J.Consumer,null,(function(n){if(n||p(!1),!r||n.staticContext)return null;var e=n.history.block;return a().createElement(z,{onMount:function(n){n.release=e(t)},onUpdate:function(n,r){r.message!==t&&(n.release(),n.release=e(t))},onUnmount:function(n){n.release()},message:t})}))}var X={},nn=0;function tn(n,t){return void 0===n&&(n="/"),void 0===t&&(t={}),"/"===n?n:function(n){if(X[n])return X[n];var t=W().compile(n);return nn<1e4&&(X[n]=t,nn++),t}(n)(t,{pretty:!0})}function en(n){var t=n.computedMatch,e=n.to,r=n.push,o=void 0!==r&&r;return a().createElement(J.Consumer,null,(function(n){n||p(!1);var r=n.history,i=n.staticContext,u=o?r.push:r.replace,s=g(t?"string"==typeof e?tn(e,t.params):(0,c.Z)({},e,{pathname:tn(e.pathname,t.params)}):e);return i?(u(s),null):a().createElement(z,{onMount:function(){u(s)},onUpdate:function(n,t){var e,r,o=g(t.to);e=o,r=(0,c.Z)({},s,{key:o.key}),e.pathname===r.pathname&&e.search===r.search&&e.hash===r.hash&&e.key===r.key&&f(e.state,r.state)||u(s)},to:e})}))}var rn={},on=0;function an(n,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var e=t,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(t,e){if(!e&&""!==e)return null;if(t)return t;var r=function(n,t){var e=""+t.end+t.strict+t.sensitive,r=rn[e]||(rn[e]={});if(r[n])return r[n];var o=[],i={regexp:W()(n,o,t),keys:o};return on<1e4&&(r[n]=i,on++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(n);if(!u)return null;var l=u[0],f=u.slice(1),p=n===l;return i&&!p?null:{path:e,url:"/"===e&&""===l?"/":l,isExact:p,params:a.reduce((function(n,t,e){return n[t.name]=f[e],n}),{})}}),null)}var cn=function(n){function t(){return n.apply(this,arguments)||this}return o(t,n),t.prototype.render=function(){var n=this;return a().createElement(J.Consumer,null,(function(t){t||p(!1);var e=n.props.location||t.location,r=n.props.computedMatch?n.props.computedMatch:n.props.path?an(e.pathname,n.props):t.match,o=(0,c.Z)({},t,{location:e,match:r}),i=n.props,u=i.children,s=i.component,l=i.render;return Array.isArray(u)&&0===u.length&&(u=null),a().createElement(J.Provider,{value:o},o.match?u?"function"==typeof u?u(o):u:s?a().createElement(s,o):l?l(o):null:"function"==typeof u?u(o):null)}))},t}(a().Component);function un(n){return"/"===n.charAt(0)?n:"/"+n}function sn(n,t){if(!n)return t;var e=un(n);return 0!==t.pathname.indexOf(e)?t:(0,c.Z)({},t,{pathname:t.pathname.substr(e.length)})}function ln(n){return"string"==typeof n?n:y(n)}function fn(n){return function(){p(!1)}}function pn(){}var hn=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).handlePush=function(n){return t.navigateTo(n,"PUSH")},t.handleReplace=function(n){return t.navigateTo(n,"REPLACE")},t.handleListen=function(){return pn},t.handleBlock=function(){return pn},t}o(t,n);var e=t.prototype;return e.navigateTo=function(n,t){var e=this.props,r=e.basename,o=void 0===r?"":r,i=e.context,a=void 0===i?{}:i;a.action=t,a.location=function(n,t){return n?(0,c.Z)({},t,{pathname:un(n)+t.pathname}):t}(o,g(n)),a.url=ln(a.location)},e.render=function(){var n=this.props,t=n.basename,e=void 0===t?"":t,r=n.context,o=void 0===r?{}:r,i=n.location,u=void 0===i?"/":i,s=(0,$.Z)(n,["basename","context","location"]),l={createHref:function(n){return un(e+ln(n))},action:"POP",location:sn(e,g(u)),push:this.handlePush,replace:this.handleReplace,go:fn(),goBack:fn(),goForward:fn(),listen:this.handleListen,block:this.handleBlock};return a().createElement(G,(0,c.Z)({},s,{history:l,staticContext:o}))},t}(a().Component),dn=function(n){function t(){return n.apply(this,arguments)||this}return o(t,n),t.prototype.render=function(){var n=this;return a().createElement(J.Consumer,null,(function(t){t||p(!1);var e,r,o=n.props.location||t.location;return a().Children.forEach(n.props.children,(function(n){if(null==r&&a().isValidElement(n)){e=n;var i=n.props.path||n.props.from;r=i?an(o.pathname,(0,c.Z)({},n.props,{path:i})):t.match}})),r?a().cloneElement(e,{location:o,computedMatch:r}):null}))},t}(a().Component);function vn(n){var t="withRouter("+(n.displayName||n.name)+")",e=function(t){var e=t.wrappedComponentRef,r=(0,$.Z)(t,["wrappedComponentRef"]);return a().createElement(J.Consumer,null,(function(t){return t||p(!1),a().createElement(n,(0,c.Z)({},r,t,{ref:e}))}))};return e.displayName=t,e.WrappedComponent=n,F()(e,n)}var mn=a().useContext;function yn(){return mn(q)}function gn(){return mn(J).location}function wn(){var n=mn(J).match;return n?n.params:{}}function xn(n){var t=gn(),e=mn(J).match;return n?an(t.pathname,n):e}var bn=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=O(t.props),t}return o(t,n),t.prototype.render=function(){return a().createElement(G,{history:this.history,children:this.props.children})},t}(a().Component),En=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=L(t.props),t}return o(t,n),t.prototype.render=function(){return a().createElement(G,{history:this.history,children:this.props.children})},t}(a().Component),Pn=function(n,t){return"function"==typeof n?n(t):n},Cn=function(n,t){return"string"==typeof n?g(n,null,null,t):n},On=function(n){return n},kn=a().forwardRef;void 0===kn&&(kn=On);var Rn=kn((function(n,t){var e=n.innerRef,r=n.navigate,o=n.onClick,i=(0,$.Z)(n,["innerRef","navigate","onClick"]),u=i.target,s=(0,c.Z)({},i,{onClick:function(n){try{o&&o(n)}catch(t){throw n.preventDefault(),t}n.defaultPrevented||0!==n.button||u&&"_self"!==u||function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}(n)||(n.preventDefault(),r())}});return s.ref=On!==kn&&t||e,a().createElement("a",s)})),An=kn((function(n,t){var e=n.component,r=void 0===e?Rn:e,o=n.replace,i=n.to,u=n.innerRef,s=(0,$.Z)(n,["component","replace","to","innerRef"]);return a().createElement(J.Consumer,null,(function(n){n||p(!1);var e=n.history,l=Cn(Pn(i,n.location),n.location),f=l?e.createHref(l):"",h=(0,c.Z)({},s,{href:f,navigate:function(){var t=Pn(i,n.location);(o?e.replace:e.push)(t)}});return On!==kn?h.ref=t||u:h.innerRef=u,a().createElement(r,h)}))})),Tn=function(n){return n},_n=a().forwardRef;void 0===_n&&(_n=Tn);var Ln=_n((function(n,t){var e=n["aria-current"],r=void 0===e?"page":e,o=n.activeClassName,i=void 0===o?"active":o,u=n.activeStyle,s=n.className,l=n.exact,f=n.isActive,h=n.location,d=n.sensitive,v=n.strict,m=n.style,y=n.to,g=n.innerRef,w=(0,$.Z)(n,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a().createElement(J.Consumer,null,(function(n){n||p(!1);var e=h||n.location,o=Cn(Pn(y,e),e),x=o.pathname,b=x&&x.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),E=b?an(e.pathname,{path:b,exact:l,sensitive:d,strict:v}):null,P=!!(f?f(E,e):E),C=P?function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter((function(n){return n})).join(" ")}(s,i):s,O=P?(0,c.Z)({},m,{},u):m,k=(0,c.Z)({"aria-current":P&&r||null,className:C,style:O,to:o},w);return Tn!==_n?k.ref=t||g:k.innerRef=g,a().createElement(An,k)}))}))}}]);
//# sourceMappingURL=../sourcemaps/219.a3bd76c067ceaca79f8a06b8204aee87.js.map