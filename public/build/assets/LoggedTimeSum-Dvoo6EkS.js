import{q as C,x as p,j as e,G as x,a as k,B as v}from"./app-4a17Pub4.js";import{E as R}from"./EmptyWithIcon-C7lyvkIW.js";import{u as S}from"./useForm-D-7B7N6w.js";import{C as g}from"./ContainerBox-B9IAjQXZ.js";import{M as D}from"./MainLayout-D5A37fpr.js";import{m as M}from"./currency-Ch0jvoq9.js";import{e as B}from"./route-CLXYwALx.js";import{r as P}from"./round-CqawzObK.js";import{B as L}from"./Breadcrumbs-DnTwgQ8t.js";import{T as z}from"./Title-BSH3ecI3.js";import{M as f}from"./MultiSelect-Duq5FJlZ.js";import{D as E}from"./pick-calendar-levels-props-4bDM8Nej.js";import{D as F}from"./DatePickerInput-D72VMkjw.js";import{C as b}from"./Checkbox-CVY_-4jR.js";import{T as q}from"./Text-BR9LnClf.js";import{T as o}from"./Table-i9i1K4un.js";import{C as I}from"./Center-CanggSuC.js";import{I as O}from"./IconClock-UTkBgsFW.js";import"./index-B6r_j4C5.js";import"./FlashNotification-PDlnUjhs.js";import"./use-disclosure-CdCiEhD4.js";import"./IconInfoCircle-BfR0qsmf.js";import"./createReactComponent-BwHUzXp6.js";import"./IconCircleX-irk6tkAo.js";import"./useWebSockets-DKQQzHQQ.js";import"./index-C163xbN1.js";import"./useTaskGroupsStore-jTNmh8Xp.js";import"./reorder-DWLP_Jze.js";import"./_baseClone-DIFX3Exu.js";import"./useTasksStore-BPRaRGpQ.js";import"./use-computed-color-scheme-BjX3e8Yz.js";import"./get-style-object-DUJZA7T_.js";import"./user-IyQLa11_.js";import"./Menu-DQv7jdV4.js";import"./use-resolved-styles-api-nyfOONey.js";import"./Popover-CBbffI_i.js";import"./DirectionProvider-DqDMRz46.js";import"./use-floating-auto-update-BytyxRVS.js";import"./use-uncontrolled-BGuEEBtS.js";import"./Avatar-VVVl2UCZ.js";import"./upper-first-sQkIoMXG.js";import"./IconLayoutList-DOxQUUDz.js";import"./IconUsers-ClcBakf5.js";import"./ScrollArea-BBLLgi1y.js";import"./datetime-DXAmRnuk.js";import"./IconMessage-DJLIo_Xo.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./ActionIcon-ni5mTX2i.js";import"./get-sorted-breakpoints-RaBjtxFS.js";import"./OptionsDropdown-B7k9BRCW.js";import"./CheckIcon-BVmRy-LG.js";import"./Combobox-Bd-ojIJS.js";import"./Input-B6kN7ymh.js";import"./create-optional-context-DejgPxvx.js";import"./InputBase-DVeQGwl5.js";import"./Pill-BLrl2ix2.js";import"./PillsInput-B9htvQA-.js";import"./AccordionChevron-CiAWs_wK.js";import"./clamp-DTmYCdls.js";const U=()=>{var u,h;let{projects:a,clientCompanies:T,dropdowns:d}=C().props;const i=B(),[s,_,l]=S("get",route("reports.logged-time.sum"),{projects:((u=i.projects)==null?void 0:u.map(String))||[],users:((h=i.users)==null?void 0:h.map(String))||[],dateRange:i.dateRange&&i.dateRange[0]&&i.dateRange[1]?[p(i.dateRange[0]).toDate(),p(i.dateRange[1]).toDate()]:[p().subtract(1,"week").toDate(),p().toDate()],completed:i.completed!==void 0?i.completed:!0,billable:i.billable!==void 0?i.billable:!0}),n=(t,r)=>{var j;const m=(j=T.find(y=>y.id===r))==null?void 0:j.currency;return M(t,m==null?void 0:m.code,m==null?void 0:m.decimals)},c=t=>t.total_hours*t.project_rate-t.total_hours*t.user_rate;return e.jsxs(e.Fragment,{children:[e.jsxs(L,{fz:14,mb:30,children:[e.jsx("div",{children:"Reports"}),e.jsx("div",{children:"Logged time sum"})]}),e.jsx(z,{order:1,mb:20,children:"Logged time sum"}),e.jsx(g,{px:35,py:25,children:e.jsx("form",{onSubmit:_,children:e.jsxs(x,{justify:"space-between",children:[e.jsxs(x,{gap:"xl",children:[e.jsx(f,{placeholder:s.data.projects.length?null:"Select projects",required:!0,w:220,value:s.data.projects,onChange:t=>l("projects",t),data:d.projects,error:s.errors.projects}),e.jsx(f,{placeholder:s.data.users.length?null:"Select users",required:!0,w:220,value:s.data.users,onChange:t=>l("users",t),data:d.users,error:s.errors.users}),e.jsx(E,{settings:{timezone:"utc"},children:e.jsx(F,{type:"range",valueFormat:"MMM D",placeholder:"Pick dates range",clearable:!0,allowSingleDateInRange:!0,miw:200,value:s.data.dateRange,onChange:t=>l("dateRange",t)})}),e.jsx(b,{label:"Billable",checked:s.data.billable,onChange:t=>l("billable",t.currentTarget.checked)}),e.jsx(b,{label:"Completed",checked:s.data.completed,onChange:t=>l("completed",t.currentTarget.checked)})]}),e.jsx(k,{type:"submit",disabled:s.processing,children:"Submit"})]})})}),e.jsx(v,{mt:"xl",children:Object.keys(a).length?Object.keys(a).map(t=>e.jsxs(g,{px:35,py:15,my:25,children:[e.jsx(q,{fz:20,fw:600,children:a[t][0].project_name}),e.jsxs(o,{horizontalSpacing:"xl",verticalSpacing:"md",striped:!0,highlightOnHover:!0,children:[e.jsx(o.Thead,{children:e.jsxs(o.Tr,{children:[e.jsx(o.Th,{children:"User"}),e.jsx(o.Th,{children:"Logged time"}),e.jsx(o.Th,{children:"Project rate"}),e.jsx(o.Th,{children:"User rate"}),e.jsx(o.Th,{children:"Expense"}),e.jsx(o.Th,{children:"Profit"})]})}),e.jsx(o.Tbody,{children:a[t].map(r=>e.jsxs(o.Tr,{children:[e.jsx(o.Td,{children:r.user_name}),e.jsxs(o.Td,{children:[P(r.total_hours,2).toFixed(2)," h"]}),e.jsx(o.Td,{children:n(r.project_rate,r.client_company_id)}),e.jsx(o.Td,{opacity:r.user_rate===0?.3:1,children:n(r.user_rate,r.client_company_id)}),e.jsx(o.Td,{opacity:r.user_rate===0?.3:1,children:n(r.total_hours*r.user_rate,r.client_company_id)}),e.jsx(o.Td,{c:c(r)<0?"red.7":"green.7",children:n(c(r),r.client_company_id)})]},r.user_id))})]})]},t)):e.jsx(I,{mih:300,children:e.jsx(R,{title:"No logged time found",subtitle:"Try changing selected filters",icon:O})})})]})};U.layout=a=>e.jsx(D,{title:"Logged time sum",children:a});export{U as default};
