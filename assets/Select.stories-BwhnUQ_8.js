import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./index-DubqEmGm.js";import{S as y}from"./Select-C-bengt5.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./index-CD8QLViS.js";import"./index-CJ88nXQk.js";import"./floating-ui.react-M7Gz8XYl.js";import"./Tooltip-DlQsDSkD.js";import"./Popover-DFSes0g6.js";import"./Portal-BD7l88-r.js";import"./useMergeRefs-CZnCAFkU.js";import"./Close-FGPrTY3A.js";import"./SvgIcon-APGatIbJ.js";import"./Dropdown-COQUELEN.js";import"./useInputErrorMessages-C2xlH_df.js";import"./Error-li26Yj3Y.js";const B={title:"Components/Forms/Select",component:y,parameters:{controls:{sort:"requiredFirst",exclude:["onBlur","onFocus","onInputChange","onKeyDown","onMenuClose","onMenuOpen","onMenuScrollToBottom","onMenuScrollToTop"]},docs:{source:{excludeDecorators:!0},description:{component:`Select allows users to select one or more options from a pre-defined list, or add their own option.

Select depends on:
- [react-select](https://react-select.com/home)

[Figma Source File | Select](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A29262)
[Figma Source File | Multi select](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A29305)`}}},argTypes:{value:{control:{type:"object"}},error:{control:{type:"text"}},isDisabled:{control:{type:"boolean"}},onChange:{action:"changed"}},decorators:[e=>m.jsx("div",{style:{marginBottom:"110px"},children:e()})]},o=e=>[...Array(e+1).keys()].slice(1).map(t=>({value:`option${t}`,label:`Option ${t}`})),n=e=>{const[t,c]=u.useState(e.value);return u.useEffect(()=>{c(e.value)},[e.value]),m.jsx(y,{...e,value:t,onChange:(d,b)=>{c(d),e.onChange?.(d,b)}})},r={args:{options:[...o(2),{value:"option4",label:`A ${"very ".repeat(100)}long option`}]},render:n},s={name:"Disabled options (function)",args:{options:[...o(5)],isOptionDisabled:e=>e.value==="option2"||e.value==="option4",menuPosition:"fixed"},render:n,parameters:{docs:{description:{story:"By passing an `isOptionDisabled` function, you can disable individual options. This function is passed the option object and should return a boolean."}}}},a={name:"Disabled options (property)",args:{options:[...o(2),{value:"option3",label:"Option 3",isDisabled:!0}]},render:n,parameters:{docs:{description:{story:"Alternatively, you can pass an `isDisabled` boolean property to options, e.g.: `{ value: 'option3', label: 'Option 3', isDisabled: true }`."}}}},i={name:"Multi-select",args:{options:o(10),isMulti:!0},render:n},p={args:{options:o(3),creatable:!0,placeholder:"Type an option to add your own"},render:n},l={name:"Many Options ManyOptions",args:{options:o(100),isMulti:!0,menuPosition:"fixed"},render:n,parameters:{docs:{description:{story:'Using `menuPosition="fixed"` in this example to allow Select to overlap outside of the Storybook container.'}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    options: [...generateSelectOptions(2), {
      value: 'option4',
      label: \`A \${'very '.repeat(100)}long option\`
    }]
  },
  render: SelectTemplate
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Disabled options (function)',
  args: {
    options: [...generateSelectOptions(5)],
    isOptionDisabled: option => (option as {
      value: string;
    }).value === 'option2' || (option as {
      value: string;
    }).value === 'option4',
    menuPosition: 'fixed'
  },
  render: SelectTemplate,
  parameters: {
    docs: {
      description: {
        story: 'By passing an \`isOptionDisabled\` function, you can disable individual options. This function is passed the option object and should return a boolean.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Disabled options (property)',
  args: {
    options: [...generateSelectOptions(2), {
      value: 'option3',
      label: 'Option 3',
      isDisabled: true
    }]
  },
  render: SelectTemplate,
  parameters: {
    docs: {
      description: {
        story: "Alternatively, you can pass an \`isDisabled\` boolean property to options, e.g.: \`{ value: 'option3', label: 'Option 3', isDisabled: true }\`."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Multi-select',
  args: {
    options: generateSelectOptions(10),
    isMulti: true
  },
  render: SelectTemplate
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    options: generateSelectOptions(3),
    creatable: true,
    placeholder: 'Type an option to add your own'
  },
  render: SelectTemplate
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Many Options ManyOptions',
  args: {
    options: generateSelectOptions(100),
    isMulti: true,
    menuPosition: 'fixed'
  },
  render: SelectTemplate,
  parameters: {
    docs: {
      description: {
        story: 'Using \`menuPosition="fixed"\` in this example to allow Select to overlap outside of the Storybook container.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const E=["Default","DisabledOptionsFunction","DisabledOptionsProperty","MultiSelect","Creatable","ManyOptions"];export{p as Creatable,r as Default,s as DisabledOptionsFunction,a as DisabledOptionsProperty,l as ManyOptions,i as MultiSelect,E as __namedExportsOrder,B as default};
