import{j as c}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-DubqEmGm.js";import{c as _}from"./clsx-B-dksMZM.js";import{u as f,I as T}from"./useInputErrorMessages-C2xlH_df.js";import"./index-yBjzXJbu.js";import"./Error-li26Yj3Y.js";import"./SvgIcon-APGatIbJ.js";const h="_textarea_1r5s5_1",y="_error_1r5s5_45",v="_container_1r5s5_49",l={textarea:h,error:y,container:v},a=m.forwardRef(({error:e,rows:p=3,className:r,...t},x)=>{const{isInvalid:u,errorMessages:o}=f(e);return c.jsxs("div",{className:l.container,children:[c.jsx("textarea",{...t,ref:x,rows:p,className:_({[l.textarea]:!0,[l.error]:u,[r||""]:r}),"aria-invalid":u,"aria-errormessage":o.length>0?o.map(g=>g.id).join(" "):void 0}),o.length>0&&c.jsx(T,{children:o})]})});a.displayName="Textarea";try{a.displayName="Textarea",a.__docgenInfo={description:"",displayName:"Textarea",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | boolean | string[]"}}}}}catch{}const N={title:"Components/Forms/Textarea",component:a,parameters:{controls:{sort:"requiredFirst"},docs:{description:{component:`Textarea designed for longer and larger text input that may span multiple lines.

[Figma Source File | Textarea](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4029%3A21039)`}}},argTypes:{value:{control:{type:"text"}},error:{control:{type:"text"}},disabled:{control:{type:"boolean"}},onChange:{action:"changed"}}},d=e=>{const[p,r]=m.useState(e.value);return m.useEffect(()=>{r(e.value)},[e.value]),c.jsx(a,{...e,value:p,onChange:t=>{r(t.target.value),e.onChange?.(t)}})},s={args:{},render:d},n={args:{rows:10},render:d},i={args:{error:"Please enter a valid input"},render:d};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: TextareaTemplate
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 10
  },
  render: TextareaTemplate
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Please enter a valid input'
  },
  render: TextareaTemplate
}`,...i.parameters?.docs?.source}}};const R=["Default","Rows","WithError"];export{s as Default,n as Rows,i as WithError,R as __namedExportsOrder,N as default};
