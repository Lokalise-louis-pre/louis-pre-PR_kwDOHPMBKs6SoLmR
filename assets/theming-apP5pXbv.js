import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-s_7BDCjm.js";import"./index-C5WFQ8lX.js";import{r as t}from"./index-DcbfxFOU.js";import{M as i}from"./index-BIgXiRPh.js";import"./index-yBjzXJbu.js";import"./index-DubqEmGm.js";import"./preview-BxeMi2Ss.js";import"./iframe-nrFi4MSj.js";import"./DocsRenderer-CFRXHY34-DBHidBs8.js";import"./react-18-BfgGLNg9.js";import"./index-CJ88nXQk.js";import"./index-CD8QLViS.js";import"./index-CFeRKNTJ.js";import"./index-DrFu-skq.js";function o(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Overview/Theming",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx(s.h1,{id:"theming",children:"Theming"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#css-reset",children:"CSS Reset"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#light-and-dark-themes",children:"Light and Dark Themes"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#custom-theme",children:"Custom Theme"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#custom-fonts",children:"Custom Fonts"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#override-component-styles",children:"Override Component Styles"})}),`
`]}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(s.p,{children:"Louis provides theming capabilities which allow you to either use Lokalise's look and feel or use your own. Below you will find a set of standard guidelines to help you extend and customize theming to fit your own needs."}),`
`,e.jsx(s.h2,{id:"css-reset",children:"CSS Reset"}),`
`,e.jsx(s.p,{children:"CSS reset normalizes the default styles of various browsers to achieve consistency across platforms and devices. It sets a consistent baseline for HTML elements, reducing cross-browser compatibility issues and ensuring a uniform look for websites."}),`
`,e.jsx(s.p,{children:"You can import a CSS reset we provide from Louis:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import reset from '@lokalise/louis/dist/assets/reset.css' assert { type: 'css' };
document.adoptedStyleSheets = [reset];
shadowRoot.adoptedStyleSheets = [reset];
`})}),`
`,e.jsxs(s.p,{children:["Read more about using ",e.jsx(s.a,{href:"https://web.dev/css-module-scripts/#using-css-module-scripts",rel:"nofollow",children:"CSS module script"}),"."]}),`
`,e.jsx(s.h2,{id:"light-and-dark-themes",children:"Light and Dark Themes"}),`
`,e.jsxs(s.p,{children:["Louis comes in one of 2 themes – ",e.jsx(s.code,{children:"light"})," or ",e.jsx(s.code,{children:"dark"}),`. Each theme defines whether it's considered light or dark. Louis will
use that information to adjust colors or icons in certain situations.
This information is exposed to consumers of Louis through the hook `,e.jsx(s.code,{children:"useCurrentMode"}),". Here's an example of how it's used:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { useCurrentMode } from '@lokalise/louis';

export const MyComponent = () => {
	const mode = useCurrentMode();

	return mode === 'dark' ? <span>This is dark mode</span> : <span>This is light mode</span>;
};
`})}),`
`,e.jsx(s.h2,{id:"custom-theme",children:"Custom Theme"}),`
`,e.jsxs(s.p,{children:["The theming system is controlled by the ",e.jsx(t,{kind:"Foundations/ThemeProvider",children:"ThemeProvider"}),". Two themes are provided by default: ",e.jsx(s.code,{children:"light"})," and ",e.jsx(s.code,{children:"dark"}),`. But custom themes can be used instead. In order to define custom themes we recommend using the existing default themes as a
template. Here for example is how we can provide alternative radii values:`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { themes } from '@lokalise/louis';

const customRadii = {
	none: '0',
	sm: '0.5rem',
	md: '1rem',
	lg: '2rem',
	xl: '3rem',
	rounded: '9999rem',
};

const myCustomTheme = {
	...themes.light,
	radii: customRadii,
};

export const App = () => {
	<ThemeProvider theme={myCustomTheme}>
		<TheRestOfYourApplication />
	</ThemeProvider>;
};
`})}),`
`,e.jsx(s.h2,{id:"custom-fonts",children:"Custom Fonts"}),`
`,e.jsxs(s.p,{children:["At Lokalise we use Graphik typeface internally, and it is ",e.jsx(s.strong,{children:"NOT bundled"})," in Louis by default due to legal requirements. Please purchase it from their ",e.jsx(s.a,{href:"https://type.today/en/Graphik",rel:"nofollow",children:"website"})," in case you need it."]}),`
`,e.jsxs(s.p,{children:["When providing custom fonts in any frontend, we first require the client to load those fonts. Here for example is how we would load ",e.jsx(s.code,{children:"Noto Sans"})," from Google Fonts."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet" />
`})}),`
`,e.jsxs(s.p,{children:["Having loaded the fonts in the browser, we also need to tell our ",e.jsx(t,{kind:"Foundations/ThemeProvider",children:"ThemeProvider"})," about these custom fonts:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { ThemeProvider, themes } from '@lokalise/louis';

const customTheme = {
	...themes.light,
	fonts: {
		default: '"Noto Sans", Arial, Helvetica, sans-serif',
	},
};

export const App = () => {
	<ThemeProvider theme={customTheme}>
		<TheRestOfYourApplication />
	</ThemeProvider>;
};
`})}),`
`,e.jsxs(s.p,{children:["Read more about this here: ",e.jsx(s.a,{href:"https://fonts.google.com/knowledge",rel:"nofollow",children:"Google Fonts"})]}),`
`,e.jsx(s.h2,{id:"override-component-styles",children:"Override Component Styles"}),`
`,e.jsxs(s.p,{children:["We strongly recommend against overriding component styles and would suggest extending or adjusting the theme instead. For edge cases where overriding is required, you can use the optional ",e.jsx(s.code,{children:"className"})," prop, available on each component."]}),`
`,e.jsx(s.p,{children:"Note that the structure and styling of components may change with future releases of Louis, which can break any custom styling you apply."})]})}function T(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{T as default};
