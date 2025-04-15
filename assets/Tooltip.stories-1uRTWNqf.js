import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as s}from"./Tooltip-DlQsDSkD.js";import{B as n}from"./Button-CHrSvQDw.js";import{P as a}from"./Popover-DFSes0g6.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./index-DubqEmGm.js";import"./index-7zOkDzdb.js";import"./index-Cljcv3Ef.js";import"./SvgIcon-APGatIbJ.js";import"./Portal-BD7l88-r.js";import"./index-CD8QLViS.js";import"./index-CJ88nXQk.js";import"./floating-ui.react-M7Gz8XYl.js";import"./useMergeRefs-CZnCAFkU.js";const j={title:"Components/Tooltip",component:s,parameters:{controls:{sort:"requiredFirst",exclude:["children","popoverContent","tooltip","components","showPopover"]},docs:{source:{excludeDecorators:!0},description:{component:`Tooltip is used to provide short descriptions or explanations for their paired element (child element). They should not contain any links or buttons.

[Figma Source File | Tooltip](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4029%3A21088)`}}},decorators:i=>t.jsx("div",{style:{margin:25},children:i()})},r={args:{tooltip:"Tooltip content",children:t.jsx(n,{variant:"secondary",children:"Tooltip"})}},e={args:{inPortal:!0,tooltip:"Tooltip content",children:t.jsx(n,{variant:"secondary",children:"Tooltip"})}},o={args:{inPortal:!0,tooltip:"Tooltip content",children:t.jsx(a,{content:"popover content",children:t.jsx(n,{variant:"secondary",children:"Tooltip"})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tooltip: 'Tooltip content',
    children: <Button variant="secondary">Tooltip</Button>
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    inPortal: true,
    tooltip: 'Tooltip content',
    children: <Button variant="secondary">Tooltip</Button>
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    inPortal: true,
    tooltip: 'Tooltip content',
    children: <Popover content="popover content">
                <Button variant="secondary">Tooltip</Button>
            </Popover>
  }
}`,...o.parameters?.docs?.source},description:{story:`Tooltip can also be used together with generic Popover enabling "Tooltip on hover, Popover on click" behaviour.
Order of components (Tooltip in Popover or Popover in Tooltip) doesn't matter.`,...o.parameters?.docs?.description}}};const b=["Default","RenderInPortal","WithPopover"];export{r as Default,e as RenderInPortal,o as WithPopover,b as __namedExportsOrder,j as default};
