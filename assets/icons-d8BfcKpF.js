import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-s_7BDCjm.js";import{M as c,C as l,I as a,a as d}from"./index-BIgXiRPh.js";import{i as h}from"./iconsStoryArray-B0XmHhy2.js";import{s as p}from"./icons.stories-ClW5kmvZ.js";import"./index-yBjzXJbu.js";import"./index-DubqEmGm.js";import"./iframe-nrFi4MSj.js";import"./index-CD8QLViS.js";import"./index-CJ88nXQk.js";import"./index-CFeRKNTJ.js";import"./index-DrFu-skq.js";import"./SvgIcon-APGatIbJ.js";import"./clsx-B-dksMZM.js";import"./Sparkle-s9ozeDuG.js";import"./CaretRight-COmzj0PB.js";import"./Search-CfhKQ7qw.js";import"./Clipboard-bQX2iwzL.js";import"./Close-FGPrTY3A.js";import"./Dropdown-COQUELEN.js";import"./Error-li26Yj3Y.js";import"./MenuHamburger-Bitq72my.js";import"./Info-C8x1KHs8.js";import"./index-Cljcv3Ef.js";import"./Selected-DhZoXuAk.js";import"./Warning-DUKJc5Ha.js";function s(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(c,{title:"Components/Icons",of:p}),`
`,e.jsx(i.h1,{id:"icons",children:"Icons"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#figma-design-file",children:"Figma Design File"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#props",children:"Props"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#icon-set",children:"Icon Set"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#accessibility",children:"Accessibility"})}),`
`]}),`
`,e.jsx(i.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(i.p,{children:"Icons are used to visually indicate core parts of the app and available actions. They can be purely decorative, or they can be used to convey meaning (e.g. as part of interactive controls)."}),`
`,e.jsx(i.h3,{id:"installation",children:"Installation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`npm install @lokalise/louis
`})}),`
`,e.jsx(i.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { SearchIcon } from '@lokalise/louis';

export default () => <SearchIcon />;
`})}),`
`,e.jsx(i.h2,{id:"figma-design-file",children:"Figma Design File"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://www.figma.com/file/998GqUr24TjUPJBVKBTpEX/Foundations?node-id=444%3A3246",rel:"nofollow",children:"Figma Source File | Icons"})}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h2,{id:"icon-set",children:"Icon Set"}),`
`,e.jsxs(i.p,{children:["All icons are suffixed with ",e.jsx(i.code,{children:"Icon"})," and can be imported as e.g. ",e.jsx(i.code,{children:"SearchIcon"}),"."]}),`
`,e.jsx(a,{children:h.filter(([r])=>!r.startsWith("Deprecated")).map(([r,t])=>e.jsx(d,{name:r.replace(/(.*)Icon/i,"$1"),children:e.jsx(t,{})}))}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.p,{children:["The optional ",e.jsx(i.code,{children:"ariaLabel"})," prop can be used when the icon is used in a meaningful context (instead of purely decorative)."]})]})}function N(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{N as default};
