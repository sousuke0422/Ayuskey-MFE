(self.webpackChunkayuskey_mfe=self.webpackChunkayuskey_mfe||[]).push([[1740],{92056:(e,t,a)=>{var s=a(94015),i=a(23645)(s);i.push([e.id,".localfedi7[data-v-2405ee98]{overflow:hidden;background:var(--face);color:#fff;text-shadow:0 0 8px #000;border-radius:6px;padding:16px;margin-top:16px;margin-bottom:16px;height:80px;background-position:50%;background-size:cover}.localfedi7>header[data-v-2405ee98]{font-size:20px;font-weight:700}.localfedi7>div[data-v-2405ee98]{font-size:14px;opacity:.8}.localfedi7[data-v-2405ee98]:first-child{margin-top:0}.vxjfqztj[data-v-2405ee98]{padding:16px}.vxjfqztj>*[data-v-2405ee98]{margin-right:16px}.vxjfqztj>.local[data-v-2405ee98]{font-weight:700}","",{version:3,sources:["webpack://./src/client/app/common/views/pages/explore.vue"],names:[],mappings:"AAAA,6BAA6B,eAAe,CAAC,sBAAsB,CAAC,UAAU,CAAC,wBAAwB,CAAC,iBAAiB,CAAC,YAAY,CAAC,eAAe,CAAC,kBAAkB,CAAC,WAAW,CAAC,uBAAuB,CAAC,qBAAqB,CAAC,oCAAoC,cAAc,CAAC,eAAe,CAAC,iCAAiC,cAAc,CAAC,UAAU,CAAC,yCAAyC,YAAY,CAAC,2BAA2B,YAAY,CAAC,6BAA6B,iBAAiB,CAAC,kCAAkC,eAAe",sourcesContent:[".localfedi7[data-v-2405ee98]{overflow:hidden;background:var(--face);color:#fff;text-shadow:0 0 8px #000;border-radius:6px;padding:16px;margin-top:16px;margin-bottom:16px;height:80px;background-position:50%;background-size:cover}.localfedi7>header[data-v-2405ee98]{font-size:20px;font-weight:700}.localfedi7>div[data-v-2405ee98]{font-size:14px;opacity:.8}.localfedi7[data-v-2405ee98]:first-child{margin-top:0}.vxjfqztj[data-v-2405ee98]{padding:16px}.vxjfqztj>*[data-v-2405ee98]{margin-right:16px}.vxjfqztj>.local[data-v-2405ee98]{font-weight:700}"],sourceRoot:""}]),e.exports=i},51740:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var s=a(20144),i=a(67384),r=a(51436),n=a(56024);const o=s.default.extend({i18n:(0,i.Z)("common/views/pages/explore.vue"),props:{tag:{type:String,required:!1}},inject:{inNakedDeckColumn:{default:!1}},data:()=>({pinnedUsers:{endpoint:"pinned-users"},verifiedUsers:{endpoint:"users",limit:10,params:{state:"verified",origin:"local",sort:"+follower"}},popularUsers:{endpoint:"users",limit:10,params:{state:"alive",origin:"local",sort:"+follower"}},recentlyUpdatedUsers:{endpoint:"users",limit:10,params:{origin:"local",sort:"+updatedAt"}},recentlyRegisteredUsers:{endpoint:"users",limit:10,params:{origin:"local",state:"alive",sort:"+createdAt"}},popularUsersF:{endpoint:"users",limit:10,params:{state:"alive",origin:"remote",sort:"+follower"}},recentlyUpdatedUsersF:{endpoint:"users",limit:10,params:{origin:"combined",sort:"+updatedAt"}},recentlyRegisteredUsersF:{endpoint:"users",limit:10,params:{origin:"combined",sort:"+createdAt"}},tagsLocal:[],tagsRemote:[],stats:null,query:null,meta:null,num:s.default.filter("number"),faBookmark:n.xV,faChartLine:r.Stf,faCommentAlt:n.Eg,faPlus:r.r8p,faHashtag:r.olY,faRocket:r.tMT,faCertificate:r.Ua$,faSearch:r.wn1}),computed:{tagUsers(){return{endpoint:"hashtags/users",limit:30,params:{tag:this.tag,origin:"combined",sort:"+follower"}}},foundUsers(){return{endpoint:"users/search-by-username-and-host",limit:30,params:{username:this.query}}}},watch:{tag(){this.$refs.tags&&this.$refs.tags.toggleContent(null==this.tag)}},created(){this.$emit("init",{title:this.$t("@.explore"),icon:r.olY}),this.$root.api("hashtags/list",{sort:"+attachedLocalUsers",attachedToLocalUserOnly:!0,limit:30}).then((e=>{this.tagsLocal=e})),this.$root.api("hashtags/list",{sort:"+attachedRemoteUsers",attachedToRemoteUserOnly:!0,limit:30}).then((e=>{this.tagsRemote=e})),this.$root.api("stats").then((e=>{this.stats=e})),this.$root.getMeta().then((e=>{this.meta=e}))},mounted(){document.title=this.$root.instanceName}});a(82125);const l=(0,a(51900).Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ui-input",{staticStyle:{margin:"1.2em 0.5em 1.5em"},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}},[a("span",[e._v(e._s(e.$t("searchUser")))])]),e.query&&""!==e.query?a("mk-user-list",{key:""+e.query,attrs:{pagination:e.foundUsers}},[a("fa",{attrs:{icon:e.faSearch,"fixed-width":""}}),e._v(e._s(e.query)+"\n\t")],1):e._e(),e.meta&&e.stats&&null==e.tag?a("div",{staticClass:"localfedi7",style:{backgroundImage:e.meta.bannerUrl?"url("+e.meta.bannerUrl+")":null}},[a("header",[e._v(e._s(e.$t("explore",{host:e.meta.name||"Misskey"})))]),a("div",[e._v(e._s(e.$t("users-info",{users:e.num(e.stats.originalUsersCount)})))])]):e._e(),null==e.tag?[a("mk-user-list",{attrs:{pagination:e.pinnedUsers,expanded:!1}},[a("fa",{attrs:{icon:e.faBookmark,"fixed-width":""}}),e._v(e._s(e.$t("pinned-users"))+"\n\t\t")],1),a("mk-user-list",{attrs:{pagination:e.verifiedUsers}},[a("fa",{attrs:{icon:e.faCertificate,"fixed-width":""}}),e._v(e._s(e.$t("verified-users"))+"\n\t\t")],1),a("mk-user-list",{attrs:{pagination:e.popularUsers,expanded:!1}},[a("fa",{attrs:{icon:e.faChartLine,"fixed-width":""}}),e._v(e._s(e.$t("popular-users"))+"\n\t\t")],1),a("mk-user-list",{attrs:{pagination:e.recentlyUpdatedUsers,expanded:!1}},[a("fa",{attrs:{icon:e.faCommentAlt,"fixed-width":""}}),e._v(e._s(e.$t("recently-updated-users"))+"\n\t\t")],1),a("mk-user-list",{attrs:{pagination:e.recentlyRegisteredUsers,expanded:!1}},[a("fa",{attrs:{icon:e.faPlus,"fixed-width":""}}),e._v(e._s(e.$t("recently-registered-users"))+"\n\t\t")],1)]:e._e(),null==e.tag?a("div",{staticClass:"localfedi7",style:{backgroundImage:"url(/assets/fedi.jpg)"}},[a("header",[e._v(e._s(e.$t("explore-fediverse")))])]):e._e(),a("ui-container",{ref:"tags",attrs:{"body-togglable":!0,expanded:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("fa",{attrs:{icon:e.faHashtag,"fixed-width":""}}),e._v(e._s(e.$t("popular-tags")))]},proxy:!0}])},[a("div",{staticClass:"vxjfqztj"},[e._l(e.tagsLocal,(function(t){return a("router-link",{key:"local:"+t.tag,staticClass:"local",attrs:{to:"/explore/tags/"+t.tag}},[e._v(e._s(t.tag))])})),e._l(e.tagsRemote,(function(t){return a("router-link",{key:"remote:"+t.tag,attrs:{to:"/explore/tags/"+t.tag}},[e._v(e._s(t.tag))])}))],2)]),null!=e.tag?a("mk-user-list",{key:""+e.tag,attrs:{pagination:e.tagUsers}},[a("fa",{attrs:{icon:e.faHashtag,"fixed-width":""}}),e._v(e._s(e.tag)+"\n\t")],1):e._e(),null==e.tag?[a("mk-user-list",{attrs:{pagination:e.popularUsersF,expanded:!1}},[a("fa",{attrs:{icon:e.faChartLine,"fixed-width":""}}),e._v(e._s(e.$t("popular-users"))+"\n\t\t")],1),a("mk-user-list",{attrs:{pagination:e.recentlyUpdatedUsersF,expanded:!1}},[a("fa",{attrs:{icon:e.faCommentAlt,"fixed-width":""}}),e._v(e._s(e.$t("recently-updated-users"))+"\n\t\t")],1),a("mk-user-list",{attrs:{pagination:e.recentlyRegisteredUsersF,expanded:!1}},[a("fa",{attrs:{icon:e.faRocket,"fixed-width":""}}),e._v(e._s(e.$t("recently-discovered-users"))+"\n\t\t")],1)]:e._e()],2)}),[],!1,null,"2405ee98",null).exports},82125:(e,t,a)=>{var s=a(92056);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals);(0,a(45346).Z)("51a24b18",s,!0,{})}}]);
//# sourceMappingURL=1740.11.37.1-amfe.js.map