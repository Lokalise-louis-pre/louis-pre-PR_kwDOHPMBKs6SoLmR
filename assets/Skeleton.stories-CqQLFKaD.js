import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{c as h}from"./clsx-B-dksMZM.js";import{F as C}from"./Flex-EEZibEms.js";import"./index-yBjzXJbu.js";import"./index-DubqEmGm.js";const S="_container_1eg0c_15",f="_animated_1eg0c_19",R="_circleContainer_1eg0c_26",w="_rectangleContainer_1eg0c_31",P="_centered_1eg0c_35",s={container:S,animated:f,circleContainer:R,rectangleContainer:w,centered:P},c=({size:e,className:t,style:n,...a})=>r.jsx("div",{className:h(s.circleContainer,t),style:{height:`${e}px`,width:`${e}px`,...n},...a});c.displayName="Circle";try{c.displayName="Circle",c.__docgenInfo={description:"",displayName:"Circle",props:{size:{defaultValue:null,description:"Sets the height and width of the circle.",name:"size",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const l=({centered:e,height:t,width:n,className:a,style:g,...x})=>r.jsx("div",{className:h(s.rectangleContainer,{[s.centered]:e},a),style:{height:`${t}px`,width:typeof n=="string"?n:`${n}px`,...g},...x});l.displayName="Rectangle";try{l.displayName="Rectangle",l.__docgenInfo={description:"",displayName:"Rectangle",props:{centered:{defaultValue:null,description:"Center the Rectangle",name:"centered",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"Set the height of Rectangle.",name:"height",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"Set the width of Rectangle. Can use percentage value.",name:"width",required:!0,type:{name:"string | number"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const i=({children:e,animated:t=!1,description:n,className:a,style:g})=>r.jsx("div",{"aria-label":n,className:h(s.container,{[s.animated]:t},a),style:g,children:e});i.displayName="Skeleton";try{i.displayName="Skeleton",i.__docgenInfo={description:"",displayName:"Skeleton",props:{animated:{defaultValue:{value:"false"},description:"Toggles the animation.",name:"animated",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Adds accessibility label.",name:"description",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node, including `Rectangle` or `Circle` in the container.",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const V={title:"Components/Skeleton",component:i,parameters:{controls:{sort:"requiredFirst",exclude:["children","skeletonProps"]},docs:{description:{component:"Skeleton is used to create loading placeholders.\n\nSkeleton exports 3 components:\n- `Skeleton`: main container component.\n- `Circle`: circle with variable diameter.\n- `Rectangle`: rectangle with variable dimensions."}}}},y=e=>{const{circleProps:t,...n}=e;return r.jsx(i,{...n,children:r.jsx(c,{...t,size:t?.size||30})})},_=e=>{const{rectangleProps:t,...n}=e;return r.jsx(i,{...n,children:r.jsx(l,{...t,height:t?.height||30,width:t?.width||80})})},N=e=>{const{circleProps:t,rectangleProps:n,...a}=e;return r.jsx(i,{...a,children:r.jsxs(C,{gap:2,align:"center",children:[r.jsx(c,{...t,size:t?.size||30}),r.jsx(l,{...n,height:n?.height||30,width:n?.width||80})]})})},o={name:"Circle",args:{description:"Circle",circleProps:{size:30}},render:y},d={name:"Rectangle",args:{description:"Rectangle",rectangleProps:{height:30,width:80}},render:_},p={name:"Animated Circle Skeleton",args:{animated:!0,description:"Animated Circle",circleProps:{size:30}},render:y},m={name:"Animated Rectangle Skeleton",args:{animated:!0,description:"Animated Rectangle",rectangleProps:{height:30,width:80}},render:_},u={name:"Layout with Flex Skeleton",args:{description:"Layout with Flex",circleProps:{size:30},rectangleProps:{height:30,width:80}},render:N};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Circle',
  args: {
    description: 'Circle',
    circleProps: {
      size: 30
    }
  },
  render: CircleTemplate
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Rectangle',
  args: {
    description: 'Rectangle',
    rectangleProps: {
      height: 30,
      width: 80
    }
  },
  render: RectangleTemplate
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Animated Circle Skeleton',
  args: {
    animated: true,
    description: 'Animated Circle',
    circleProps: {
      size: 30
    }
  },
  render: CircleTemplate
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Animated Rectangle Skeleton',
  args: {
    animated: true,
    description: 'Animated Rectangle',
    rectangleProps: {
      height: 30,
      width: 80
    }
  },
  render: RectangleTemplate
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Layout with Flex Skeleton',
  args: {
    description: 'Layout with Flex',
    circleProps: {
      size: 30
    },
    rectangleProps: {
      height: 30,
      width: 80
    }
  },
  render: FlexTemplate
}`,...u.parameters?.docs?.source}}};const z=["CircleStory","RectangleStory","AnimatedCircle","AnimatedRectangle","LayoutWithFlex"];export{p as AnimatedCircle,m as AnimatedRectangle,o as CircleStory,u as LayoutWithFlex,d as RectangleStory,z as __namedExportsOrder,V as default};
