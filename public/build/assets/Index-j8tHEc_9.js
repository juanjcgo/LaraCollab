import{q as l,j as t,G as c,a as d}from"./app-4a17Pub4.js";import{S as x,A as j}from"./SearchInput-BOo_jGgx.js";import{p as u,a as h,T as b,b as f,P as C}from"./table-hVvSoojY.js";import{M as y}from"./MainLayout-D5A37fpr.js";import{a as g,b as p}from"./route-CLXYwALx.js";import T from"./TableRow-DCLMYaab.js";import{G as i}from"./Grid-D_CqfVm2.js";import{I as S}from"./IconPlus-BCylK9as.js";import{T as m}from"./Table-i9i1K4un.js";import"./use-disclosure-CdCiEhD4.js";import"./Tooltip-Bs0FEF2V.js";import"./DirectionProvider-DqDMRz46.js";import"./use-floating-auto-update-BytyxRVS.js";import"./get-style-object-DUJZA7T_.js";import"./ActionIcon-ni5mTX2i.js";import"./IconArchive-Dz1DC0sm.js";import"./createReactComponent-BwHUzXp6.js";import"./TextInput-h0GXyFQ7.js";import"./InputBase-DVeQGwl5.js";import"./Input-B6kN7ymh.js";import"./create-optional-context-DejgPxvx.js";import"./IconSearch-BcdER74k.js";import"./IconX-DRbAGJ5J.js";import"./Menu-DQv7jdV4.js";import"./use-resolved-styles-api-nyfOONey.js";import"./Popover-CBbffI_i.js";import"./use-uncontrolled-BGuEEBtS.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./Text-BR9LnClf.js";import"./Center-CanggSuC.js";import"./FlashNotification-PDlnUjhs.js";import"./IconInfoCircle-BfR0qsmf.js";import"./IconCircleX-irk6tkAo.js";import"./useWebSockets-DKQQzHQQ.js";import"./index-C163xbN1.js";import"./useTaskGroupsStore-jTNmh8Xp.js";import"./reorder-DWLP_Jze.js";import"./_baseClone-DIFX3Exu.js";import"./useTasksStore-BPRaRGpQ.js";import"./use-computed-color-scheme-BjX3e8Yz.js";import"./user-IyQLa11_.js";import"./Avatar-VVVl2UCZ.js";import"./upper-first-sQkIoMXG.js";import"./IconLayoutList-DOxQUUDz.js";import"./IconUsers-ClcBakf5.js";import"./ScrollArea-BBLLgi1y.js";import"./EmptyWithIcon-C7lyvkIW.js";import"./datetime-DXAmRnuk.js";import"./IconMessage-DJLIo_Xo.js";import"./Title-BSH3ecI3.js";import"./get-sorted-breakpoints-RaBjtxFS.js";import"./TableRowActions-F6jyE7-9.js";import"./index-B6r_j4C5.js";import"./ConfirmModal-gDH_QAL7.js";import"./IconPencil-BwWUWQK_.js";import"./IconDots-BdfUKURJ.js";import"./Badge-BrVN3kpH.js";import"./get-base-value-JqT_q0U7.js";const w=()=>{const{items:o}=l().props,e=u([{label:"Company",column:"name"},{label:"Email",column:"email"},{label:"Clients",sortable:!1},{label:"Actions",sortable:!1,visible:h("client company")}]),a=o.data.length?o.data.map(r=>t.jsx(T,{item:r},r.id)):t.jsx(b,{colSpan:e.length}),s=r=>p({search:r}),n=r=>p(r);return t.jsxs(t.Fragment,{children:[t.jsxs(i,{justify:"space-between",align:"center",children:[t.jsx(i.Col,{span:"content",children:t.jsxs(c,{children:[t.jsx(x,{placeholder:"Search companies",search:s}),t.jsx(j,{})]})}),t.jsx(i.Col,{span:"content",children:can("create client company")&&t.jsx(d,{leftSection:t.jsx(S,{size:14}),radius:"xl",onClick:()=>g("clients.companies.create"),children:"Create"})})]}),t.jsx(m.ScrollContainer,{miw:800,my:"lg",children:t.jsxs(m,{verticalSpacing:"sm",children:[t.jsx(f,{columns:e,sort:n}),t.jsx(m.Tbody,{children:a})]})}),t.jsx(C,{current:o.meta.current_page,pages:o.meta.last_page})]})};w.layout=o=>t.jsx(y,{title:"Clients",children:o});export{w as default};
