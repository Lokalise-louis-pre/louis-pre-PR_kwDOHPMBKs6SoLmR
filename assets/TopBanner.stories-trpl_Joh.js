import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{c as h}from"./clsx-B-dksMZM.js";import{I as f}from"./IconButton-f6n5TEtZ.js";import{C as k}from"./Close-FGPrTY3A.js";import{P as C}from"./index-7zOkDzdb.js";import"./index-yBjzXJbu.js";import"./index-DubqEmGm.js";import"./Tooltip-DlQsDSkD.js";import"./Popover-DFSes0g6.js";import"./Portal-BD7l88-r.js";import"./index-CD8QLViS.js";import"./index-CJ88nXQk.js";import"./floating-ui.react-M7Gz8XYl.js";import"./useMergeRefs-CZnCAFkU.js";import"./index-Cljcv3Ef.js";import"./SvgIcon-APGatIbJ.js";const y="_container_1ukrp_1",L="_alignCenter_1ukrp_10",x="_error_1ukrp_14",v="_warning_1ukrp_18",w="_info_1ukrp_22",j="_content_1ukrp_26",i={container:y,alignCenter:L,error:x,warning:v,info:w,content:j},t=({status:e="warning",align:a="top",onClose:s,children:B,className:T,..._})=>n.jsxs("div",{className:h(i.container,T,{[i.alignCenter]:a==="center",[i[e]]:e}),..._,children:[n.jsx("div",{className:i.content,children:B}),typeof s=="function"&&n.jsx(f,{ariaLabel:"Close",onClick:s,children:n.jsx(k,{})})]});t.displayName="TopBanner";try{t.displayName="TopBanner",t.__docgenInfo={description:"",displayName:"TopBanner",props:{status:{defaultValue:{value:"warning"},description:"Changes background color.",name:"status",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},align:{defaultValue:{value:"top"},description:"Aligns the content and the close button.",name:"align",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"center"'}]}},onClose:{defaultValue:null,description:"Allows to close the banner.",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const b="_topBannerLink_xnrjv_1",A={topBannerLink:b},g=({className:e,...a})=>n.jsx(C,{className:h(e,A.topBannerLink),...a});try{g.displayName="TopBannerLink",g.__docgenInfo={description:"",displayName:"TopBannerLink",props:{href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}}}catch{}const G={title:"Components/TopBanner",component:t,args:{onCloseFunction:!1},argTypes:{onCloseFunction:{name:"Pass onClose function?",control:{type:"boolean"}},onClose:{action:"onClose"}},parameters:{docs:{description:{component:"TopBanner is used to display messages on the top of the page. It takes the full width of the page.\n\nTopBanner exports 2 components:\n- `TopBanner`: Main component.\n- `TopBannerLink`: Link that is meant to be used within `TopBanner`."}}}},r="Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",o=e=>{const{onCloseFunction:a,...s}=e;return n.jsx(t,{...s,onClose:a?e.onClose:void 0})},c={args:{children:r,status:"warning"},render:o},l={args:{children:r,status:"info"},render:o},p={args:{children:r,status:"error"},render:o},m={name:"onClose",args:{children:r,onCloseFunction:!0},render:o},d={name:"TopBannerLink",args:{children:[r,n.jsx(g,{children:"A special link"},"link")]},render:o},u={name:"Centered Close Button TopBanner",args:{children:[r,n.jsx(g,{children:"A special link"},"link")],onCloseFunction:!0,align:"center"},render:o};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: longMessage,
    status: 'warning'
  },
  render: TopBannerTemplate
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: longMessage,
    status: 'info'
  },
  render: TopBannerTemplate
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: longMessage,
    status: 'error'
  },
  render: TopBannerTemplate
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'onClose',
  args: {
    children: longMessage,
    onCloseFunction: true
  },
  render: TopBannerTemplate
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'TopBannerLink',
  args: {
    children: [longMessage, <TopBannerLink key="link">A special link</TopBannerLink>]
  },
  render: TopBannerTemplate
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Centered Close Button TopBanner',
  args: {
    children: [longMessage, <TopBannerLink key="link">A special link</TopBannerLink>],
    onCloseFunction: true,
    align: 'center'
  },
  render: TopBannerTemplate
}`,...u.parameters?.docs?.source}}};const J=["Warning","Info","Error","WithOnClose","WithTopBannerLink","CenteredCloseButton"];export{u as CenteredCloseButton,p as Error,l as Info,c as Warning,m as WithOnClose,d as WithTopBannerLink,J as __namedExportsOrder,G as default};
