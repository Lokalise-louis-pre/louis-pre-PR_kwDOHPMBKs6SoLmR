import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./index-DubqEmGm.js";import{I as m}from"./Input-CkFPTCde.js";import{I as f}from"./IconButton-f6n5TEtZ.js";import{E as u}from"./Error-li26Yj3Y.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./useInputErrorMessages-C2xlH_df.js";import"./Flex-EEZibEms.js";import"./Close-FGPrTY3A.js";import"./SvgIcon-APGatIbJ.js";import"./index-7zOkDzdb.js";import"./Tooltip-DlQsDSkD.js";import"./Popover-DFSes0g6.js";import"./Portal-BD7l88-r.js";import"./index-CD8QLViS.js";import"./index-CJ88nXQk.js";import"./floating-ui.react-M7Gz8XYl.js";import"./useMergeRefs-CZnCAFkU.js";import"./index-Cljcv3Ef.js";const V={title:"Components/Forms/Input",component:m,parameters:{controls:{sort:"requiredFirst"},docs:{description:{component:`Input is used for text input fields.

[Figma Source File | Input](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4029%3A21039)`}}},argTypes:{value:{control:{type:"text"}},error:{control:{type:"object"}},disabled:{control:{type:"boolean"}},prefix:{control:{disable:!0}},suffix:{control:{disable:!0}},onChange:{action:"changed"}}},r=e=>{const[d,l]=c.useState(e.value);return c.useEffect(()=>{l(e.value)},[e.value]),s.jsx(m,{...e,value:d,onChange:i=>{l(i.currentTarget.value),e.onChange?.(i)}})},t={args:{placeholder:"Default"},render:r},a={args:{placeholder:"Small",inputSize:"small"},render:r},o={args:{placeholder:"Input placeholder text",value:"This input can be cleared",clearable:!0},render:r},n={args:{placeholder:"Input placeholder text",error:"Please enter a valid input",value:"Some invalid input"},render:r},p={name:"Prefix / Suffix",args:{placeholder:"Prefix / Suffix",prefix:s.jsx(u,{}),suffix:s.jsx(f,{ariaLabel:"Important",children:s.jsx(u,{})})},render:r};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Default'
  },
  render: InputTemplate
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Small',
    inputSize: 'small'
  },
  render: InputTemplate
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Input placeholder text',
    value: 'This input can be cleared',
    clearable: true
  },
  render: InputTemplate
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Input placeholder text',
    error: 'Please enter a valid input',
    value: 'Some invalid input'
  },
  render: InputTemplate
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Prefix / Suffix',
  args: {
    placeholder: 'Prefix / Suffix',
    prefix: <ErrorIcon />,
    suffix: <IconButton ariaLabel="Important">
                <ErrorIcon />
            </IconButton>
  },
  render: InputTemplate
}`,...p.parameters?.docs?.source}}};const W=["Default","Small","Clearable","WithError","PrefixSuffix"];export{o as Clearable,t as Default,p as PrefixSuffix,a as Small,n as WithError,W as __namedExportsOrder,V as default};
