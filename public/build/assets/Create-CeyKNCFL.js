import{q as h,j as e,G as s}from"./app-4a17Pub4.js";import{A as x}from"./ActionButton-C-w6Z8As.js";import{B as b}from"./BackButton-CQMjaSPB.js";import{u as g}from"./useForm-D-7B7N6w.js";import{C as j}from"./ContainerBox-B9IAjQXZ.js";import{M as C}from"./MainLayout-D5A37fpr.js";import{a as v}from"./route-CLXYwALx.js";import{B as y}from"./Breadcrumbs-DnTwgQ8t.js";import{A as f}from"./Anchor-CA35cCi1.js";import{G as n}from"./Grid-D_CqfVm2.js";import{T as _}from"./Title-BSH3ecI3.js";import{T as o}from"./TextInput-h0GXyFQ7.js";import{S as m}from"./Select-B1v7hLJR.js";import{M as w}from"./MultiSelect-Duq5FJlZ.js";import{F as l}from"./Fieldset-C0k2fqyz.js";import"./createReactComponent-BwHUzXp6.js";import"./index-B6r_j4C5.js";import"./FlashNotification-PDlnUjhs.js";import"./use-disclosure-CdCiEhD4.js";import"./IconInfoCircle-BfR0qsmf.js";import"./IconCircleX-irk6tkAo.js";import"./useWebSockets-DKQQzHQQ.js";import"./index-C163xbN1.js";import"./useTaskGroupsStore-jTNmh8Xp.js";import"./reorder-DWLP_Jze.js";import"./_baseClone-DIFX3Exu.js";import"./useTasksStore-BPRaRGpQ.js";import"./use-computed-color-scheme-BjX3e8Yz.js";import"./Center-CanggSuC.js";import"./Text-BR9LnClf.js";import"./get-style-object-DUJZA7T_.js";import"./user-IyQLa11_.js";import"./Menu-DQv7jdV4.js";import"./use-resolved-styles-api-nyfOONey.js";import"./Popover-CBbffI_i.js";import"./DirectionProvider-DqDMRz46.js";import"./use-floating-auto-update-BytyxRVS.js";import"./use-uncontrolled-BGuEEBtS.js";import"./Avatar-VVVl2UCZ.js";import"./upper-first-sQkIoMXG.js";import"./IconLayoutList-DOxQUUDz.js";import"./IconUsers-ClcBakf5.js";import"./ScrollArea-BBLLgi1y.js";import"./EmptyWithIcon-C7lyvkIW.js";import"./datetime-DXAmRnuk.js";import"./IconMessage-DJLIo_Xo.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./ActionIcon-ni5mTX2i.js";import"./get-sorted-breakpoints-RaBjtxFS.js";import"./get-base-value-JqT_q0U7.js";import"./InputBase-DVeQGwl5.js";import"./Input-B6kN7ymh.js";import"./create-optional-context-DejgPxvx.js";import"./OptionsDropdown-B7k9BRCW.js";import"./CheckIcon-BVmRy-LG.js";import"./Combobox-Bd-ojIJS.js";import"./Pill-BLrl2ix2.js";import"./PillsInput-B9htvQA-.js";const B=()=>{var c;const{dropdowns:{clients:i,countries:p,currencies:d}}=h().props,[r,u,a]=g("post",route("clients.companies.store"),{name:"",address:"",postal_code:"",city:"",country_id:"",currency_id:"",email:"",phone:"",web:"",iban:"",swift:"",business_id:"",tax_id:"",vat:"",clients:(c=route().params)!=null&&c.client_id?[route().params.client_id]:[]});return e.jsxs(e.Fragment,{children:[e.jsxs(y,{fz:14,mb:30,children:[e.jsx(f,{href:"#",onClick:()=>v("clients.companies.index"),fz:14,children:"Companies"}),e.jsx("div",{children:"Create"})]}),e.jsxs(n,{justify:"space-between",align:"flex-end",gutter:"xl",mb:"lg",children:[e.jsx(n.Col,{span:"auto",children:e.jsx(_,{order:1,children:"Create company"})}),e.jsx(n.Col,{span:"content"})]}),e.jsx(j,{maw:600,children:e.jsxs("form",{onSubmit:u,children:[e.jsx(o,{label:"Name",placeholder:"Company name",required:!0,value:r.data.name,onChange:t=>a("name",t.target.value),error:r.errors.name}),e.jsx(m,{label:"Default currency",placeholder:"Select currency",required:!0,mt:"md",searchable:!0,value:r.data.currency_id,onChange:t=>a("currency_id",t),data:d,error:r.errors.currency_id}),e.jsx(w,{label:"Clients",placeholder:"Select clients",required:!0,mt:"md",value:r.data.clients,onChange:t=>a("clients",t),data:i,error:r.errors.clients}),e.jsxs(l,{legend:"Location",mt:"xl",children:[e.jsx(o,{label:"Address",placeholder:"Address",value:r.data.address,onChange:t=>a("address",t.target.value),error:r.errors.address}),e.jsxs(s,{grow:!0,children:[e.jsx(o,{label:"Postal code",placeholder:"Postal code",mt:"md",value:r.data.postal_code,onChange:t=>a("postal_code",t.target.value),error:r.errors.postal_code}),e.jsx(o,{label:"City",placeholder:"City",mt:"md",value:r.data.city,onChange:t=>a("city",t.target.value),error:r.errors.city})]}),e.jsx(m,{label:"Country",placeholder:"Select country",mt:"md",searchable:!0,value:r.data.country_id,onChange:t=>a("country_id",t),data:p,error:r.errors.country_id})]}),e.jsxs(l,{legend:"Details",mt:"xl",children:[e.jsx(o,{label:"Business ID",placeholder:"Business ID",value:r.data.business_id,onChange:t=>a("business_id",t.target.value),error:r.errors.business_id}),e.jsx(o,{label:"Tax ID",placeholder:"Tax ID",mt:"md",value:r.data.tax_id,onChange:t=>a("tax_id",t.target.value),error:r.errors.tax_id}),e.jsx(o,{label:"VAT",placeholder:"VAT",mt:"md",value:r.data.vat,onChange:t=>a("vat",t.target.value),error:r.errors.vat})]}),e.jsxs(l,{legend:"Finance",mt:"xl",children:[e.jsx(o,{label:"IBAN",placeholder:"IBAN",value:r.data.iban,onChange:t=>a("iban",t.target.value),error:r.errors.iban}),e.jsx(o,{label:"SWIFT",placeholder:"SWIFT",mt:"md",value:r.data.swift,onChange:t=>a("swift",t.target.value),error:r.errors.swift}),e.jsx(m,{label:"Default currency",placeholder:"Select currency",required:!0,mt:"md",searchable:!0,value:r.data.currency_id,onChange:t=>a("currency_id",t),data:d,error:r.errors.currency_id})]}),e.jsxs(l,{legend:"Contact",mt:"xl",children:[e.jsxs(s,{grow:!0,children:[e.jsx(o,{label:"Email",placeholder:"Email",value:r.data.email,onChange:t=>a("email",t.target.value),error:r.errors.email}),e.jsx(o,{label:"Phone",placeholder:"Phone",value:r.data.phone,onChange:t=>a("phone",t.target.value),error:r.errors.phone})]}),e.jsx(o,{label:"Web",placeholder:"Web",mt:"md",value:r.data.web,onChange:t=>a("web",t.target.value),error:r.errors.web})]}),e.jsxs(s,{justify:"space-between",mt:"xl",children:[e.jsx(b,{route:"clients.companies.index"}),e.jsx(x,{loading:r.processing,children:"Create"})]})]})})]})};B.layout=i=>e.jsx(C,{title:"Create company",children:i});export{B as default};
