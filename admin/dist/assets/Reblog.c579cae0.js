import{_ as w,a as p,r as l,o as i,c as g,e as n,w as r,b as u,F as _,j as x,i as y,f as m,t as A}from"./index.e7309e76.js";import{l as f}from"./index.b2dcec5c.js";const B={name:"TumblrReblogAnime",components:{},data(){return{input:"",count:{type:Number},loading:!1,selectedItemsEmitted:[],listPrice:Array,currentPage:1,serverParams:{url:"",list_img:Array,tags:Array},value:0,items:[]}},methods:{updateParams(e){this.serverParams=Object.assign({},this.serverParams,e)},publishAnimePost(){this.updateParams({list_img:this.items,tags:this.tags}),console.log(this.items);let e=this;this.loading=!0,p.request({method:"post",url:"/api/tumblr/publish-anime-post",params:this.serverParams,paramsSerializer:t=>f.stringify(t)}).then(t=>{t.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.$vaToast.init({message:"\u0417\u0430\u043F\u0438\u0441\u044C \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u0430",color:"success"}),window.location.reload(),e.list_img=[],this.tags.splice(0),e.input="",e.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(t.status),e.loading=!1)}).catch(t=>{console.log(t),e.loading=!1})},getData(e){this.updateParams({url:e}),console.log(e);let t=this;this.loading=!0,p.request({method:"post",url:"/api/tumblr/get-post",params:this.serverParams,paramsSerializer:s=>f.stringify(s)}).then(s=>{t.items=s.data.list_img,t.tags=s.data.tags,t.loading=!1,console.log(this.pages)}).catch(s=>{console.log(s),t.loading=!1})}}},C={class:"row"},k=m("\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435"),N={class:"flex flex-col sm:flex-row gap-2 items-start"},D={class:"row"},I=m("\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C");function S(e,t,s,T,o,c){const h=l("VaInput"),d=l("va-button"),v=l("va-card-content"),b=l("va-card"),V=l("VaCarousel"),P=l("VaButton");return i(),g(_,null,[n(b,null,{default:r(()=>[n(v,null,{default:r(()=>[u("div",C,[n(h,{modelValue:o.input,"onUpdate:modelValue":t[0]||(t[0]=a=>o.input=a),placeholder:"",label:"Url Post",class:"mb-6"},null,8,["modelValue"]),n(d,{onClick:t[1]||(t[1]=a=>c.getData(o.input))},{default:r(()=>[k]),_:1})])]),_:1})]),_:1}),n(V,{modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=a=>o.value=a),items:o.items},null,8,["modelValue","items"]),u("div",N,[(i(!0),g(_,null,x(e.tags,a=>(i(),y(P,null,{default:r(()=>[m(A(a),1)]),_:2},1024))),256))]),u("div",D,[n(d,{color:"warning",onClick:t[3]||(t[3]=a=>c.publishAnimePost())},{default:r(()=>[I]),_:1})])],64)}var q=w(B,[["render",S]]);export{q as default};
