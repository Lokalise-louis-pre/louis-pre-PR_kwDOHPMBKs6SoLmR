import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-DubqEmGm.js";import{P as t}from"./Portal-BD7l88-r.js";import"./index-yBjzXJbu.js";import"./index-CD8QLViS.js";import"./index-CJ88nXQk.js";const m={title:"Components/Portal",component:t,parameters:{controls:{sort:"requiredFirst",exclude:["containerRef"]},docs:{description:{component:`Creates and appends a DOM node to the end of document.body (or a specific container if provided) and renders a React tree into it.
Useful for preventing parent styles from clipping or hiding content (for example popovers, dropdowns, and modals).`}}}},r={args:{children:"This is rendered outside root"}},n={render:a=>{const o=s.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:o,style:{backgroundColor:"yellow"},children:e.jsx("div",{children:"Container: Hey,"})}),e.jsx(t,{containerRef:o,...a})]})},args:{children:"I am rendered into yellow container"},parameters:{docs:{source:{code:`
function Example() {
  const ref = React.useRef();
  return (
    <>
      <div ref={ref} style={{ backgroundColor: 'yellow' }}>
        <div>Container: Hey,</div>
      </div>

      <Portal containerRef={ref}>I am rendered into yellow container</Portal>
    </>
  );
}`}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is rendered outside root'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef(null);
    return <>
                <div ref={ref} style={{
        backgroundColor: 'yellow'
      }}>
                    <div>Container: Hey,</div>
                </div>
                <Portal containerRef={ref} {...args} />
            </>;
  },
  args: {
    children: 'I am rendered into yellow container'
  },
  parameters: {
    docs: {
      source: {
        code: \`
function Example() {
  const ref = React.useRef();
  return (
    <>
      <div ref={ref} style={{ backgroundColor: 'yellow' }}>
        <div>Container: Hey,</div>
      </div>

      <Portal containerRef={ref}>I am rendered into yellow container</Portal>
    </>
  );
}\`
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const u=["Default","AppendToContainer"];export{n as AppendToContainer,r as Default,u as __namedExportsOrder,m as default};
