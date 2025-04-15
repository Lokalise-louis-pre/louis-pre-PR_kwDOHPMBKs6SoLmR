import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{I as s,u as i}from"./useInputErrorMessages-C2xlH_df.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./Error-li26Yj3Y.js";import"./SvgIcon-APGatIbJ.js";import"./index-DubqEmGm.js";const h={title:"Components/Forms/InputErrorMessage",component:s,parameters:{controls:{sort:"requiredFirst"},docs:{source:{type:"code"},description:{component:"InputErrorMessage is used to display one or more form validation error messages next to input fields.\n\nInputErrorMessage exports a `useInputErrorMessages` hook that accepts 1 or more error messages or a boolean,\nand returns an object with an `isInvalid` boolean if there are errors, and an `errorMessages` array with an object for each error containing the message and a generated unique ID.\nThe `errorMessages` array can be passed as a child to `InputErrorMessage`."}}},argTypes:{error:{control:{type:"object"}}},render:o=>{const{error:a}=o,{errorMessages:n}=i(a);return t.jsx(s,{children:n})}},r={args:{error:"Single error message"}},e={args:{error:[`This is an array of error messages
`,`Which you can use to show multiple input errors
`,`This is an array of error messages
`,"By passing multiple children to InputErrorMessage"]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Single error message'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    error: ['This is an array of error messages\\n', 'Which you can use to show multiple input errors\\n', 'This is an array of error messages\\n',
    // this one will be stripped out
    'By passing multiple children to InputErrorMessage']
  }
}`,...e.parameters?.docs?.source}}};const M=["Default","MultipleMessages"];export{r as Default,e as MultipleMessages,M as __namedExportsOrder,h as default};
