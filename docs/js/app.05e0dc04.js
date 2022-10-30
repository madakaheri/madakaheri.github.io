(function(){"use strict";var t={474:function(t,e,r){var s=r(144),a=r(998),n=r(6843),i=r(6190),o=r(4324),c=r(3059),l=r(3687),u=function(){var t=this,e=t._self._c;return e(a.Z,[e(n.Z,{attrs:{app:"",color:"primary",dark:""}},[e("h1",{staticClass:"font-weight-bold text-subtitle-1"},[t._v("@MadakaHeri")]),e(l.Z),e(i.Z,{attrs:{href:"https://twitter.com/MadakaHeri",target:"_blank",small:"",outlined:""}},[e(o.Z,{attrs:{left:""}},[t._v("mdi-twitter")]),t._v(" 連絡先 ")],1)],1),e(c.Z,[e("router-view")],1)],1)},h=[],f={name:"App",data:()=>({})},d=f,v=r(1001),m=(0,v.Z)(d,u,h,!1,null,null,null),g=m.exports,p=r(5205);(0,p.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var Z=r(8345),_=r(3423),b=r(778),y=r(4886),k=r(4610),C=r(266),w=r(2118),S=r(8271),x=r(5495),A=r(9258),j=r(1713),P=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"home"}},[e("section",{attrs:{id:"hero"}},[e(A.Z,{attrs:{src:r(1555),height:"600"}},[e(j.Z,{attrs:{align:"center",justify:"center","no-gutters":"",dense:""}},[e(C.Z,{staticClass:"text-center black--text",attrs:{cols:"12"}},[e(_.Z,{attrs:{size:"200"}},[e("img",{attrs:{src:r(8308),alt:"Madaka Heri"}})]),e("h1",{staticClass:"text-h4 font-weight-bold mt-4"},[t._v("マダカ ヘリ")]),e("h4",{staticClass:"subheading mt-2"},[t._v("Fullstack Web Enginner")])],1)],1)],1)],1),e("section",{staticClass:"section py-16"},[e(w.Z,{attrs:{"fill-height":""}},[e(j.Z,[e(C.Z,{staticClass:"text-center"},[e("h3",[t._v("フロントを大切にするWebフルスタック")]),e(o.Z,{staticClass:"my-4",attrs:{color:"pink",size:"40"}},[t._v("mdi-heart")]),e("p",{staticClass:"text-xs-left"},[t._v(" どこまで行っても主戦場はフロントです。"),e("br"),t._v(" どうしようもないデータベース、メンテナンス不能なコードの復旧に自信あり！ ")])],1)],1)],1)],1),e("section",{staticClass:"section"},[e(w.Z,[e(j.Z,{attrs:{align:"center",justify:"center"}},[e(C.Z,{attrs:{cols:"12",sm:"6",order:"first"}},[e("header",{staticClass:"text-center"},[e("h1",[t._v("Data Modeling")]),e("h4",[t._v("ブログ構造が全ての基本")]),e(o.Z,{attrs:{size:"80",color:"indigo"}},[t._v("mdi-database")])],1)]),e(C.Z,{attrs:{cols:"12",sm:"6"}},[t._v(" 全てのデータは Post、Comment、Category、Tagで表現できます。何故ならば、人類が発明したデータ構造にはHasOne、HasMany、MayToMayの３種類しか基本的には存在しないためです。データを正確に正規化すれば、バックエンドに書くコード量はほんの少しで大丈夫です。 ")])],1)],1)],1),e("section",{staticClass:"section"},[e(w.Z,[e(j.Z,{attrs:{align:"center",justify:"center"}},[e(C.Z,{attrs:{cols:"12",sm:"6","order-sm":"last"}},[e("header",{staticClass:"text-center"},[e("h1",[t._v("UI/UX")]),e("h4",[t._v("データ構造の見えるUIデザイン")]),e(o.Z,{attrs:{size:"80",color:"cyan"}},[t._v("mdi-file")])],1)]),e(C.Z,{attrs:{cols:"12",sm:"6"}},[t._v(" ブログのコメントは投稿無しでは作成できません。当たり前のことですが、これがブログでないCMSサービスに置き換わった時、途端に企画とデザイナーが混乱し、データ構造に沿わないデザインを上げてくることがよくあります。データモデリング図からワイヤーを作成し、ユーザーにもデータ構造が伝わるデザインにすると、ユーザーはより便利な利用方法を開発でき、問い合わせも減ることでしょう。 ")])],1)],1)],1),e("section",{staticClass:"section"},[e(w.Z,[e(j.Z,{attrs:{align:"center",justify:"center"}},[e(C.Z,{attrs:{cols:"12",sm:"6"}},[e("header",{staticClass:"text-center"},[e("h1",[t._v("Continuous Flow")]),e("h4",[t._v("メンテナンス性が最優先")]),e(o.Z,{attrs:{size:"80",color:"grey darken-3"}},[t._v("mdi-linux")])],1)]),e(C.Z,{attrs:{cols:"12",sm:"6"}},[t._v(" 継続的なチーム開発において、第一に優先するべきはメンテナンス性です。メンテナンス性を考慮せずにチーム開発は成り立ちません。 ピンポイントで得意な構成を採用するくらいなら、コード量を増やしてでも基本パターンの繰り返しで何とかする選択をします。 他人がメンテナンス出来ないコードなんて負の資産にしかなりません。 ")])],1)],1)],1),e("section",{staticClass:"section"},[e(w.Z,[e(j.Z,[e(C.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[e(b.Z,{attrs:{height:"208",tag:"section"}},[e(y.EB,[t._v("Web Application Works")]),e(y.Qq,[e(o.Z,{attrs:{small:"",color:"success"}},[t._v("mdi-check-circle")]),t._v(" HTML / CSS / JavaScript ")],1),e(y.ZB,{staticStyle:{height:"80px"}},[t._v(" CMS/LPのデザインから実装まで。常にフロントを主戦場として様々なサービスに関わっています。 ")]),e(l.Z),e(y.h7,{staticClass:"ml-n2"},t._l(["Vue.js","Vuetify"],(function(r){return e(k.Z,{key:r,staticClass:"ml-2",attrs:{small:""}},[t._v(" "+t._s(r)+" ")])})),1)],1)],1),e(C.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[e(b.Z,{attrs:{height:"208",tag:"section"}},[e(y.EB,[t._v("Service/API Works")]),e(y.Qq,[e(o.Z,{attrs:{small:"",color:"success"}},[t._v("mdi-check-circle")]),t._v(" MySQL / NoSQL / PHP / Node.js ")],1),e(y.ZB,{staticStyle:{height:"80px"}},[t._v(" どうしようもないデータベース、メンテナンス不能なコードの復旧に自信あり。 ")]),e(l.Z),e(y.h7,{staticClass:"ml-n2"},t._l(["Laravel","Expless","AWS Amplify"],(function(r){return e(k.Z,{key:r,staticClass:"ml-2",attrs:{small:""}},[t._v(" "+t._s(r)+" ")])})),1)],1)],1),e(C.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[e(b.Z,{attrs:{height:"208",tag:"section"}},[e(y.EB,[t._v("System Architect")]),e(y.Qq,[e(o.Z,{attrs:{small:"",color:"success"}},[t._v("mdi-check-circle")]),t._v(" AWS / bash ")],1),e(y.ZB,{staticStyle:{height:"80px"}},[t._v(" AWSサービスで設計からデプロイまで対応します。 ")]),e(y.h7,{staticClass:"ml-n2"},t._l(["AWS SAM","AWS CDK","AWS Amplify"],(function(r){return e(k.Z,{key:r,staticClass:"ml-2",attrs:{small:""}},[t._v(" "+t._s(r)+" ")])})),1)],1)],1)],1)],1)],1),e(S.Z,{staticClass:"py-5",attrs:{dark:""}},[e(w.Z,[e("h4",[t._v("オープンソース・プロジェクト")]),e(j.Z,{staticClass:"mt-2"},[e(C.Z,{attrs:{cols:"12",sm:"6"}},[e(b.Z,{attrs:{link:"",height:"250",href:"https://github.com/laravel-expansions",target:"_blank"}},[e(y.EB,[e(_.Z,{attrs:{tile:""}},[e(x.Z,{attrs:{src:r(8901)}})],1),e("div",{staticClass:"ml-2"},[t._v("Laravel Expantions")])],1),e(y.ZB,[e("p",[t._v("Laravel拡張パッケージ & CLI")]),e("ul",[e("li",[e("strong",[t._v("ServerlessLaravelTemplates")]),t._v(" - サーバーレスLaravel構築CLI ")]),e("li",[e("strong",[t._v("QueryControllModel")]),t._v(" - フロントから自由にデータ取り出し！ ")]),e("li",[e("strong",[t._v("AWS Helpers")]),t._v(" - AWSリソースをヘルパ関数に収録 ")])])])],1)],1),e(C.Z,{attrs:{cols:"12",sm:"6"}},[e(b.Z,{attrs:{link:"",height:"250",href:"https://github.com/behemothjs",target:"_blank"}},[e(y.EB,[e(_.Z,{attrs:{tile:""}},[e(x.Z,{attrs:{src:r(395)}})],1),e("div",{staticClass:"ml-2"},[t._v("Behemoth.js")])],1),e(y.ZB,[t._v(" 作ってるうちに目的を失ったプロジェクト。"),e("br"),t._v(" 作りかけ。 ")])],1)],1)],1),e(j.Z,[e(C.Z,[e("h4",{staticClass:"mb-2"},[t._v("SNS")]),e(i.Z,{attrs:{icon:"",outlined:"",href:"https://github.com/madakaheri",target:"_blank"}},[e(o.Z,[t._v("mdi-github")])],1),e(i.Z,{staticClass:"ml-2",attrs:{icon:"",outlined:"",href:"https://twitter.com/MadakaHeri",target:"_blank"}},[e(o.Z,[t._v("mdi-twitter")])],1)],1)],1)],1)],1),e("footer",{staticClass:"yellow text-center py-2"},[e("small",[t._v(" Copyright © "+t._s((new Date).getFullYear())+" MadakaHeri All right reserved. ")])])],1)},M=[],E={},O=(0,v.Z)(E,P,M,!1,null,"1ea21081",null),B=O.exports;s.ZP.use(Z.ZP);const L=[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:()=>r.e(443).then(r.bind(r,1272))}],W=new Z.ZP({mode:"history",base:"/",routes:L});var T=W,H=r(629);s.ZP.use(H.ZP);var N=new H.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),F=r(8864),z=r(2638);s.ZP.use(F.Z);var Q=new F.Z({theme:{themes:{light:{primary:z.Z.amber.darken1,secondary:z.Z.grey.darken1,accent:z.Z.shades.black,error:z.Z.red.accent3,anchor:"#8c9eff",twitter:z.Z.lightBlue},dark:{primary:z.Z.blue.lighten3}}}});s.ZP.config.productionTip=!1,new s.ZP({router:T,store:N,vuetify:Q,render:t=>t(g)}).$mount("#app")},8308:function(t,e,r){t.exports=r.p+"img/avatar.60e54c03.png"},1555:function(t,e,r){t.exports=r.p+"img/bg_7765.83ff28d4.png"},395:function(t,e,r){t.exports=r.p+"img/logo_behemothjs.14daceea.png"},8901:function(t,e,r){t.exports=r.p+"img/logo_laravel-expansions.b95b6ac8.png"}},e={};function r(s){var a=e[s];if(void 0!==a)return a.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,s,a,n){if(!s){var i=1/0;for(u=0;u<t.length;u++){s=t[u][0],a=t[u][1],n=t[u][2];for(var o=!0,c=0;c<s.length;c++)(!1&n||i>=n)&&Object.keys(r.O).every((function(t){return r.O[t](s[c])}))?s.splice(c--,1):(o=!1,n<i&&(i=n));if(o){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[s,a,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,s){return r.f[s](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/about.0975fab4.js"}}(),function(){r.miniCssF=function(t){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="madakaheri.github.io:";r.l=function(s,a,n,i){if(t[s])t[s].push(a);else{var o,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var h=l[u];if(h.getAttribute("src")==s||h.getAttribute("data-webpack")==e+n){o=h;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",e+n),o.src=s),t[s]=[a];var f=function(e,r){o.onerror=o.onload=null,clearTimeout(d);var a=t[s];if(delete t[s],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(t){return t(r)})),e)return e(r)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t={143:0};r.f.j=function(e,s){var a=r.o(t,e)?t[e]:void 0;if(0!==a)if(a)s.push(a[2]);else{var n=new Promise((function(r,s){a=t[e]=[r,s]}));s.push(a[2]=n);var i=r.p+r.u(e),o=new Error,c=function(s){if(r.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var n=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.src;o.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,a[1](o)}};r.l(i,c,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,n,i=s[0],o=s[1],c=s[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(c)var u=c(r)}for(e&&e(s);l<i.length;l++)n=i[l],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(u)},s=self["webpackChunkmadakaheri_github_io"]=self["webpackChunkmadakaheri_github_io"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(474)}));s=r.O(s)})();
//# sourceMappingURL=app.05e0dc04.js.map