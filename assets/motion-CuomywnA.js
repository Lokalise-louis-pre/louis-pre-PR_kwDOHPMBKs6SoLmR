import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-s_7BDCjm.js";import{t as d,T as p}from"./ThemeSwitcher-twd-wFJo.js";import{r as h}from"./index-DubqEmGm.js";import"./index-C5WFQ8lX.js";import{g as x}from"./tokenValues-BQyP9yJ8.js";import{M as j,U as u}from"./index-BIgXiRPh.js";import"./index-yBjzXJbu.js";import"./preview-BxeMi2Ss.js";import"./iframe-nrFi4MSj.js";import"./DocsRenderer-CFRXHY34-DBHidBs8.js";import"./react-18-BfgGLNg9.js";import"./index-CJ88nXQk.js";import"./index-CD8QLViS.js";import"./index-CFeRKNTJ.js";import"./index-DrFu-skq.js";const v="_container_1jg6z_1",g="_itemBlock_1jg6z_6",_="_itemWrapper_1jg6z_13",M="_code_1jg6z_25",s={container:v,itemBlock:g,itemWrapper:_,code:M},f=()=>{const t={code:"code",div:"div",span:"span",...i()},[n,c]=h.useState("themeLokaliseLight"),l=x(d[n].motion);return e.jsxs(e.Fragment,{children:[e.jsx(p,{selectedTheme:n,onSelectTheme:c}),e.jsx(t.div,{className:s.container,children:l.map(({key:a,tokenValue:o})=>{const m=o.includes("ms")?{transition:`all ${o}`}:{transition:`all 1s ${o}`};return e.jsxs(t.div,{className:s.itemWrapper,style:m,children:[e.jsx(t.span,{className:s.code,children:e.jsxs(t.code,{children:["var(--lok-motion-",a.replaceAll(".","-"),"): ",o]})}),e.jsx(t.div,{className:s.itemBlock})]})})})]})};function r(t){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",pre:"pre",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Foundations/Motion"}),`
`,e.jsx(n.h1,{id:"motion",children:"Motion"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#motion-options",children:"Motion Options"})}),`
`]}),`
`,e.jsx("h2",{id:"overview",children:"Overview"}),`
`,e.jsx(n.h3,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @lokalise/louis
`})}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const StyledBox = () => (
	<div
		style={{
			transition: 'all var(--lok-motion-speed-1)',
		}}
	></div>
);
`})}),`
`,e.jsx("h2",{id:"examples",children:"Motion Options"}),`
`,e.jsx(u,{children:e.jsx(f,{})})]})}function X(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{f as Motion,X as default};
