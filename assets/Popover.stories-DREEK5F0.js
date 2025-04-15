import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as v}from"./Popover-DFSes0g6.js";import{B as n}from"./Button-CHrSvQDw.js";import"./index-yBjzXJbu.js";import"./index-DubqEmGm.js";import"./clsx-B-dksMZM.js";import"./Portal-BD7l88-r.js";import"./index-CD8QLViS.js";import"./index-CJ88nXQk.js";import"./floating-ui.react-M7Gz8XYl.js";import"./useMergeRefs-CZnCAFkU.js";import"./index-7zOkDzdb.js";import"./index-Cljcv3Ef.js";import"./SvgIcon-APGatIbJ.js";const t=({children:l,style:u})=>e.jsx("div",{style:{color:"var(--lok-color-text-default)",...u},children:l}),R={title:"Components/Popover",component:v,parameters:{controls:{sort:"requiredFirst",exclude:["children","content","components"]},docs:{source:{excludeDecorators:!0},description:{component:"Popover is used to display in-product help content, attached to the child element passed to it.\n\nPopover depends on:\n- [Floating UI](https://floating-ui.com/)\n\n**NOTE:** The `Popover` relies on user interactions for the trigger, and we do not want to modify its styles through Popover.\nTherefore, we do not recommend using `styled(Popover)` directly. If you wish to customize the `Popover`,\nyou can provide your own `Content` and `Arrow` components via the `components` prop.\n\n[Figma Source File | Popover](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4029%3A21088)"}}},decorators:[l=>e.jsx("div",{style:{margin:"45px"},children:l()})]},r={args:{withArrow:!0,content:e.jsx(t,{style:{padding:"16px"},children:"Popover content"}),children:e.jsx(n,{variant:"outline",children:"On click"})}},o={args:{withArrow:!0,triggerEvent:"hover",content:e.jsx(t,{style:{padding:"16px"},children:"Popover content"}),children:e.jsx(n,{variant:"outline",children:"On hover"})}},a={args:{withArrow:!0,triggerEvent:"hover",content:e.jsx(t,{style:{padding:"16px"},children:"Popover content"}),children:e.jsx("div",{children:e.jsx(n,{variant:"outline",disabled:!0,children:"On disabled hover"})})}},i={args:{withArrow:!1,offset:5,content:e.jsx(t,{style:{padding:"16px"},children:"Popover content"}),children:e.jsx(n,{variant:"outline",children:"Offset: 5"})}},s={args:{withArrow:!0,placement:"left",triggerEvent:"hover",content:e.jsx(t,{style:{padding:"16px"},children:"Left"}),children:e.jsx(n,{variant:"outline",children:"Left"})}},c={args:{withArrow:!0,placement:"right",open:!0,content:e.jsx(t,{style:{padding:"16px"},children:"Right"}),children:e.jsx(n,{variant:"outline",children:"Right"})}},p={args:{triggerEvent:"hover",delay:2e3,content:e.jsx(t,{style:{padding:"16px"},children:"Popover content"}),children:e.jsx(n,{variant:"outline",children:"Delay 2 seconds"})}},d={args:{inPortal:!0,content:e.jsx(t,{style:{padding:"16px"},children:"Rendered in `div.louis-portal`"}),children:e.jsx(n,{variant:"outline",children:"Open in Portal"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    withArrow: true,
    content: <PopoverContent style={{
      padding: '16px'
    }}>Popover content</PopoverContent>,
    children: <Button variant={'outline' as Variant}>On click</Button>
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    withArrow: true,
    triggerEvent: 'hover',
    content: <PopoverContent style={{
      padding: '16px'
    }}>Popover content</PopoverContent>,
    children: <Button variant={'outline' as Variant}>On hover</Button>
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    withArrow: true,
    triggerEvent: 'hover',
    content: <PopoverContent style={{
      padding: '16px'
    }}>Popover content</PopoverContent>,
    children: <div>
                <Button variant={'outline' as Variant} disabled>
                    On disabled hover
                </Button>
            </div>
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    withArrow: false,
    offset: 5,
    content: <PopoverContent style={{
      padding: '16px'
    }}>Popover content</PopoverContent>,
    children: <Button variant={'outline' as Variant}>Offset: 5</Button>
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    withArrow: true,
    placement: 'left',
    triggerEvent: 'hover',
    content: <PopoverContent style={{
      padding: '16px'
    }}>Left</PopoverContent>,
    children: <Button variant={'outline' as Variant}>Left</Button>
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    withArrow: true,
    placement: 'right',
    open: true,
    content: <PopoverContent style={{
      padding: '16px'
    }}>Right</PopoverContent>,
    children: <Button variant={'outline' as Variant}>Right</Button>
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    triggerEvent: 'hover',
    delay: 2000,
    content: <PopoverContent style={{
      padding: '16px'
    }}>Popover content</PopoverContent>,
    children: <Button variant={'outline' as Variant}>Delay 2 seconds</Button>
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    inPortal: true,
    content: <PopoverContent style={{
      padding: '16px'
    }}>Rendered in \`div.louis-portal\`</PopoverContent>,
    children: <Button variant={'outline' as Variant}>Open in Portal</Button>
  }
}`,...d.parameters?.docs?.source}}};const S=["OnClick","OnHover","OnDisabledHover","Offset","PlacementLeft","PlacementRight","Delay","Portal"];export{p as Delay,i as Offset,r as OnClick,a as OnDisabledHover,o as OnHover,s as PlacementLeft,c as PlacementRight,d as Portal,S as __namedExportsOrder,R as default};
