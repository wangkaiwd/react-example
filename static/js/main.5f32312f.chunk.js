(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{135:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=n(146).mock({"comments|4":[{"id|+1":1,username:"@name",avatar:"@image(60x60)",comment:"@sentence"}]})},140:function(e,t,n){e.exports=n(230)},145:function(e,t,n){},152:function(e,t,n){var o={"./reactDemo/01comment/CommentBox":[97,9,0,8],"./reactDemo/01comment/CommentBox.jsx":[97,9,0,8],"./reactDemo/01comment/CommentForm":[70,9,0,4],"./reactDemo/01comment/CommentForm.jsx":[70,9,0,4],"./reactDemo/01comment/CommentForm.scss":[237,7,17],"./reactDemo/01comment/CommentList":[69,9,3],"./reactDemo/01comment/CommentList.jsx":[69,9,3],"./reactDemo/01comment/CommentList.scss":[236,7,18],"./reactDemo/01comment/CommentListItem":[68,9,5],"./reactDemo/01comment/CommentListItem.jsx":[68,9,5],"./reactDemo/01comment/CommentListItem.scss":[235,7,19],"./reactDemo/02tabSelector/TabSelector":[71,9,6],"./reactDemo/02tabSelector/TabSelector.jsx":[71,9,6],"./reactDemo/02tabSelector/TabSelector.scss":[238,7,20],"./reactDemo/03chatApp/ChatApp":[72,9,0,1,2],"./reactDemo/03chatApp/ChatApp.jsx":[72,9,0,1,2],"./reactDemo/03chatApp/ChatApp.scss":[239,7,21],"./reactDemo/03chatApp/InputBox":[94,9,0,9],"./reactDemo/03chatApp/InputBox.jsx":[94,9,0,9],"./reactDemo/03chatApp/MessageList":[93,9,0,1,10],"./reactDemo/03chatApp/MessageList.jsx":[93,9,0,1,10],"./reactDemo/04clock/Clock":[98,9,7,11],"./reactDemo/04clock/Clock.jsx":[98,9,7,11],"./routerDemo/BasicRouting":[99,9,12],"./routerDemo/BasicRouting.jsx":[99,9,12],"./routerDemo/NestedRouting":[100,9,13],"./routerDemo/NestedRouting.jsx":[100,9,13],"./routerDemo/readme.md":[240,7,22]};function a(e){if(!n.o(o,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=o[e],a=t[0];return Promise.all(t.slice(2).map(n.e)).then(function(){return n.t(a,t[1])})}a.keys=function(){return Object.keys(o)},a.id=152,e.exports=a},211:function(e,t,n){},212:function(e,t,n){},216:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),c=n(9),r=n.n(c);n(145),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(135),n(136);var m,l=n(124),i=n(59),s=n(27),u=(n(48),n(19)),p=n(33),h=n(34),f=n(36),d=n(35),y=n(37),g=(n(134),n(13)),D=(n(232),n(67)),b=n(73),k=function(e){return a.a.lazy(function(){return n(152)("./".concat(e))})},v=[{key:"/reactRouter",icon:"",title:"reactRouter",children:[{key:"/reactRouter/basicRouting",icon:"",title:"BasicRouting",component:k("routerDemo/BasicRouting")},{key:"/reactRouter/nestedRouting",icon:"",title:"NestedRouting",component:k("routerDemo/NestedRouting")}]},{key:"/reactDemo",icon:"",title:"reactDemo",children:[{key:"/reactDemo/commentBox",icon:"",title:"commentBox",component:k("reactDemo/01comment/CommentBox")},{key:"/reactDemo/tabSelector",icon:"",title:"tabSelector",component:k("reactDemo/02tabSelector/TabSelector")},{key:"/reactDemo/chatApp",icon:"",title:"chatApp",component:k("reactDemo/03chatApp/ChatApp")},{key:"/reactDemo/clock",icon:"",title:"clock",component:k("reactDemo/04clock/Clock")}]}],E=v,S=function e(t){var n=[];return t.forEach(function(t){if(t.component&&n.push(t),t.children){var o=e(t.children);o.length>0&&(n=[].concat(Object(b.a)(n),Object(b.a)(o)))}}),n}(v),j={get:function(e){return JSON.parse(localStorage.getItem(e))},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))},remove:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()},each:function(e){for(var t=localStorage.length,n=0;n<t;n++){var o=localStorage.key(n);e(o,this.get.call(j,o),n)}}},C=j,O=E.map(function(e){if(e.children)return e.key}).filter(Boolean),x=D.b.SubMenu,w=Object(s.f)(m=function(e){function t(){var e,n;Object(p.a)(this,t);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={menuTree:[],selectedKeys:[],firstLevelSubMenu:O,openKeys:C.get("openKeys")},n.getSelectedKeys=function(){var e=n.props.location.pathname,t=S.filter(function(t){return e.includes(t.key)}),o=[];t.length>0&&o.push(t[0].key),n.setState({selectedKeys:o})},n.onOpenChange=function(e){var t=n.state.firstLevelSubMenu,o=e[e.length-1],a=[];a=t.includes(o)?[o]:e,n.setState({openKeys:a}),C.set("openKeys",a)},n.onSelect=function(e){var t=e.selectedKeys;n.setState({selectedKeys:t})},n.createMenus=function(e){return e.map(function(e){return e.children?n.getSubMenuItem(e):n.getMenuItem(e)})},n.getMenuItem=function(e){return a.a.createElement(D.b.Item,{key:e.key},e.icon&&a.a.createElement(g.a,{type:e.icon}),a.a.createElement(i.b,{to:e.key},e.title))},n.getSubMenuItem=function(e){return a.a.createElement(x,{key:e.key,title:a.a.createElement("span",null,e.icon&&a.a.createElement(g.a,{type:e.icon}),a.a.createElement("span",null,e.title))},n.createMenus(e.children))},n}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.createMenus(E);this.setState({menuTree:e}),this.getSelectedKeys()}},{key:"render",value:function(){var e=this.state,t=e.menuTree,n=e.selectedKeys,o=e.openKeys;return a.a.createElement(D.b,{selectedKeys:n,openKeys:o,onOpenChange:this.onOpenChange,onSelect:this.onSelect,mode:"inline",theme:"dark"},t)}}]),t}(o.Component))||m,A=(n(211),u.a.Sider),I=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.width;return a.a.createElement(A,{width:e,className:"demo-sider"},a.a.createElement("div",{className:"logo"},"React-Example"),a.a.createElement(w,null))}}]),t}(o.Component);I.defaultProps={width:260};var R=I,B=(n(212),u.a.Header),K=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return a.a.createElement(B,{className:"demo-header"},"Header")}}]),t}(o.Component),M=u.a.Footer;var N=function(e){return a.a.createElement(M,null,"footer")},L=(n(231),n(130)),T=(n(216),u.a.Content);var F=function(e){return a.a.createElement(T,{className:"demo-content"},a.a.createElement(L.a,{className:"demo-content-card"},e.children))};var J=function(e){return a.a.createElement(u.a,{className:"app"},a.a.createElement(R,null),a.a.createElement(u.a,null,a.a.createElement(K,null),a.a.createElement(F,null,e.children),a.a.createElement(N,null)))},P=function(){return a.a.createElement(i.a,null,a.a.createElement(J,null,a.a.createElement(o.Suspense,{fallback:a.a.createElement(l.a,{size:"large"})},S.map(function(e){return a.a.createElement(s.a,{key:e.key,path:e.key,component:e.component})}),a.a.createElement(s.a,{path:"/",exact:!0,component:function(){return a.a.createElement("h1",null," I am default content")}}))))};r.a.render(a.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[140,15,16]]]);
//# sourceMappingURL=main.5f32312f.chunk.js.map