(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(237)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),u=n(1978),a=n(2139),f=n(7795),c=n(670),i=n(4465),s=n(2692),d=n(8245),p=n(9246),h=n(227),v=n(3468);let y=new Set;function b(e,t,n,r,o){if(o||a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(y.has(l))return;y.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function _(e){return"string"==typeof e?e:f.formatUrl(e)}let g=l.default.forwardRef(function(e,t){let n,r;let{href:f,as:y,children:g,prefetch:m,passHref:x,replace:j,shallow:C,scroll:M,locale:E,onClick:k,onMouseEnter:w,onTouchStart:O,legacyBehavior:P=!1}=e,N=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,P&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let L=!1!==m,T=l.default.useContext(s.RouterContext),I=l.default.useContext(d.AppRouterContext),R=null!=T?T:I,S=!T,{href:U,as:A}=l.default.useMemo(()=>{if(!T){let e=_(f);return{href:e,as:y?_(y):e}}let[e,t]=u.resolveHref(T,f,!0);return{href:e,as:y?u.resolveHref(T,y):t||e}},[T,f,y]),D=l.default.useRef(U),K=l.default.useRef(A);P&&(r=l.default.Children.only(n));let H=P?r&&"object"==typeof r&&r.ref:t,[B,X,Z]=p.useIntersection({rootMargin:"200px"}),q=l.default.useCallback(e=>{(K.current!==A||D.current!==U)&&(Z(),K.current=A,D.current=U),B(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[A,H,U,Z,B]);l.default.useEffect(()=>{R&&X&&L&&b(R,U,A,{locale:E},S)},[A,U,X,E,L,null==T?void 0:T.locale,R,S]);let z={ref:q,onClick(e){P||"function"!=typeof k||k(e),P&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,r,o,u,f,c,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i&&!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:c,scroll:f}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!s})};i?l.default.startTransition(h):h()}(e,R,U,A,j,C,M,E,S,L)},onMouseEnter(e){P||"function"!=typeof w||w(e),P&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&(L||!S)&&b(R,U,A,{locale:E,priority:!0,bypassPrefetchedCheck:!0},S)},onTouchStart(e){P||"function"!=typeof O||O(e),P&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&(L||!S)&&b(R,U,A,{locale:E,priority:!0,bypassPrefetchedCheck:!0},S)}};if(c.isAbsoluteUrl(A))z.href=A;else if(!P||x||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&h.getDomainLocale(A,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);z.href=t||v.addBasePath(i.addLocale(A,e,null==T?void 0:T.defaultLocale))}return P?l.default.cloneElement(r,z):l.default.createElement("a",Object.assign({},N,z),n)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:f}=e,c=f||!l,[i,s]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(l){if(c||i)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!i){let e=o.requestIdleCallback(()=>s(!0));return()=>o.cancelIdleCallback(e)}},[c,n,t,i,d.current]);let h=r.useCallback(()=>{s(!1)},[]);return[p,i,h]};var r=n(7294),o=n(4686);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},237:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);n(9062);var o=n(1664),l=n.n(o);function u(){return(0,r.jsx)("header",{className:"bg-blue-500 w-full h-12 flex items-center",children:(0,r.jsx)(l(),{href:"/",className:"px-2 font-bold",children:"Inventory System"})})}function a(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)("div",{className:"w-full min-h-screen flex flex-col",children:[(0,r.jsx)(u,{}),(0,r.jsx)("main",{className:"w-full flex-1 flex",children:(0,r.jsx)(t,{...n})})]})}},9062:function(){},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(3837),t(880)}),_N_E=e.O()}]);