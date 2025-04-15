import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-DubqEmGm.js";import{c as T}from"./clsx-B-dksMZM.js";import{u as L,I as D}from"./useInputErrorMessages-C2xlH_df.js";import{u as P}from"./useMergeRefs-CZnCAFkU.js";import"./index-yBjzXJbu.js";import"./Error-li26Yj3Y.js";import"./SvgIcon-APGatIbJ.js";const F="_container_1bmlh_1",W="_checkboxLabel_1bmlh_9",z="_labelText_1bmlh_24",H="_checkboxInput_1bmlh_30",J="_multiCheckboxContainer_1bmlh_136",U="_multiCheckbox_1bmlh_136",X="_multiCheckboxErrorContainer_1bmlh_145",m={container:F,checkboxLabel:W,labelText:z,checkboxInput:H,multiCheckboxContainer:J,multiCheckbox:U,multiCheckboxErrorContainer:X},g=o.forwardRef(({children:e,checked:a,indeterminate:n,disabled:c,error:l,errorIds:s,className:t,...u},b)=>{const{isInvalid:x,errorMessages:p}=L(l),C=o.useRef(null),d=P(b,C);return o.useEffect(()=>{const i=C.current;i&&(i.indeterminate=!!n)},[n]),r.jsxs("div",{className:T(m.container,t),children:[r.jsxs("label",{className:m.checkboxLabel,children:[r.jsx("input",{className:m.checkboxInput,...u,ref:d,type:"checkbox",checked:a,"aria-checked":n?"mixed":a,disabled:c,"aria-invalid":x,"aria-errormessage":p.length>0?p.map(i=>i.id).join(" "):s}),e&&r.jsx("span",{className:m.labelText,children:e})]}),p.length>0&&r.jsx(D,{children:p})]})});g.displayName="Checkbox";try{g.displayName="Checkbox",g.__docgenInfo={description:"",displayName:"Checkbox",props:{indeterminate:{defaultValue:null,description:"Toggles whether the checkbox should appear as indeterminate.",name:"indeterminate",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Renders a form validation `InputErrorMessage`.",name:"error",required:!1,type:{name:"string | boolean | string[]"}},errorIds:{defaultValue:null,description:"Error IDs for `InputErrorMessage`, will be generated automatically if an error message is passed.\nUsed by CheckboxGroup to associate input errors with multiple checkboxes.",name:"errorIds",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const w=o.createContext({name:"",value:[]}),{Consumer:R}=w,{Provider:q}=w;try{R.displayName="Consumer",R.__docgenInfo={description:"",displayName:"Consumer",props:{}}}catch{}try{q.displayName="Provider",q.__docgenInfo={description:"",displayName:"Provider",props:{}}}catch{}const j=({children:e,value:a=[],name:n,error:c,errorIds:l,onChange:s})=>{const[t,u]=o.useState(a);o.useEffect(()=>{u(a)},[a.join()]);const b=o.useCallback((d,i)=>{const h=t.includes(i)?t.filter(G=>G!==i):t;u(h),typeof s=="function"&&s(d,h)},[s,t]),x=o.useCallback((d,i)=>{const h=t.includes(i)?t:[...t,i];u(h),typeof s=="function"&&s(d,h)},[s,t]),p=o.useCallback(d=>{d.persist();const{currentTarget:{value:i,checked:h}}=d;h?x(d,i):b(d,i)},[x,b]),C=o.useMemo(()=>({onChange:p,value:t,name:n,error:c,errorIds:l}),[p,n,t,c,l]);return r.jsx(q,{value:C,children:e})};j.displayName="CheckboxGroup";try{j.displayName="CheckboxGroup",j.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{children:{defaultValue:null,description:"Renders `ManagedCheckbox` children as checkbox options.",name:"children",required:!0,type:{name:"ReactNode"}},value:{defaultValue:null,description:"Sets the currently checked `ManagedCheckbox` options.",name:"value",required:!1,type:{name:"readonly string[]"}},name:{defaultValue:null,description:"Sets the name attributes for the `ManagedCheckbox` options.",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"Function executed when a `ManagedCheckbox` option is checked / unchecked.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>, value: readonly string[]) => void)"}},error:{defaultValue:null,description:"Renders a form validation `InputErrorMessage`.",name:"error",required:!1,type:{name:"boolean"}},errorIds:{defaultValue:null,description:"Error IDs for `InputErrorMessage` in a managed CheckboxGroup.",name:"errorIds",required:!1,type:{name:"string"}}}}}catch{}const k=o.forwardRef(({value:e,indeterminate:a,children:n,...c},l)=>{const{name:s,value:t,onChange:u,error:b,errorIds:x}=o.useContext(w);return r.jsx(g,{ref:l,name:s,value:e,checked:t.includes(e),indeterminate:a,onChange:u,error:b,errorIds:x,...c,children:n})});k.displayName="ManagedCheckbox";try{k.displayName="ManagedCheckbox",k.__docgenInfo={description:"",displayName:"ManagedCheckbox",props:{value:{defaultValue:null,description:"Sets the value attribute for the checkbox option.",name:"value",required:!0,type:{name:"string"}},indeterminate:{defaultValue:null,description:"Toggles whether the checkbox should appear as indeterminate.",name:"indeterminate",required:!1,type:{name:"boolean"}}}}}catch{}const O=({children:e,error:a,className:n,...c})=>{const{isInvalid:l,errorMessages:s}=L(a);return r.jsx(j,{...c,error:l,errorIds:s.length>0?s.map(t=>t.id).join(" "):void 0,children:r.jsxs("div",{className:T(n,m.multiCheckboxContainer),children:[r.jsx("div",{className:m.multiCheckbox,children:e}),s.length>0&&r.jsx("div",{className:m.multiCheckboxErrorContainer,children:r.jsx(D,{children:s})})]})})};O.displayName="MultiCheckbox";try{O.displayName="MultiCheckbox",O.__docgenInfo={description:"",displayName:"MultiCheckbox",props:{children:{defaultValue:null,description:"Renders `ManagedCheckbox` children as checkbox options.",name:"children",required:!0,type:{name:"ReactElement<ManagedCheckboxProps, string | JSXElementConstructor<any>> | ReactElement<ManagedCheckboxProps, string | JSXElementConstructor<...>>[]"}},error:{defaultValue:null,description:"Renders a form validation `InputErrorMessage`.",name:"error",required:!1,type:{name:"string | boolean | string[]"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Function executed when a `ManagedCheckbox` option is checked / unchecked.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>, value: readonly string[]) => void)"}},name:{defaultValue:null,description:"Sets the name attributes for the `ManagedCheckbox` options.",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"Sets the currently checked `ManagedCheckbox` options.",name:"value",required:!1,type:{name:"readonly string[]"}},errorIds:{defaultValue:null,description:"Error IDs for `InputErrorMessage` in a managed CheckboxGroup.",name:"errorIds",required:!1,type:{name:"string"}}}}}catch{}const re={title:"Components/Forms/Checkbox",component:g,parameters:{controls:{sort:"requiredFirst"},docs:{description:{component:"Checkbox is used to make a range of selections (none, one, or several). They can be used independently or in groups.\n\nCheckbox exports 4 components:\n- `Checkbox`: Individual checkbox option, accepting standard input props.\n- `MultiCheckbox`: Styled checkbox group, combining all selection values. Supports error messaging.\n- `CheckboxGroup`: Unstyled checkbox group, handling group selection logic.\n- `ManagedCheckbox`: Individual checkbox option intended to be used as part of a `MultiCheckbox` group or `ManagedCheckbox` group.\n\n[Figma Source File | Checkbox](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4030%3A21105)"}}},argTypes:{error:{control:{type:"text"}},checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},onChange:{action:"changed"}}},f={args:{children:"Option 1"}},y={args:{children:"Option 1",indeterminate:!0}},_={args:{children:"Option 1",error:"Please select an option."}},v={args:{children:"Option 1",checked:!0,error:"Please select an option."}},M={args:{children:"Option 1",indeterminate:!0,error:"Please select an option."}},I={args:{children:"Option 1",disabled:!0}},E={args:{children:"Option 1",checked:!0,disabled:!0}},V={args:{children:"Option 1",indeterminate:!0,disabled:!0}},S={name:"Multi Checkbox",args:{value:["2"],children:[r.jsx(k,{value:"1",children:"Option 1"},"1"),r.jsx(k,{value:"2",children:"Option 2"},"2")]},render:e=>{const[a,n]=o.useState(e.value);return o.useEffect(()=>{n(e.value)},[e.value]),r.jsxs("div",{style:{display:"grid",gap:"12px"},children:[r.jsx(g,{onChange:()=>{const c=a.length<2?["1","2"]:[];n(c)},indeterminate:a.length>0&&a.length<2,checked:a.length===2,children:"Group 1"}),r.jsx("div",{style:{marginLeft:"24px"},children:r.jsx(O,{...e,value:a,onChange:(c,l)=>{n(l)}})})]})}},N={args:{checked:!0},render:e=>{const[a,n]=o.useState(e.checked);return o.useEffect(()=>{n(e.checked)},[e.checked]),r.jsxs("div",{children:[r.jsx(g,{...e,checked:a,onChange:c=>n(c.currentTarget.checked),id:"my-custom-label"}),r.jsx("label",{htmlFor:"my-custom-label",children:"My custom label"})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Option 1'
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Option 1',
    indeterminate: true
  }
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Option 1',
    error: 'Please select an option.'
  }
}`,..._.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Option 1',
    checked: true,
    error: 'Please select an option.'
  }
}`,...v.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Option 1',
    indeterminate: true,
    error: 'Please select an option.'
  }
}`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Option 1',
    disabled: true
  }
}`,...I.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Option 1',
    checked: true,
    disabled: true
  }
}`,...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Option 1',
    indeterminate: true,
    disabled: true
  }
}`,...V.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Multi Checkbox',
  args: {
    value: ['2'],
    children: [<ManagedCheckbox key="1" value="1">
                Option 1
            </ManagedCheckbox>, <ManagedCheckbox key="2" value="2">
                Option 2
            </ManagedCheckbox>]
  },
  render: args => {
    const [value, setValue] = useState<string[]>(args.value as string[]);
    useEffect(() => {
      setValue(args.value as string[]);
    }, [args.value]);
    return <div style={{
      display: 'grid',
      gap: '12px'
    }}>
                <Checkbox onChange={() => {
        const newValue = value.length < 2 ? ['1', '2'] : [];
        setValue(newValue);
      }} indeterminate={value.length > 0 && value.length < 2} checked={value.length === 2}>
                    Group 1
                </Checkbox>
                <div style={{
        marginLeft: '24px'
      }}>
                    <MultiCheckbox {...args} value={value} onChange={(e, newValue) => {
          setValue(newValue as string[]);
        }} />
                </div>
            </div>;
  }
}`,...S.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked);
    useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);
    return <div>
                <Checkbox {...args} checked={checked} onChange={e => setChecked(e.currentTarget.checked)} id="my-custom-label" />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="my-custom-label">My custom label</label>
            </div>;
  }
}`,...N.parameters?.docs?.source}}};const ae=["Default","Indeterminate","WithError","WithErrorChecked","WithErrorIndeterminate","Disabled","DisabledChecked","DisabledIndeterminate","MultiCheckboxStory","CustomLabels"];export{N as CustomLabels,f as Default,I as Disabled,E as DisabledChecked,V as DisabledIndeterminate,y as Indeterminate,S as MultiCheckboxStory,_ as WithError,v as WithErrorChecked,M as WithErrorIndeterminate,ae as __namedExportsOrder,re as default};
