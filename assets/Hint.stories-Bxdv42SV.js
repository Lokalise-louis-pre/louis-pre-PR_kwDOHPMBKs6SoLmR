import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as u}from"./clsx-B-dksMZM.js";import{P as h}from"./Popover-DFSes0g6.js";import{I as x}from"./Info-C8x1KHs8.js";import{L as g}from"./Label-aurGfwxc.js";import{I as f}from"./Input-CkFPTCde.js";import"./index-yBjzXJbu.js";import"./index-DubqEmGm.js";import"./Portal-BD7l88-r.js";import"./index-CD8QLViS.js";import"./index-CJ88nXQk.js";import"./floating-ui.react-M7Gz8XYl.js";import"./useMergeRefs-CZnCAFkU.js";import"./SvgIcon-APGatIbJ.js";import"./useInputErrorMessages-C2xlH_df.js";import"./Error-li26Yj3Y.js";import"./Flex-EEZibEms.js";import"./IconButton-f6n5TEtZ.js";import"./index-7zOkDzdb.js";import"./Tooltip-DlQsDSkD.js";import"./index-Cljcv3Ef.js";import"./Close-FGPrTY3A.js";const y="_hintButton_6q17q_1",v="_iconWrapper_6q17q_18",b="_content_6q17q_28",_="_arrow_6q17q_40",a={hintButton:y,iconWrapper:v,content:b,arrow:_},n=({placement:t="auto",ariaLabel:i="More information",width:l=245,positioning:c,children:d,className:m})=>e.jsx(h,{withArrow:!0,content:d,placement:t,classNames:{content:a.content,arrow:a.arrow},positioning:c,style:{width:l},children:e.jsx("span",{"aria-label":i,role:"button",tabIndex:0,className:u(a.hintButton,m),onClick:p=>{p.stopPropagation(),p.preventDefault()},children:e.jsx("span",{className:a.iconWrapper,children:e.jsx(x,{})})})});try{n.displayName="Hint",n.__docgenInfo={description:"",displayName:"Hint",props:{positioning:{defaultValue:null,description:"Sets the positioning of the Hint popover, uses the `Popover` defaults when not set.",name:"positioning",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'}]}},placement:{defaultValue:{value:"auto"},description:"Determines where the hint should appear relative to the hint icon.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"auto"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"top-start"'},{value:'"top-end"'}]}},width:{defaultValue:{value:"245"},description:"Changes the width of the hint.",name:"width",required:!1,type:{name:'number | "auto"'}},ariaLabel:{defaultValue:{value:"More information"},description:"Changes the accessibility label on the hint icon.",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the hint.",name:"children",required:!0,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const A={title:"Components/Hint",component:n,parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0},description:{component:`Hint can be used as an icon button to provide additional context and explanations for other UI elements or text.

[Figma Source File | Hint](https://www.figma.com/design/zfCOLmZam4nrttG6IVzQyz/Expert-Design-System?node-id=11075-35352)`}}},argTypes:{width:{control:{type:"text"}}},decorators:t=>e.jsx("div",{style:{font:"var(--lok-typography-body-base-default)",margin:"32px 0"},children:t()}),render:t=>{const{children:i,...l}=t;return e.jsx(n,{...l,children:e.jsx("p",{style:{padding:"0px 16px"},children:i})})}},r={args:{children:e.jsx("p",{style:{padding:"0px 16px"},children:"This is a hint."})},render:t=>e.jsxs(e.Fragment,{children:["This could use an explanation ",e.jsx(n,{...t})," with some extra context."]})},o={args:{children:e.jsx("p",{style:{padding:"0px 16px"},children:"This hint is on the top."}),placement:"top"},render:t=>e.jsxs(e.Fragment,{children:["This could use an explanation ",e.jsx(n,{...t})," with some extra context."]})},s={args:{children:"This a hint inside a label."},decorators:t=>e.jsxs(e.Fragment,{children:[e.jsx(g,{text:e.jsxs(e.Fragment,{children:["Labels sometimes include hints ",t()]})}),e.jsx(f,{})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <p style={{
      padding: '0px 16px'
    }}>This is a hint.</p>
  },
  render: args => <>
            This could use an explanation <Hint {...args} /> with some extra context.
        </>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <p style={{
      padding: '0px 16px'
    }}>This hint is on the top.</p>,
    placement: 'top'
  },
  render: args => <>
            This could use an explanation <Hint {...args} /> with some extra context.
        </>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This a hint inside a label.'
  },
  decorators: Story => <>
            <Label text={<>Labels sometimes include hints {Story()}</>} />
            <Input />
        </>
}`,...s.parameters?.docs?.source}}};const G=["Default","ExplicitPlacement","InsideLabel"];export{r as Default,o as ExplicitPlacement,s as InsideLabel,G as __namedExportsOrder,A as default};
