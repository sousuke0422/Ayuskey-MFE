(self.webpackChunkayuskey_mfe=self.webpackChunkayuskey_mfe||[]).push([[5395],{13810:(e,t,r)=>{var s=r(94015),a=r(23645)(s);a.push([e.id,".ivrbakop .kjlrfbes[data-v-5735254a]{display:flex;padding:16px;border-top:1px solid var(--faceDivider)}.ivrbakop .kjlrfbes>div:first-child>a>.avatar[data-v-5735254a]{width:64px;height:64px}.ivrbakop .kjlrfbes>div[data-v-5735254a]:last-child{flex:1;padding-left:16px}@media (max-width:500px){.ivrbakop .kjlrfbes>div[data-v-5735254a]:last-child{font-size:14px}}.ivrbakop .kjlrfbes>div:last-child>header[data-v-5735254a]{color:var(--text)}.ivrbakop .kjlrfbes>div:last-child>header>.is-owner[data-v-5735254a]{flex-shrink:0;align-self:center;margin-left:8px;padding:1px 6px;font-size:80%;background:var(--groupUserListOwnerBg);color:var(--groupUserListOwnerFg);border-radius:3px}.ivrbakop .kjlrfbes>div:last-child>header>.username[data-v-5735254a]{margin-left:8px;opacity:.7}","",{version:3,sources:["webpack://./src/client/app/common/views/pages/user-group-editor.vue"],names:[],mappings:"AAAA,qCAAqC,YAAY,CAAC,YAAY,CAAC,uCAAuC,CAAC,+DAA+D,UAAU,CAAC,WAAW,CAAC,oDAAoD,MAAM,CAAC,iBAAiB,CAAC,yBAAyB,oDAAoD,cAAc,CAAC,CAAC,2DAA2D,iBAAiB,CAAC,qEAAqE,aAAa,CAAC,iBAAiB,CAAC,eAAe,CAAC,eAAe,CAAC,aAAa,CAAC,sCAAsC,CAAC,iCAAiC,CAAC,iBAAiB,CAAC,qEAAqE,eAAe,CAAC,UAAU",sourcesContent:[".ivrbakop .kjlrfbes[data-v-5735254a]{display:flex;padding:16px;border-top:1px solid var(--faceDivider)}.ivrbakop .kjlrfbes>div:first-child>a>.avatar[data-v-5735254a]{width:64px;height:64px}.ivrbakop .kjlrfbes>div[data-v-5735254a]:last-child{flex:1;padding-left:16px}@media (max-width:500px){.ivrbakop .kjlrfbes>div[data-v-5735254a]:last-child{font-size:14px}}.ivrbakop .kjlrfbes>div:last-child>header[data-v-5735254a]{color:var(--text)}.ivrbakop .kjlrfbes>div:last-child>header>.is-owner[data-v-5735254a]{flex-shrink:0;align-self:center;margin-left:8px;padding:1px 6px;font-size:80%;background:var(--groupUserListOwnerBg);color:var(--groupUserListOwnerFg);border-radius:3px}.ivrbakop .kjlrfbes>div:last-child>header>.username[data-v-5735254a]{margin-left:8px;opacity:.7}"],sourceRoot:""}]),e.exports=a},95395:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(20144),a=r(67384),i=r(51436),o=r(56024);const n=s.default.extend({i18n:(0,a.Z)("common/views/components/user-group-editor.vue"),props:{groupId:{required:!0}},data:()=>({group:null,users:[],faCrown:i.nmd,faICursor:i.sdN,faTrashAlt:o.I7,faUsers:i.FVb,faPlus:i.r8p}),created(){this.$root.api("users/groups/show",{groupId:this.groupId}).then((e=>{this.group=e,this.fetchUsers(),this.$emit("init",{title:this.group.name,icon:i.FVb})}))},methods:{fetchGroup(){this.$root.api("users/groups/show",{groupId:this.group.id}).then((e=>{this.group=e}))},fetchUsers(){this.$root.api("users/show",{userIds:this.group.userIds}).then((e=>{this.users=e}))},rename(){this.$root.dialog({title:this.$t("rename"),input:{default:this.group.name}}).then((({canceled:e,result:t})=>{e||this.$root.api("users/groups/update",{groupId:this.group.id,name:t}).then((()=>{this.fetchGroup()})).catch((e=>{this.$root.dialog({type:"error",text:e})}))}))},del(){this.$root.dialog({type:"warning",text:this.$t("delete-are-you-sure").replace("$1",this.group.name),showCancelButton:!0}).then((({canceled:e})=>{e||this.$root.api("users/groups/delete",{groupId:this.group.id}).then((()=>{this.$root.dialog({type:"success",text:this.$t("deleted")})})).catch((e=>{this.$root.dialog({type:"error",text:e})}))}))},remove(e){this.$root.api("users/groups/pull",{groupId:this.group.id,userId:e.id}).then((()=>{this.fetchGroup(),this.fetchUsers()})).catch((e=>{this.$root.dialog({type:"error",text:e})}))},async invite(){const e=this.$t("invited"),{result:t}=await this.$root.dialog({user:{local:!0}});null!=t&&this.$root.api("users/groups/invite",{groupId:this.group.id,userId:t.id}).then((()=>{this.$root.dialog({type:"success",text:e})})).catch((e=>{this.$root.dialog({type:"error",text:e})}))},async transfer(){const{result:e}=await this.$root.dialog({user:{local:!0}});null!=e&&this.$root.dialog({type:"warning",text:this.$t("transfer-are-you-sure").replace("$1",this.group.name).replace("$2",e.username),showCancelButton:!0}).then((({canceled:t})=>{t||this.$root.api("users/groups/transfer",{groupId:this.group.id,userId:e.id}).then((()=>{this.$root.dialog({type:"success",text:this.$t("transferred")})})).catch((e=>{this.$root.dialog({type:"error",text:e})}))}))}}});r(74432);const d=(0,r(51900).Z)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ivrbakop"},[e.group?r("ui-container",{scopedSlots:e._u([{key:"header",fn:function(){return[r("fa",{attrs:{icon:e.faUsers}}),e._v(" "+e._s(e.group.name))]},proxy:!0}],null,!1,1765435718)},[r("section",[r("ui-margin",[r("ui-button",{on:{click:e.rename}},[r("fa",{attrs:{icon:e.faICursor}}),e._v(" "+e._s(e.$t("rename")))],1),r("ui-button",{on:{click:e.del}},[r("fa",{attrs:{icon:e.faTrashAlt}}),e._v(" "+e._s(e.$t("delete")))],1),r("ui-button",{on:{click:e.transfer}},[r("fa",{attrs:{icon:e.faCrown}}),e._v(" "+e._s(e.$t("transfer")))],1)],1)],1)]):e._e(),r("ui-container",{scopedSlots:e._u([{key:"header",fn:function(){return[r("fa",{attrs:{icon:e.faUsers}}),e._v(" "+e._s(e.$t("users")))]},proxy:!0}])},[r("section",[r("ui-margin",[r("ui-button",{on:{click:function(t){return e.invite()}}},[r("fa",{attrs:{icon:e.faPlus}}),e._v(" "+e._s(e.$t("invite")))],1)],1),r("sequential-entrance",{attrs:{animation:"entranceFromTop",delay:"25"}},e._l(e.users,(function(t){return r("div",{staticClass:"kjlrfbes"},[r("div",[r("a",{attrs:{href:e._f("userPage")(t)}},[r("mk-avatar",{staticClass:"avatar",attrs:{user:t,"disable-link":!0}})],1)]),r("div",[r("header",[r("b",[r("mk-user-name",{attrs:{user:t}})],1),e.group.ownerId===t.id?r("span",{staticClass:"is-owner"},[e._v("owner")]):e._e(),r("span",{staticClass:"username"},[e._v("@"+e._s(e._f("acct")(t)))])]),e.group.ownerId!==t.id?r("div",[r("a",{on:{click:function(r){return e.remove(t)}}},[e._v(e._s(e.$t("remove-user")))])]):e._e()])])})),0)],1)])],1)}),[],!1,null,"5735254a",null).exports},74432:(e,t,r)=>{var s=r(13810);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals);(0,r(45346).Z)("ed5e5e04",s,!0,{})}}]);
//# sourceMappingURL=5395.11.37.1-amfe.js.map