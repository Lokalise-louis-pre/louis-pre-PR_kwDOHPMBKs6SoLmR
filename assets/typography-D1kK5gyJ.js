import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as m}from"./index-s_7BDCjm.js";import"./index-C5WFQ8lX.js";import{r as y}from"./index-DcbfxFOU.js";import{r as g}from"./index-DubqEmGm.js";import{t as f,T as u}from"./ThemeSwitcher-twd-wFJo.js";import{C as d}from"./Code-2BwP3_5a.js";import{M as b,U as C}from"./index-BIgXiRPh.js";import"./index-yBjzXJbu.js";import"./preview-BxeMi2Ss.js";import"./iframe-nrFi4MSj.js";import"./DocsRenderer-CFRXHY34-DBHidBs8.js";import"./react-18-BfgGLNg9.js";import"./index-CJ88nXQk.js";import"./Label-aurGfwxc.js";import"./clsx-B-dksMZM.js";import"./Flex-EEZibEms.js";import"./IconButton-f6n5TEtZ.js";import"./index-7zOkDzdb.js";import"./Tooltip-DlQsDSkD.js";import"./Popover-DFSes0g6.js";import"./Portal-BD7l88-r.js";import"./index-CD8QLViS.js";import"./floating-ui.react-M7Gz8XYl.js";import"./useMergeRefs-CZnCAFkU.js";import"./index-Cljcv3Ef.js";import"./SvgIcon-APGatIbJ.js";import"./Clipboard-bQX2iwzL.js";import"./index-CFeRKNTJ.js";import"./index-DrFu-skq.js";const T="_table_ahpno_1",w="_bodyCell_ahpno_6",N="_headCell_ahpno_10",s={table:T,bodyCell:w,headCell:N},O=()=>{const[n,t]=g.useState("themeLokaliseLight"),a=[],h=(r,l)=>{Object.entries(r).forEach(([o,i])=>{if(i!==null&&typeof i=="object")h(i,[...l,o]);else{const c={key:l.join("."),typographyValue:r},j=JSON.stringify(c);a.some(x=>JSON.stringify(x)===j)||a.push(c)}})};return h(f[n].typography,[]),e.jsxs(e.Fragment,{children:[e.jsx(u,{onSelectTheme:t,selectedTheme:n}),e.jsxs("table",{className:s.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:s.headCell,children:"Token"}),e.jsx("th",{className:s.headCell,children:"Value"}),e.jsx("th",{className:s.headCell,children:"Sample"})]})}),e.jsx("tbody",{children:a.map(({key:r,typographyValue:l})=>e.jsxs("tr",{children:[e.jsx("td",{className:s.bodyCell,children:e.jsxs(d,{children:["typography('",r,"')"]})}),e.jsx("td",{className:s.bodyCell,children:e.jsx(d,{children:Object.entries(l).map(([o,i])=>i===null||typeof i=="object"?null:e.jsxs("span",{children:[o,": ",i.toString(),e.jsx("br",{})]},o))})}),e.jsx("td",{className:s.bodyCell,children:e.jsx("span",{style:l,children:"Lorem Ipsum"})})]},r))})]})]})};function p(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...m(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Foundations/Typography"}),`
`,e.jsx(t.h1,{id:"typography",children:"Typography"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#figma-design-file",children:"Figma Design File"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#typography-options",children:"Typography Options"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:["At Lokalise we use Graphik typeface internally, and it is ",e.jsx(t.strong,{children:"NOT bundled"})," in Louis by default due to legal requirements. Please purchase it from their ",e.jsx(t.a,{href:"https://type.today/en/Graphik",rel:"nofollow",children:"website"})," in case you need it."]}),`
`,e.jsxs(t.p,{children:["If you'd like to install a custom font family, please see the ",e.jsx(y,{kind:"Overview/Theming",children:"Custom Fonts"})," section for more information in Theming."]}),`
`,e.jsx(t.h3,{id:"installation",children:"Installation"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`npm install @lokalise/louis
`})}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const StyledHeading = () => (
	<h1
		style={{
			color: 'var(--lok-typography-heading-1)',
		}}
	></h1>
);
`})}),`
`,e.jsx(t.h2,{id:"figma-design-file",children:"Figma Design File"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=5398%3A21831",rel:"nofollow",children:"Figma Source File | Typography"})}),`
`]}),`
`,e.jsx(t.h2,{id:"typography-options",children:"Typography Options"}),`
`,e.jsx(C,{children:e.jsx(O,{})})]})}function ne(n={}){const{wrapper:t}={...m(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(p,{...n})}):p(n)}export{ne as default};
