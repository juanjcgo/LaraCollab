import{b as s,j as t,B as f,a as u,a4 as h,G as l}from"./app-4a17Pub4.js";import{R as j}from"./RichTextEditor-Cn3FPVCj.js";import{u as b}from"./useTasksStore-BPRaRGpQ.js";import{c as T,a as C}from"./datetime-DXAmRnuk.js";import{T as g}from"./Title-BSH3ecI3.js";import{T as r}from"./Text-BR9LnClf.js";import{F as _}from"./Flex-C4-MgrqI.js";import{C as v}from"./Center-CanggSuC.js";import{S}from"./Stack-B-kostaa.js";import{A as w}from"./Avatar-VVVl2UCZ.js";import{T as y}from"./Tooltip-Bs0FEF2V.js";import"./use-computed-color-scheme-BjX3e8Yz.js";import"./use-disclosure-CdCiEhD4.js";import"./use-resolved-styles-api-nyfOONey.js";import"./Popover-CBbffI_i.js";import"./DirectionProvider-DqDMRz46.js";import"./use-floating-auto-update-BytyxRVS.js";import"./use-uncontrolled-BGuEEBtS.js";import"./TextInput-h0GXyFQ7.js";import"./InputBase-DVeQGwl5.js";import"./Input-B6kN7ymh.js";import"./create-optional-context-DejgPxvx.js";import"./ColorSwatch-HXcgr9nk.js";import"./SimpleGrid-D_xH_exl.js";import"./get-sorted-breakpoints-RaBjtxFS.js";import"./get-base-value-JqT_q0U7.js";import"./ColorPicker-C94QZAI7.js";import"./clamp-DTmYCdls.js";import"./ActionIcon-ni5mTX2i.js";import"./index-C163xbN1.js";import"./reorder-DWLP_Jze.js";import"./_baseClone-DIFX3Exu.js";import"./get-style-object-DUJZA7T_.js";const R="_comment_1a1ld_1",z={comment:R};function nt({task:i}){const{comments:m,fetchComments:c,saveComment:d}=b(),[a,p]=s.useState(!0),[o,x]=s.useState(""),n=s.useRef(null);return s.useEffect(()=>{c(i,()=>p(!1))},[]),t.jsxs(f,{mb:"xl",children:[t.jsxs(g,{order:3,mt:"xl",children:["Discussion",!a&&t.jsxs(r,{c:"dimmed",fw:500,display:"inline-block",ml:5,children:["(",m.length,")"]})]}),t.jsx(j,{ref:n,mt:"md",placeholder:"Write a comment",height:100,content:o,onChange:e=>x(e)}),t.jsx(_,{justify:"flex-end",children:t.jsx(u,{variant:"filled",mt:"md",disabled:o.length<=7,onClick:()=>d(i,o,()=>n.current.setContent("")),children:"Add comment"})}),a?t.jsx(v,{mih:100,children:t.jsx(h,{color:"blue"})}):t.jsx(S,{gap:30,mt:"md",children:m.map(e=>t.jsxs("div",{children:[t.jsxs(l,{justify:"space-between",children:[t.jsxs(l,{children:[t.jsx(w,{src:e.user.avatar,radius:"xl",color:"blue"}),t.jsxs("div",{children:[t.jsx(r,{size:"sm",c:"blue",fw:500,children:e.user.name}),t.jsx(r,{size:"xs",c:"dimmed",children:e.user.job_title})]})]}),t.jsx(y,{label:T(e.created_at),openDelay:250,withArrow:!0,children:t.jsx(r,{size:"xs",c:"dimmed",children:C(e.created_at)})})]}),t.jsx(r,{pl:54,pt:6,size:"sm",className:z.comment,dangerouslySetInnerHTML:{__html:e.content}})]},e.id))})]})}export{nt as default};
