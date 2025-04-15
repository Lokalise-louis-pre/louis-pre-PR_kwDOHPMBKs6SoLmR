import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as h}from"./index-DubqEmGm.js";import{s as T,T as f,a as C,u as g,d as I,i as y}from"./index-C4WZCKW5.js";import{B as a}from"./Button-CHrSvQDw.js";import{F as x}from"./Flex-EEZibEms.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./index-7zOkDzdb.js";import"./IconButton-f6n5TEtZ.js";import"./Tooltip-DlQsDSkD.js";import"./Popover-DFSes0g6.js";import"./Portal-BD7l88-r.js";import"./index-CD8QLViS.js";import"./index-CJ88nXQk.js";import"./floating-ui.react-M7Gz8XYl.js";import"./useMergeRefs-CZnCAFkU.js";import"./index-Cljcv3Ef.js";import"./SvgIcon-APGatIbJ.js";import"./Close-FGPrTY3A.js";import"./Info-C8x1KHs8.js";import"./Warning-DUKJc5Ha.js";import"./Error-li26Yj3Y.js";const Z={title:"Components/Toast",component:T,parameters:{controls:{exclude:["onClick","name","containerId"]},docs:{description:{component:`Toast shows a notification in the top-right corner of the window. It can be automatically closed after a preset amount of time,
or for important notifications it can remain visible until the user dismisses it.

Toast depends on [react-toastify](https://github.com/fkhadra/react-toastify).

[Figma Source File | Toast](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4032%3A29263)`}}},argTypes:{description:{control:{type:"text"}},toastId:{control:{type:"text"}}}},e=o=>{const{name:n,...s}=o;return t.jsxs("div",{children:[t.jsxs(a,{variant:"secondary",onClick:()=>{T({...s,type:s.type})},children:["Trigger toast: ",n]}),t.jsx(f,{containerId:s.containerId})]})},w=o=>{const[n,s]=h.useState(""),m=h.useRef(null);return t.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",gap:"10px"},children:[t.jsx(a,{variant:"secondary",onClick:()=>{s(T({...o,containerId:"updatingContainer",type:o.type}))},children:"Trigger toast"}),t.jsx(a,{variant:"secondary",onClick:()=>{n&&g(n,{...o,containerId:"updatingContainer",description:"Toast updated"})},children:"Update toast"}),t.jsx(a,{variant:"secondary",onClick:()=>{n&&I(n)},children:"Dismiss toast"}),t.jsx(a,{ref:m,variant:"secondary",onClick:()=>{n&&m.current&&(m.current.innerText=`Is Toast active? ${y(n)}`)},children:"Is Toast active?"}),t.jsx(f,{containerId:"updatingContainer"})]})},r={args:{name:"Success",type:"success",autoClose:!1,title:"This is a success toast notification",containerId:"successContainer"},render:e},i={args:{name:"Error",type:"error",autoClose:!1,title:"This is an error toast notification",containerId:"errorContainer"},render:e},c={args:{name:"Warning",type:"warning",autoClose:!1,title:"This is a warning toast notification",containerId:"warningContainer"},render:e},l={args:{name:"Info",type:"info",autoClose:!1,title:"This is an info toast notification",containerId:"infoContainer"},render:e},p={args:{name:"Autoclosing",type:"success",title:"This is an autoclosing toast notification",autoClose:5e3,description:"It will automatically disappear",containerId:"autoclosingContainer"},render:e},d={name:"With Anchor WithAnchor",args:{name:"With Anchor",type:"info",title:"This is a toast with an anchor",description:o=>t.jsxs(x,{direction:"column",gap:2,children:["Description text.",t.jsx(C,{onClick:()=>{o.closeToast&&o.closeToast()},children:"Some action"})]}),autoClose:!1,containerId:"withAnchorContainer"},render:e,parameters:{docs:{source:{code:`
import { Button, ToastContainer, showToast, ToastAnchor } from '@lokalise/louis';

export default () => (
  <>
    <ToastContainer />

    <Button
      onClick={() => {
        showToast({
          type: 'info',
          title: 'This is a toast with an anchor',
          description: ({ closeToast }) => (
            <Flex direction="column" gap="2">
              Description text.
              <ToastAnchor
                onClick={() => {
                  closeToast();
                }}
              >
                Some action
              </ToastAnchor>
            </Flex>
          ),
        });
      }}
    >
      Show toast
    </Button>
  </>
);`}}}},u={name:"Toast Helper Functions ToastHelperFunctions",args:{type:"info",title:"Toasts can be updated",autoClose:!1},render:w,parameters:{docs:{source:{code:`
import { Button, ToastContainer, showToast, updateToast, dismissToast, isToastActive } from '@lokalise/louis';

export default () => {
  const [currentToastId, setCurrentToastId] = React.useState();

  return (
    <>
      <ToastContainer />

      <Button
        onClick={() => {
          setCurrentToastId(
            showToast({
              type: 'success',
              title: 'Toasts can be updated',
            }),
          );
        }}
      >
        Show toast
      </Button>

      <Button
        onClick={() => {
          updateToast(currentToastId, {
            description: 'Toast updated',
          });
        }}
      >
        Update toast
      </Button>

      <Button
        onClick={() => {
          dismissToast(currentToastId);
        }}
      >
        Dismiss toast
      </Button>

      <Button
        onClick={() => {
          isToastActive(currentToastId);
        }}
      >
        Is Toast active?
      </Button>
    </>
  );
};`}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Success',
    type: 'success',
    autoClose: false,
    title: 'This is a success toast notification',
    containerId: 'successContainer'
  },
  render: ToastTemplate
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Error',
    type: 'error',
    autoClose: false,
    title: 'This is an error toast notification',
    containerId: 'errorContainer'
  },
  render: ToastTemplate
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Warning',
    type: 'warning',
    autoClose: false,
    title: 'This is a warning toast notification',
    containerId: 'warningContainer'
  },
  render: ToastTemplate
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Info',
    type: 'info',
    autoClose: false,
    title: 'This is an info toast notification',
    containerId: 'infoContainer'
  },
  render: ToastTemplate
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Autoclosing',
    type: 'success',
    title: 'This is an autoclosing toast notification',
    autoClose: 5000,
    description: 'It will automatically disappear',
    containerId: 'autoclosingContainer'
  },
  render: ToastTemplate
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Anchor WithAnchor',
  args: {
    name: 'With Anchor',
    type: 'info',
    title: 'This is a toast with an anchor',
    description: (params: ToastDescriptionFunctionParameters) => <Flex direction="column" gap={2 as SpacingLevels}>
                Description text.
                <ToastAnchor onClick={() => {
        if (params.closeToast) {
          params.closeToast();
        }
      }}>
                    Some action
                </ToastAnchor>
            </Flex>,
    autoClose: false,
    containerId: 'withAnchorContainer'
  },
  render: ToastTemplate,
  parameters: {
    docs: {
      source: {
        code: \`
import { Button, ToastContainer, showToast, ToastAnchor } from '@lokalise/louis';

export default () => (
  <>
    <ToastContainer />

    <Button
      onClick={() => {
        showToast({
          type: 'info',
          title: 'This is a toast with an anchor',
          description: ({ closeToast }) => (
            <Flex direction="column" gap="2">
              Description text.
              <ToastAnchor
                onClick={() => {
                  closeToast();
                }}
              >
                Some action
              </ToastAnchor>
            </Flex>
          ),
        });
      }}
    >
      Show toast
    </Button>
  </>
);\`
      }
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Toast Helper Functions ToastHelperFunctions',
  args: {
    type: 'info',
    title: 'Toasts can be updated',
    autoClose: false
  },
  render: ToastUpdateTemplate,
  parameters: {
    docs: {
      source: {
        code: \`
import { Button, ToastContainer, showToast, updateToast, dismissToast, isToastActive } from '@lokalise/louis';

export default () => {
  const [currentToastId, setCurrentToastId] = React.useState();

  return (
    <>
      <ToastContainer />

      <Button
        onClick={() => {
          setCurrentToastId(
            showToast({
              type: 'success',
              title: 'Toasts can be updated',
            }),
          );
        }}
      >
        Show toast
      </Button>

      <Button
        onClick={() => {
          updateToast(currentToastId, {
            description: 'Toast updated',
          });
        }}
      >
        Update toast
      </Button>

      <Button
        onClick={() => {
          dismissToast(currentToastId);
        }}
      >
        Dismiss toast
      </Button>

      <Button
        onClick={() => {
          isToastActive(currentToastId);
        }}
      >
        Is Toast active?
      </Button>
    </>
  );
};\`
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const $=["Success","Error","Warning","Info","Autoclosing","WithAnchor","ToastHelperFunctions"];export{p as Autoclosing,i as Error,l as Info,r as Success,u as ToastHelperFunctions,c as Warning,d as WithAnchor,$ as __namedExportsOrder,Z as default};
