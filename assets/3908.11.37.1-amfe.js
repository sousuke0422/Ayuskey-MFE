(self.webpackChunkayuskey_mfe=self.webpackChunkayuskey_mfe||[]).push([[3908],{78774:(e,t,o)=>{var n=o(94015),i=o(23645)(n);i.push([e.id,'.mk-post-form-window .mk-post-form-window--header .icon[data-v-33186778]{margin-right:8px}.mk-post-form-window .mk-post-form-window--header .count[data-v-33186778]{margin-left:8px;opacity:.8}.mk-post-form-window .mk-post-form-window--header .count[data-v-33186778]:before{content:"("}.mk-post-form-window .mk-post-form-window--header .count[data-v-33186778]:after{content:")"}.mk-post-form-window .mk-post-form-window--body .notePreview[data-v-33186778]{max-width:540px;margin:16px 22px}',"",{version:3,sources:["webpack://./src/client/app/desktop/views/components/post-form-window.vue"],names:[],mappings:"AAAA,yEAAyE,gBAAgB,CAAC,0EAA0E,eAAe,CAAC,UAAU,CAAC,iFAAiF,WAAW,CAAC,gFAAgF,WAAW,CAAC,8EAA8E,eAAe,CAAC,gBAAgB",sourcesContent:['.mk-post-form-window .mk-post-form-window--header .icon[data-v-33186778]{margin-right:8px}.mk-post-form-window .mk-post-form-window--header .count[data-v-33186778]{margin-left:8px;opacity:.8}.mk-post-form-window .mk-post-form-window--header .count[data-v-33186778]:before{content:"("}.mk-post-form-window .mk-post-form-window--header .count[data-v-33186778]:after{content:")"}.mk-post-form-window .mk-post-form-window--body .notePreview[data-v-33186778]{max-width:540px;margin:16px 22px}'],sourceRoot:""}]),e.exports=i},63908:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});var n=o(20144),i=o(67384),a=o(97647);const s=n.default.extend({i18n:(0,i.Z)("desktop/views/components/post-form-window.vue"),components:{XPostForm:a.default},props:{reply:{type:Object,required:!1},airReply:{type:Object,required:!1},mention:{type:Object,required:!1},animation:{type:Boolean,required:!1,default:!0},initialText:{type:String,required:!1},initialNote:{type:Object,required:!1},instant:{type:Boolean,required:!1,default:!1}},data:()=>({uploadings:[],files:[],geo:null}),computed:{maxHeight:()=>window.innerHeight-50},mounted(){this.$nextTick((()=>{this.$refs.form.focus()}))},methods:{onChangeUploadings(e){this.uploadings=e},onChangeFiles(e){this.files=e},onGeoAttached(e){this.geo=e},onGeoDettached(){this.geo=null},onPosted(){this.$refs.window.close()},onWindowClosed(){this.$emit("closed"),this.destroyDom()}}});o(46793);const r=(0,o(51900).Z)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("mk-window",{ref:"window",staticClass:"mk-post-form-window",attrs:{"is-modal":"",animation:e.animation},on:{closed:e.onWindowClosed},scopedSlots:e._u([{key:"header",fn:function(){return[o("span",{staticClass:"mk-post-form-window--header"},[e.geo?o("span",{staticClass:"icon"},[o("fa",{attrs:{icon:"map-marker-alt"}})],1):e._e(),e.reply?e._e():o("span",[e._v(e._s(e.$t("note")))]),e.reply?o("span",[e._v(e._s(e.$t("reply")))]):e._e(),0!=e.files.length?o("span",{staticClass:"count"},[e._v(e._s(e.$t("attaches").replace("{}",e.files.length)))]):e._e(),0!=e.uploadings.length?o("span",{staticClass:"count"},[e._v(e._s(e.$t("uploading-media").replace("{}",e.uploadings.length))),o("mk-ellipsis")],1):e._e()])]},proxy:!0}])},[o("div",{staticClass:"mk-post-form-window--body",style:{maxHeight:e.maxHeight+"px"}},[e.reply?o("mk-note-preview",{staticClass:"notePreview",attrs:{note:e.reply}}):e._e(),o("x-post-form",{ref:"form",attrs:{reply:e.reply,airReply:e.airReply,mention:e.mention,"initial-text":e.initialText,"initial-note":e.initialNote,instant:e.instant},on:{posted:e.onPosted,"change-uploadings":e.onChangeUploadings,"change-attached-files":e.onChangeFiles,"geo-attached":e.onGeoAttached,"geo-dettached":e.onGeoDettached}})],1)])}),[],!1,null,"33186778",null).exports},46793:(e,t,o)=>{var n=o(78774);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,o(45346).Z)("e253b680",n,!0,{})}}]);
//# sourceMappingURL=3908.11.37.1-amfe.js.map