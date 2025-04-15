import{j as x}from"./jsx-runtime-Cf8x2fCZ.js";import{c as A}from"./clsx-B-dksMZM.js";import{g as j,r as T}from"./index-DubqEmGm.js";import{T as J}from"./Tooltip-DlQsDSkD.js";import"./index-yBjzXJbu.js";import"./Popover-DFSes0g6.js";import"./Portal-BD7l88-r.js";import"./index-CD8QLViS.js";import"./index-CJ88nXQk.js";import"./floating-ui.react-M7Gz8XYl.js";import"./useMergeRefs-CZnCAFkU.js";const Z="_tag_1w35i_2",P="_small_1w35i_33",Q="_solid_1w35i_41",K="_outlined_1w35i_45",X="_fullWidth_1w35i_50",Y="_tagButton_1w35i_56",y={tag:Z,default:"_default_1w35i_27",small:P,solid:Q,outlined:K,fullWidth:X,tagButton:Y};var z={exports:{}},q={exports:{}},O;function ee(){return O||(O=1,function(){var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d={rotl:function(s,i){return s<<i|s>>>32-i},rotr:function(s,i){return s<<32-i|s>>>i},endian:function(s){if(s.constructor==Number)return d.rotl(s,8)&16711935|d.rotl(s,24)&4278255360;for(var i=0;i<s.length;i++)s[i]=d.endian(s[i]);return s},randomBytes:function(s){for(var i=[];s>0;s--)i.push(Math.floor(Math.random()*256));return i},bytesToWords:function(s){for(var i=[],l=0,c=0;l<s.length;l++,c+=8)i[c>>>5]|=s[l]<<24-c%32;return i},wordsToBytes:function(s){for(var i=[],l=0;l<s.length*32;l+=8)i.push(s[l>>>5]>>>24-l%32&255);return i},bytesToHex:function(s){for(var i=[],l=0;l<s.length;l++)i.push((s[l]>>>4).toString(16)),i.push((s[l]&15).toString(16));return i.join("")},hexToBytes:function(s){for(var i=[],l=0;l<s.length;l+=2)i.push(parseInt(s.substr(l,2),16));return i},bytesToBase64:function(s){for(var i=[],l=0;l<s.length;l+=3)for(var c=s[l]<<16|s[l+1]<<8|s[l+2],f=0;f<4;f++)l*8+f*6<=s.length*8?i.push(u.charAt(c>>>6*(3-f)&63)):i.push("=");return i.join("")},base64ToBytes:function(s){s=s.replace(/[^A-Z0-9+\/]/ig,"");for(var i=[],l=0,c=0;l<s.length;c=++l%4)c!=0&&i.push((u.indexOf(s.charAt(l-1))&Math.pow(2,-2*c+8)-1)<<c*2|u.indexOf(s.charAt(l))>>>6-c*2);return i}};q.exports=d}()),q.exports}var E,M;function D(){if(M)return E;M=1;var u={utf8:{stringToBytes:function(d){return u.bin.stringToBytes(unescape(encodeURIComponent(d)))},bytesToString:function(d){return decodeURIComponent(escape(u.bin.bytesToString(d)))}},bin:{stringToBytes:function(d){for(var s=[],i=0;i<d.length;i++)s.push(d.charCodeAt(i)&255);return s},bytesToString:function(d){for(var s=[],i=0;i<d.length;i++)s.push(String.fromCharCode(d[i]));return s.join("")}}};return E=u,E}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var I,R;function re(){if(R)return I;R=1,I=function(s){return s!=null&&(u(s)||d(s)||!!s._isBuffer)};function u(s){return!!s.constructor&&typeof s.constructor.isBuffer=="function"&&s.constructor.isBuffer(s)}function d(s){return typeof s.readFloatLE=="function"&&typeof s.slice=="function"&&u(s.slice(0,0))}return I}var V;function te(){return V||(V=1,function(){var u=ee(),d=D().utf8,s=re(),i=D().bin,l=function(c,f){c.constructor==String?f&&f.encoding==="binary"?c=i.stringToBytes(c):c=d.stringToBytes(c):s(c)?c=Array.prototype.slice.call(c,0):!Array.isArray(c)&&c.constructor!==Uint8Array&&(c=c.toString());for(var a=u.bytesToWords(c),g=c.length*8,t=1732584193,e=-271733879,n=-1732584194,r=271733878,o=0;o<a.length;o++)a[o]=(a[o]<<8|a[o]>>>24)&16711935|(a[o]<<24|a[o]>>>8)&4278255360;a[g>>>5]|=128<<g%32,a[(g+64>>>9<<4)+14]=g;for(var m=l._ff,p=l._gg,h=l._hh,v=l._ii,o=0;o<a.length;o+=16){var $=t,L=e,G=n,U=r;t=m(t,e,n,r,a[o+0],7,-680876936),r=m(r,t,e,n,a[o+1],12,-389564586),n=m(n,r,t,e,a[o+2],17,606105819),e=m(e,n,r,t,a[o+3],22,-1044525330),t=m(t,e,n,r,a[o+4],7,-176418897),r=m(r,t,e,n,a[o+5],12,1200080426),n=m(n,r,t,e,a[o+6],17,-1473231341),e=m(e,n,r,t,a[o+7],22,-45705983),t=m(t,e,n,r,a[o+8],7,1770035416),r=m(r,t,e,n,a[o+9],12,-1958414417),n=m(n,r,t,e,a[o+10],17,-42063),e=m(e,n,r,t,a[o+11],22,-1990404162),t=m(t,e,n,r,a[o+12],7,1804603682),r=m(r,t,e,n,a[o+13],12,-40341101),n=m(n,r,t,e,a[o+14],17,-1502002290),e=m(e,n,r,t,a[o+15],22,1236535329),t=p(t,e,n,r,a[o+1],5,-165796510),r=p(r,t,e,n,a[o+6],9,-1069501632),n=p(n,r,t,e,a[o+11],14,643717713),e=p(e,n,r,t,a[o+0],20,-373897302),t=p(t,e,n,r,a[o+5],5,-701558691),r=p(r,t,e,n,a[o+10],9,38016083),n=p(n,r,t,e,a[o+15],14,-660478335),e=p(e,n,r,t,a[o+4],20,-405537848),t=p(t,e,n,r,a[o+9],5,568446438),r=p(r,t,e,n,a[o+14],9,-1019803690),n=p(n,r,t,e,a[o+3],14,-187363961),e=p(e,n,r,t,a[o+8],20,1163531501),t=p(t,e,n,r,a[o+13],5,-1444681467),r=p(r,t,e,n,a[o+2],9,-51403784),n=p(n,r,t,e,a[o+7],14,1735328473),e=p(e,n,r,t,a[o+12],20,-1926607734),t=h(t,e,n,r,a[o+5],4,-378558),r=h(r,t,e,n,a[o+8],11,-2022574463),n=h(n,r,t,e,a[o+11],16,1839030562),e=h(e,n,r,t,a[o+14],23,-35309556),t=h(t,e,n,r,a[o+1],4,-1530992060),r=h(r,t,e,n,a[o+4],11,1272893353),n=h(n,r,t,e,a[o+7],16,-155497632),e=h(e,n,r,t,a[o+10],23,-1094730640),t=h(t,e,n,r,a[o+13],4,681279174),r=h(r,t,e,n,a[o+0],11,-358537222),n=h(n,r,t,e,a[o+3],16,-722521979),e=h(e,n,r,t,a[o+6],23,76029189),t=h(t,e,n,r,a[o+9],4,-640364487),r=h(r,t,e,n,a[o+12],11,-421815835),n=h(n,r,t,e,a[o+15],16,530742520),e=h(e,n,r,t,a[o+2],23,-995338651),t=v(t,e,n,r,a[o+0],6,-198630844),r=v(r,t,e,n,a[o+7],10,1126891415),n=v(n,r,t,e,a[o+14],15,-1416354905),e=v(e,n,r,t,a[o+5],21,-57434055),t=v(t,e,n,r,a[o+12],6,1700485571),r=v(r,t,e,n,a[o+3],10,-1894986606),n=v(n,r,t,e,a[o+10],15,-1051523),e=v(e,n,r,t,a[o+1],21,-2054922799),t=v(t,e,n,r,a[o+8],6,1873313359),r=v(r,t,e,n,a[o+15],10,-30611744),n=v(n,r,t,e,a[o+6],15,-1560198380),e=v(e,n,r,t,a[o+13],21,1309151649),t=v(t,e,n,r,a[o+4],6,-145523070),r=v(r,t,e,n,a[o+11],10,-1120210379),n=v(n,r,t,e,a[o+2],15,718787259),e=v(e,n,r,t,a[o+9],21,-343485551),t=t+$>>>0,e=e+L>>>0,n=n+G>>>0,r=r+U>>>0}return u.endian([t,e,n,r])};l._ff=function(c,f,a,g,t,e,n){var r=c+(f&a|~f&g)+(t>>>0)+n;return(r<<e|r>>>32-e)+f},l._gg=function(c,f,a,g,t,e,n){var r=c+(f&g|a&~g)+(t>>>0)+n;return(r<<e|r>>>32-e)+f},l._hh=function(c,f,a,g,t,e,n){var r=c+(f^a^g)+(t>>>0)+n;return(r<<e|r>>>32-e)+f},l._ii=function(c,f,a,g,t,e,n){var r=c+(a^(f|~g))+(t>>>0)+n;return(r<<e|r>>>32-e)+f},l._blocksize=16,l._digestsize=16,z.exports=function(c,f){if(c==null)throw new Error("Illegal argument "+c);var a=u.wordsToBytes(l(c,f));return f&&f.asBytes?a:f&&f.asString?i.bytesToString(a):u.bytesToHex(a)}}()),z.exports}var ne=te();const ae=j(ne),oe=u=>u.reduce((d,s)=>d+s,0)/u.length,se=u=>u.map(d=>d-10),H=(u,d)=>oe(d)<=u?d:H(u,se(d)),ie=u=>`00${u.toString(16)}`.slice(-2),le=u=>u?{max:255,min:150}:{max:190,min:50},b=(u,d=!1)=>{const s=le(d),i=ae(u),l=Array.from({length:3}).map((f,a)=>i.slice(3*a,3*a+3)).map(f=>parseInt(f,16)).map(f=>Math.max(s.min,Math.round(255*(f/4095))));return`#${H(s.max,l).map(ie).join("")}`},N=({children:u,variant:d="solid",color:s,size:i="default",fullWidth:l=!1,onClick:c,className:f})=>{const a=T.Children.toArray(u).join(""),[g,t]=T.useState(null),e=!!g&&g.scrollWidth>g.clientWidth,n=A(y.tag,y[d],y[i],{[y.fullWidth]:l},f),r=A(n,y.tagButton),o=T.useMemo(()=>s??b(a,!1),[s,a]),m=T.useMemo(()=>s??b(a,!0),[s,a]),p=`light-dark(${o}, ${m})`,h={"--louis-tag-border-color":p,"--louis-tag-background-color":d==="solid"?p:"transparent","--louis-tag-text-color":d==="outlined"?p:"var(--lok-color-text-inverse)"};return x.jsx(J,{tooltip:u,show:e,children:c?x.jsx("button",{type:"button",onClick:c,className:r,style:h,ref:t,children:u}):x.jsx("div",{className:n,style:h,ref:t,children:u})})};try{N.displayName="Tag",N.__docgenInfo={description:"",displayName:"Tag",props:{children:{defaultValue:null,description:"Renders text inside the Tag. Only string and array of strings are allowed because content like `<Tag>{`one`}{`two`}</Tag>` is passed\nas an array of strings `['one', 'two']`. It is still valid case which is concatenated within the component.",name:"children",required:!0,type:{name:"string | string[]"}},variant:{defaultValue:{value:"solid"},description:"Enables the outline style for the tag.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"outlined"'}]}},color:{defaultValue:null,description:"Tag color can be set to any color. In case color is not provided color will be generated based on the passed text.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"default"},description:"Sets tag size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'}]}},onClick:{defaultValue:null,description:"Function that is executed when clicking on a Tag. Providing this will imply that tag should be a button.",name:"onClick",required:!1,type:{name:"(() => void)"}},fullWidth:{defaultValue:{value:"false"},description:"Makes Tag span 100% of the container width.",name:"fullWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Te={title:"Components/Tag",component:N,parameters:{controls:{sort:"requiredFirst",exclude:["children"]},docs:{description:{component:`Tag component is used for providing labels and categories for an item in a list.

Depends on:
- [md5](https://github.com/pvorb/node-md5#readme)

[Figma Source File | Tag](https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4030%3A23309)`}}},argTypes:{onClick:{action:"clicked"}}},_={args:{children:"Default"}},S={args:{children:"Solid",variant:"solid"}},w={args:{children:"Outlined",variant:"outlined"},name:"Outline Tag"},F={args:{children:"Non-clickable Tag",onClick:void 0},name:"Non-clickable"},B={args:{children:"Default",size:"default"},name:"Normal size"},C={args:{children:"Small",size:"small"},name:"Small size"},W={args:{children:"Just a normal, long tag that's not affected in any way"},name:"With no ellipsis"},k={args:{children:"This is what happens when tag is very long",fullWidth:!0},render:u=>x.jsx("div",{style:{width:100,overflow:"hidden"},children:x.jsx(N,{...u,fullWidth:!0,children:u.children})}),name:"With ellipsis"};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,..._.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Solid',
    variant: 'solid'
  }
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outlined',
    variant: 'outlined'
  },
  name: 'Outline Tag'
}`,...w.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Non-clickable Tag',
    onClick: undefined
  },
  name: 'Non-clickable'
}`,...F.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    size: 'default'
  },
  name: 'Normal size'
}`,...B.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small',
    size: 'small'
  },
  name: 'Small size'
}`,...C.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Just a normal, long tag that's not affected in any way"
  },
  name: 'With no ellipsis'
}`,...W.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is what happens when tag is very long',
    fullWidth: true
  },
  render: args => <div style={{
    width: 100,
    overflow: 'hidden'
  }}>
            <Tag {...args} fullWidth>
                {args.children}
            </Tag>
        </div>,
  name: 'With ellipsis'
}`,...k.parameters?.docs?.source}}};const _e=["Default","Solid","Outline","NonClickable","NormalSize","SmallSize","WithNoEllipsis","WithEllipsis"];export{_ as Default,F as NonClickable,B as NormalSize,w as Outline,C as SmallSize,S as Solid,k as WithEllipsis,W as WithNoEllipsis,_e as __namedExportsOrder,Te as default};
