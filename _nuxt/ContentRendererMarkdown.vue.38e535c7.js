import{_ as p}from"./MDCRenderer.a52ff2d1.js";import{d as l,ab as m,I as o,b as i,X as v,J as b}from"./entry.15ed5d02.js";const _=l({__name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})}},setup(n){const e=n,r=m().isEnabled(),d=o(()=>{let t=e.value.body||e.value;return e.excerpt&&e.value.excerpt&&(t=e.value.excerpt),t}),c=o(()=>{const{body:t,excerpt:u,...a}=e.value;return a}),s=o(()=>({...e.components,...c.value._components||{}}));return(t,u)=>{const a=p;return i(),v(a,{body:d.value,data:c.value,tag:n.tag,components:s.value,"data-content-id":b(r)?n.value._id:void 0},null,8,["body","data","tag","components","data-content-id"])}}});export{_};
