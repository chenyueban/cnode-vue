(function(e){function t(t){for(var r,a,s=t[0],c=t[1],i=t[2],l=0,f=[];l<s.length;l++)a=s[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1341":"bef6febb","chunk-469b":"eb2bdb49","chunk-6bac":"2dc7457e","chunk-2645":"00e69ea6","chunk-4c35":"95c90c71","chunk-82f6":"ea1a4201"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-1341":1,"chunk-469b":1,"chunk-6bac":1,"chunk-2645":1,"chunk-4c35":1,"chunk-82f6":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1341":"60ed4f36","chunk-469b":"2ca53d4d","chunk-6bac":"9bcac2f3","chunk-2645":"144e97cf","chunk-4c35":"13753ec4","chunk-82f6":"887890bf"}[e]+".css",a=c.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===r||i===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],i=s.getAttribute("data-href");if(i===r||i===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,n(o)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=u);var i,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=s(e),i=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var p=setTimeout(function(){i({type:"timeout",target:f})},12e4);f.onerror=f.onload=i,l.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/cnode-vue/dist/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0af1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=(n("dcad"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"main"},[n("router-view"),n("router-view",{key:e.$route.params.id,attrs:{name:"main"}}),n("router-view",{key:e.$route.params.loginname,attrs:{name:"user"}}),n("router-view",{attrs:{name:"login"}}),n("router-view",{attrs:{name:"message"}})],1),n("BackTop")],1)}),o=[],u=n("e544"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"1"},on:{"on-select":e.onSelect}},[r("MenuItem",{staticClass:"logo",attrs:{name:"logo",to:"/"}},[r("img",{attrs:{src:n("d686"),alt:"cnode"}})]),r("div",{staticClass:"group"},[r("MenuItem",{attrs:{name:"index",to:"/"}},[e._v("\n                首页\n            ")]),e.$store.state.userinfo?e._e():r("MenuItem",{attrs:{name:"login",to:"/login"}},[e._v("\n                登录\n            ")]),e.$store.state.userinfo?r("Submenu",{attrs:{name:"user"}},[r("template",{slot:"title"},[r("Icon",{attrs:{size:"18",type:"md-contact"}})],1),r("MenuItem",{attrs:{name:"message",to:"/message"}},[r("Badge",{attrs:{count:e.unreadCount,dot:""}},[e._v("\n                        未读消息\n                    ")])],1),r("MenuItem",{attrs:{name:"center",to:"/user/"+e.$store.state.userinfo.loginname}},[e._v("\n                    个人中心\n                ")]),r("MenuItem",{attrs:{name:"logout"}},[e._v("\n                    注销\n                ")])],2):e._e()],1)],1)],1)},c=[],i=(n("96cf"),n("3040")),l=n("d3b2"),f=n("7149"),p=n("71a9"),m=n("bf7a"),h=n("9e6d"),d={name:"Header",components:{Menu:h["a"],MenuItem:m["a"],Submenu:p["a"],Badge:f["a"],Icon:l["a"]},data:function(){return{unreadCount:0}},methods:{onSelect:function(e){switch(e){case"logout":this.logout();break;default:break}},getUnreadCount:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$api.getUnreadCount(t);case 3:n=e.sent,n.success&&(this.unreadCount=n.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$store.dispatch("login",t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log(e.t0);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));return function(t){return e.apply(this,arguments)}}(),logout:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$store.dispatch("logout");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log(e.t0);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));return function(){return e.apply(this,arguments)}}()},mounted:function(){var e=this.$store.state,t=e.accesstoken,n=e.userinfo;t&&n&&this.getUnreadCount(t);var r=window.localStorage.getItem("accesstoken");r&&!t&&this.login(r)}},g=d,v=(n("67d4"),n("2877")),b=Object(v["a"])(g,s,c,!1,null,"13fb0e68",null);b.options.__file="index.vue";var k=b.exports,w={name:"App",components:{Header:k,BackTop:u["a"]}},y=w,x=(n("7faf"),Object(v["a"])(y,a,o,!1,null,null,null));x.options.__file="App.vue";var j=x.exports,_=n("2b1a"),O=n("8c4f");r["a"].use(O["a"]);var P=new O["a"]({mode:"history",base:"/cnode-vue/dist/",routes:[{name:"root",path:"/",components:{default:function(){return Promise.all([n.e("chunk-6bac"),n.e("chunk-4c35")]).then(n.bind(null,"ef77"))}}},{name:"topic",path:"/topic/:id&user=:username",components:{main:function(){return n.e("chunk-469b").then(n.bind(null,"a706"))},user:function(){return Promise.all([n.e("chunk-6bac"),n.e("chunk-2645")]).then(n.bind(null,"7368"))}}},{name:"user",path:"/user/:loginname",components:{user:function(){return Promise.all([n.e("chunk-6bac"),n.e("chunk-2645")]).then(n.bind(null,"7368"))}}},{name:"login",path:"/login",components:{login:function(){return n.e("chunk-82f6").then(n.bind(null,"d9c9"))}}},{name:"message",path:"/message",components:{message:function(){return n.e("chunk-1341").then(n.bind(null,"8fc4"))}}}]});P.beforeEach(function(e,t,n){_["a"].start(),n()}),P.afterEach(function(){_["a"].finish()});var S=P,T=n("2f62"),C=n("c665"),M=n("aa9a"),I=n("bc3a"),R=n.n(I),$={baseURL:"https://cnodejs.org/api/v1"},E=R.a.create({baseURL:$.baseURL,timeout:1e4});E.interceptors.request.use(function(e){return _["a"].start(),e},function(e){return _["a"].error(),Promise.error(e)}),E.interceptors.response.use(function(e){return 200===e.status?(_["a"].finish(),Promise.resolve(e.data)):(_["a"].error(),Promise.reject(e))},function(e){return _["a"].error(),Promise.reject(e.response)});var A=E,B=function(){function e(){Object(C["a"])(this,e)}return Object(M["a"])(e,null,[{key:"getTopics",value:function(e){return A.get("/topics",{params:e})}},{key:"getTopic",value:function(e){return A.get("/topic/".concat(e.id))}},{key:"getUserInfo",value:function(e){return A.get("/user/".concat(e))}},{key:"getAccessToken",value:function(e){return A.post("/accesstoken",{accesstoken:e})}},{key:"getUnreadCount",value:function(e){return A.get("/message/count",{params:{accesstoken:e}})}},{key:"getMessages",value:function(e){return A.get("/messages",{params:{accesstoken:e}})}}]),e}();r["a"].use(T["a"]);var U=new T["a"].Store({state:{accesstoken:null,userinfo:null},mutations:{login:function(e,t){var n=t.accesstoken,r=t.userinfo;e.accesstoken=n,e.userinfo=r},logout:function(e){e.accesstoken=null,e.userinfo=null}},actions:{login:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.getAccessToken(n);case 3:return r=e.sent,t.commit("login",{accesstoken:n,userinfo:r}),window.localStorage.setItem("accesstoken",n),e.next=8,{success:!0,accesstoken:n,userinfo:r};case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e["catch"](0),e.next=15,{success:!1,msg:e.t0};case 15:return e.abrupt("return",e.sent);case 16:case"end":return e.stop()}},e,this,[[0,11]])}));return function(t,n){return e.apply(this,arguments)}}(),logout:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.commit("logout"),window.localStorage.removeItem("accesstoken"),e.next=5,{success:!0};case 5:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e["catch"](0),e.next=12,{success:!1,msg:e.t0};case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()}});r["a"].prototype.$api=B,r["a"].config.productionTip=!1,new r["a"]({router:S,store:U,render:function(e){return e(j)}}).$mount("#app")},"67d4":function(e,t,n){"use strict";var r=n("aafe"),a=n.n(r);a.a},"7faf":function(e,t,n){"use strict";var r=n("0af1"),a=n.n(r);a.a},aafe:function(e,t,n){},d686:function(e,t,n){e.exports=n.p+"img/cnodejs_light.86f6a7c2.svg"}});
//# sourceMappingURL=app.0069f7c2.js.map