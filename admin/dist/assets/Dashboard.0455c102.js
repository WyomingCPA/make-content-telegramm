import{d as h,a as b,_ as y,r as i,o as m,c as f,b as o,e as s,w as a,t as d,F as g,f as p,p as x,g as w,h as S}from"./index.868be167.js";const N=h({data(){return{total_all_post_count:{type:Number},all_publish_post_count:{type:Number},all_hide_post_count:{type:Number},add_today_post_count:{type:Number},favorite_anime_post_count:{type:Number},favorite_sexy_post_count:{type:Number},favorite_estetic_post_count:{type:Number},favorite_cats_post_count:{type:Number},favorite_sexy_tumblr_video_count:{type:Number},favorite_sexy_tumblr_photo_count:{type:Number},favorite_anime_tumblr_photo_count:{type:Number},favorite_cats_tumblr_video_count:{type:Number},items:[]}},methods:{filterExact(t){var e;return this.filter===""?!0:(console.log(this.filter),((e=t==null?void 0:t.toString)==null?void 0:e.call(t))===this.filter)},fetchData(){let t=this;b.get("/api/dashboard/index").then(function(e){t.total_all_post_count=e.data.total_all_post_count,t.all_publish_post_count=e.data.all_publish_post_count,t.all_hide_post_count=e.data.all_hide_post_count,t.add_today_post_count=e.data.add_today_post_count,t.favorite_anime_post_count=e.data.favorite_anime_post_count,t.favorite_sexy_post_count=e.data.favorite_sexy_post_count,t.favorite_estetic_post_count=e.data.favorite_estetic_post_count,t.favorite_cats_post_count=e.data.favorite_cats_post_count,t.favorite_sexy_tumblr_video_count=e.data.favorite_sexy_tumblr_video_count,t.favorite_sexy_tumblr_photo_count=e.data.favorite_sexy_tumblr_photo_count,t.favorite_anime_tumblr_photo_count=e.data.favorite_anime_tumblr_photo_count,t.favorite_cats_tumblr_video_count=e.data.favorite_cats_tumblr_video_count,console.log(e.data.all_hide_post_count)}).catch(function(e){console.error(e)})},getStatusClass(t){return console.log(t),t<=10?"danger":t>=10||t<=20?"primary":t>=20?"success":""}},created(){this.fetchData()},computed:{}}),n=t=>(x("data-v-3e085278"),t=t(),w(),t),C={class:"row row-equal"},V={class:"flex xl6 xs12 lg6"},B={class:"col-md-4 grid-margin stretch-card"},D=p("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C"),I={class:"flex xl6 xs12 lg6"},$={class:"row"},k={class:"flex xs12 sm6 md6"},q={class:"va-h2 ma-0"},T=n(()=>o("p",{class:"no-wrap"},"\u0412\u0441\u0435\u0433\u043E \u043F\u043E\u0441\u0442\u043E\u0432 \u0432 \u0411\u0414",-1)),F={class:"flex xs12 sm6 md6"},K={class:"va-h2 ma-0"},E=n(()=>o("p",{class:"no-wrap"},"\u0412\u0441\u0435\u0433\u043E \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043D\u043E \u043F\u043E\u0441\u0442\u043E\u0432",-1)),A={class:"flex xs12 sm6 md6"},O={class:"va-h2 ma-0"},P=n(()=>o("p",{class:"no-wrap"},"\u0412\u0441\u0435\u0433\u043E \u0441\u043A\u0440\u044B\u0442\u043E \u043F\u043E\u0441\u0442\u043E\u0432",-1)),U={class:"flex xs12 sm6 md6"},j={class:"va-h2 ma-0"},z=n(()=>o("p",{class:"no-wrap"},"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u043F\u043E\u0441\u0442\u043E\u0432",-1)),G={class:"row row-equal"},H={class:"flex xl8 xs12 lg8"},J=p("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"),L={class:"row row-equal"},M={class:"flex xl12 xs12 lg12"},Q={class:"row"},R={class:"flex xs12 sm3 md3"},W={class:"va-h2 ma-0"},X=n(()=>o("p",{class:"no-wrap"},"Anime from VK",-1)),Y={class:"flex xs12 sm3 md3"},Z={class:"va-h2 ma-0"},tt=n(()=>o("p",{class:"no-wrap"},"Sexy from VK",-1)),ot={class:"flex xs12 sm3 md3"},st={class:"va-h2 ma-0"},at=n(()=>o("p",{class:"no-wrap"},"Estetic from VK",-1)),et={class:"flex xs12 sm3 md3"},_t={class:"va-h2 ma-0"},lt=n(()=>o("p",{class:"no-wrap"},"Cats from VK",-1)),dt={class:"flex xs12 sm3 md3"},nt={class:"va-h2 ma-0"},it=n(()=>o("p",{class:"no-wrap"},"Sexy Tumblr Video",-1)),rt={class:"flex xs12 sm3 md3"},ct={class:"va-h2 ma-0"},ut=n(()=>o("p",{class:"no-wrap"}," Sexy Tumblr Photo",-1)),ht={class:"flex xs12 sm3 md3"},mt={class:"va-h2 ma-0"},ft=n(()=>o("p",{class:"no-wrap"}," Anime Tumblr Photo",-1)),pt={class:"flex xs12 sm3 md3"},vt={class:"va-h2 ma-0"},bt=n(()=>o("p",{class:"no-wrap"}," Cats Tumblr Video",-1));function yt(t,e,v,wt,St,Nt){const c=i("va-card-title"),u=i("va-data-table"),_=i("va-card-content"),l=i("va-card");return m(),f(g,null,[o("div",C,[o("div",V,[o("div",B,[s(l,null,{default:a(()=>[s(c,null,{default:a(()=>[D]),_:1}),s(_,null,{default:a(()=>[s(u,{items:t.all_category_stat},null,8,["items"])]),_:1})]),_:1})])]),o("div",I,[o("div",$,[o("div",k,[s(l,null,{default:a(()=>[s(_,null,{default:a(()=>[o("h2",q,d(t.total_all_post_count),1),T]),_:1})]),_:1})]),o("div",F,[s(l,null,{default:a(()=>[s(_,null,{default:a(()=>[o("h2",K,d(t.all_publish_post_count),1),E]),_:1})]),_:1})]),o("div",A,[s(l,null,{default:a(()=>[s(_,null,{default:a(()=>[o("h2",O,d(t.all_hide_post_count),1),P]),_:1})]),_:1})]),o("div",U,[s(l,null,{default:a(()=>[s(_,null,{default:a(()=>[o("h2",j,d(t.add_today_post_count),1),z]),_:1})]),_:1})])])])]),o("div",G,[o("div",H,[s(l,{square:"",outlined:""},{default:a(()=>[s(c,null,{default:a(()=>[J]),_:1}),s(_,null,{default:a(()=>[s(u,{items:t.items,columns:t.columns,"filter-method":t.customFilteringFn,"sort-by":t.sortBy,"onUpdate:sort-by":e[0]||(e[0]=r=>t.sortBy=r),"sorting-order":t.sortingOrder,"onUpdate:sorting-order":e[1]||(e[1]=r=>t.sortingOrder=r)},null,8,["items","columns","filter-method","sort-by","sorting-order"])]),_:1})]),_:1})])]),o("div",L,[o("div",M,[o("div",Q,[o("div",R,[s(l,{color:t.getStatusClass(t.favorite_anime_post_count)},{default:a(()=>[s(_,null,{default:a(()=>[o("h2",W,d(t.favorite_anime_post_count),1),X]),_:1})]),_:1},8,["color"])]),o("div",Y,[s(l,{color:t.getStatusClass(t.favorite_sexy_post_count)},{default:a(()=>[s(_,null,{default:a(()=>[o("h2",Z,d(t.favorite_sexy_post_count),1),tt]),_:1})]),_:1},8,["color"])]),o("div",ot,[s(l,{color:t.getStatusClass(t.favorite_estetic_post_count)},{default:a(()=>[s(_,null,{default:a(()=>[o("h2",st,d(t.favorite_estetic_post_count),1),at]),_:1})]),_:1},8,["color"])]),o("div",et,[s(l,{color:t.getStatusClass(t.favorite_cats_post_count)},{default:a(()=>[s(_,null,{default:a(()=>[o("h2",_t,d(t.favorite_cats_post_count),1),lt]),_:1})]),_:1},8,["color"])]),o("div",dt,[s(l,{color:t.getStatusClass(t.favorite_sexy_tumblr_video_count)},{default:a(()=>[s(_,null,{default:a(()=>[o("h2",nt,d(t.favorite_sexy_tumblr_video_count),1),it]),_:1})]),_:1},8,["color"])]),o("div",rt,[s(l,{color:t.getStatusClass(t.favorite_sexy_tumblr_photo_count)},{default:a(()=>[s(_,null,{default:a(()=>[o("h2",ct,d(t.favorite_sexy_tumblr_photo_count),1),ut]),_:1})]),_:1},8,["color"])]),o("div",ht,[s(l,{color:t.getStatusClass(t.favorite_anime_tumblr_photo_count)},{default:a(()=>[s(_,null,{default:a(()=>[o("h2",mt,d(t.favorite_anime_tumblr_photo_count),1),ft]),_:1})]),_:1},8,["color"])]),o("div",pt,[s(l,{color:t.getStatusClass(t.favorite_cats_tumblr_video_count)},{default:a(()=>[s(_,null,{default:a(()=>[o("h2",vt,d(t.favorite_cats_tumblr_video_count),1),bt]),_:1})]),_:1},8,["color"])])])])])],64)}var gt=y(N,[["render",yt],["__scopeId","data-v-3e085278"]]);const xt={class:"dashboard"},Vt=h({__name:"Dashboard",setup(t){return S(),(e,v)=>(m(),f("div",xt,[s(gt)]))}});export{Vt as default};
