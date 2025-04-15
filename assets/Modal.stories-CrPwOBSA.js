import{j as c}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u,e as T}from"./index-DubqEmGm.js";import{c as fe}from"./clsx-B-dksMZM.js";import{I as bn}from"./IconButton-f6n5TEtZ.js";import{C as wn}from"./Close-FGPrTY3A.js";import{_ as Se,a as xn,b as Cn,c as Mn,S as Sn}from"./Select-C-bengt5.js";import{a as B,b as mt,c as On}from"./tslib.es6-BUas5LQb.js";import{P as En}from"./Portal-BD7l88-r.js";import{T as Fn,s as et}from"./index-C4WZCKW5.js";import{B as E}from"./Button-CHrSvQDw.js";import{T as pt}from"./Tooltip-DlQsDSkD.js";import{D as _n}from"./DatePicker-C0eDUgcq.js";import{I as kn}from"./Input-CkFPTCde.js";import"./index-yBjzXJbu.js";import"./index-7zOkDzdb.js";import"./index-Cljcv3Ef.js";import"./SvgIcon-APGatIbJ.js";import"./index-CD8QLViS.js";import"./index-CJ88nXQk.js";import"./floating-ui.react-M7Gz8XYl.js";import"./Dropdown-COQUELEN.js";import"./useInputErrorMessages-C2xlH_df.js";import"./Error-li26Yj3Y.js";import"./Info-C8x1KHs8.js";import"./Warning-DUKJc5Ha.js";import"./Popover-DFSes0g6.js";import"./useMergeRefs-CZnCAFkU.js";import"./BaseDatePicker-EouBc_eM.js";import"./CaretRight-COmzj0PB.js";import"./Flex-EEZibEms.js";const Tn="_header_uu1w2_1",Nn="_title_uu1w2_8",In="_main_uu1w2_15",Bn="_mainOverFlow_uu1w2_19",Dn="_footer_uu1w2_25",Rn="_content_uu1w2_32",Pn="_actions_uu1w2_77",Vn="_dialogOverlay_uu1w2_88",jn="_dialog_uu1w2_88",Ln="_small_uu1w2_121",An="_wide_uu1w2_130",N={header:Tn,title:Nn,main:In,mainOverFlow:Bn,footer:Dn,content:Rn,actions:Pn,dialogOverlay:Vn,dialog:jn,small:Ln,wide:An,default:"_default_uu1w2_139"},Oe=e=>{const[t,n]=u.useState(!1);return u.useLayoutEffect(()=>{const{current:r}=e;if(!r)return;const o=new ResizeObserver(()=>{n(r.scrollHeight>r.clientHeight)});return o.observe(r),()=>{o.disconnect()}},[e]),t},U=({children:e,className:t})=>{const n=u.useRef(null),r=Oe(n);return c.jsx("div",{ref:n,className:fe(N.main,t,{[N.mainOverFlow]:r}),children:e})};try{Oe.displayName="useIsOverflow",Oe.__docgenInfo={description:"",displayName:"useIsOverflow",props:{}}}catch{}try{U.displayName="ModalBody",U.__docgenInfo={description:"",displayName:"ModalBody",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const X=({children:e,className:t})=>c.jsx("footer",{className:fe(N.footer,t),children:e});try{X.displayName="ModalFooter",X.__docgenInfo={description:"",displayName:"ModalFooter",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const qn=()=>{},vt=u.createContext({onClose:qn}),{Provider:Ee}=vt;try{Ee.displayName="Provider",Ee.__docgenInfo={description:"",displayName:"Provider",props:{}}}catch{}const Fe=({className:e})=>{const{onClose:t}=u.useContext(vt);return c.jsx(bn,{ariaLabel:"Close dialog",tooltipOverride:"Close",onClick:t,className:e,disableTooltipOnFocus:!0,children:c.jsx(wn,{})})};try{Fe.displayName="ModalCloseButton",Fe.__docgenInfo={description:"",displayName:"ModalCloseButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const G=({children:e,className:t})=>c.jsxs("header",{className:fe(N.header,t),children:[c.jsx("h2",{className:N.title,children:e}),c.jsx(Fe,{})]});try{G.displayName="ModalHeader",G.__docgenInfo={description:"",displayName:"ModalHeader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}var _e="data-focus-lock",ht="data-focus-lock-disabled",Wn="data-no-focus-lock",Hn="data-autofocus-inside",Un="data-no-autofocus";function ge(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Gn(e,t){var n=u.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var zn=typeof window<"u"?u.useLayoutEffect:u.useEffect,tt=new WeakMap;function gt(e,t){var n=Gn(null,function(r){return e.forEach(function(o){return ge(o,r)})});return zn(function(){var r=tt.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(l){a.has(l)||ge(l,null)}),a.forEach(function(l){o.has(l)||ge(l,i)})}tt.set(n,e)},[e]),n}var ye={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"};function yt(e){return e}function bt(e,t){t===void 0&&(t=yt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(l){return l!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(l){return a(l)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var l=n;n=[],l.forEach(a),i=n}var f=function(){var g=i;i=[],g.forEach(a)},d=function(){return Promise.resolve().then(f)};d(),n={push:function(g){i.push(g),d()},filter:function(g){return i=i.filter(g),n}}}};return o}function Re(e,t){return t===void 0&&(t=yt),bt(e,t)}function wt(e){e===void 0&&(e={});var t=bt(null);return t.options=B({async:!0,ssr:!1},e),t}var xt=function(e){var t=e.sideCar,n=mt(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return u.createElement(r,B({},n))};xt.isSideCarExport=!0;function $n(e,t){return e.useMedium(t),xt}var Ct=Re({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),Mt=Re(),Yn=Re(),Xn=wt({async:!0,ssr:typeof document<"u"}),Zn=u.createContext(void 0),Qn=[],Pe=u.forwardRef(function(t,n){var r,o=u.useState(),a=o[0],i=o[1],l=u.useRef(),f=u.useRef(!1),d=u.useRef(null),g=u.useState({}),p=g[1],m=t.children,y=t.disabled,h=y===void 0?!1:y,s=t.noFocusGuards,v=s===void 0?!1:s,x=t.persistentFocus,w=x===void 0?!1:x,b=t.crossFrame,M=b===void 0?!0:b,C=t.autoFocus,O=C===void 0?!0:C;t.allowTextSelection;var F=t.group,I=t.className,J=t.whiteList,tn=t.hasPositiveIndices,Ye=t.shards,pe=Ye===void 0?Qn:Ye,Xe=t.as,nn=Xe===void 0?"div":Xe,Ze=t.lockProps,rn=Ze===void 0?{}:Ze,on=t.sideCar,Qe=t.returnFocus,ee=Qe===void 0?!1:Qe,an=t.focusOptions,ve=t.onActivation,he=t.onDeactivation,ln=u.useState({}),un=ln[0],sn=u.useCallback(function(k){var V=k.captureFocusRestore;if(!d.current){var j,D=(j=document)==null?void 0:j.activeElement;d.current=D,D!==document.body&&(d.current=V(D))}l.current&&ve&&ve(l.current),f.current=!0,p()},[ve]),cn=u.useCallback(function(){f.current=!1,he&&he(l.current),p()},[he]),dn=u.useCallback(function(k){var V=d.current;if(V){var j=(typeof V=="function"?V():V)||document.body,D=typeof ee=="function"?ee(j):ee;if(D){var Je=typeof D=="object"?D:void 0;d.current=null,k?Promise.resolve().then(function(){return j.focus(Je)}):j.focus(Je)}}},[ee]),fn=u.useCallback(function(k){f.current&&Ct.useMedium(k)},[]),mn=Mt.useMedium,pn=u.useCallback(function(k){l.current!==k&&(l.current=k,i(k))},[]),vn=Se((r={},r[ht]=h&&"disabled",r[_e]=F,r),rn),Ke=v!==!0,hn=Ke&&v!=="tail",gn=gt([n,pn]),yn=u.useMemo(function(){return{observed:l,shards:pe,enabled:!h,active:f.current}},[h,f.current,pe,a]);return T.createElement(u.Fragment,null,Ke&&[T.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:h?-1:0,style:ye}),tn?T.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:h?-1:1,style:ye}):null],!h&&T.createElement(on,{id:un,sideCar:Xn,observed:a,disabled:h,persistentFocus:w,crossFrame:M,autoFocus:O,whiteList:J,shards:pe,onActivation:sn,onDeactivation:cn,returnFocus:dn,focusOptions:an,noFocusGuards:v}),T.createElement(nn,Se({ref:gn},vn,{className:I,onBlur:mn,onFocus:fn}),T.createElement(Zn.Provider,{value:yn},m)),hn&&T.createElement("div",{"data-focus-guard":!0,tabIndex:h?-1:0,style:ye}))});Pe.propTypes={};function Kn(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,xn(e,t)}function Jn(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],i;function l(){i=e(a.map(function(d){return d.props})),t(i)}var f=function(d){Kn(g,d);function g(){return d.apply(this,arguments)||this}g.peek=function(){return i};var p=g.prototype;return p.componentDidMount=function(){a.push(this),l()},p.componentDidUpdate=function(){l()},p.componentWillUnmount=function(){var y=a.indexOf(this);a.splice(y,1),l()},p.render=function(){return T.createElement(o,this.props)},g}(u.PureComponent);return Cn(f,"displayName","SideEffect("+n(o)+")"),f}}var _=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},P=function(e){return Array.isArray(e)?e:[e]},St=function(e){return Array.isArray(e)?e[0]:e},er=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},Ot=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},Et=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},tr=function(e){return e.hasAttribute("inert")},nr=function(e,t){return!e||Et(e)||!er(e)&&!tr(e)&&t(Ot(e))},Ft=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=nr(t,Ft.bind(void 0,e));return e.set(t,r),r},rr=function(e,t){return e&&!Et(e)?lr(e)?t(Ot(e)):!1:!0},_t=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=rr(t,_t.bind(void 0,e));return e.set(t,r),r},kt=function(e){return e.dataset},or=function(e){return e.tagName==="BUTTON"},Tt=function(e){return e.tagName==="INPUT"},Nt=function(e){return Tt(e)&&e.type==="radio"},ar=function(e){return!((Tt(e)||or(e))&&(e.type==="hidden"||e.disabled))},lr=function(e){var t=e.getAttribute(Un);return![!0,"true",""].includes(t)},Ve=function(e){var t;return!!(e&&(!((t=kt(e))===null||t===void 0)&&t.focusGuard))},ke=function(e){return!Ve(e)},ir=function(e){return!!e},ur=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),o=n-r,a=e.index-t.index;if(o){if(!n)return 1;if(!r)return-1}return o||a},sr=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},je=function(e,t,n){return _(e).map(function(r,o){var a=sr(r);return{node:r,index:o,tabIndex:n&&a===-1?(r.dataset||{}).focusGuard?0:-1:a}}).filter(function(r){return!t||r.tabIndex>=0}).sort(ur)},cr=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Le=cr.join(","),dr="".concat(Le,", [data-focus-guard]"),It=function(e,t){return _((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?dr:Le)?[r]:[],It(r))},[])},fr=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?z([e.contentDocument.body],t):[e]},z=function(e,t){return e.reduce(function(n,r){var o,a=It(r,t),i=(o=[]).concat.apply(o,a.map(function(l){return fr(l,t)}));return n.concat(i,r.parentNode?_(r.parentNode.querySelectorAll(Le)).filter(function(l){return l===r}):[])},[])},mr=function(e){var t=e.querySelectorAll("[".concat(Hn,"]"));return _(t).map(function(n){return z([n])}).reduce(function(n,r){return n.concat(r)},[])},Ae=function(e,t){return _(e).filter(function(n){return Ft(t,n)}).filter(function(n){return ar(n)})},nt=function(e,t){return t===void 0&&(t=new Map),_(e).filter(function(n){return _t(t,n)})},qe=function(e,t,n){return je(Ae(z(e,n),t),!0,n)},Z=function(e,t){return je(Ae(z(e),t),!1)},pr=function(e,t){return Ae(mr(e),t)},R=function(e,t){return e.shadowRoot?R(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:_(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?R(o,t):!1}return R(n,t)})},vr=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(i,l){return!t.has(l)})},Bt=function(e){return e.parentNode?Bt(e.parentNode):e},We=function(e){var t=P(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(_e);return n.push.apply(n,o?vr(_(Bt(r).querySelectorAll("[".concat(_e,'="').concat(o,'"]:not([').concat(ht,'="disabled"])')))):[r]),n},[])},hr=function(e){try{return e()}catch{return}},Q=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?Q(t.shadowRoot):t instanceof HTMLIFrameElement&&hr(function(){return t.contentWindow.document})?Q(t.contentWindow.document):t}},gr=function(e,t){return e===t},yr=function(e,t){return!!_(e.querySelectorAll("iframe")).some(function(n){return gr(n,t)})},Dt=function(e,t){return t===void 0&&(t=Q(St(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:We(e).some(function(n){return R(n,t)||yr(n,t)})},br=function(e){e===void 0&&(e=document);var t=Q(e);return t?_(e.querySelectorAll("[".concat(Wn,"]"))).some(function(n){return R(n,t)}):!1},wr=function(e,t){return t.filter(Nt).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},He=function(e,t){return Nt(e)&&e.name?wr(e,t):e},xr=function(e){var t=new Set;return e.forEach(function(n){return t.add(He(n,e))}),e.filter(function(n){return t.has(n)})},rt=function(e){return e[0]&&e.length>1?He(e[0],e):e[0]},ot=function(e,t){return e.indexOf(He(t,e))},Te="NEW_FOCUS",Cr=function(e,t,n,r,o){var a=e.length,i=e[0],l=e[a-1],f=Ve(r);if(!(r&&e.indexOf(r)>=0)){var d=r!==void 0?n.indexOf(r):-1,g=o?n.indexOf(o):d,p=o?e.indexOf(o):-1;if(d===-1)return p!==-1?p:Te;if(p===-1)return Te;var m=d-g,y=n.indexOf(i),h=n.indexOf(l),s=xr(n),v=r!==void 0?s.indexOf(r):-1,x=o?s.indexOf(o):v,w=s.filter(function(I){return I.tabIndex>=0}),b=r!==void 0?w.indexOf(r):-1,M=o?w.indexOf(o):b,C=b>=0&&M>=0?M-b:x-v;if(!m&&p>=0||t.length===0)return p;var O=ot(e,t[0]),F=ot(e,t[t.length-1]);if(d<=y&&f&&Math.abs(m)>1)return F;if(d>=h&&f&&Math.abs(m)>1)return O;if(m&&Math.abs(C)>1)return p;if(d<=y)return F;if(d>h)return O;if(m)return Math.abs(m)>1?p:(a+p+m)%a}},Mr=function(e){return function(t){var n,r=(n=kt(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},at=function(e,t,n){var r=e.map(function(a){var i=a.node;return i}),o=nt(r.filter(Mr(n)));return o&&o.length?rt(o):rt(nt(t))},Ne=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&Ne(e.parentNode.host||e.parentNode,t),t},be=function(e,t){for(var n=Ne(e),r=Ne(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},Rt=function(e,t,n){var r=P(e),o=P(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(l){i=be(i||l,l)||i,n.filter(Boolean).forEach(function(f){var d=be(a,f);d&&(!i||R(d,i)?i=d:i=be(d,i))})}),i},lt=function(e,t){return e.reduce(function(n,r){return n.concat(pr(r,t))},[])},Sr=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(ir)},Or=function(e,t){var n=Q(P(e).length>0?document:St(e).ownerDocument),r=We(e).filter(ke),o=Rt(n||e,e,r),a=new Map,i=Z(r,a),l=i.filter(function(h){var s=h.node;return ke(s)});if(l[0]){var f=Z([o],a).map(function(h){var s=h.node;return s}),d=Sr(f,l),g=d.map(function(h){var s=h.node;return s}),p=d.filter(function(h){var s=h.tabIndex;return s>=0}).map(function(h){var s=h.node;return s}),m=Cr(g,p,f,n,t);if(m===Te){var y=at(i,p,lt(r,a))||at(i,g,lt(r,a));if(y)return{node:y};console.warn("focus-lock: cannot find any node to move focus into");return}return m===void 0?m:d[m]}},Er=function(e){var t=We(e).filter(ke),n=Rt(e,e,t),r=je(z([n],!0),!0,!0),o=z(t,!1);return r.map(function(a){var i=a.node,l=a.index;return{node:i,index:l,lockItem:o.indexOf(i)>=0,guard:Ve(i)}})},Ue=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},we=0,xe=!1,Pt=function(e,t,n){n===void 0&&(n={});var r=Or(e,t);if(!xe&&r){if(we>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),xe=!0,setTimeout(function(){xe=!1},1);return}we++,Ue(r.node,n.focusOptions),we--}};function Y(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return t?.deref()||null}}var Fr=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:Y(n),parent:Y(n.parentElement),left:Y(n.previousElementSibling),right:Y(n.nextElementSibling)}),n=n.parentElement;return{element:Y(e),stack:t,ownerDocument:e.ownerDocument}},_r=function(e){var t,n,r,o,a;if(e)for(var i=e.stack,l=e.ownerDocument,f=new Map,d=0,g=i;d<g.length;d++){var p=g[d],m=(t=p.parent)===null||t===void 0?void 0:t.call(p);if(m&&l.contains(m)){for(var y=(n=p.left)===null||n===void 0?void 0:n.call(p),h=p.current(),s=m.contains(h)?h:void 0,v=(r=p.right)===null||r===void 0?void 0:r.call(p),x=qe([m],f),w=(a=(o=s??y?.nextElementSibling)!==null&&o!==void 0?o:v)!==null&&a!==void 0?a:y;w;){for(var b=0,M=x;b<M.length;b++){var C=M[b];if(w?.contains(C.node))return C.node}w=w.nextElementSibling}if(x.length)return x[0].node}}},Vt=function(e){var t=Fr(e);return function(){return _r(t)}},kr=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=P(t);if(r.every(function(i){return!R(i,e)}))return console.error("Active element is not contained in the scope"),{};var o=n?qe(r,new Map):Z(r,new Map),a=o.findIndex(function(i){var l=i.node;return l===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},Tr=function(e,t){var n=t?qe(P(e),new Map):Z(P(e),new Map);return{first:n[0],last:n[n.length-1]}},Nr=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},jt=function(e,t,n){t===void 0&&(t={});var r=Nr(t),o=kr(e,r.scope,r.onlyTabbable);if(o){var a=n(o,r.cycle);a&&Ue(a.node,r.focusOptions)}},Ir=function(e,t){t===void 0&&(t={}),jt(e,t,function(n,r){var o=n.next,a=n.first;return o||r&&a})},Br=function(e,t){t===void 0&&(t={}),jt(e,t,function(n,r){var o=n.prev,a=n.last;return o||r&&a})},Lt=function(e,t,n){var r,o=Tr(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),a=o[n];a&&Ue(a.node,t.focusOptions)},Dr=function(e,t){t===void 0&&(t={}),Lt(e,t,"first")},Rr=function(e,t){t===void 0&&(t={}),Lt(e,t,"last")};function Ge(e){setTimeout(e,1)}var Pr=function(t){return t&&"current"in t?t.current:t},At=function(){return document&&document.activeElement===document.body},Vr=function(){return At()||br()},q=null,S=null,it=function(){return null},W=null,K=!1,ze=!1,jr=function(){return!0},Lr=function(t){return(q.whiteList||jr)(t)},Ar=function(t,n){W={observerNode:t,portaledElement:n}},qr=function(t){return W&&W.portaledElement===t};function ut(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var Wr=function(t){return t?!!K:K==="meanwhile"},Hr=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},Ur=function(t,n){return n.some(function(r){return Hr(t,r,r)})},qt=function(t){return Z(t,new Map)},Gr=function(t){return!qt([t.parentNode]).some(function(n){return n.node===t})},ce=function(){var t=!1;if(q){var n=q,r=n.observed,o=n.persistentFocus,a=n.autoFocus,i=n.shards,l=n.crossFrame,f=n.focusOptions,d=n.noFocusGuards,g=r||W&&W.portaledElement;if(At()&&S&&S!==document.body&&(!document.body.contains(S)||Gr(S))){var p=it();p&&p.focus()}var m=document&&document.activeElement;if(g){var y=[g].concat(i.map(Pr).filter(Boolean)),h=function(){if(!Wr(l)||!d||!S||ze)return!1;var b=qt(y),M=b.findIndex(function(C){var O=C.node;return O===S});return M===0||M===b.length-1};if((!m||Lr(m))&&(o||h()||!Vr()||!S&&a)&&(g&&!(Dt(y)||m&&Ur(m,y)||qr(m))&&(document&&!S&&m&&!a?(m.blur&&m.blur(),document.body.focus()):(t=Pt(y,S,{focusOptions:f}),W={})),S=document&&document.activeElement,S!==document.body&&(it=Vt(S)),K=!1),document&&m!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var s=document&&document.activeElement,v=Er(y),x=v.map(function(w){var b=w.node;return b}).indexOf(s);x>-1&&(v.filter(function(w){var b=w.guard,M=w.node;return b&&M.dataset.focusAutoGuard}).forEach(function(w){var b=w.node;return b.removeAttribute("tabIndex")}),ut(x,v.length,1,v),ut(x,-1,-1,v))}}}return t},Wt=function(t){ce()&&t&&(t.stopPropagation(),t.preventDefault())},$e=function(){return Ge(ce)},zr=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||Ar(r,n)},$r=function(){return null},Ht=function(){ze=!0},Ut=function(){ze=!1,K="just",Ge(function(){K="meanwhile"})},Yr=function(){document.addEventListener("focusin",Wt),document.addEventListener("focusout",$e),window.addEventListener("focus",Ht),window.addEventListener("blur",Ut)},Xr=function(){document.removeEventListener("focusin",Wt),document.removeEventListener("focusout",$e),window.removeEventListener("focus",Ht),window.removeEventListener("blur",Ut)};function Zr(e){return e.filter(function(t){var n=t.disabled;return!n})}var Gt={moveFocusInside:Pt,focusInside:Dt,focusNextElement:Ir,focusPrevElement:Br,focusFirstElement:Dr,focusLastElement:Rr,captureFocusRestore:Vt};function Qr(e){var t=e.slice(-1)[0];t&&!q&&Yr();var n=q,r=n&&t&&t.id===n.id;q=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(S=null,(!r||n.observed!==t.observed)&&t.onActivation(Gt),ce(),Ge(ce)):(Xr(),S=null)}Ct.assignSyncMedium(zr);Mt.assignMedium($e);Yn.assignMedium(function(e){return e(Gt)});const Kr=Jn(Zr,Qr)($r);var zt=u.forwardRef(function(t,n){return T.createElement(Pe,Se({sideCar:Kr,ref:n},t))}),$t=Pe.propTypes||{};$t.sideCar;Mn($t,["sideCar"]);zt.propTypes={};var ue="right-scroll-bar-position",se="width-before-scroll-bar",Jr="with-scroll-bars-hidden",eo="--removed-body-scroll-bar-size",Yt=wt(),Ce=function(){},me=u.forwardRef(function(e,t){var n=u.useRef(null),r=u.useState({onScrollCapture:Ce,onWheelCapture:Ce,onTouchMoveCapture:Ce}),o=r[0],a=r[1],i=e.forwardProps,l=e.children,f=e.className,d=e.removeScrollBar,g=e.enabled,p=e.shards,m=e.sideCar,y=e.noIsolation,h=e.inert,s=e.allowPinchZoom,v=e.as,x=v===void 0?"div":v,w=e.gapMode,b=mt(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),M=m,C=gt([n,t]),O=B(B({},b),o);return u.createElement(u.Fragment,null,g&&u.createElement(M,{sideCar:Yt,removeScrollBar:d,shards:p,noIsolation:y,inert:h,setCallbacks:a,allowPinchZoom:!!s,lockRef:n,gapMode:w}),i?u.cloneElement(u.Children.only(l),B(B({},O),{ref:C})):u.createElement(x,B({},O,{className:f,ref:C}),l))});me.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};me.classNames={fullWidth:se,zeroRight:ue};var to=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function no(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=to();return t&&e.setAttribute("nonce",t),e}function ro(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function oo(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var ao=function(){var e=0,t=null;return{add:function(n){e==0&&(t=no())&&(ro(t,n),oo(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},lo=function(){var e=ao();return function(t,n){u.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Xt=function(){var e=lo(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},io={left:0,top:0,right:0,gap:0},Me=function(e){return parseInt(e||"",10)||0},uo=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Me(n),Me(r),Me(o)]},so=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return io;var t=uo(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},co=Xt(),H="data-scroll-locked",fo=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,l=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Jr,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(l,"px ").concat(r,`;
  }
  body[`).concat(H,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ue,` {
    right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(se,` {
    margin-right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(ue," .").concat(ue,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(se," .").concat(se,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(H,`] {
    `).concat(eo,": ").concat(l,`px;
  }
`)},st=function(){var e=parseInt(document.body.getAttribute(H)||"0",10);return isFinite(e)?e:0},mo=function(){u.useEffect(function(){return document.body.setAttribute(H,(st()+1).toString()),function(){var e=st()-1;e<=0?document.body.removeAttribute(H):document.body.setAttribute(H,e.toString())}},[])},po=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;mo();var a=u.useMemo(function(){return so(o)},[o]);return u.createElement(co,{styles:fo(a,!t,o,n?"":"!important")})},Ie=!1;if(typeof window<"u")try{var te=Object.defineProperty({},"passive",{get:function(){return Ie=!0,!0}});window.addEventListener("test",te,te),window.removeEventListener("test",te,te)}catch{Ie=!1}var L=Ie?{passive:!1}:!1,vo=function(e){return e.tagName==="TEXTAREA"},Zt=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!vo(e)&&n[t]==="visible")},ho=function(e){return Zt(e,"overflowY")},go=function(e){return Zt(e,"overflowX")},ct=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Qt(e,r);if(o){var a=Kt(e,r),i=a[1],l=a[2];if(i>l)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},yo=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},bo=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Qt=function(e,t){return e==="v"?ho(t):go(t)},Kt=function(e,t){return e==="v"?yo(t):bo(t)},wo=function(e,t){return e==="h"&&t==="rtl"?-1:1},xo=function(e,t,n,r,o){var a=wo(e,window.getComputedStyle(t).direction),i=a*r,l=n.target,f=t.contains(l),d=!1,g=i>0,p=0,m=0;do{var y=Kt(e,l),h=y[0],s=y[1],v=y[2],x=s-v-a*h;(h||x)&&Qt(e,l)&&(p+=x,m+=h),l instanceof ShadowRoot?l=l.host:l=l.parentNode}while(!f&&l!==document.body||f&&(t.contains(l)||t===l));return(g&&Math.abs(p)<1||!g&&Math.abs(m)<1)&&(d=!0),d},ne=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},dt=function(e){return[e.deltaX,e.deltaY]},ft=function(e){return e&&"current"in e?e.current:e},Co=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Mo=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},So=0,A=[];function Oo(e){var t=u.useRef([]),n=u.useRef([0,0]),r=u.useRef(),o=u.useState(So++)[0],a=u.useState(Xt)[0],i=u.useRef(e);u.useEffect(function(){i.current=e},[e]),u.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var s=On([e.lockRef.current],(e.shards||[]).map(ft),!0).filter(Boolean);return s.forEach(function(v){return v.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),s.forEach(function(v){return v.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=u.useCallback(function(s,v){if("touches"in s&&s.touches.length===2||s.type==="wheel"&&s.ctrlKey)return!i.current.allowPinchZoom;var x=ne(s),w=n.current,b="deltaX"in s?s.deltaX:w[0]-x[0],M="deltaY"in s?s.deltaY:w[1]-x[1],C,O=s.target,F=Math.abs(b)>Math.abs(M)?"h":"v";if("touches"in s&&F==="h"&&O.type==="range")return!1;var I=ct(F,O);if(!I)return!0;if(I?C=F:(C=F==="v"?"h":"v",I=ct(F,O)),!I)return!1;if(!r.current&&"changedTouches"in s&&(b||M)&&(r.current=C),!C)return!0;var J=r.current||C;return xo(J,v,s,J==="h"?b:M)},[]),f=u.useCallback(function(s){var v=s;if(!(!A.length||A[A.length-1]!==a)){var x="deltaY"in v?dt(v):ne(v),w=t.current.filter(function(C){return C.name===v.type&&(C.target===v.target||v.target===C.shadowParent)&&Co(C.delta,x)})[0];if(w&&w.should){v.cancelable&&v.preventDefault();return}if(!w){var b=(i.current.shards||[]).map(ft).filter(Boolean).filter(function(C){return C.contains(v.target)}),M=b.length>0?l(v,b[0]):!i.current.noIsolation;M&&v.cancelable&&v.preventDefault()}}},[]),d=u.useCallback(function(s,v,x,w){var b={name:s,delta:v,target:x,should:w,shadowParent:Eo(x)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(M){return M!==b})},1)},[]),g=u.useCallback(function(s){n.current=ne(s),r.current=void 0},[]),p=u.useCallback(function(s){d(s.type,dt(s),s.target,l(s,e.lockRef.current))},[]),m=u.useCallback(function(s){d(s.type,ne(s),s.target,l(s,e.lockRef.current))},[]);u.useEffect(function(){return A.push(a),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:m}),document.addEventListener("wheel",f,L),document.addEventListener("touchmove",f,L),document.addEventListener("touchstart",g,L),function(){A=A.filter(function(s){return s!==a}),document.removeEventListener("wheel",f,L),document.removeEventListener("touchmove",f,L),document.removeEventListener("touchstart",g,L)}},[]);var y=e.removeScrollBar,h=e.inert;return u.createElement(u.Fragment,null,h?u.createElement(a,{styles:Mo(o)}):null,y?u.createElement(po,{gapMode:e.gapMode}):null)}function Eo(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Fo=$n(Yt,Oo);var Jt=u.forwardRef(function(e,t){return u.createElement(me,B({},e,{ref:t,sideCar:Fo}))});Jt.classNames=me.classNames;const _o=()=>{const[e,t]=u.useState(0);return u.useLayoutEffect(()=>{const n=document.createElement("div");n.style.visibility="hidden",n.style.overflow="scroll",document.body.appendChild(n);const r=document.createElement("div");n.appendChild(r),t(n.offsetWidth-r.offsetWidth),n?.parentNode?.removeChild(n)},[]),e},$=({children:e,opened:t,title:n,onClose:r,size:o="default",overflow:a="auto",inPortal:i=!0,className:l})=>{const f=u.useRef(null),d=u.useRef(null);u.useEffect(()=>{const m=f.current,y=d.current;if(!t||!y||!m||y.open)return;const h=s=>{!s.defaultPrevented&&s.key==="Escape"&&r()};return y.show(),document.addEventListener("keydown",h),()=>{document.removeEventListener("keydown",h)}},[t,r]);const g=_o();if(!t)return null;const p=c.jsx(zt,{children:c.jsx(Jt,{children:c.jsx("div",{className:N.dialogOverlay,ref:f,children:c.jsx("dialog",{ref:d,"aria-label":n??"Dialog","aria-modal":"true",className:fe(N.dialog,l,{[N[o]]:o}),style:{"--louis-modal-overflow":a},children:c.jsx(Ee,{value:{onClose:r},children:c.jsx("div",{className:N.content,style:{"--louis-modal-scrollbar-width":`${g}px`},children:e})})})})})});return i?c.jsx(En,{children:p}):p};try{$.displayName="ModalShell",$.__docgenInfo={description:"",displayName:"ModalShell",props:{opened:{defaultValue:null,description:"Toggles whether the modal is shown.",name:"opened",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"Renders text content as the title of the modal.",name:"title",required:!1,type:{name:"string"}},overflow:{defaultValue:{value:"auto"},description:"Sets css overflow.",name:"overflow",required:!1,type:{name:"Overflow"}},inPortal:{defaultValue:{value:"true"},description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the DateRangePicker popover.",name:"inPortal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:'Function executed when the close button is clicked, or when the user presses "Escape". Not executed when the user clicks outside the modal.',name:"onClose",required:!0,type:{name:"() => void"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the modal body.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"default"},description:"Changes the modal max-width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"wide"'}]}}}}}catch{}const Be=({children:e,confirmText:t,closeText:n="Close",loading:r=!1,title:o,tooltipTitle:a,onClose:i,onConfirm:l,...f})=>c.jsxs($,{title:o,onClose:i,...f,children:[c.jsx(G,{children:o}),c.jsx(U,{children:e}),c.jsxs(X,{children:[c.jsx(E,{appearance:"accent",variant:"tertiary",onClick:i,children:n}),c.jsx(pt,{tooltip:a,show:!!a,children:c.jsx(E,{appearance:"accent",variant:"primary",loading:r,onClick:l,children:t})})]})]});try{Be.displayName="ConfirmModal",Be.__docgenInfo={description:"",displayName:"ConfirmModal",props:{opened:{defaultValue:null,description:"Toggles whether the modal is shown.",name:"opened",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"Renders text content as the title of the modal.",name:"title",required:!1,type:{name:"string"}},overflow:{defaultValue:null,description:"Sets css overflow.",name:"overflow",required:!1,type:{name:"Overflow"}},inPortal:{defaultValue:null,description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the DateRangePicker popover.",name:"inPortal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:'Function executed when the close button is clicked, or when the user presses "Escape". Not executed when the user clicks outside the modal.',name:"onClose",required:!0,type:{name:"() => void"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the modal body.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Changes the modal max-width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"wide"'}]}},confirmText:{defaultValue:null,description:"Renders text content in the confirm button.",name:"confirmText",required:!0,type:{name:"string"}},closeText:{defaultValue:{value:"Close"},description:"Renders text content in the close button.",name:"closeText",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading state for the confirm button.",name:"loading",required:!1,type:{name:"boolean"}},tooltipTitle:{defaultValue:null,description:"Renders a tooltip on the confirm button when passed.",name:"tooltipTitle",required:!1,type:{name:"string"}},onConfirm:{defaultValue:null,description:"Function executed when the confirm button is clicked.",name:"onConfirm",required:!0,type:{name:"() => void"}}}}}catch{}const De=({children:e,confirmText:t,closeText:n="Close",loading:r=!1,title:o,tooltipTitle:a,onClose:i,onConfirm:l,...f})=>c.jsxs($,{title:o,onClose:i,...f,children:[c.jsx(G,{children:o}),c.jsx(U,{children:e}),c.jsxs(X,{children:[c.jsx(E,{appearance:"accent",variant:"tertiary",onClick:i,children:n}),c.jsx(pt,{tooltip:a,show:!!a,children:c.jsx(E,{appearance:"danger",variant:"primary",loading:r,onClick:l,children:t})})]})]});try{De.displayName="DangerModal",De.__docgenInfo={description:"",displayName:"DangerModal",props:{opened:{defaultValue:null,description:"Toggles whether the modal is shown.",name:"opened",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"Renders text content as the title of the modal.",name:"title",required:!1,type:{name:"string"}},overflow:{defaultValue:null,description:"Sets css overflow.",name:"overflow",required:!1,type:{name:"Overflow"}},inPortal:{defaultValue:null,description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the DateRangePicker popover.",name:"inPortal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:'Function executed when the close button is clicked, or when the user presses "Escape". Not executed when the user clicks outside the modal.',name:"onClose",required:!0,type:{name:"() => void"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the modal body.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Changes the modal max-width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"wide"'}]}},confirmText:{defaultValue:null,description:"Renders text content in the confirm button.",name:"confirmText",required:!0,type:{name:"string"}},closeText:{defaultValue:{value:"Close"},description:"Renders text content in the close button.",name:"closeText",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading state for the confirm button.",name:"loading",required:!1,type:{name:"boolean"}},tooltipTitle:{defaultValue:null,description:"Renders a tooltip on the confirm button when passed.",name:"tooltipTitle",required:!1,type:{name:"string"}},onConfirm:{defaultValue:null,description:"Function executed when the confirm button is clicked.",name:"onConfirm",required:!0,type:{name:"() => void"}}}}}catch{}const de=({children:e,title:t,...n})=>c.jsxs($,{title:t,...n,children:[c.jsx(G,{children:t}),c.jsx(U,{children:e})]});try{de.displayName="Modal",de.__docgenInfo={description:"",displayName:"Modal",props:{opened:{defaultValue:null,description:"Toggles whether the modal is shown.",name:"opened",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"Renders text content as the title of the modal.",name:"title",required:!1,type:{name:"string"}},overflow:{defaultValue:null,description:"Sets css overflow.",name:"overflow",required:!1,type:{name:"Overflow"}},inPortal:{defaultValue:null,description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the DateRangePicker popover.",name:"inPortal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:'Function executed when the close button is clicked, or when the user presses "Escape". Not executed when the user clicks outside the modal.',name:"onClose",required:!0,type:{name:"() => void"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the modal body.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Changes the modal max-width.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"wide"'}]}}}}}catch{}const ua={title:"Components/Modal",component:de,parameters:{controls:{sort:"requiredFirst",exclude:["children"]},docs:{source:{excludeDecorators:!0},description:{component:"Modal is a window overlaid on either the primary window or another dialog window. Content behind a modal is inert, meaning that users cannot interact with it.\n\nModal exports 3 facade components that are used for common modal use cases:\n- `Modal`: Opinionated facade component that provides reasonable defaults for most situations.\n- `ConfirmModal`: Used to quickly create a confirmation modal with a primary confirm button and a secondary close button.\n- `DangerModal`: Used to quickly create a danger modal with a primary danger button and a secondary close button.\n\nModal exports 5 components to help you create any modal dialog:\n- `ModalShell`: A modal with all the functionality but without header, close button, and paddings.\n- `ModalCloseButton`: Button that closes the modal.\n- `ModalHeader`: Component that wraps modal heading and close button.\n- `ModalBody`: Wrapper for the content that adds spacing from the sides.\n- `ModalFooter`: Wrapper that houses the modal actions. If used together with `ModalBody` it makes `ModalBody` scrollable.\n- `ModalActions`: Wrapper that houses the modal actions.\n\n[Figma Source File | Modal](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A36149)"}}},argTypes:{overflow:{control:{type:"text"}},onClose:{action:"closed"},onConfirm:{action:"confirmed"}},decorators:[e=>c.jsxs(c.Fragment,{children:[c.jsx(Fn,{}),e()]})]},ko=e=>{const[t,n]=u.useState(e.opened||!1);return u.useEffect(()=>{n(e.opened||!1)},[e.opened]),c.jsxs(c.Fragment,{children:[c.jsx(E,{variant:"secondary",onClick:()=>n(!0),children:"Open Modal"}),c.jsx(de,{...e,opened:t,onClose:()=>{n(!1),e.onClose?.()},children:"This is a simple modal that has heading, close button and some spacing on the sides. ".repeat(10)})]})},To=e=>{const[t,n]=u.useState(e.opened||!1),[r,o]=u.useState(e.inputValue||""),[a,i]=u.useState(e.dateValue||null),l=u.useRef(null);return u.useEffect(()=>{n(e.opened||!1),o(e.inputValue||""),i(e.dateValue||null)},[e.opened,e.inputValue,e.dateValue]),u.useEffect(()=>{t&&l.current!==null&&l.current.focus()},[t]),c.jsxs(c.Fragment,{children:[c.jsx(E,{variant:"secondary",onClick:()=>n(!0),children:"Open ConfirmModal"}),c.jsx(E,{onClick:()=>{et({type:"success",title:"System-wide notification",autoClose:!1})},variant:"secondary",style:{marginLeft:"5px"},children:"Trigger toast notification"}),c.jsxs(Be,{...e,opened:t,onClose:()=>{n(!1),e.onClose?.()},onConfirm:()=>{n(!1),e.onConfirm?.()},children:[c.jsx(E,{onClick:()=>{et({type:"success",title:"Modal notification",autoClose:!1})},variant:"secondary",children:"Trigger toast notification"}),c.jsx("p",{children:"This is a modal that already provides all the necessary action buttons, and can take any other content or form fields."}),c.jsx(kn,{value:r,onChange:f=>o(f.target.value),placeholder:"Enter text"},"textinput"),c.jsx("p",{children:"For example, a DatePicker, using the positioning prop to ensure it can overlap outside of the Modal."}),c.jsx(_n,{onChange:i,value:a??void 0,positioning:"fixed"}),c.jsx("p",{children:"Or a Select menu that gets focus through useRef and useEffect, and uses the menuPosition prop to overlap outside of the Modal."}),c.jsx(Sn,{options:[...Array(41).keys()].slice(1).map(f=>({value:`option${f}`,label:`Option ${f}`})),ref:l,openMenuOnFocus:!0,isMulti:!0,menuPosition:"fixed"})]})]})},en=e=>{const[t,n]=u.useState(e.opened||!1);u.useEffect(()=>{n(e.opened||!1)},[e.opened]);const r=e.children||"This is a modal that already provides all the necessary action buttons. ";return c.jsxs(c.Fragment,{children:[c.jsx(E,{variant:"secondary",onClick:()=>n(!0),children:"Open DangerModal"}),c.jsx(De,{...e,opened:t,onClose:()=>{n(!1),e.onClose?.()},onConfirm:()=>{n(!1),e.onConfirm?.()},children:typeof r=="string"?r.repeat(e.title==="Scrollable danger modal"?100:1):r})]})},No=e=>{const[t,n]=u.useState(e.opened||!1);return u.useEffect(()=>{n(e.opened||!1)},[e.opened]),c.jsxs(c.Fragment,{children:[c.jsx(E,{variant:"secondary",onClick:()=>n(!0),children:"Open Modal"}),c.jsx("form",{action:"",children:c.jsxs($,{...e,opened:t,onClose:()=>{n(!1),e.onClose?.()},children:[c.jsx(G,{children:e.title}),c.jsx(U,{children:"This modal is special with a modal body which is scrollable. If ModalBody and ModalFooter are used together inside ModalShell then ModalBody will become scrollable and modal will not exceed viewport height. ".repeat(100)}),c.jsx(X,{children:c.jsx(E,{variant:"primary",onClick:()=>n(!1),children:"Close"})})]})})]})},re={args:{opened:!1,title:"Default modal"},render:ko,parameters:{docs:{source:{code:`
import { useState } from 'react';
import { Modal, Button } from '@lokalise/louis';

export default () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal opened={opened} title="Default modal" onClose={() => setOpened(false)}>
        'This is a simple modal that has heading, close button and some spacing on the sides.'
      </Modal>
    </>
  );
};`}}}},oe={name:"ConfirmModal",args:{opened:!1,title:"Confirm modal",closeText:"Cancel",confirmText:"Confirm",loading:!1,tooltipTitle:"Click here to confirm",inputValue:"",dateValue:null},render:To,parameters:{docs:{source:{code:`
import { useState, useRef, useEffect } from 'react';
import { ConfirmModal, Button, Input, DatePicker, Select } from '@lokalise/louis';

export default () => {
  const [opened, setOpened] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [dateValue, setDateValue] = useState(null);
  const selectEl = useRef(null);

  useEffect(() => {
    if (opened && selectEl.current !== null) {
      selectEl.current.focus();
    }
  }, [opened]);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open ConfirmModal</Button>
      <ConfirmModal
        opened={opened}
        title="Confirm modal"
        onClose={() => setOpened(false)}
        onConfirm={() => setOpened(false)}
      >
        <p>
          This is a modal that already provides all the necessary action buttons, and can take any other
          content or form fields.
        </p>
        <Input 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Enter text" 
        />
        <p>
          For example, a DatePicker, using the positioning prop to ensure it can overlap outside of the Modal.
        </p>
        <DatePicker onChange={setDateValue} value={dateValue} positioning="fixed" />
        <p>
          Or a Select menu that gets focus through useRef and useEffect, and uses the menuPosition prop to
          overlap outside of the Modal.
        </p>
        <Select
          options={[...Array(41).keys()].slice(1).map((e) => {
            return { value: 'option' + e, label: 'Option ' + e };
          })}
          ref={selectEl}
          openMenuOnFocus
          isMulti
          menuPosition="fixed"
        />
      </ConfirmModal>
    </>
  );
};`}}}},ae={name:"DangerModal",args:{opened:!1,title:"Danger modal",closeText:"Cancel",confirmText:"Delete",loading:!1,tooltipTitle:"Click here to delete"},render:en,parameters:{docs:{source:{code:`
import { useState } from 'react';
import { DangerModal, Button } from '@lokalise/louis';

export default () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open DangerModal</Button>
      <DangerModal
        opened={opened}
        title="Danger modal"
        onClose={() => setOpened(false)}
        onConfirm={() => setOpened(false)}
      >
        'This is a modal that already provides all the necessary action buttons.'
      </DangerModal>
    </>
  );
};`}}}},le={args:{opened:!1,title:"Scrollable"},render:No,parameters:{docs:{description:{story:"\nMake `Modal` contents scrollable by using `ModalBody` together with `ModalFooter` inside `ModalShell`. `ModalHeader` and `ModalFooter` will stay fixed and modal will not exceed viewport height.\n\nSource order matters, so make sure `ModalFooter` is used right after `ModalBody`. For cases where `ModalBody` and `ModalFooter` might be wrapped in a `form` element, just wrap whole `ModalShell` in that element.\n\n#### Edge cases\n\nThis implementation is based on `:has` CSS selector which currently is not supported in Firefox. In Firefox modal will have default scroll.\n"},source:{code:`
import { useState } from 'react';
import { Modal, ModalShell, ModalHeader, ModalBody, ModalFooter, Button } from '@lokalise/louis';

export default () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open Scrollable modal</Button>
      <Modal opened={opened} title="Scrollable" onClose={() => setOpened(false)}>
        <form action="">
          <ModalShell title="Scrollable" onClose={() => setOpened(false)}>
            <ModalHeader>Scrollable</ModalHeader>
            <ModalBody>
              This modal is special with a modal body which is scrollable. If ModalBody and ModalFooter
              are used together inside ModalShell then ModalBody will become scrollable and modal will not
              exceed viewport height.
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={() => setOpened(false)}>
                Close
              </Button>
            </ModalFooter>
          </ModalShell>
        </form>
      </Modal>
    </>
  );
};`}}}},ie={args:{opened:!1,title:"Scrollable danger modal",closeText:"Cancel",confirmText:"Delete",loading:!1,tooltipTitle:"Click here to delete"},render:en};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  args: {
    opened: false,
    title: 'Default modal'
  },
  render: ModalTemplate,
  parameters: {
    docs: {
      source: {
        code: \`
import { useState } from 'react';
import { Modal, Button } from '@lokalise/louis';

export default () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal opened={opened} title="Default modal" onClose={() => setOpened(false)}>
        'This is a simple modal that has heading, close button and some spacing on the sides.'
      </Modal>
    </>
  );
};\`
      }
    }
  }
}`,...re.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  name: 'ConfirmModal',
  args: {
    opened: false,
    title: 'Confirm modal',
    closeText: 'Cancel',
    confirmText: 'Confirm',
    loading: false,
    tooltipTitle: 'Click here to confirm',
    inputValue: '',
    dateValue: null
  },
  render: ConfirmModalTemplate,
  parameters: {
    docs: {
      source: {
        code: \`
import { useState, useRef, useEffect } from 'react';
import { ConfirmModal, Button, Input, DatePicker, Select } from '@lokalise/louis';

export default () => {
  const [opened, setOpened] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [dateValue, setDateValue] = useState(null);
  const selectEl = useRef(null);

  useEffect(() => {
    if (opened && selectEl.current !== null) {
      selectEl.current.focus();
    }
  }, [opened]);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open ConfirmModal</Button>
      <ConfirmModal
        opened={opened}
        title="Confirm modal"
        onClose={() => setOpened(false)}
        onConfirm={() => setOpened(false)}
      >
        <p>
          This is a modal that already provides all the necessary action buttons, and can take any other
          content or form fields.
        </p>
        <Input 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Enter text" 
        />
        <p>
          For example, a DatePicker, using the positioning prop to ensure it can overlap outside of the Modal.
        </p>
        <DatePicker onChange={setDateValue} value={dateValue} positioning="fixed" />
        <p>
          Or a Select menu that gets focus through useRef and useEffect, and uses the menuPosition prop to
          overlap outside of the Modal.
        </p>
        <Select
          options={[...Array(41).keys()].slice(1).map((e) => {
            return { value: 'option' + e, label: 'Option ' + e };
          })}
          ref={selectEl}
          openMenuOnFocus
          isMulti
          menuPosition="fixed"
        />
      </ConfirmModal>
    </>
  );
};\`
      }
    }
  }
}`,...oe.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  name: 'DangerModal',
  args: {
    opened: false,
    title: 'Danger modal',
    closeText: 'Cancel',
    confirmText: 'Delete',
    loading: false,
    tooltipTitle: 'Click here to delete'
  },
  render: DangerModalTemplate,
  parameters: {
    docs: {
      source: {
        code: \`
import { useState } from 'react';
import { DangerModal, Button } from '@lokalise/louis';

export default () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open DangerModal</Button>
      <DangerModal
        opened={opened}
        title="Danger modal"
        onClose={() => setOpened(false)}
        onConfirm={() => setOpened(false)}
      >
        'This is a modal that already provides all the necessary action buttons.'
      </DangerModal>
    </>
  );
};\`
      }
    }
  }
}`,...ae.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  args: {
    opened: false,
    title: 'Scrollable'
  },
  render: ScrollableModalTemplate,
  parameters: {
    docs: {
      description: {
        story: \`
Make \\\`Modal\\\` contents scrollable by using \\\`ModalBody\\\` together with \\\`ModalFooter\\\` inside \\\`ModalShell\\\`. \\\`ModalHeader\\\` and \\\`ModalFooter\\\` will stay fixed and modal will not exceed viewport height.

Source order matters, so make sure \\\`ModalFooter\\\` is used right after \\\`ModalBody\\\`. For cases where \\\`ModalBody\\\` and \\\`ModalFooter\\\` might be wrapped in a \\\`form\\\` element, just wrap whole \\\`ModalShell\\\` in that element.

#### Edge cases

This implementation is based on \\\`:has\\\` CSS selector which currently is not supported in Firefox. In Firefox modal will have default scroll.
\`
      },
      source: {
        code: \`
import { useState } from 'react';
import { Modal, ModalShell, ModalHeader, ModalBody, ModalFooter, Button } from '@lokalise/louis';

export default () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open Scrollable modal</Button>
      <Modal opened={opened} title="Scrollable" onClose={() => setOpened(false)}>
        <form action="">
          <ModalShell title="Scrollable" onClose={() => setOpened(false)}>
            <ModalHeader>Scrollable</ModalHeader>
            <ModalBody>
              This modal is special with a modal body which is scrollable. If ModalBody and ModalFooter
              are used together inside ModalShell then ModalBody will become scrollable and modal will not
              exceed viewport height.
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={() => setOpened(false)}>
                Close
              </Button>
            </ModalFooter>
          </ModalShell>
        </form>
      </Modal>
    </>
  );
};\`
      }
    }
  }
}`,...le.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  args: {
    opened: false,
    title: 'Scrollable danger modal',
    closeText: 'Cancel',
    confirmText: 'Delete',
    loading: false,
    tooltipTitle: 'Click here to delete'
  },
  render: DangerModalTemplate
}`,...ie.parameters?.docs?.source}}};const sa=["Default","ConfirmModalStory","DangerModalStory","Scrollable","ScrollableDangerModal"];export{oe as ConfirmModalStory,ae as DangerModalStory,re as Default,le as Scrollable,ie as ScrollableDangerModal,sa as __namedExportsOrder,ua as default};
