(self.webpackChunkayuskey_mfe=self.webpackChunkayuskey_mfe||[]).push([[1519],{81058:(t,a,e)=>{var s=e(94015),i=e(23645)(s);i.push([t.id,".mntrproz[data-v-a4cbc1d6]{display:flex;padding:4px}.mntrproz>div[data-v-a4cbc1d6]{width:50%;padding:4px}.mntrproz>div>b[data-v-a4cbc1d6]{display:block;font-size:12px;color:var(--text)}.mntrproz>div>span[data-v-a4cbc1d6]{position:absolute;top:4px;right:4px;opacity:.7;font-size:12px;color:var(--text)}","",{version:3,sources:["webpack://./src/client/app/common/views/widgets/queue.vue"],names:[],mappings:"AAAA,2BAA2B,YAAY,CAAC,WAAW,CAAC,+BAA+B,SAAS,CAAC,WAAW,CAAC,iCAAiC,aAAa,CAAC,cAAc,CAAC,iBAAiB,CAAC,oCAAoC,iBAAiB,CAAC,OAAO,CAAC,SAAS,CAAC,UAAU,CAAC,cAAc,CAAC,iBAAiB",sourcesContent:[".mntrproz[data-v-a4cbc1d6]{display:flex;padding:4px}.mntrproz>div[data-v-a4cbc1d6]{width:50%;padding:4px}.mntrproz>div>b[data-v-a4cbc1d6]{display:block;font-size:12px;color:var(--text)}.mntrproz>div>span[data-v-a4cbc1d6]{position:absolute;top:4px;right:4px;opacity:.7;font-size:12px;color:var(--text)}"],sourceRoot:""}]),t.exports=i},81519:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>d});var s=e(38655),i=e(51436),o=e(35927),r=e.n(o);const n=(0,s.Z)({name:"queue",props:()=>({compact:!1})}).extend({data:()=>({stats:[],inChart:null,outChart:null,faTasks:i.A8}),watch:{stats(t){this.inChart.updateSeries([{type:"area",data:t.map(((t,a)=>({x:a,y:t.inbox.activeSincePrevTick})))},{type:"area",data:t.map(((t,a)=>({x:a,y:t.inbox.active})))},{type:"line",data:t.map(((t,a)=>({x:a,y:t.inbox.waiting})))},{type:"line",data:t.map(((t,a)=>({x:a,y:t.inbox.delayed})))}]),this.outChart.updateSeries([{type:"area",data:t.map(((t,a)=>({x:a,y:t.deliver.activeSincePrevTick})))},{type:"area",data:t.map(((t,a)=>({x:a,y:t.deliver.active})))},{type:"line",data:t.map(((t,a)=>({x:a,y:t.deliver.waiting})))},{type:"line",data:t.map(((t,a)=>({x:a,y:t.deliver.delayed})))}])}},computed:{latestStats(){return this.stats[this.stats.length-1]}},mounted(){const t={chart:{type:"area",height:70,animations:{dynamicAnimation:{enabled:!1}},sparkline:{enabled:!0}},dataLabels:{enabled:!1},tooltip:{enabled:!1},stroke:{curve:"straight",width:1},colors:["#00E396","#00BCD4","#FFB300","#e53935"],series:[{data:[]},{data:[]},{data:[]},{data:[]}],yaxis:{min:0}};this.inChart=new(r())(this.$refs.in,t),this.outChart=new(r())(this.$refs.out,t),this.inChart.render(),this.outChart.render();const a=this.$root.stream.useSharedConnection("queueStats");a.on("stats",this.onStats),a.on("statsLog",this.onStatsLog),a.send("requestLog",{id:Math.random().toString().substr(2,8),length:50}),this.$once("hook:beforeDestroy",(()=>{a.dispose(),this.inChart.destroy(),this.outChart.destroy()}))},methods:{func(){this.props.compact=!this.props.compact,this.save()},onStats(t){this.stats.push(t),this.stats.length>50&&this.stats.shift()},onStatsLog(t){for(const a of t.reverse())this.onStats(a)}}});e(83800);const d=(0,e(51900).Z)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("ui-container",{attrs:{"show-header":!t.props.compact},scopedSlots:t._u([{key:"header",fn:function(){return[e("fa",{attrs:{icon:t.faTasks}}),t._v("Queue")]},proxy:!0}])},[e("div",{staticClass:"mntrproz"},[e("div",[e("b",[t._v("In")]),t.latestStats?e("span",[t._v(t._s(t._f("number")(t.latestStats.inbox.activeSincePrevTick))+" / "+t._s(t._f("number")(t.latestStats.inbox.delayed)))]):t._e(),e("div",{ref:"in"})]),e("div",[e("b",[t._v("Out")]),t.latestStats?e("span",[t._v(t._s(t._f("number")(t.latestStats.deliver.activeSincePrevTick))+" / "+t._s(t._f("number")(t.latestStats.deliver.delayed)))]):t._e(),e("div",{ref:"out"})])])])],1)}),[],!1,null,"a4cbc1d6",null).exports},83800:(t,a,e)=>{var s=e(81058);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,e(45346).Z)("286665b3",s,!0,{})}}]);
//# sourceMappingURL=1519.11.37.1-amfe.js.map