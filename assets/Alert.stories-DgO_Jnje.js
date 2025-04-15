import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{v as V}from"./v4-CtRu48qb.js";import{I as D}from"./IconButton-f6n5TEtZ.js";import{C as F}from"./Close-FGPrTY3A.js";import{S as M,B as K}from"./Sparkle-s9ozeDuG.js";import{E as $}from"./Error-li26Yj3Y.js";import{W as Y,S as q}from"./Warning-DUKJc5Ha.js";import{I as U}from"./Info-C8x1KHs8.js";import{P as z}from"./index-7zOkDzdb.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./index-DubqEmGm.js";import"./Tooltip-DlQsDSkD.js";import"./Popover-DFSes0g6.js";import"./Portal-BD7l88-r.js";import"./index-CD8QLViS.js";import"./index-CJ88nXQk.js";import"./floating-ui.react-M7Gz8XYl.js";import"./useMergeRefs-CZnCAFkU.js";import"./index-Cljcv3Ef.js";import"./SvgIcon-APGatIbJ.js";const{addons:G}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:H}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:k}=__STORYBOOK_MODULE_GLOBAL__;var Q=Object.defineProperty,Z=(e,t)=>{for(var r in t)Q(e,r,{get:t[r],enumerable:!0})},J="storybook/actions",X=`${J}/action-event`,ee={depth:10,clearOnStoryChange:!0,limit:50},j=(e,t)=>{let r=Object.getPrototypeOf(e);return!r||t(r)?r:j(r,t)},te=e=>!!(typeof e=="object"&&e&&j(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),re=e=>{if(te(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let r=Object.getOwnPropertyDescriptor(t,"view"),s=r?.value;return typeof s=="object"&&s?.constructor.name==="Window"&&Object.defineProperty(t,"view",{...r,value:Object.create(s.constructor.prototype)}),t}return e},ne=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?V():Date.now().toString(36)+Math.random().toString(36).substring(2);function b(e,t={}){let r={...ee,...t},s=function(...a){if(t.implicit){let T=("__STORYBOOK_PREVIEW__"in k?k.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(u=>u.phase==="playing"||u.phase==="rendering");if(T){let u=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,W=new H({phase:T.phase,name:e,deprecated:u});if(u)console.warn(W);else throw W}}let n=G.getChannel(),i=ne(),c=5,E=a.map(re),B=a.length>1?E:E[0],N={id:i,count:0,data:{name:e,args:B},options:{...r,maxDepth:c+(r.depth||3),allowFunction:r.allowFunction||!1}};n.emit(X,N)};return s.isAction=!0,s.implicit=t.implicit,s}const{definePreview:Ke}=__STORYBOOK_MODULE_PREVIEW_API__,{global:x}=__STORYBOOK_MODULE_GLOBAL__;var oe={};Z(oe,{argsEnhancers:()=>ie,loaders:()=>le});var P=(e,t)=>typeof t[e]>"u"&&!(e in t),se=e=>{let{initialArgs:t,argTypes:r,id:s,parameters:{actions:a}}=e;if(!a||a.disable||!a.argTypesRegex||!r)return{};let n=new RegExp(a.argTypesRegex);return Object.entries(r).filter(([i])=>!!n.test(i)).reduce((i,[c,E])=>(P(c,t)&&(i[c]=b(c,{implicit:!0,id:s})),i),{})},ae=e=>{let{initialArgs:t,argTypes:r,parameters:{actions:s}}=e;return s?.disable||!r?{}:Object.entries(r).filter(([a,n])=>!!n.action).reduce((a,[n,i])=>(P(n,t)&&(a[n]=b(typeof i.action=="string"?i.action:n)),a),{})},ie=[ae,se],L=!1,ce=e=>{let{parameters:{actions:t}}=e;if(!t?.disable&&!L&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in x&&typeof x.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=x.__STORYBOOK_TEST_ON_MOCK_CALL__;r((s,a)=>{let n=s.getMockName();n!=="spy"&&(!/^next\/.*::/.test(n)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(i=>n.startsWith(i)))&&b(n)(a)}),L=!0}},le=[ce];const ue="_alertContainer_22lo0_1",de="_successContainer_22lo0_10",me="_errorContainer_22lo0_16",pe="_warningContainer_22lo0_22",ge="_infoContainer_22lo0_28",_e="_aiContainer_22lo0_34",he="_adornmentIconContainer_22lo0_40",fe="_closeButton_22lo0_48",Ae="_alertContent_22lo0_53",Ie="_alertLink_22lo0_62",l={alertContainer:ue,successContainer:de,errorContainer:me,warningContainer:pe,infoContainer:ge,aiContainer:_e,adornmentIconContainer:he,closeButton:fe,alertContent:Ae,alertLink:Ie},Oe={success:o.jsx(q,{}),info:o.jsx(U,{}),warning:o.jsx(Y,{}),error:o.jsx($,{}),ai:o.jsx(M,{})},m=({status:e="warning",onClose:t,children:r,withStartAdornmentIcon:s=!1,customAdornmentIcon:a=null,className:n="",iconButtonProps:i={},...c})=>o.jsxs("div",{className:`${l.alertContainer} ${l[`${e}Container`]} ${n}`,...c,children:[s?o.jsx("div",{className:l.adornmentIconContainer,children:a??Oe[e]}):null,o.jsx("div",{className:l.alertContent,children:r}),t?o.jsx(D,{ariaLabel:"Close",onClick:t,className:l.closeButton,...i,children:o.jsx(F,{})}):null]});try{m.displayName="Alert",m.__docgenInfo={description:"",displayName:"Alert",props:{status:{defaultValue:{value:"warning"},description:"Changes the alert background color.",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"ai"'}]}},onClose:{defaultValue:null,description:"Function to close the alert. When a function is passed the component will render a close button.",name:"onClose",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the alert.",name:"children",required:!1,type:{name:"ReactNode"}},withStartAdornmentIcon:{defaultValue:{value:"false"},description:"Renders an icon on the left side of the alert.",name:"withStartAdornmentIcon",required:!1,type:{name:"boolean"}},customAdornmentIcon:{defaultValue:{value:"null"},description:"Custom icon to be rendered instead of predefined adornment icon on left side of Alert.",name:"customAdornmentIcon",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},iconButtonProps:{defaultValue:{value:"{}"},description:"",name:"iconButtonProps",required:!1,type:{name:'Pick<IconButtonProps, "tooltipInPortal" | "tooltipPlacement">'}}}}}catch{}const R=({children:e,...t})=>o.jsx(z,{className:l.alertLink,...t,children:e});try{R.displayName="AlertLink",R.__docgenInfo={description:"",displayName:"AlertLink",props:{href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}}}catch{}const $e={title:"Components/Alert",component:m,args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",onCloseFunction:void 0},argTypes:{onCloseFunction:{name:"Pass onClose function?",control:{type:"boolean"}}},render:e=>o.jsx(m,{...e,onClose:e.onCloseFunction?b("onClose"):void 0}),parameters:{docs:{description:{component:`Alert is used to highlight an important message. Often used in combination with a Modal to ask for user confirmation.

See [Figma Source File](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4032%3A36154).`}}}},p={args:{status:"warning"}},g={args:{status:"info"}},_={args:{status:"success"}},h={args:{status:"error"}},f={args:{status:"ai"}},A={args:{status:"warning",withStartAdornmentIcon:!0}},I={args:{status:"info",withStartAdornmentIcon:!0}},O={args:{status:"success",withStartAdornmentIcon:!0}},C={args:{status:"error",withStartAdornmentIcon:!0}},S={args:{status:"ai",withStartAdornmentIcon:!0}},y={args:{status:"ai",withStartAdornmentIcon:!0,customAdornmentIcon:o.jsx(K,{})}},w={args:{onCloseFunction:!0}},v={args:{withStartAdornmentIcon:!0,onCloseFunction:!0}},d={render:e=>o.jsxs(m,{...e,withStartAdornmentIcon:!0,children:[o.jsx("span",{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole."}),o.jsx(R,{href:"https://www.lokalise.com",target:"_blank",children:"Alert link"})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'info'
  }
}`,...g.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'success'
  }
}`,..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error'
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'ai'
  }
}`,...f.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    withStartAdornmentIcon: true
  }
}`,...A.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'info',
    withStartAdornmentIcon: true
  }
}`,...I.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'success',
    withStartAdornmentIcon: true
  }
}`,...O.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    withStartAdornmentIcon: true
  }
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'ai',
    withStartAdornmentIcon: true
  }
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'ai',
    withStartAdornmentIcon: true,
    customAdornmentIcon: <BookmarkIcon />
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    onCloseFunction: true
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    withStartAdornmentIcon: true,
    onCloseFunction: true
  }
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Alert {...args} withStartAdornmentIcon>
            <span>
                Please, note! This is a global notification about something that has occurred in the system. A system is
                a group of interacting or interrelated elements that act according to a set of rules to form a unified
                whole.
            </span>
            <AlertLink href="https://www.lokalise.com" target="_blank">
                Alert link
            </AlertLink>
        </Alert>
}`,...d.parameters?.docs?.source},description:{story:"`AlertLink` is meant to be used within `Alert` component.",...d.parameters?.docs?.description}}};const Ye=["Warning","Info","Success","Error","Ai","WarningWithIcon","InfoWithIcon","SuccessWithIcon","ErrorWithIcon","AiWithIcon","WithCustomIcon","WithCloseOption","WithCloseAndIcon","WithAlertLink"];export{f as Ai,S as AiWithIcon,h as Error,C as ErrorWithIcon,g as Info,I as InfoWithIcon,_ as Success,O as SuccessWithIcon,p as Warning,A as WarningWithIcon,d as WithAlertLink,v as WithCloseAndIcon,w as WithCloseOption,y as WithCustomIcon,Ye as __namedExportsOrder,$e as default};
