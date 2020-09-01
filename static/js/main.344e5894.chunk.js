(this["webpackJsonplow-battery-indicator"]=this["webpackJsonplow-battery-indicator"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(18),r=n.n(a),o=n(25),i=n(0),c=n.n(i),l=n(10),s=n.n(l),u=n(4),m=n.n(u),p=(n(41),n(83),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function d(e){if("serviceWorker"in navigator){if(new URL("/Battery-Low-Notifier",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Battery-Low-Notifier","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(){var n=Object(o.a)(r.a.mark((function n(a){var o,i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=a.headers.get("content-type"),404!==a.status&&(null==o||-1!==o.indexOf("javascript"))){n.next=10;break}return n.next=4,navigator.serviceWorker.ready;case 4:return i=n.sent,n.next=7,i.unregister();case 7:window.location.reload(),n.next=11;break;case 10:f(e,t);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(87);var h=n(5),g=n(45),w=n(9),E=n(134),b=n(143),v=n(141),y=n(47),k=n(70),x=n(17),N=n(136),I=n(64),A=n.n(I),O=n(65),B=n.n(O),j=n(53),L=n.n(j),P=n(66),S=n.n(P),F=n(67),R=n.n(F),D=n(135),C=n(137),W=n(138),T=n(139),G=n(140),U=n(39),z=n(145),M=n(144),q=n(3),J=n.n(q),_=n(146),V=n(132),Y=n(133),K=n(147),Z=function(e){var t=e.className,n=e.link,a=e.children;return c.a.createElement(K.a,{button:!0,className:t,component:Object(i.forwardRef)((function(e,t){return c.a.createElement(g.b,Object.assign({exact:!0},e,{innerRef:t}))})),to:n},a)},$=(J.a.string.isRequired,J.a.string.isRequired,J.a.elementType,Object(E.a)((function(){return Object(_.a)({menuItem:{"&.active":{background:"rgba(0, 0, 0, 0.08)","& .MuiListItemIcon-root":{color:"#fff"}}},menuItemIcon:{color:"#97c05c"}})}))),H=function(e){var t=e.name,n=e.link,a=e.Icon,r=$(),o=c.a.createElement(Z,{className:r.menuItem,link:n},!!a&&c.a.createElement(V.a,{className:r.menuItemIcon},c.a.createElement(a,null)),c.a.createElement(Y.a,{primary:t,inset:!a}));return c.a.createElement(c.a.Fragment,null,o)},Q=[{name:"Dashboard",link:"/",Icon:A.a},{name:"Sign Out",link:"/signOut",Icon:B.a},{name:"Divider",link:"",Icon:L.a},{name:"Article",link:"/article",Icon:L.a},{name:"Code",link:"/code",Icon:S.a}];function X(e){var t=e.classes;return c.a.createElement(c.a.Fragment,null," ",c.a.createElement("div",{className:t.toolbar}),c.a.createElement(D.a,null),c.a.createElement(N.a,{component:"nav",disablePadding:!0},Q.map((function(e,t){return"Divider"!==e.name?c.a.createElement(H,Object.assign({},e,{key:"".concat(t,"333a")})):c.a.createElement(D.a,{key:"".concat(t,"333a")})}))))}var ee=Object(E.a)((function(e){return{root:{display:"flex"},drawer:Object(y.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(y.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(y.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240,position:"relative",whiteSpace:"nowrap",paddingTop:e.spacing(4),paddingBottom:e.spacing(4),background:"#535454",color:"#fff",height:"100vh"},content:{flexGrow:1,padding:e.spacing(3)}}})),te=function(){var e=Object(x.a)(),t=ee(),n=c.a.useState(!1),a=Object(k.a)(n,2),r=a[0],o=a[1],i=function(){o(!r)},l=null!=window?function(){return window.document.body}:null;return c.a.createElement(c.a.Fragment,null,c.a.createElement(C.a,null),c.a.createElement(W.a,{position:"fixed",className:t.appBar},c.a.createElement(T.a,null,c.a.createElement(G.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:i,className:t.menuButton},c.a.createElement(R.a,null)),c.a.createElement(U.a,{variant:"h6",noWrap:!0},"Low Battery Notifier"))),c.a.createElement("nav",{className:t.drawer,"aria-label":"mailbox folders"},c.a.createElement(z.a,{smUp:!0,implementation:"css"},c.a.createElement(M.a,{container:l,variant:"temporary",anchor:"rtl"===e.direction?"right":"left",open:r,onClose:i,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},c.a.createElement(X,{classes:t}))),c.a.createElement(z.a,{xsDown:!0,implementation:"css"},c.a.createElement(M.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0},c.a.createElement(X,{classes:t})))))},ne=function(e){var t=e.children;return c.a.createElement("div",{style:{bottom:0,width:"100%",textAlign:"center",position:"absolute"}},c.a.createElement(U.a,{variant:"body1"},t))},ae=n(68),re=n.n(ae),oe={signInFlow:"redirect",signInSuccessUrl:"".concat("/Battery-Low-Notifier","/"),signInOptions:[{provider:m.a.auth.GoogleAuthProvider.PROVIDER_ID,customParameters:{prompt:"select_account"}}]};function ie(){return c.a.createElement("div",{className:"center",style:{textAlign:"center",paddingTop:"60px"}},c.a.createElement("img",{src:"".concat("/Battery-Low-Notifier","/logo192.png"),alt:"Logo"}),c.a.createElement("br",null),c.a.createElement("h2",null,c.a.createElement("b",null,"Download. Install. Get Low Battery Notifications")),c.a.createElement("div",{className:"center",style:{textAlign:"center",padding:"30px",color:"#808080",fontSize:"20px"}},c.a.createElement("p",null,"Sends Notification whenever your Battery is Low",c.a.createElement("br",null)," Remember to Install Our Android App")),c.a.createElement("div",{style:{display:"inline-block",height:"50%",width:"100%"}},c.a.createElement(re.a,{uiConfig:oe,firebaseAuth:m.a.auth()})))}var ce=n(142);function le(){return c.a.createElement("div",{className:"center",style:{textAlign:"center",paddingTop:"60px"}},c.a.createElement("img",{src:"".concat("/Battery-Low-Notifier","/logo192.png"),alt:"Logo"}),c.a.createElement("br",null),c.a.createElement("h2",null,c.a.createElement("b",null,"Download. Install. Get Low Battery Notifications")),c.a.createElement("div",{className:"center",style:{textAlign:"center",padding:"30px",color:"#808080",fontSize:"20px"}},c.a.createElement("p",null,"Sends Notification whenever your Battery is Low",c.a.createElement("br",null)," Remember to Install Our Android App",c.a.createElement("br",null),c.a.createElement(v.a,{href:"https://support.google.com/chrome/answer/3220216?co=GENIE.Platform%3DDesktop&hl=en"},"Enable Notifications on Chrome"),c.a.createElement(v.a,{href:"https://support.mozilla.org/en-US/kb/push-notifications-firefox"},"Enable Notifications on Firefox"))),c.a.createElement(ce.a,{onClick:Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Notification.requestPermission();case 2:window.location.href="".concat("/Battery-Low-Notifier","/");case 3:case"end":return e.stop()}}),e)})))},c.a.createElement("p",null,"Click to Request Notification Access")))}function se(){return m.a.auth().currentUser}var ue=function(e){return"granted"!==Notification.permission?c.a.createElement(c.a.Fragment,null,e.children):c.a.createElement(c.a.Fragment,null)},me=function(e){return"granted"===Notification.permission?c.a.createElement(c.a.Fragment,null,e.children):c.a.createElement(c.a.Fragment,null)},pe=function(e){return null==se()?c.a.createElement(c.a.Fragment,null,e.children):c.a.createElement(c.a.Fragment,null)},de=function(e){return null!=se()?c.a.createElement(c.a.Fragment,null,e.children):c.a.createElement(c.a.Fragment,null)},fe=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(ue,null,c.a.createElement(le,null)),c.a.createElement(me,null,c.a.createElement(pe,null,c.a.createElement(ie,null)),c.a.createElement(de,null,e.children)))};function he(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(U.a,{variant:"h5",style:{position:"absolute",top:"50%",textAlign:"center",transform:"translateY(-50%)"}},"Please Install the Android App.",c.a.createElement("br",null),"When the Android App is Installed, and this window is open, you will receive notifications"))}var ge=Object(E.a)((function(e){return{root:{display:"flex"},content:{flexGrow:1,height:"90vh",overflow:"auto",paddingTop:e.spacing(4)},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}})),we=function(){var e=ge();return c.a.createElement(g.a,null,c.a.createElement(fe,null,c.a.createElement("div",{className:Object(h.a)("App",e.root)},c.a.createElement(te,null),c.a.createElement("main",{className:e.content},c.a.createElement(b.a,{maxWidth:"lg",className:e.container},c.a.createElement(w.c,null,c.a.createElement(w.a,{path:"/",exact:!0,component:he}),c.a.createElement(w.a,{path:"/signOut",component:function(){return m.a.auth().signOut().then((function(){return window.location.href="".concat("/Battery-Low-Notifier","/"),null})).catch((function(e){return console.error(e)})),null}}),c.a.createElement(w.a,{path:"/article",component:function(){return window.location.href="https://medium.com/@pratikpc/six-degrees-of-formula-one-and-other-inter-connections-160a3a668afa?source=friends_link&sk=474f667c0b1ea7e18e8531c23b48eb8b",null}}),c.a.createElement(w.a,{path:"/code",component:function(){return window.location.href="https://github.com/pratikpc/six-degree-f1",null}})))))),c.a.createElement(ne,null,"Low Battery Notifier",c.a.createElement("br",null)," Designed By"," ",c.a.createElement(v.a,{href:"https://www.linkedin.com/in/pratik-chowdhury-889bb2183/"}," ","Pratik Chowdhury")))},Ee={apiKey:"AIzaSyC7UY52Ta47PlEEd4nGit8kpEsDJmllAD0",authDomain:"battery-power-9a1d9.firebaseapp.com",databaseURL:"https://battery-power-9a1d9.firebaseio.com",projectId:"battery-power-9a1d9",storageBucket:"battery-power-9a1d9.appspot.com",messagingSenderId:"43180403362",appId:"1:43180403362:web:a319c9a9a2766864fd05fb",measurementId:"G-NZM6ER5V5E"},be=new function(){return new Worker(n.p+"static/js/notify.worker.0637b768.worker.js")};function ve(){return(ve=Object(o.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=function(e){return new Promise((function(t,n){var a=e.onAuthStateChanged((function(e){a(),t(e)}),n)}))},m.a.initializeApp(Ee),null!=window.Notification){e.next=4;break}throw new Error("Notification Permit Not Granted");case 4:return d(),e.next=7,t(m.a.auth());case 7:null!=(n=se())&&(a=n.uid,setTimeout((function(){be.postMessage({type:"start",uid:a})}),500));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return ve.apply(this,arguments)})().then((function(){return s.a.render(c.a.createElement(we,null),document.getElementById("root")),null})).catch((function(e){return console.error(e)}))},76:function(e,t,n){e.exports=n(100)},87:function(e,t,n){}},[[76,1,2]]]);
//# sourceMappingURL=main.344e5894.chunk.js.map