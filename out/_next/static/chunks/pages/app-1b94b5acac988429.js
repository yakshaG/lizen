(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{9798:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app",function(){return t(6528)}])},6528:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var i=t(4051),o=t.n(i),r=t(5893),s=t(9008),a=t(1163),l=t(1673),c=t.n(l),d=t(7002),h=t(7551),p=t(7343),u=t(5258),g=t(5146),x=t(7797),m=t(2966),f=t(2838),y=t(7294),j=t(2295),v=t(9723),b=(t(2305),t(309));function w(e,n,t,i,o,r,s){try{var a=e[r](s),l=a.value}catch(c){return void t(c)}a.done?n(l):Promise.resolve(l).then(i,o)}function k(e){return function(){var n=this,t=arguments;return new Promise((function(i,o){var r=e.apply(n,t);function s(e){w(r,i,o,s,a,"next",e)}function a(e){w(r,i,o,s,a,"throw",e)}s(void 0)}))}}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){S(e,n,t[n])}))}return e}var E={option:function(e,n){return O({},e,{color:"white"})},singleValue:function(e,n){return O({},e,{color:"white",padding:"8px"})}},C=[],T="",N=0;function I(e,n,t){var i=window.speechSynthesis.getVoices(),o=[],r=[],s=[],a=!0,l=!1,c=void 0;try{for(var d,h=i[Symbol.iterator]();!(a=(d=h.next()).done);a=!0){var p=d.value;"Google"==p.name.substring(0,6)&&"en"==p.lang.substring(0,2)?o.push({label:"".concat(p.name," (").concat(p.lang,")"),value:"".concat(p.name," (").concat(p.lang,")")}):"en"==p.lang.substring(0,2)&&"Google"!=p.name.substring(0,6)?r.push({label:"".concat(p.name," (").concat(p.lang,")"),value:"".concat(p.name," (").concat(p.lang,")")}):s.push({label:"".concat(p.name," (").concat(p.lang,")"),value:"".concat(p.name," (").concat(p.lang,")")})}}catch(u){l=!0,c=u}finally{try{a||null==h.return||h.return()}finally{if(l)throw c}}e(o),n(r),t(s)}function P(e){var n=(0,b.split)(e);C=[];var t=!0,i=!1,o=void 0;try{for(var r,s=n[Symbol.iterator]();!(t=(r=s.next()).done);t=!0){var a=r.value;"Sentence"==a.type&&C.push(a.raw)}}catch(l){i=!0,o=l}finally{try{t||null==s.return||s.return()}finally{if(i)throw o}}}function z(){return(z=k(o().mark((function e(n,t,i,r,s){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(t),console.log(C),console.log("Last sentence is "+N),a=N;case 4:if(!(a<C.length)){e.next=27;break}return r(a),console.log("Sent sentence "+a+" for speaking"),e.next=9,B(n,C[a]);case 9:if("paused"!=T&&""!=T){e.next=14;break}return console.log("Paused/stopped at sentence "+a),"paused"==T&&(N=a),console.log("Breaking loop and returning"),e.abrupt("return");case 14:if("previous"!=T){e.next=19;break}return N=a-1,T="playing",console.log("Breaking loop and returning"),e.abrupt("return");case 19:if("next"!=T){e.next=24;break}return N=a+1,T="playing",console.log("Breaking loop and returning"),e.abrupt("return");case 24:a++,e.next=4;break;case 27:N=0,r(null),s(""),T="";case 31:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e,n){var t,i=window.speechSynthesis,o=i.getVoices(),r=!0,s=!1,a=void 0;try{for(var l,c=o[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var d=l.value;"".concat(d.name," (").concat(d.lang,")")==e&&(t=d)}}catch(p){s=!0,a=p}finally{try{r||null==c.return||c.return()}finally{if(s)throw a}}if("paused"==T)return new Promise((function(e){}));var h=new SpeechSynthesisUtterance(n);return h.voice=t,i.speak(h),new Promise((function(e){h.onend=e}))}function Y(){window.speechSynthesis.cancel()}function _(){(0,a.useRouter)();var e=(0,y.useState)([]),n=e[0],t=e[1],i=(0,y.useState)([{value:"English",label:"English"}]),o=i[0],l=i[1],b=(0,y.useState)([{value:"KN",label:"KN"}]),w=b[0],k=b[1],S=[{label:"BEST ENGLISH VOICES",options:n},{label:"LOCAL ENGLISH VOICES",options:o},{label:"NON ENGLISH VOICES",options:w}],P=(0,y.useState)(null),B=P[0],_=P[1],G=(0,y.useState)("This is a sample text"),L=G[0],R=G[1],X=(0,y.useState)(""),A=X[0],H=X[1],V=(0,y.useState)(null),D=V[0],F=V[1];return(0,y.useEffect)((function(){I(t,l,k),localStorage.getItem("voice")?_(localStorage.getItem("voice")):_("Select"),R("This is a sample text! You can use this tool to proof-read your articles, explore pronunciation! On desktop devices, Google voices provided by Chrome browser are the best. On Android/iOS, good voices are installed by default, but may need tweaking in device settings."),setTimeout((function(){I(t,l,k)}),100)}),[]),(0,y.useEffect)((function(){"playing"==A&&(T="playing",function(e,n,t,i,o){z.apply(this,arguments)}(B,L,D,F,H)),"paused"==A&&(T="paused",Y()),"next"==A&&(Y(),T="next",H("playing")),"previous"==A&&(Y(),T="previous",H("playing")),""==A&&(T="",N=0,Y(),F(null))}),[A]),(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Listen"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/headphones.png"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;700&display=swap",rel:"stylesheet"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"})]}),(0,r.jsx)(d.X,{as:"h4",marginTop:"micro",marginBottom:"micro",children:"What will you listen to, today?"}),(0,r.jsxs)(h.X,{marginBottom:"large",gutters:"none",className:c().surface,children:[(0,r.jsxs)(p.Y,{padding:"micro",desktopSpan:"15",children:[(0,r.jsx)(u.U,{label:"Paste link to article",placeholder:"https://yourfavblog.com/article-12",errorText:"Looks invalid. Check?",type:"url"}),(0,r.jsxs)(h.X,{marginBottom:"none",children:[(0,r.jsx)(p.Y,{desktopSpan:"6",mobileSpan:"8",tabLSSpan:"8",tabPTSpan:"8",children:(0,r.jsx)(g.z,{kind:"secondary",size:"small",marginBottom:"micro",children:"FETCH"})}),(0,r.jsx)(p.Y,{desktopSpan:"18",mobileSpan:"16",tabLSSpan:"16",tabPTSpan:"16",children:(0,r.jsx)(x.x,{margin:"none",children:"\u2014 OR \u2014"})})]}),(0,r.jsx)(m.K,{label:"Paste article text",placeholder:"A word, a pragraph or a long article",rows:4,value:L,onChange:function(e){R(e.target.value)},style:{color:"".concat(c().textColor),lineHeight:"2rem"}})]}),(0,r.jsxs)(p.Y,{desktopSpan:"9",padding:"micro",paddingTop:"none",children:[(0,r.jsx)(f.E,{marginTop:"micro",as:"div",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,r.jsx)(x.x,{className:c().primaryFontColor,style:{margin:"0px 0px 2px 0px"},children:"Pick a voice"})}),null!=B&&(0,r.jsx)(j.ZP,{styles:E,options:S,isSearchable:!1,isClearable:!0,onMenuOpen:function(){H("paused")},defaultValue:{label:B,value:B},onChange:function(e){!function(e,n,t){e?(t(e.label),localStorage.setItem("voice",e.label)):(t("Select"),localStorage.setItem("voice","Select"))}(e,0,_)},theme:function(e){return O({},e,{colors:O({},e.colors,{primary:"#03DAC599",primary25:"#03DAC53D",primary50:"#2E2E2E",neutral0:"#2E2E2E",neutral80:"white"})})}}),(0,r.jsxs)(f.E,{as:"div",hidden:!0,children:[(0,r.jsx)(d.X,{as:"h6",weight:"300",marginTop:"small",children:"Tips for picking voices"}),(0,r.jsx)(x.x,{children:"\ud83d\udc49 Pick a voice that matches the language of your text."}),(0,r.jsx)(x.x,{showOnlyOnDesktop:!0,children:"\ud83d\udc49 On desktops, use Google Chrome for best voices."}),(0,r.jsx)(x.x,{showOnlyOnMobile:!0,showOnlyOnTabLS:!0,showOnlyOnTabPT:!0,children:"\ud83d\udc49 On mobile devices, voices are provided by the device text to speech engine."})]}),(0,r.jsxs)(f.E,{hidden:!0,as:"div",shape:"rounded",padding:"micro",style:{marginTop:"3.8rem",backgroundColor:"".concat(c().background2Color)},children:[(0,r.jsxs)(f.E,{as:"div",style:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(d.X,{as:"h6",weight:"300",marginRight:"micro",children:"Reading now"}),(0,r.jsx)(f.E,{as:"img",src:"/speaking.gif",className:c().icon48,style:{width:"36px",alignSelf:"center"}})]}),(0,r.jsx)(f.E,{as:"div",style:{maxHeight:"6.4rem",overflow:"auto"},children:(0,r.jsx)(x.x,{id:"readingText",margin:"none",children:(0,r.jsx)("i",{children:"You are listening to this text. You are listening to this text. You are listening to this text. You are listening to this text. You are listening to this text. You are listening to this text.You are listening to this text. You are listening to this text."})})})]}),"playing"==A&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(f.E,{showOnlyOnDesktop:!0,showOnlyOnTabLS:!0,as:"div",shape:"rounded",style:{marginTop:"3rem"},children:[(0,r.jsxs)(f.E,{as:"div",style:{display:"flex",alignItems:"center",marginTop:"5rem"},children:[(0,r.jsx)(d.X,{as:"h6",weight:"300",marginRight:"micro",children:"Reading now"}),(0,r.jsx)(f.E,{as:"img",src:"/speaking.gif",className:c().icon48,style:{width:"36px",alignSelf:"center"}})]}),(0,r.jsx)(f.E,{as:"div",style:{height:"10rem",overflow:"auto"},children:(0,r.jsx)(x.x,{id:"readingText",margin:"none",children:(0,r.jsx)("i",{children:C[D]})})})]}),(0,r.jsxs)(f.E,{showOnlyOnMobile:!0,showOnlyOnTabPT:!0,as:"div",shape:"rounded",children:[(0,r.jsxs)(f.E,{as:"div",style:{display:"flex",alignItems:"center",marginTop:"2rem"},children:[(0,r.jsx)(d.X,{as:"h6",weight:"300",marginRight:"micro",children:"Reading now"}),(0,r.jsx)(f.E,{as:"img",src:"/speaking.gif",className:c().icon48,style:{width:"36px",alignSelf:"center"}})]}),(0,r.jsx)(f.E,{as:"div",style:{height:"7rem",overflow:"auto"},children:(0,r.jsx)(x.x,{id:"readingText",margin:"none",children:(0,r.jsx)("i",{children:C[D]})})})]})]})]}),(0,r.jsx)(p.Y,{desktopSpan:"24",marginTop:"nano",style:{position:"fixed",bottom:"5%"}})]}),(0,r.jsx)("div",{style:{position:"fixed"},children:(0,r.jsxs)("div",{className:c().playerStrip,style:{position:"relative"},children:[(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,r.jsx)("div",{children:(0,r.jsx)(g.z,{kind:"tertiary",bgColor:"transparent",size:"tiny",onClick:function(){H("previous")},children:(0,r.jsx)(x.x,{align:"center",children:(0,r.jsx)("span",{className:"material-icons ".concat(c().icon48),children:"skip_previous"})})})}),(0,r.jsx)("div",{children:(""==A||"paused"==A)&&(0,r.jsx)(g.z,{kind:"tertiary",bgColor:"transparent",size:"tiny",onClick:function(){H("playing")},children:(0,r.jsx)(x.x,{align:"center",children:(0,r.jsx)("span",{className:"material-icons ".concat(c().icon96),children:"play_arrow"})})})}),(0,r.jsx)("div",{children:"playing"==A&&(0,r.jsx)(g.z,{kind:"tertiary",bgColor:"transparent",size:"tiny",onClick:function(){H("paused")},children:(0,r.jsx)(x.x,{align:"center",children:(0,r.jsx)("span",{className:"material-icons ".concat(c().icon96),children:"pause"})})})}),(0,r.jsx)("div",{children:(0,r.jsx)(g.z,{kind:"tertiary",bgColor:"transparent",size:"tiny",onClick:function(){H("next")},children:(0,r.jsx)(x.x,{align:"center",children:(0,r.jsx)("span",{className:"material-icons ".concat(c().icon48),children:"skip_next"})})})})]}),(0,r.jsx)("div",{style:{position:"absolute",width:"100%",top:"65%"},children:(0,r.jsx)(g.z,{kind:"tertiary",bgColor:"transparent",size:"medium",isFullWidth:!0,onClick:function(){H("")},children:(0,r.jsx)(x.x,{align:"center",weight:"700",className:c().primaryFontColor,children:"STOP"})})})]})}),(0,r.jsxs)(f.E,{as:"div",marginBottom:"large",children:[(0,r.jsx)(d.X,{as:"h4",marginBottom:"micro",children:"Need help?"}),(0,r.jsxs)(v.mQ,{children:[(0,r.jsxs)(v.td,{style:{color:"".concat(c().primaryColor)},children:[(0,r.jsx)(v.OK,{children:"Install app"}),(0,r.jsx)(v.OK,{children:"Voices"}),(0,r.jsx)(v.OK,{children:"Fetch / paste"})]}),(0,r.jsxs)(v.x4,{children:[(0,r.jsx)(x.x,{weight:"700",size:"large",marginBottom:"none",children:"Mobile devices"}),(0,r.jsxs)(x.x,{marginTop:"none",marginBottom:"none",children:[(0,r.jsx)("strong",{children:"Android:"})," Browser three dots menu > Add to Home screen"]}),(0,r.jsxs)(x.x,{marginTop:"none",children:[(0,r.jsx)("strong",{children:"iOS:"})," Share button > Add to Home screen"]}),(0,r.jsx)(x.x,{weight:"700",size:"large",marginBottom:"none",children:"Desktop"}),(0,r.jsx)(x.x,{marginTop:"none",children:"You can simply bookmark this page for regular use."})]}),(0,r.jsxs)(v.x4,{children:[(0,r.jsx)(x.x,{children:"\ud83d\udc49 Pick a voice that matches the text language."}),(0,r.jsx)(x.x,{children:"\ud83d\udc49 On desktops, use Google Chrome for best voices."}),(0,r.jsx)(x.x,{children:"\ud83d\udc49 On mobile devices, voices provided by the default text to speech engine are used."}),(0,r.jsx)(x.x,{weight:"700",size:"large",marginBottom:"none",children:"I do not see any voices in the list"}),(0,r.jsx)(x.x,{marginTop:"none",children:"Refresh the page a couple of times or try a different browser such as Google Chrome. If none of the browsers help, then your device does not support text to speech."}),(0,r.jsx)(x.x,{weight:"700",size:"large",marginBottom:"none",children:"I do not see any voices in the list"}),(0,r.jsx)(x.x,{marginTop:"none",children:"Refresh the page a couple of times or try a different browser such as Google Chrome. If none of the browsers help, then your device does not support text to speech."})]}),(0,r.jsxs)(v.x4,{children:[(0,r.jsx)(x.x,{weight:"700",size:"large",marginBottom:"none",children:"I do not see any voices in the list"}),(0,r.jsx)(x.x,{marginTop:"none",children:"Please refresh the page a couple of times. If you still do not see any voices in the list, please try a different browser such as Google Chrome. If none of the browsers help, then your device does not support text to speech."})]})]})]})]})}}},function(e){e.O(0,[82,874,774,888,179],(function(){return n=9798,e(e.s=n);var n}));var n=e.O();_N_E=n}]);