import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as g}from"./index-DubqEmGm.js";import{F as L}from"./Flex-EEZibEms.js";import{c as q}from"./clsx-B-dksMZM.js";import{B as N}from"./Button-CHrSvQDw.js";import{T as E}from"./Tooltip-DlQsDSkD.js";import{T as A,s as w}from"./index-C4WZCKW5.js";import{I as P}from"./Input-CkFPTCde.js";import"./index-yBjzXJbu.js";import"./index-7zOkDzdb.js";import"./index-Cljcv3Ef.js";import"./SvgIcon-APGatIbJ.js";import"./Popover-DFSes0g6.js";import"./Portal-BD7l88-r.js";import"./index-CD8QLViS.js";import"./index-CJ88nXQk.js";import"./floating-ui.react-M7Gz8XYl.js";import"./useMergeRefs-CZnCAFkU.js";import"./IconButton-f6n5TEtZ.js";import"./Close-FGPrTY3A.js";import"./Info-C8x1KHs8.js";import"./Warning-DUKJc5Ha.js";import"./Error-li26Yj3Y.js";import"./useInputErrorMessages-C2xlH_df.js";const I="_horizontalDivider_ur6hm_1",G="_actionsContainer_ur6hm_8",W={horizontalDivider:I,actionsContainer:G},D="_pageCounterContainer_b0gpu_1",F="_pagesContainer_b0gpu_7",B="_pageLabelContainer_b0gpu_15",R="_pageNumber_b0gpu_25",H="_selectedPageNumber_b0gpu_54",$="_pageLabel_b0gpu_15",K="_backgroundLine_b0gpu_67",u={pageCounterContainer:D,pagesContainer:F,pageLabelContainer:B,pageNumber:R,selectedPageNumber:H,pageLabel:$,backgroundLine:K},_=({currentPageIndex:n,onNavigateToPage:l,pages:p})=>e.jsxs("div",{className:u.pageCounterContainer,children:[e.jsx("div",{className:u.backgroundLine}),e.jsx("div",{className:u.pagesContainer,children:p.map((c,o)=>e.jsxs("div",{className:u.pageLabelContainer,children:[e.jsx(N,{className:q({[u.pageNumber]:!0,[u.selectedPageNumber]:n===o}),type:"button",appearance:"accent",variant:n===o?"primary":"secondary",disabled:o>=1&&!p[o-1].valid,onClick:()=>l(o),children:o+1}),e.jsx("div",{className:u.pageLabel,children:c.label})]},c.label))})]});_.displayName="HorizontalPageCounter";try{_.displayName="HorizontalPageCounter",_.__docgenInfo={description:"",displayName:"HorizontalPageCounter",props:{currentPageIndex:{defaultValue:null,description:"",name:"currentPageIndex",required:!0,type:{name:"number"}},onNavigateToPage:{defaultValue:null,description:"",name:"onNavigateToPage",required:!0,type:{name:"(index: number) => void"}},pages:{defaultValue:null,description:"",name:"pages",required:!0,type:{name:"StepWizardPageData[]"}}}}}catch{}const j={ConfirmAndGoToNext:"louis/stepWizard/confirmAndGoToNext"},f=({confirmTooltip:n,submitText:l,onSubmit:p,className:c,children:o})=>{const[a,z]=g.useState(0),h=(t,d,r)=>{const T=r.filter((C,k)=>k<d).every(C=>C.props.valid||C.props.valid===void 0);return(t.valid||t.valid===void 0)&&T},s=g.useMemo(()=>o.filter(t=>g.isValidElement(t)&&t.props).map(t=>t).map((t,d,r)=>({...t.props,valid:h(t.props,d,r),loading:t.props.loading??!1,element:t}))??[],[o]),v=a===s.length-1,S=async t=>{const{onPageSave:d,onBeforePageChange:r}=s[a];d?.(t),!(r&&await Promise.resolve(r({currentPage:a,targetPage:t}))===!1)&&z(t)},m=()=>{v?p():S(a+1)},i=()=>{S(a-1)};return g.useEffect(()=>(document.addEventListener(j.ConfirmAndGoToNext,m),()=>{document.removeEventListener(j.ConfirmAndGoToNext,m)})),e.jsxs(L,{gap:4,align:"stretch",direction:"column",className:c,children:[e.jsx(_,{currentPageIndex:a,pages:s,onNavigateToPage:t=>{S(t)}}),s.map((t,d)=>d===a&&t.element),e.jsx("div",{className:W.horizontalDivider}),e.jsxs("div",{className:W.actionsContainer,children:[a>0?e.jsxs(N,{type:"button",appearance:"accent",variant:"secondary",onClick:i,children:["Previous: ",s[a-1].label]}):e.jsx("span",{}),e.jsx(E,{show:!!n&&s[a].valid,tooltip:n??"",children:e.jsx(N,{type:"button",appearance:"accent",variant:"primary",onClick:m,loading:s[a].loading,disabled:!s[a].valid,children:v?`${l}`:`Next: ${s[a+1].label}`})})]})]})};f.displayName="StepWizard";try{f.displayName="StepWizard",f.__docgenInfo={description:"",displayName:"StepWizard",props:{confirmTooltip:{defaultValue:null,description:'Tooltip displayed on the "Next" or "Submit" button.',name:"confirmTooltip",required:!1,type:{name:"string"}},submitText:{defaultValue:null,description:"Text displayed on the final submit button on the last page.",name:"submitText",required:!0,type:{name:"string"}},onSubmit:{defaultValue:null,description:"The callback executed when the user presses the submit button.",name:"onSubmit",required:!0,type:{name:"() => void"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Accept StepWizardPage as children.",name:"children",required:!0,type:{name:"(boolean | ReactElement<StepWizardPageProps, string | JSXElementConstructor<any>>)[]"}}}}}catch{}const O="_container_i6z5g_1",J={container:O},b=({children:n,className:l})=>e.jsx(L,{gap:4,align:"stretch",direction:"column",className:q(J.container,l),children:n});b.displayName="StepWizardPage";try{b.displayName="StepWizardPage",b.__docgenInfo={description:"",displayName:"StepWizardPage",props:{children:{defaultValue:null,description:"Render Step's content.",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},label:{defaultValue:null,description:"The name of the page displayed in the navigation bar.",name:"label",required:!0,type:{name:"string"}},valid:{defaultValue:null,description:"Allows navigating to the next page.",name:"valid",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:'Shows a loading spinner on the "Next" or "Submit" button.',name:"loading",required:!1,type:{name:"boolean"}},onPageSave:{defaultValue:null,description:"A callback executed before the user leaves this page.\n@deprecated use `onBeforePageChange` instead",name:"onPageSave",required:!1,type:{name:"((movingToPage: number) => void)"}},onBeforePageChange:{defaultValue:null,description:"A callback to execute before the user leaves this page.\nCan be used to prevent page transition.\n@returns An optional Promise, which resolves to an optional boolean.\nIf the boolean is `false` then the page transition is prevented.\nAll other results will allow the page to transition as normal.\n@example ```ts\nmyPage.onBeforePageChange = () => getPageErrors()\n	.then(errors => errors.length === 0);\n```",name:"onBeforePageChange",required:!1,type:{name:"((pageInfo: { currentPage: number; targetPage: number; }) => boolean | void | Promise<boolean | void>)"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const fe={title:"Components/StepWizard",component:f,parameters:{controls:{sort:"requiredFirst",exclude:["children","onFirstPageSave","onSecondPageSave","onLastPageSave","onSubmit"]},docs:{source:{excludeDecorators:!0},description:{component:"A multi-step wizard that you can use to collect information through steps."}}},decorators:[n=>e.jsxs(e.Fragment,{children:[e.jsx(A,{}),n()]})],argTypes:{onSubmit:{action:"submitted"},onFirstPageSave:{action:"first page saved"},onSecondPageSave:{action:"second page saved"},onLastPageSave:{action:"last page saved"}}},V=n=>{const{title:l,description:p,options:c,signature:o,submitText:a,confirmTooltip:z,isPageLoading:h,onFirstPageSave:s,onSecondPageSave:v,onLastPageSave:S,onSubmit:m}=n,[i,t]=g.useState({title:l||"",description:p||"",options:c||"",signature:o||""});g.useEffect(()=>{t({title:l||"",description:p||"",options:c||"",signature:o||""})},[l,p,c,o]);const d=()=>{m&&m(i),w({type:"success",title:"Submitted successfully!"})};return e.jsxs(f,{submitText:a,onSubmit:d,confirmTooltip:z,children:[e.jsxs(b,{label:"General information",valid:!!i.title,onPageSave:s,loading:h,children:[e.jsx("h2",{children:"General information"}),e.jsx(P,{value:i.title,onChange:r=>t({...i,title:r.currentTarget.value}),placeholder:"Title (Required)"}),e.jsx(P,{value:i.description,onChange:r=>t({...i,description:r.currentTarget.value}),placeholder:"Description"})]}),e.jsxs(b,{label:"Task options",onPageSave:v,loading:h,children:[e.jsx("h2",{children:"Task options"}),e.jsx(P,{value:i.options,onChange:r=>t({...i,options:r.currentTarget.value}),placeholder:"Options"})]}),e.jsxs(b,{label:"Signature",valid:!!i.signature,onPageSave:S,loading:h,children:[e.jsx("h2",{children:"Signature"}),e.jsx(P,{value:i.signature,onChange:r=>t({...i,signature:r.currentTarget.value}),placeholder:"Signature (required)"})]})]})},x={args:{submitText:"Submit",isPageLoading:!1},render:V},y={args:{submitText:"Submit",isPageLoading:!1,confirmTooltip:"Shift+Enter"},render:V,parameters:{docs:{description:{story:`
\`\`\`tsx
import { StepWizard, StepWizardPage, useStepWizard } from '@lokalise/louis';

export default () => {
  const { confirmAndGoToNext } = useStepWizard();

  // In this example it's a keyboard shortcut that will navigate the wizard to the next page
  const { label } = useShortcut('Shift+Enter', () => confirmAndGoToNext());

  return (
    <StepWizard submitText="Submit" onSubmit={() => {}} confirmTooltip={label}>
      <StepWizardPage label="Step 1">Content 1</StepWizardPage>
      <StepWizardPage label="Step 2">Content 2</StepWizardPage>
      <StepWizardPage label="Step 3">Content 3</StepWizardPage>
    </StepWizard>
  );
};
\`\`\`
        `}}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    submitText: 'Submit',
    isPageLoading: false
  },
  render: StepWizardTemplate
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    submitText: 'Submit',
    isPageLoading: false,
    confirmTooltip: 'Shift+Enter'
  },
  render: StepWizardTemplate,
  parameters: {
    docs: {
      description: {
        story: \`
\\\`\\\`\\\`tsx
import { StepWizard, StepWizardPage, useStepWizard } from '@lokalise/louis';

export default () => {
  const { confirmAndGoToNext } = useStepWizard();

  // In this example it's a keyboard shortcut that will navigate the wizard to the next page
  const { label } = useShortcut('Shift+Enter', () => confirmAndGoToNext());

  return (
    <StepWizard submitText="Submit" onSubmit={() => {}} confirmTooltip={label}>
      <StepWizardPage label="Step 1">Content 1</StepWizardPage>
      <StepWizardPage label="Step 2">Content 2</StepWizardPage>
      <StepWizardPage label="Step 3">Content 3</StepWizardPage>
    </StepWizard>
  );
};
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...y.parameters?.docs?.source}}};const ve=["Default","WithKeyboardShortcuts"];export{x as Default,y as WithKeyboardShortcuts,ve as __namedExportsOrder,fe as default};
