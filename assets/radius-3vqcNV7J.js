import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-s_7BDCjm.js";import"./index-C5WFQ8lX.js";import{r}from"./index-DubqEmGm.js";import{g as h}from"./tokenValues-BQyP9yJ8.js";import{t as m,T as x}from"./ThemeSwitcher-twd-wFJo.js";import{M as p,U as u}from"./index-BIgXiRPh.js";import"./index-yBjzXJbu.js";import"./preview-BxeMi2Ss.js";import"./iframe-nrFi4MSj.js";import"./DocsRenderer-CFRXHY34-DBHidBs8.js";import"./react-18-BfgGLNg9.js";import"./index-CJ88nXQk.js";import"./index-CD8QLViS.js";import"./index-CFeRKNTJ.js";import"./index-DrFu-skq.js";const j="_container_fqx9h_1",f="_block_fqx9h_10",o={container:j,block:f},g=()=>{const n={code:"code",div:"div",span:"span",...s()},[i,l]=r.useState("themeLokaliseLight"),d=h(m[i].radius);return e.jsxs(e.Fragment,{children:[e.jsx(x,{selectedTheme:i,onSelectTheme:l}),e.jsx(n.div,{className:o.container,children:d.map(({key:t,tokenValue:c})=>e.jsxs(r.Fragment,{children:[e.jsx(n.span,{children:e.jsxs(n.code,{children:["value('radius.",t,"')"]})}),e.jsx(n.div,{className:o.block,style:{borderRadius:c}})]},t))})]})};function a(n){const i={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Foundations/Radius"}),`
`,e.jsx(i.h1,{id:"radius",children:"Radius"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#figma-design-file",children:"Figma Design File"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#radius-options",children:"Radius Options"})}),`
`]}),`
`,e.jsx("h2",{id:"overview",children:"Overview"}),`
`,e.jsx(i.h3,{id:"installation",children:"Installation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`npm install @lokalise/louis
`})}),`
`,e.jsx(i.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`const StyledDiv = () => (
	<div
		style={{
			border-radius: 'var(--lok-radius-m)',
		}}
	></div>
);
`})}),`
`,e.jsx("h2",{id:"figma-design-file",children:"Figma Design File"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=5398%3A24541",rel:"nofollow",children:"Figma Source File | Radius"})}),`
`]}),`
`,e.jsx("h2",{id:"radius-options",children:"Radius Options"}),`
`,e.jsx(u,{children:e.jsx(g,{})})]})}function z(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(a,{...n})}):a(n)}export{g as Radii,z as default};
