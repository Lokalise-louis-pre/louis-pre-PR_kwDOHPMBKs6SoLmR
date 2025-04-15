import{j as f}from"./jsx-runtime-Cf8x2fCZ.js";import{B as A}from"./Button-CHrSvQDw.js";import{i as e}from"./iconsStoryArray-B0XmHhy2.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./index-DubqEmGm.js";import"./index-7zOkDzdb.js";import"./index-Cljcv3Ef.js";import"./SvgIcon-APGatIbJ.js";import"./Sparkle-s9ozeDuG.js";import"./CaretRight-COmzj0PB.js";import"./Search-CfhKQ7qw.js";import"./Clipboard-bQX2iwzL.js";import"./Close-FGPrTY3A.js";import"./Dropdown-COQUELEN.js";import"./Error-li26Yj3Y.js";import"./MenuHamburger-Bitq72my.js";import"./Info-C8x1KHs8.js";import"./Selected-DhZoXuAk.js";import"./Warning-DUKJc5Ha.js";const H={title:"Components/Button",component:A,parameters:{controls:{sort:"requiredFirst"},docs:{description:{component:`Buttons are interactive elements. They are used to perform specific actions in the UI.

[Figma Source File | Button](https://www.figma.com/design/zfCOLmZam4nrttG6IVzQyz/Expert-Design-System?node-id=4028-25591)`}}},argTypes:{onClick:{action:""},leftIcon:{options:e.map(([r])=>r),mapping:Object.fromEntries(e),control:{type:"select"}},rightIcon:{options:e.map(([r])=>r),mapping:Object.fromEntries(e),control:{type:"select"}}},render:r=>{const{leftIcon:L,rightIcon:x,...k}=r,D=L?f.jsx(L,{}):void 0,E=x?f.jsx(x,{}):void 0;return f.jsx(A,{leftIcon:D,rightIcon:E,...k})}},n={args:{children:"Default"}},c={args:{appearance:"accent",children:"Accent"}},s={args:{appearance:"danger",children:"Danger"}},a={args:{appearance:"warning",children:"Warning"}},t={args:{variant:"primary",children:"Primary"}},o={args:{variant:"secondary",children:"Secondary"}},i={args:{variant:"tertiary",children:"Tertiary"}},p={args:{appearance:"accent",variant:"primary",children:"Extra Small",size:"xs"}},m={args:{appearance:"accent",variant:"primary",children:"Small",size:"sm"}},d={args:{appearance:"accent",variant:"primary",children:"Medium",size:"md"}},l={args:{appearance:"accent",variant:"primary",children:"Large",size:"lg"}},g={args:{active:!0,appearance:"accent",variant:"primary",children:"Active"}},u={args:{disabled:!0,appearance:"accent",variant:"primary",children:"Disabled"}},h={args:{children:"Loading",appearance:"accent",variant:"primary",loading:!0}},y={args:{href:"https://lokalise.com/",rel:"noreferrer",target:"_blank",children:"Anchor Link"}},v={args:{appearance:"accent",variant:"primary",leftIcon:"ErrorIcon",children:"Left icon"}},S={args:{appearance:"accent",variant:"primary",rightIcon:"CheckIcon",children:"Right icon"}},I={args:{appearance:"accent",variant:"primary",leftIcon:"ErrorIcon",rightIcon:"CheckIcon",children:"Both icons"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'accent',
    children: 'Accent'
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'danger',
    children: 'Danger'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'warning',
    children: 'Warning'
  }
}`,...a.parameters?.docs?.source},description:{story:"The `warning` appearance is used only with the `primary` variant and will be removed in the future.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary'
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'accent',
    variant: 'primary',
    children: 'Extra Small',
    size: 'xs'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'accent',
    variant: 'primary',
    children: 'Small',
    size: 'sm'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'accent',
    variant: 'primary',
    children: 'Medium',
    size: 'md'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'accent',
    variant: 'primary',
    children: 'Large',
    size: 'lg'
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    active: true,
    appearance: 'accent',
    variant: 'primary',
    children: 'Active'
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    appearance: 'accent',
    variant: 'primary',
    children: 'Disabled'
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Loading',
    appearance: 'accent',
    variant: 'primary',
    loading: true
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://lokalise.com/',
    rel: 'noreferrer',
    target: '_blank',
    children: 'Anchor Link'
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'accent',
    variant: 'primary',
    leftIcon: 'ErrorIcon',
    children: 'Left icon'
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'accent',
    variant: 'primary',
    rightIcon: 'CheckIcon',
    children: 'Right icon'
  }
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'accent',
    variant: 'primary',
    leftIcon: 'ErrorIcon',
    rightIcon: 'CheckIcon',
    children: 'Both icons'
  }
}`,...I.parameters?.docs?.source}}};const J=["Default","Accent","Danger","Warning","Primary","Secondary","Tertiary","ExtraSmall","Small","Medium","Large","Active","Disabled","Loading","AsLink","LeftIcon","RightIcon","BothIcons"];export{c as Accent,g as Active,y as AsLink,I as BothIcons,s as Danger,n as Default,u as Disabled,p as ExtraSmall,l as Large,v as LeftIcon,h as Loading,d as Medium,t as Primary,S as RightIcon,o as Secondary,m as Small,i as Tertiary,a as Warning,J as __namedExportsOrder,H as default};
