import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as f}from"./clsx-B-dksMZM.js";import{L as c}from"./Link-qvdYPJtS.js";import"./index-yBjzXJbu.js";import"./index-DubqEmGm.js";import"./index-7zOkDzdb.js";const h="_container_1ezob_1",_="_alignRight_1ezob_7",R="_title_1ezob_11",y="_value_1ezob_18",a={container:h,alignRight:_,title:R,value:y},i=({title:t,children:d,href:o,clickable:u=!1,alignRight:p=!1,percent:m=!1,className:g})=>e.jsxs("p",{className:f(g,a.container,{[a.alignRight]:p}),children:[e.jsx("span",{className:a.title,children:t}),e.jsx("span",{className:a.value,children:(()=>{const l=e.jsxs(e.Fragment,{children:[d,m&&"%"]});return o?e.jsx(c,{href:o,children:l}):u?e.jsx(c,{children:l}):l})()})]});i.displayName="Stats";try{i.displayName="Stats",i.__docgenInfo={description:"",displayName:"Stats",props:{title:{defaultValue:null,description:"Title of the stat.",name:"title",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"Link to some place, render as clickable when an href is passed.",name:"href",required:!1,type:{name:"string"}},clickable:{defaultValue:{value:"false"},description:"Indicate the stat is clickable.",name:"clickable",required:!1,type:{name:"boolean"}},alignRight:{defaultValue:{value:"false"},description:"Align text to right.",name:"alignRight",required:!1,type:{name:"boolean"}},percent:{defaultValue:{value:"false"},description:"Renders a styled percentage sign after the passed content.",name:"percent",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Renders text content.",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const L={title:"Components/Stats",component:i,parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0},description:{component:`Stats is a component that can be used to show statistical information.

[Figma Source File | Stats](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4028%3A25590)`}}},decorators:[t=>e.jsx("div",{style:{padding:20},children:t()})]},r={args:{title:"Some Information",href:void 0,alignRight:!1,percent:!0,children:"99"}},n={args:{title:"Project",href:"https://github.com/lokalise/louis",alignRight:!1,percent:!1,children:"Louis"}},s={args:{title:"Code coverage",href:void 0,alignRight:!0,percent:!0,children:"99.99"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Some Information',
    href: undefined,
    alignRight: false,
    percent: true,
    children: '99'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Project',
    href: 'https://github.com/lokalise/louis',
    alignRight: false,
    percent: false,
    children: 'Louis'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Code coverage',
    href: undefined,
    alignRight: true,
    percent: true,
    children: '99.99'
  }
}`,...s.parameters?.docs?.source}}};const N=["Default","LinkToHref","AlignRight"];export{s as AlignRight,r as Default,n as LinkToHref,N as __namedExportsOrder,L as default};
