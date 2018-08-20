(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a8b"],{"0179":function(t,e,n){},"0347":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classes},[t.showHead?n("div",{class:t.headClasses},[t._t("title",[t.title?n("p",[t.icon?n("Icon",{attrs:{type:t.icon}}):t._e(),n("span",[t._v(t._s(t.title))])],1):t._e()])],2):t._e(),t.showExtra?n("div",{class:t.extraClasses},[t._t("extra")],2):t._e(),n("div",{class:t.bodyClasses,style:t.bodyStyles},[t._t("default")],2)])},r=[],a=n("a322"),o=(n("c5f6"),n("2748")),i="ivu-card",c=16,l={name:"Card",components:{Icon:o["a"]},props:{bordered:{type:Boolean,default:!0},disHover:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1},padding:{type:Number,default:c},title:{type:String},icon:{type:String}},data:function(){return{showHead:!0,showExtra:!0}},computed:{classes:function(){var t;return["".concat(i),(t={},Object(a["a"])(t,"".concat(i,"-bordered"),this.bordered&&!this.shadow),Object(a["a"])(t,"".concat(i,"-dis-hover"),this.disHover||this.shadow),Object(a["a"])(t,"".concat(i,"-shadow"),this.shadow),t)]},headClasses:function(){return"".concat(i,"-head")},extraClasses:function(){return"".concat(i,"-extra")},bodyClasses:function(){return"".concat(i,"-body")},bodyStyles:function(){return this.padding!==c?{padding:"".concat(this.padding,"px")}:""}},mounted:function(){this.showHead=this.title||void 0!==this.$slots.title,this.showExtra=void 0!==this.$slots.extra}},u=l,h=n("2877"),d=Object(h["a"])(u,s,r,!1,null,null,null);d.options.__file="card.vue";var f=d.exports;e["a"]=f},"0bfb":function(t,e,n){"use strict";var s=n("cb7c");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"2b25":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Tag",{attrs:{color:t.formatTab(t.data).color}},[t._v(t._s(t.formatTab(t.data).label))])},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.fade?n("transition",{attrs:{name:"fade"}},[n("div",{class:t.classes,style:t.wraperStyles,on:{click:function(e){return e.stopPropagation(),t.check(e)}}},[t.showDot?n("span",{class:t.dotClasses,style:t.bgColorStyle}):t._e(),n("span",{class:t.textClasses,style:t.textColorStyle},[t._t("default")],2),t.closable?n("Icon",{class:t.iconClass,attrs:{color:t.lineColor,type:"ios-close"},nativeOn:{click:function(e){return e.stopPropagation(),t.close(e)}}}):t._e()],1)]):n("div",{class:t.classes,style:t.wraperStyles,on:{click:function(e){return e.stopPropagation(),t.check(e)}}},[t.showDot?n("span",{class:t.dotClasses,style:t.bgColorStyle}):t._e(),n("span",{class:t.textClasses,style:t.textColorStyle},[t._t("default")],2),t.closable?n("Icon",{class:t.iconClass,attrs:{color:t.lineColor,type:"ios-close"},nativeOn:{click:function(e){return e.stopPropagation(),t.close(e)}}}):t._e()],1)},o=[],i=(n("7f7f"),n("a322")),c=(n("c5f6"),n("d3b2")),l=n("cd51"),u="ivu-tag",h=["default","primary","success","warning","error","blue","green","red","yellow","pink","magenta","volcano","orange","gold","lime","cyan","geekblue","purple"],d=["pink","magenta","volcano","orange","gold","lime","cyan","geekblue","purple"],f={name:"Tag",components:{Icon:c["a"]},props:{closable:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},checked:{type:Boolean,default:!0},color:{type:String,default:"default"},type:{validator:function(t){return Object(l["f"])(t,["border","dot"])}},name:{type:[String,Number]},fade:{type:Boolean,default:!0}},data:function(){return{isChecked:this.checked}},computed:{classes:function(){var t;return["".concat(u),(t={},Object(i["a"])(t,"".concat(u,"-").concat(this.color),!!this.color&&Object(l["f"])(this.color,h)),Object(i["a"])(t,"".concat(u,"-").concat(this.type),!!this.type),Object(i["a"])(t,"".concat(u,"-closable"),this.closable),Object(i["a"])(t,"".concat(u,"-checked"),this.isChecked),t)]},wraperStyles:function(){return Object(l["f"])(this.color,h)?{}:{background:this.isChecked?this.defaultTypeColor:"transparent",borderWidth:"1px",borderStyle:"solid",borderColor:"dot"!==this.type&&"border"!==this.type&&this.isChecked?this.borderColor:this.lineColor,color:this.lineColor}},textClasses:function(){return["".concat(u,"-text"),"border"===this.type&&Object(l["f"])(this.color,h)?"".concat(u,"-color-").concat(this.color):"","dot"!==this.type&&"border"!==this.type&&"default"!==this.color&&this.isChecked&&d.indexOf(this.color)<0?"".concat(u,"-color-white"):""]},dotClasses:function(){return"".concat(u,"-dot-inner")},iconClass:function(){return"dot"===this.type?"":"border"===this.type?Object(l["f"])(this.color,h)?"".concat(u,"-color-").concat(this.color):"":void 0!==this.color?"default"===this.color?"":"rgb(255, 255, 255)":""},showDot:function(){return!!this.type&&"dot"===this.type},lineColor:function(){return"dot"===this.type?"":"border"===this.type?void 0!==this.color?Object(l["f"])(this.color,h)?"":this.color:"":void 0!==this.color?"default"===this.color?"":"rgb(255, 255, 255)":""},borderColor:function(){return void 0!==this.color?"default"===this.color?"":this.color:""},dotColor:function(){return void 0!==this.color?Object(l["f"])(this.color,h)?"":this.color:""},textColorStyle:function(){return Object(l["f"])(this.color,h)?{}:"dot"!==this.type&&"border"!==this.type?this.isChecked?{color:this.lineColor}:{}:{color:this.lineColor}},bgColorStyle:function(){return Object(l["f"])(this.color,h)?{}:{background:this.dotColor}},defaultTypeColor:function(){return"dot"!==this.type&&"border"!==this.type&&void 0!==this.color?Object(l["f"])(this.color,h)?"":this.color:""}},methods:{close:function(t){void 0===this.name?this.$emit("on-close",t):this.$emit("on-close",t,this.name)},check:function(){if(this.checkable){var t=!this.isChecked;this.isChecked=t,void 0===this.name?this.$emit("on-change",t):this.$emit("on-change",t,this.name)}}}},p=f,m=n("2877"),b=Object(m["a"])(p,a,o,!1,null,null,null);b.options.__file="tag.vue";var y=b.exports,g=y,v={name:"Put",props:["data"],components:{Tag:g},methods:{formatTab:function(t){return t.good?{color:"gold",label:"精华"}:t.top?{color:"green",label:"置顶"}:"ask"===t.tab?{color:"purple",label:"问答"}:"share"===t.tab?{color:"blue",label:"分享"}:"job"===t.tab?{color:"magenta",label:"招聘"}:{color:"default",label:"测试"}}}},$=v,S=(n("62b7"),Object(m["a"])($,s,r,!1,null,"273ccaa4",null));S.options.__file="index.vue";e["a"]=S.exports},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},4456:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{class:t.classes},[t.src?n("img",{attrs:{src:t.src}}):t.icon||t.customIcon?n("Icon",{attrs:{type:t.icon,custom:t.customIcon}}):n("span",{ref:"children",class:[t.prefixCls+"-string"],style:t.childrenStyle},[t._t("default")],2)],1)},r=[],a=n("a322"),o=n("d3b2"),i=n("cd51"),c="ivu-avatar",l={name:"Avatar",components:{Icon:o["a"]},props:{shape:{validator:function(t){return Object(i["f"])(t,["circle","square"])},default:"circle"},size:{validator:function(t){return Object(i["f"])(t,["small","large","default"])},default:function(){return""===this.$IVIEW.size?"default":this.$IVIEW.size}},src:{type:String},icon:{type:String},customIcon:{type:String,default:""}},data:function(){return{prefixCls:c,scale:1,childrenWidth:0,isSlotShow:!1}},computed:{classes:function(){var t;return["".concat(c),"".concat(c,"-").concat(this.shape),"".concat(c,"-").concat(this.size),(t={},Object(a["a"])(t,"".concat(c,"-image"),!!this.src),Object(a["a"])(t,"".concat(c,"-icon"),!!this.icon||!!this.customIcon),t)]},childrenStyle:function(){var t={};return this.isSlotShow&&(t={msTransform:"scale(".concat(this.scale,")"),WebkitTransform:"scale(".concat(this.scale,")"),transform:"scale(".concat(this.scale,")"),position:"absolute",display:"inline-block",left:"calc(50% - ".concat(Math.round(this.childrenWidth/2),"px)")}),t}},methods:{setScale:function(){if(this.isSlotShow=!this.src&&!this.icon,this.$refs.children){this.childrenWidth=this.$refs.children.offsetWidth;var t=this.$el.getBoundingClientRect().width;t-8<this.childrenWidth?this.scale=(t-8)/this.childrenWidth:this.scale=1}}},mounted:function(){this.setScale()},updated:function(){this.setScale()}},u=l,h=n("2877"),d=Object(h["a"])(u,s,r,!1,null,null,null);d.options.__file="avatar.vue";var f=d.exports;e["a"]=f},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,function(){"use strict";var t="millisecond",e="second",n="minute",s="hour",r="day",a="week",o="month",i="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/,l=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},d={padStart:h,padZoneStr:function(t){var e=Math.abs(t),n=Math.floor(e/60),s=e%60;return(t<=0?"+":"-")+h(n,2,"0")+":"+h(s,2,"0")},monthDiff:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),s=t.clone().add(n,"months"),r=e-s<0,a=t.clone().add(n+(r?-1:1),"months");return Number(-(n+(e-s)/(r?s-a:a-s)))},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(c){return{M:o,y:i,w:a,d:r,h:s,m:n,s:e,ms:t}[c]||String(c||"").toLowerCase().replace(/s$/,"")},isUndefined:function(t){return void 0===t}},f="en",p={};p[f]=u;var m=function(t){return t instanceof $},b=function(t,e,n){var s;if(!t)return null;if("string"==typeof t)p[t]&&(s=t),e&&(p[t]=e,s=t);else{var r=t.name;p[r]=t,s=r}return n||(f=s),s},y=function(t,e){if(m(t))return t.clone();var n=e||{};return n.date=t,new $(n)},g=function(t,e){return y(t,{locale:e.$L})},v=d;v.parseLocale=b,v.isDayjs=m,v.wrapper=g;var $=function(){function u(t){this.parse(t)}var h=u.prototype;return h.parse=function(t){var e,n;this.$d=null===(e=t.date)?new Date(NaN):v.isUndefined(e)?new Date:e instanceof Date?e:"string"==typeof e&&/.*[^Z]$/i.test(e)&&(n=e.match(c))?new Date(n[1],n[2]-1,n[3]||1,n[5]||0,n[6]||0,n[7]||0,n[8]||0):new Date(e),this.init(t)},h.init=function(t){this.$y=this.$d.getFullYear(),this.$M=this.$d.getMonth(),this.$D=this.$d.getDate(),this.$W=this.$d.getDay(),this.$H=this.$d.getHours(),this.$m=this.$d.getMinutes(),this.$s=this.$d.getSeconds(),this.$ms=this.$d.getMilliseconds(),this.$L=this.$L||b(t.locale,null,!0)||f},h.$utils=function(){return v},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.$compare=function(t){return this.valueOf()-y(t).valueOf()},h.isSame=function(t){return 0===this.$compare(t)},h.isBefore=function(t){return this.$compare(t)<0},h.isAfter=function(t){return this.$compare(t)>0},h.year=function(){return this.$y},h.month=function(){return this.$M},h.day=function(){return this.$W},h.date=function(){return this.$D},h.hour=function(){return this.$H},h.minute=function(){return this.$m},h.second=function(){return this.$s},h.millisecond=function(){return this.$ms},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,c){var l=this,u=!!v.isUndefined(c)||c,h=function(t,e){var n=g(new Date(l.$y,e,t),l);return u?n:n.endOf(r)},d=function(t,e){return g(l.toDate()[t].apply(l.toDate(),u?[0,0,0,0].slice(e):[23,59,59,999].slice(e)),l)};switch(v.prettyUnit(t)){case i:return u?h(1,0):h(31,11);case o:return u?h(1,this.$M):h(0,this.$M+1);case a:return h(u?this.$D-this.$W:this.$D+(6-this.$W),this.$M);case r:case"date":return d("setHours",0);case s:return d("setMinutes",1);case n:return d("setSeconds",2);case e:return d("setMilliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(a,c){switch(v.prettyUnit(a)){case r:this.$d.setDate(this.$D+(c-this.$W));break;case"date":this.$d.setDate(c);break;case o:this.$d.setMonth(c);break;case i:this.$d.setFullYear(c);break;case s:this.$d.setHours(c);break;case n:this.$d.setMinutes(c);break;case e:this.$d.setSeconds(c);break;case t:this.$d.setMilliseconds(c)}return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.add=function(t,c){var l=this;t=Number(t);var u,h=v.prettyUnit(c),d=function(e,n){var s=l.set("date",1).set(e,n+t);return s.set("date",Math.min(l.$D,s.daysInMonth()))};if(h===o)return d(o,this.$M);if(h===i)return d(i,this.$y);switch(h){case n:u=6e4;break;case s:u=36e5;break;case r:u=864e5;break;case a:u=6048e5;break;case e:u=1e3;break;default:u=1}var f=this.valueOf()+t*u;return g(f,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this,n=t||"YYYY-MM-DDTHH:mm:ssZ",s=v.padZoneStr(this.$d.getTimezoneOffset()),r=this.$locale(),a=r.weekdays,o=r.months,i=function(t,e,n,s){return t&&t[e]||n[e].substr(0,s)};return n.replace(l,function(t){if(t.indexOf("[")>-1)return t.replace(/\[|\]/g,"");switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return String(e.$y);case"M":return String(e.$M+1);case"MM":return v.padStart(e.$M+1,2,"0");case"MMM":return i(r.monthsShort,e.$M,o,3);case"MMMM":return o[e.$M];case"D":return String(e.$D);case"DD":return v.padStart(e.$D,2,"0");case"d":return String(e.$W);case"dd":return i(r.weekdaysMin,e.$W,a,2);case"ddd":return i(r.weekdaysShort,e.$W,a,3);case"dddd":return a[e.$W];case"H":return String(e.$H);case"HH":return v.padStart(e.$H,2,"0");case"h":case"hh":return 0===e.$H?12:v.padStart(e.$H<13?e.$H:e.$H-12,"hh"===t?2:1,"0");case"a":return e.$H<12?"am":"pm";case"A":return e.$H<12?"AM":"PM";case"m":return String(e.$m);case"mm":return v.padStart(e.$m,2,"0");case"s":return String(e.$s);case"ss":return v.padStart(e.$s,2,"0");case"SSS":return v.padStart(e.$ms,3,"0");case"Z":return s;default:return s.replace(":","")}})},h.diff=function(t,c,l){var u=v.prettyUnit(c),h=y(t),d=this-h,f=v.monthDiff(this,h);switch(u){case i:f/=12;break;case o:break;case"quarter":f/=3;break;case a:f=d/6048e5;break;case r:f=d/864e5;break;case s:f=d/36e5;break;case n:f=d/6e4;break;case e:f=d/1e3;break;default:f=d}return l?f:v.absFloor(f)},h.daysInMonth=function(){return this.endOf(o).$D},h.$locale=function(){return p[this.$L]},h.locale=function(t,e){var n=this.clone();return n.$L=b(t,e,!0),n},h.clone=function(){return g(this.toDate(),this)},h.toDate=function(){return new Date(this.$d)},h.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},h.toJSON=function(){return this.toISOString()},h.toISOString=function(){return this.toDate().toISOString()},h.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},h.toString=function(){return this.$d.toUTCString()},u}();return y.extend=function(t,e){return t(e,$,y),y},y.locale=b,y.isDayjs=m,y.en=p[f],y})},"62b7":function(t,e,n){"use strict";var s=n("9324"),r=n.n(s);r.a},"6b54":function(t,e,n){"use strict";n("3846");var s=n("cb7c"),r=n("0bfb"),a=n("9e1e"),o="toString",i=/./[o],c=function(t){n("2aba")(RegExp.prototype,o,t,!0)};n("79e5")(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?c(function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?r.call(t):void 0)}):i.name!=o&&c(function(){return i.call(this)})},9324:function(t,e,n){},"9eeb":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cell"},[n("router-link",{staticClass:"avatar",attrs:{to:{name:"user",params:{loginname:t.datas.author.loginname}}}},[n("Avatar",{attrs:{size:"default",src:t.datas.author.avatar_url}})],1),t.hasCount?n("div",{staticClass:"reply"},[n("span",{staticClass:"reply-count"},[t._v(t._s(t.datas.reply_count))]),t._v("\n        /\n        "),n("span",{staticClass:"visit-count"},[t._v(t._s(t.datas.visit_count))])]):t._e(),t.datas.tab?n("Put",{attrs:{data:t.datas}}):t._e(),n("div",{staticClass:"title",style:!(t.hasCount&&t.datas.tab)&&{maxWidth:"90%"}},[n("router-link",{staticClass:"title-a",attrs:{to:{name:"topic",params:{id:t.datas.id,username:t.datas.author.loginname}}}},[t._v("\n            "+t._s(t.datas.title)+"\n        ")])],1),n("Time",{key:t.datas.id,staticClass:"time",attrs:{time:t.datas.last_reply_at,type:t._f("formatType")(t.datas.last_reply_at)}})],1)},r=[],a=n("dea1"),o=n("4456"),i=n("2b25"),c=n("5a0c"),l=n.n(c),u={name:"Cell",props:["datas"],components:{Put:i["a"],Avatar:o["a"],Time:a["a"]},filters:{formatType:function(t){var e=l()(),n=e.diff(l()(t),"months");return n>0?"date":"relative"}},computed:{hasCount:function(){return"number"===typeof this.datas.reply_count&&"number"===typeof this.datas.visit_count}}},h=u,d=(n("bcd5"),n("2877")),f=Object(d["a"])(h,s,r,!1,null,"79981d4e",null);f.options.__file="index.vue";e["a"]=f.exports},bcd5:function(t,e,n){"use strict";var s=n("0179"),r=n.n(s);r.a},dea1:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{class:t.classes,on:{click:t.handleClick}},[t._v(t._s(t.date))])},r=[];n("6b54");function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function o(t){return o="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return a(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":a(t)},o(t)}var i=n("a322"),c=(n("c5f6"),n("2b0e")),l=n("cd51");const u=(t,e)=>{return t<=e},h=t=>{return t<10?"0"+t:t},d=(t,e)=>{const n=new Date(1e3*t),s=n.getFullYear(),r=h(n.getMonth()+1),a=h(n.getDate()),o=h(n.getHours()),i=h(n.getMinutes()),c=h(n.getSeconds());let l="";return l="year"===e?s+"-"+r+"-"+a+" "+o+":"+i+":"+c:r+"-"+a+" "+o+":"+i,l},f=t=>{const e=(new Date).getTime(),n=u(t,e);let s=e-t;n||(s=-s);let r="";const a=n?"前":"后";return r=s<1e3?"刚刚":s<6e4?parseInt(s/1e3)+"秒"+a:s>=6e4&&s<36e5?Math.floor(s/6e4)+"分钟"+a:s>=36e5&&s<864e5?Math.floor(s/36e5)+"小时"+a:s>=864e5&&s<262386e4?Math.floor(s/864e5)+"天"+a:s>=262386e4&&s<=3156786e4&&n?d(t):d(t,"year"),r};var p=function(t){return f(t)},m=c["a"].prototype.$isServer,b="ivu-time",y={name:"Time",props:{time:{type:[Number,Date,String],required:!0},type:{type:String,validator:function(t){return Object(l["f"])(t,["relative","date","datetime"])},default:"relative"},hash:{type:String,default:""},interval:{type:Number,default:60}},data:function(){return{date:""}},computed:{classes:function(){return["".concat(b),Object(i["a"])({},"".concat(b,"-with-hash"),this.hash)]}},methods:{handleClick:function(){""!==this.hash&&(window.location.hash=this.hash)},setTime:function(){var t,e=o(this.time);if("number"===e){var n=this.time.toString().length>10?this.time:1e3*this.time;t=new Date(n).getTime()}else"object"===e?t=this.time.getTime():"string"===e&&(t=new Date(this.time).getTime());if("relative"===this.type)this.date=p(t);else{var s=new Date(this.time),r=s.getFullYear(),a=s.getMonth()+1<10?"0"+(s.getMonth()+1):s.getMonth()+1,i=s.getDate()<10?"0"+s.getDate():s.getDate(),c=s.getHours()<10?"0"+s.getHours():s.getHours(),l=s.getMinutes()<10?"0"+s.getMinutes():s.getMinutes(),u=s.getSeconds()<10?"0"+s.getSeconds():s.getSeconds();"datetime"===this.type?this.date="".concat(r,"-").concat(a,"-").concat(i," ").concat(c,":").concat(l,":").concat(u):"date"===this.type&&(this.date="".concat(r,"-").concat(a,"-").concat(i))}}},mounted:function(){var t=this;this.setTime(),m||(this.timer=setInterval(function(){t.setTime()},1e3*this.interval))},beforeDestroy:function(){this.timer&&clearInterval(this.timer)}},g=y,v=n("2877"),$=Object(v["a"])(g,s,r,!1,null,null,null);$.options.__file="time.vue";var S=$.exports;e["a"]=S}}]);
//# sourceMappingURL=chunk-6a8b.5a6ccb80.js.map