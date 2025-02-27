(()=>{"use strict";var e={4343:function(e,t,r){var n=r(2676),i=r(1712),l=r(8751),s=r(4351),o=r(3590),a=r(2442),c=r(6750),u=r(7219),d=r(6430),p=r(8402),m=r(7276),x=r(3152),h=r(6483),f=r.n(h),j=r(5271),y=r(1941),v=r(9840),b=r(2992),g=r(3158);let k={async get(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};arguments.length>2&&arguments[2],"function"==typeof t.safeParse&&(t={});let r=await fetch(Object.keys(t).length>0?`${e}?${Object.entries(t).map(e=>{let[t,r]=e;return`${t}=${r}`}).join(",")}`:e);return await r.json()},async post(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};arguments.length>2&&arguments[2];let r=await fetch(e,{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(t)});return await r.json()},async delete(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};arguments.length>2&&arguments[2],"function"==typeof t.safeParse&&(t={});let r=await fetch(`${e}?${Object.entries(t).map(e=>{let[t,r]=e;return`${t}=${r}`}).join(",")}`,{method:"delete"});return await r.json()}};var w=r(3785);let N=(0,j.createContext)(null);function _(e){let{children:t}=e,[r,i]=(0,v.I)({key:"use-global-data"}),l=(0,b.V)({timeout:500}),{message:s}=d.Z.useApp(),{isLoading:o,data:a,refetch:c}=(0,g.a)(function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,w.C)({enabled:r,queryKey:["resume",{lang:e,branch:t,user:"visiky"}],queryFn:()=>{var e;return e="visiky",k.get(`https://raw.githubusercontent.com/${e}/${e}/${t}/resume.json`)}})}("zh","master",!localStorage.getItem("use-global-data"))),u=(0,j.useCallback)((e,t)=>{i(r=>({...r,[e]:t}))},[i]);(0,j.useEffect)(()=>{a&&i(a)},[a,i]);let p=(0,j.useCallback)(()=>{l.copy(JSON.stringify(r,null,2)),s.success("复制成功")},[s,l,r]),m=(0,j.useMemo)(()=>({isLoading:o,data:r,copyConfig:p,refreshData:c,confirmMessage:u}),[o,r,p,c,u]);return(0,n.jsx)(N.Provider,{value:m,children:t})}function P(){let e=(0,j.useContext)(N);if(!e)throw Error("useGlobalData must be used within an DataContextProvider");return e}var Z=r(9213);let $=(0,j.createContext)(null);function C(e){let{children:t}=e,[r,i]=(0,j.useState)(4),[l,s]=(0,j.useState)("#273f75"),o=(0,j.useMemo)(()=>({size:r,setSize:i,color:l,setColor:s}),[r,i,l,s]);return(0,n.jsx)($.Provider,{value:o,children:"function"==typeof t?t(o):t})}function T(e){let{children:t,className:r,small:i=!1,...l}=e,{size:s}=O(),o=(0,j.useMemo)(()=>s*(i?1:2),[s,i]);return(0,n.jsx)(Z.Z,{size:o,className:r,...l,children:t})}function O(){let e=(0,j.useContext)($);if(!e)throw Error("useSize must be used within an DataContextProvider");return e}var L=r(1570);let z=function(){let{token:e}=L.Z.useToken(),t="a949066041";return(0,n.jsx)("footer",{className:" fixed bottom-0 left-0 right-0 pt-6",children:(0,n.jsxs)("div",{className:" flex justify-center text-sm items-center p-3  text-white",style:{backgroundColor:e.colorPrimary},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:"",children:"Made with ❤️"}),(0,n.jsxs)("span",{className:"mx-1",children:["by",(0,n.jsx)("span",{className:" ml-1 cursor-pointer",onClick:()=>{"undefined"!=typeof window&&window.open(`https://github.com/${t}`)},children:t})]})]}),(0,n.jsxs)("a",{href:"https://github.com/a949066041/resume-visiky",className:"  text-white/80 hover:text-white absolute right-2 text-xs flex items-center",target:"_blank",rel:"noreferrer noopener",children:[(0,n.jsx)("i",{className:"icon-[icon-park-outline--github] mr-1 text-sm "})," ","项目代码"]})]})})};var S=r(5149),q=r(1768),E=r(5641),M=r(8128);let R=[{key:"zh",label:"中"},{key:"en",label:"En"}];M.z.object({url:M.z.string(),id:M.z.enum(["template1","template2","template3"]),description:M.z.string(),disabled:M.z.boolean().optional()});let A=[{url:"https://gw.alipayobjects.com/zos/antfincdn/GLDkiGBSPl/moban1.svg",id:"template1",description:"默认模板(适用于单页)"},{url:"https://gw.alipayobjects.com/zos/antfincdn/RGxVcJ2O3q/moban2.svg",id:"template2",description:"简易模板"},{url:"https://gw.alipayobjects.com/zos/antfincdn/Kn2jUKcBme/moban2.svg",id:"template3",description:"简易模板(适用于多页)",disabled:!1}];function D(e){return[{label:"头像设置",key:"avatar",collapsible:"icon",showArrow:!1},{label:"个人信息",key:"profile",collapsible:"icon",showArrow:!1},{label:"教育背景",key:"educationList"},{label:"自我介绍",key:"aboutme",collapsible:"icon",showArrow:!1},{label:"更多信息",key:"awardList"},{label:"个人作品",key:"workList"},{label:"专业技能",key:"skillList"},{label:"工作经历",key:"workExpList"},{label:"项目经历",key:"projectList"}].map(t=>({...t,className:" rounder-sm  mb-2 !border-none !rounded-2xl bg-black/5",onClick:t.showArrow||"boolean"!=typeof t.showArrow?null:()=>null==e?void 0:e(t.key)}))}let F=[["mobile","icon-[icon-park-outline--phone-telephone]"],["email","icon-[icon-park-outline--mail]"],["github","icon-[icon-park-outline--github]"],["zhihu","icon-[ri--zhihu-fill]"],["workExpYear","icon-[ri--zhihu-fill]"],["workPlace","icon-[icon-park-outline--local-two]"],["positionTitle","icon-[icon-park-outline--like]"]];var G=r(9483);function I(){let e=(0,S.s)({from:"/"}),t=(0,G.R)({from:"/"});return{params:t,changeSearch:function(r){e({search:{...t,...r}})}}}function K(){let{params:e,changeSearch:t}=I();return{canPreview:(0,j.useMemo)(()=>!!e.user,[e.user]),isEdit:"edit"===e.mode,changeMode:function(r){e.mode!==r&&t({mode:r})}}}let B=function(){let{i18n:e}=(0,y.$G)(),t=(0,S.s)({from:"/"}),{isEdit:r}=K();return(0,n.jsx)("div",{className:" mx-2 inline-block text-xs",children:(0,n.jsx)(q.Z,{content:r?"编辑模式下, 切换国际化会导致正在配置的内容丢失，请及时保存":null,placement:"left",children:(0,n.jsx)("span",{children:R.map(r=>(0,n.jsx)("span",{className:(0,E.Z)("cursor-pointer mx-1",e.language!==r.key&&" text-white/85"),onClick:()=>{var n;return n=r.key,void(e.changeLanguage(n),t({search:{lang:n}}))},"data-lang":r.key,children:r.label},r.key))})})})},J=function(){let{changeMode:e,isEdit:t,canPreview:r}=K();return(0,n.jsxs)("div",{className:" mx-2 inline-block text-xs text-white",children:[!t&&(0,n.jsx)("span",{onClick:()=>e("edit"),className:" cursor-pointer",children:"编辑"}),t&&(r?(0,n.jsx)(q.Z,{content:"无用户信息，不允许预览",children:(0,n.jsx)("span",{className:" cursor-pointer",children:"预览"})}):(0,n.jsx)("span",{onClick:()=>e("read"),className:" cursor-pointer",children:"预览"}))]})},V=function(){let{token:e}=L.Z.useToken();return(0,n.jsx)("header",{className:" flex justify-end py-2 px-3  text-white",style:{backgroundColor:e.colorPrimary},children:(0,n.jsxs)("span",{children:[(0,n.jsx)(J,{}),(0,n.jsx)(B,{})]})})},W=(0,c.KT)()({component:function(){let{i18n:e}=(0,y.$G)();return(0,j.useEffect)(()=>{f().locale("zh"===e.language?"zh-cn":"")},[e]),(0,n.jsx)(d.Z,{children:(0,n.jsx)(C,{children:t=>{let{color:r}=t;return(0,n.jsx)(_,{children:(0,n.jsxs)(p.ZP,{locale:"zh"===e.language?x.default:m.Z,theme:{token:{colorPrimary:r,borderRadius:2}},children:[(0,n.jsx)(V,{}),(0,n.jsx)(u.j3,{}),(0,n.jsx)(z,{})]})})}})})}});var U=r(5287);let Y=(0,U.f2)("/$page")({component:function(){let{page:e}=Y.useParams();return(0,n.jsxs)("div",{children:[e,"not found"]})}});var H=r(4207),Q=r(5177),X=r(3712),ee=r(5358),et=r(5571),er=r(477),en=r(6208),ei=r(1406),el=r(9331),es=r(286);let eo={avatar:{type:"object",properties:{hidden:{type:"boolean",title:"隐藏头像"},src:{type:"string",title:"头像地址"},shape:{type:"string",widget:"select",title:"头像形状",enum:["circle","square"],enumNames:["圆形","方形"],default:"circle"}}},profile:{type:"object",properties:{name:{required:!0,type:"string",title:"姓名"},mobile:{required:!0,type:"string",title:"手机号"},email:{required:!0,type:"string",title:"邮箱"},github:{type:"string",title:"Github"},zhihu:{type:"string",title:"知乎"},workExpYear:{type:"string",title:"工作经验"},workPlace:{type:"string",title:"期望工作地"},positionTitle:{type:"string",title:"职位"}}},educationList:{type:"object",properties:{edu_time:{required:!0,type:"string",title:"时间"},school:{required:!0,type:"string",title:"学校"},major:{type:"string",title:"专业"},academic_degree:{type:"string",title:"学历"}}},aboutme:{type:"object",properties:{aboutme_desc:{required:!0,type:"string",title:"自我介绍",widget:"TextArea"}}},awardList:{type:"object",properties:{award_time:{required:!0,type:"string",title:"获奖时间"},award_info:{required:!0,type:"string",title:"奖项名称",widget:"TextArea"}}},workExpList:{type:"object",properties:{work_time:{required:!0,type:"string",title:"起止时间"},company_name:{required:!0,type:"string",title:"公司名称"},department_name:{required:!0,type:"string",title:"部门名称"},work_desc:{required:!0,type:"string",title:"职位或描述",widget:"TextArea"}}},projectList:{type:"object",properties:{project_time:{required:!0,type:"string",title:"起止时间"},project_name:{type:"string",title:"项目名称"},project_role:{type:"string",title:"担任角色"},project_desc:{type:"string",title:"项目描述",widget:"TextArea"},project_content:{type:"string",title:"主要工作",widget:"TextArea"}}},workList:{type:"object",properties:{work_name:{type:"string",title:"作品名称"},work_desc:{type:"string",title:"作品描述",widget:"TextArea"},visit_link:{type:"string",title:"作品链接"}}},skillList:{type:"object",properties:{skill_name:{type:"string",title:"技能名称"},skill_level:{type:"number",title:"掌握程度"},skill_desc:{type:"string",title:"技能描述",widget:"TextArea"}}}};var ea=r(1437),ec=r(3073);let eu=function(e){let{schema:t,schemaKey:r,listIndex:i=0,onClose:l}=e,{data:s,confirmMessage:o}=P(),a=(0,ea.cI)(),c=(0,j.useMemo)(()=>{let e=null==s?void 0:s[r];return(0,ec.Z)(e)},[r,s]);return(0,j.useEffect)(()=>{let e=null==s?void 0:s[r];a.resetFields(),s&&e&&a.setValues(c?e[i]||{}:e)},[r,i,c]),(0,n.jsx)(ea.ZP,{form:a,schema:t,footer:!0,onFinish:function(e){if(!c){o(r,e),l();return}let t=s[r].slice();t[i]=e,o(r,t),l()}})};var ed=r(8782),ep=r(9143),em=r(8434),ex=r(5899),eh=r.n(ex);function ef(e){let{id:t,children:r}=e,{attributes:i,listeners:l,setNodeRef:s,transform:o,transition:a}=(0,ep.nB)({id:t}),c={transform:em.ux.Transform.toString(o),transition:a};return(0,n.jsx)("li",{ref:s,style:c,children:(0,n.jsx)("div",{...i,...l,children:r})})}let ej=function(e){let{parentKey:t,onConfig:r}=e,{data:i,confirmMessage:l}=P(),s=(0,ed.VT)(ed.we,{activationConstraint:{distance:10}}),o=(0,ed.Dy)(s),a=(0,j.useMemo)(()=>i?"educationList"===t?i[t].map(e=>({value:`${e.edu_time}-${e.school}-${e.major}-${e.academic_degree}`,id:e.school})):"awardList"===t?i[t].map(e=>({value:`${e.award_info}-${e.award_time}`,id:e.award_info})):"workExpList"===t?i[t].map(e=>({value:`${e.company_name}-${e.department_name}-${e.work_time}-${e.work_desc}`,id:e.company_name})):"projectList"===t?i[t].map(e=>({value:`${e.project_name}-${e.project_role}-${e.project_desc}-${e.project_time}-${e.project_desc}`,id:e.project_name})):[]:[],[i,t]),c=(0,j.useCallback)(e=>{let{active:r,over:n}=e;if(!n||!r.data.current||!n.data.current||r.id===(null==n?void 0:n.id))return;let s=r.data.current.sortable.index,o=n.data.current.sortable.index,a=i[t];l(t,eh()(a,{$splice:[[s,1],[o,0,a[s]]]}))},[i,t,l]),u=(0,j.useCallback)(e=>{let r=i[t];l(t,eh()(r,{$splice:[[e,1]]}))},[i,t,l]);return(0,n.jsx)(ed.LB,{onDragEnd:c,sensors:o,children:(0,n.jsx)("div",{className:" space-y-2",children:(0,n.jsx)(ep.Fo,{items:a,children:(0,n.jsxs)("ul",{children:[(a||[]).map((e,t)=>(0,n.jsx)(ef,{value:e.value,id:e.id,children:(0,n.jsxs)("div",{className:" flex hover:bg-amber-600  py-2 px-3 rounded-xl transition-all items-center",children:[(0,n.jsx)("div",{onClick:()=>r(t),className:" flex-1  truncate ",children:e.value},e.id),(0,n.jsx)("i",{className:"icon-[icon-park-outline--delete] cursor-pointer",onClick:()=>u(t)})]})},e.id)),(0,n.jsx)(et.ZP,{type:"dashed",onClick:()=>r(a.length),className:" mt-2",block:!0,children:"数据添加"})]})})})})},ey=D(),ev=function(){var e;let[t,r]=(0,j.useState)(null),[i,l]=(0,en.O)(),[s,o]=(0,j.useState)(null),[a,c]=(0,j.useState)(0),u=(0,j.useMemo)(()=>t?ey.find(e=>e.key===t):null,[t]);function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;r(e),c(t),o(eo[e]),l(!0)}return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(es.Z,{accordion:!0,items:null===(e=D(d))||void 0===e?void 0:e.map(e=>({...e,children:(0,n.jsx)(ej,{onConfig:t=>d(e.key,t),parentKey:e.key},e.key)})),bordered:!1}),(0,n.jsx)(ei.Z,{closable:!1,open:i,onClose:()=>l(!1),title:null==u?void 0:u.label,children:(0,n.jsx)(eu,{schema:s,schemaKey:t,listIndex:a,onClose:()=>l(!1)})})]})};var eb=r(1870);function eg(e){let{item:t,isActive:r,changeSearch:i}=e;return(0,n.jsxs)("div",{className:(0,E.Z)(" flex flex-col items-center hover:cursor-pointer"),onClick:()=>!t.disabled&&i({template:t.id}),children:[(0,n.jsx)(eb.Q,{src:t.url,className:(0,E.Z)("w-[160px]  shadow mb-2  box-border border-white/20  border-solid border",r?" !border-black/20":"")}),(0,n.jsx)("span",{className:" text-black/65 text-sm",children:t.id}),(0,n.jsx)("span",{className:"text-xs text-black",children:t.description})]},`${t.id}`)}let ek=function(){let{params:e,changeSearch:t}=I();return(0,n.jsx)("div",{className:" grid grid-cols-2 gap-6 my-6",children:A.map(r=>(0,n.jsx)(eg,{isActive:r.id===e.template,changeSearch:t,item:r},r.id))})},ew=function(){let[e,t]=(0,en.O)(),[r,i]=(0,j.useState)("template");return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(et.ZP,{type:"primary",block:!0,onClick:()=>t(!0),children:["进行配置",(0,n.jsx)(ei.Z,{open:e,closable:!1,width:600,title:(0,n.jsx)(el.Z,{value:r,onChange:i,shape:"round",options:[{value:"template",label:"选择模板"},{value:"module",label:"配置简历"}]}),onClose:()=>t(!1),children:"module"===r?(0,n.jsx)(ev,{}):(0,n.jsx)(ek,{})})]})})};var eN=r(4865);let e_=function(){let{params:e}=I(),{user:t="visiky"}=e;return(0,n.jsx)(eN.Z,{type:"info",banner:!0,closable:!0,showIcon:!1,message:(0,n.jsxs)("span",{children:["编辑模式下, 切换国际化会导致正在配置的内容丢失，请及时保存",(0,n.jsxs)("span",{children:[(0,n.jsxs)("span",{style:{marginRight:"4px"},children:["\uD83D\uDC49"," ",!t&&"参考："]}),(0,n.jsx)("span",{style:{color:"var(--primary-color, #1890ff)",cursor:"pointer"},onClick:()=>{window.open(`https://github.com/${t}/${t}`)},children:`${t}'s resumeInfo`}),(0,n.jsx)("span",{children:`（https://github.com/${t}/${t||"visiky"}/blob/master/resume.json）`})]})]})})},eP=function(e){let{text:t}=e,r=null==t?void 0:t.split("\n");return t?(0,n.jsx)("div",{className:" space-y-0.5 text-sm",children:r.map(e=>(0,n.jsx)("p",{children:e},e))}):null},eZ=function(e){let{time:t,className:r}=e,{token:i}=L.Z.useToken(),[l,s]=t,o=(0,j.useMemo)(()=>(0,E.Z)(r," text-xs"),[r]);return t?(0,n.jsxs)("div",{style:{color:i.colorTextDescription},className:o,children:[l,s?` ~ ${s}`:"至今"]}):null},e$=function(e){let{edu_time:t,school:r,major:i,academic_degree:l}=e;return(0,n.jsxs)("div",{className:" flex items-center justify-between w-full",children:[(0,n.jsxs)(T,{className:" flex",small:!0,children:[(0,n.jsx)("b",{children:r}),i&&(0,n.jsx)("span",{children:i}),l&&(0,n.jsx)("span",{className:"sub-info",children:`(${l})`})]}),(0,n.jsx)(eZ,{time:t})]})};var eC=r(3939);let eT=function(e){let{src:t,shape:r="circle",hidden:i}=e;return i?null:(0,n.jsx)(n.Fragment,{children:t?(0,n.jsx)(eC.Z,{className:" !w-full !h-full",shape:r,src:t}):(0,n.jsx)("span",{className:"avatar-upload-tip",children:"头像地址为空"})})};function eO(e){let{icon:t,value:r}=e,{token:i}=L.Z.useToken();return(0,n.jsxs)("div",{className:" text-sm whitespace-nowrap space-x-2 items-center flex",children:[(0,n.jsx)("i",{className:(0,E.Z)(t," text-sm"),style:{color:i.colorPrimary}}),(0,n.jsx)("span",{children:r})]})}let eL=function(){var e,t;let{data:r}=P(),{size:i}=O(),l=(0,j.useMemo)(()=>{if(!(null==r?void 0:r.profile))return[];let e=r.profile;return F.map(t=>{let[r,n]=t;return{value:null==e?void 0:e[r],icon:n,id:r}}).filter(e=>e.value).slice(0,6)},[null==r?void 0:r.profile]);return(0,n.jsxs)("div",{className:" flex  justify-between items-center",children:[(0,n.jsxs)(T,{className:" flex-1",direction:"vertical",children:[(0,n.jsx)("div",{className:" text-2xl ",children:null==r?void 0:null===(e=r.profile)||void 0===e?void 0:e.name}),(0,n.jsx)("div",{className:" grid grid-cols-2",style:{gap:2*i},children:l.map(e=>(0,n.jsx)(eO,{...e},e.id))})]}),!(null==r?void 0:null===(t=r.avatar)||void 0===t?void 0:t.hidden)&&(0,n.jsx)("div",{className:" w-20 h-20 flex-none",children:(0,n.jsx)(eT,{...null==r?void 0:r.avatar})})]})},ez=function(e){let{project_name:t,project_time:r,project_desc:i,project_content:l,project_role:s}=e,{token:o}=L.Z.useToken();return(0,n.jsxs)(T,{direction:"vertical",className:" w-full",small:!0,children:[(0,n.jsxs)("div",{className:" flex justify-between items-center",children:[(0,n.jsxs)(T,{children:[(0,n.jsx)("b",{children:t}),(0,n.jsx)("div",{style:{color:o.colorTextDescription},className:" text-xs",children:r})]}),(0,n.jsx)("div",{className:" text-xs p-1 px-2 text-white rounded-full",style:{backgroundColor:o.colorPrimary},children:s})]}),(0,n.jsx)(eP,{text:i}),(0,n.jsx)(eP,{text:l})]})},eS=function(e){let{work_time:t,company_name:r,department_name:i,work_desc:l}=e,{token:s}=L.Z.useToken();return(0,n.jsxs)(T,{direction:"vertical",className:" flex flex-col w-full",children:[(0,n.jsxs)("div",{className:" flex items-center justify-between",children:[(0,n.jsxs)(T,{children:[(0,n.jsx)("b",{children:r}),i&&(0,n.jsx)("span",{className:" text-xs",style:{color:s.colorTextDescription},children:i})]}),(0,n.jsx)(eZ,{time:t})]}),(0,n.jsx)(eP,{text:l})]},r)},eq=function(e){let{children:t,title:r}=e,{token:i}=L.Z.useToken();return(0,n.jsxs)(T,{className:" w-full",direction:"vertical",children:[(0,n.jsxs)("div",{className:" flex items-center",children:[(0,n.jsx)("span",{className:"text-sm font-bold ",style:{color:i.colorPrimary},children:r}),(0,n.jsx)("div",{className:(0,E.Z)("flex-1 items-center rounded-2xl opacity-45 ml-2"),style:{backgroundColor:i.colorPrimary,height:"1px"}})]}),(0,n.jsx)(T,{direction:"vertical",className:" w-full",children:t})]})},eE={template1:function(){var e,t,r,i;let{data:l}=P();return(0,n.jsxs)(T,{className:" px-6 py-4",direction:"vertical",children:[(0,n.jsx)(eL,{}),(0,n.jsx)(eq,{title:"教育背景",children:null==l?void 0:null===(e=l.educationList)||void 0===e?void 0:e.map(e=>(0,n.jsx)(e$,{...e},e.school))}),(0,n.jsx)(eq,{title:"自我介绍",children:(0,n.jsx)(eP,{text:null==l?void 0:null===(t=l.aboutme)||void 0===t?void 0:t.aboutme_desc})}),(0,n.jsx)(eq,{title:"工作经历",children:null==l?void 0:null===(r=l.workExpList)||void 0===r?void 0:r.map(e=>(0,n.jsx)(eS,{...e},e.company_name))}),(0,n.jsx)(eq,{title:"项目经验",children:null==l?void 0:null===(i=l.projectList)||void 0===i?void 0:i.map(e=>(0,n.jsx)(ez,{...e},e.project_name))})]})},template2:function(){return(0,n.jsx)("div",{children:"Template2"})},template3:function(){return(0,n.jsx)("div",{children:"Template3"})}},eM=(0,U.f2)("/")({component:function(){let{changeSearch:e,params:t}=I(),{i18n:r}=(0,y.$G)(),{isLoading:i,copyConfig:l}=P(),{isEdit:s}=K(),o=(0,j.useRef)(null),{size:a,setSize:c,color:u,setColor:d}=O(),p=(0,er.useReactToPrint)({contentRef:o}),m=(0,j.useMemo)(()=>eE[t.template],[t.template]);return(0,j.useEffect)(()=>{e({lang:r.language})},[e,r.language]),(0,n.jsx)("div",{className:" btn",children:(0,n.jsxs)(H.Z,{spinning:i,children:[(0,n.jsxs)("div",{className:" w-[200px] fixed right-20 top-20",children:[(0,n.jsx)(Q.Z,{value:a,onChange:c,min:4,max:6}),(0,n.jsx)(X.Z,{value:u,onChange:(e,t)=>d(t),trigger:"click"})]}),s&&(0,n.jsx)(e_,{}),(0,n.jsxs)("div",{className:"  mx-auto p-3 mb-10 flex w-full justify-center",children:[(0,n.jsx)("div",{ref:o,className:"min-h-[942px] w-3xl mr-2 ",children:(0,n.jsx)(m,{})}),s&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(ee.Z,{offsetTop:0,children:(0,n.jsxs)("div",{className:" space-y-2 w-[106px]",children:[(0,n.jsx)(ew,{}),(0,n.jsx)(et.ZP,{type:"primary",block:!0,onClick:()=>l(),children:"复制配置"}),(0,n.jsx)(et.ZP,{type:"primary",block:!0,children:"保存简历"}),(0,n.jsx)(et.ZP,{block:!0,children:"导入配置"}),(0,n.jsx)(et.ZP,{type:"primary",block:!0,onClick:()=>p(),children:"下载PDF"}),(0,n.jsx)(et.ZP,{type:"primary",block:!0,children:"分享"})]})})})]})]})})},validateSearch:M.ZP.object({user:M.ZP.string().optional(),template:M.ZP.string().default("template1"),lang:M.ZP.string().default("zh"),mode:M.ZP.enum(["edit","read"]).default("read")})}),eR=Y.update({id:"/$page",path:"/$page",getParentRoute:()=>W}),eA=eM.update({id:"/",path:"/",getParentRoute:()=>W}),eD=W._addFileChildren({IndexRoute:eA,PageRoute:eR})._addFileTypes();var eF=r(4349),eG=r(320),eI=r(2168),eK=r(4183);(0,eG.U)()((0,eI.tJ)((0,eK.n)(e=>({userToken:void 0,setToken:t=>e(e=>{e.userToken=t}),removeToken:()=>{e(e=>{e.userToken=void 0})}})),{name:"cache"}));let eB=new eF.S({defaultOptions:{queries:{staleTime:0}}}),eJ=(0,o.p7)({basepath:"/resume-visiky",routeTree:eD,context:{queryClient:eB}});function eV(){return(0,n.jsx)(a.p,{router:eJ,context:{queryClient:eB}})}var eW=r(183);eW.ZP.use(y.Db).init({resources:{en:{translation:{"编辑模式下, 切换国际化会导致正在配置的内容丢失，请及时保存":"编辑模式下, 切换国际化会导致正在配置的内容丢失，请及时保存","Welcome to React":"Welcome to React and react-i18next"}},zh:{translation:{"编辑模式下, 切换国际化会导致正在配置的内容丢失，请及时保存":"编辑模式下, 切换国际化会导致正在配置的内容丢失，请及时保存","Welcome to React":"欢迎 React and react-i18next"}}},fallbackLng:"en",debug:!1}),"undefined"!=typeof window&&(0,s.Rp)({enabled:!1,log:!1}),!function(){let e=document.getElementById("root");e&&l.createRoot(e).render((0,n.jsx)(i.aH,{client:eB,children:(0,n.jsx)(eV,{})}))}()}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,r),l.exports}r.m=e,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,i){if(1&i&&(n=this(n)),8&i||"object"==typeof n&&n&&(4&i&&n.__esModule||16&i&&"function"==typeof n.then))return n;var l=Object.create(null);r.r(l);var s={};e=e||[null,t({}),t([]),t(t)];for(var o=2&i&&n;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach(function(e){s[e]=function(){return n[e]}});return s.default=function(){return n},r.d(l,s),l}})(),r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=[];r.O=function(t,n,i,l){if(n){l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[n,i,l];return}for(var o=1/0,s=0;s<e.length;s++){for(var n=e[s][0],i=e[s][1],l=e[s][2],a=!0,c=0;c<n.length;c++)(!1&l||o>=l)&&Object.keys(r.O).every(function(e){return r.O[e](n[c])})?n.splice(c--,1):(a=!1,l<o&&(o=l));if(a){e.splice(s--,1);var u=i();void 0!==u&&(t=u)}}return t}})(),r.rv=function(){return"1.2.3"},(()=>{var e={980:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,l,s=n[0],o=n[1],a=n[2],c=0;if(s.some(function(t){return 0!==e[t]})){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(a)var u=a(r)}for(t&&t(n);c<s.length;c++)l=s[c],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},n=self.webpackChunkrsbuild_react_tempalte=self.webpackChunkrsbuild_react_tempalte||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.ruid="bundler=rspack@1.2.3";var n=r.O(void 0,["361","770"],function(){return r(4343)});n=r.O(n)})();