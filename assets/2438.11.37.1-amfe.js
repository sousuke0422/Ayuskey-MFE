"use strict";(self.webpackChunkayuskey_mfe=self.webpackChunkayuskey_mfe||[]).push([[2438],{22438:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(20144),s=a(56024),i=a(67384),r=a(48649),u=a(95249);const p=n.default.extend({i18n:(0,i.Z)(),components:{XColumn:r.Z,XPage:u.default},props:{pageName:{type:String,required:!0},username:{type:String,required:!0}},data:()=>({page:null,faStickyNote:s.L4}),watch:{$route:"fetch"},created(){this.fetch()},methods:{fetch(){this.$root.api("pages/show",{name:this.pageName,username:this.username}).then((e=>{this.page=e,this.$emit("init",{title:this.page.title,icon:s.L4})}))}}});const o=(0,a(51900).Z)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("x-column",{scopedSlots:e._u([{key:"header",fn:function(){return[a("fa",{attrs:{icon:e.faStickyNote}}),e._v(e._s(e.page?e.page.name:"")+"\n\t")]},proxy:!0}])},[e.page?a("div",[a("x-page",{key:e.page.id,attrs:{page:e.page}})],1):e._e()])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=2438.11.37.1-amfe.js.map