(window.webpackJsonp=window.webpackJsonp||[]).push([[2,9,10,21],{239:function(e,t,n){},256:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(73),o=(n(20),n(256),n(1)),r=n.n(o),i=n(10),s=n.n(i),c=n(7),l=n.n(c),u=n(2),p=n.n(u),d=n(5),f=n.n(d),m=n(8),y=n.n(m),v=n(3),h=n.n(v),C=n(6),g=n.n(C),k=n(0),b=n.n(k),E=n(9),N=n.n(E),O=n(44),j=n(113),x=n(4),M=n.n(x),T=function(e){function t(){var e,n,a,o;f()(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=a=h()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.close=function(e){e&&e.stopPropagation(),a.clearCloseTimer(),a.props.onClose()},a.startCloseTimer=function(){a.props.duration&&(a.closeTimer=setTimeout(function(){a.close()},1e3*a.props.duration))},a.clearCloseTimer=function(){a.closeTimer&&(clearTimeout(a.closeTimer),a.closeTimer=null)},o=n,h()(a,o)}return g()(t,e),y()(t,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(e){(this.props.duration!==e.duration||this.props.update)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls+"-notice",a=(e={},l()(e,""+n,1),l()(e,n+"-closable",t.closable),l()(e,t.className,!!t.className),e);return r.a.createElement("div",{className:M()(a),style:t.style,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:t.onClick},r.a.createElement("div",{className:n+"-content"},t.children),t.closable?r.a.createElement("a",{tabIndex:"0",onClick:this.close,className:n+"-close"},t.closeIcon||r.a.createElement("span",{className:n+"-close-x"})):null)}}]),t}(o.Component);T.propTypes={duration:b.a.number,onClose:b.a.func,children:b.a.any,update:b.a.bool,closeIcon:b.a.node},T.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}};var I=T,w=0,S=Date.now();var K=function(e){function t(){var e,n,a,o;f()(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=a=h()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.state={notices:[]},a.add=function(e){var t=e.key=e.key||"rcNotification_"+S+"_"+w++,n=a.props.maxCount;a.setState(function(a){var o=a.notices,r=o.map(function(e){return e.key}).indexOf(t),i=o.concat();return-1!==r?i.splice(r,1,e):(n&&o.length>=n&&(e.updateKey=i[0].updateKey||i[0].key,i.shift()),i.push(e)),{notices:i}})},a.remove=function(e){a.setState(function(t){return{notices:t.notices.filter(function(t){return t.key!==e})}})},o=n,h()(a,o)}return g()(t,e),y()(t,[{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t}},{key:"render",value:function(){var e,t=this,n=this.props,a=this.state.notices,o=a.map(function(e,o){var i=Boolean(o===a.length-1&&e.updateKey),s=e.updateKey?e.updateKey:e.key,c=Object(j.a)(t.remove.bind(t,e.key),e.onClose);return r.a.createElement(I,p()({prefixCls:n.prefixCls},e,{key:s,update:i,onClose:c,onClick:e.onClick,closeIcon:n.closeIcon}),e.content)}),i=(e={},l()(e,n.prefixCls,1),l()(e,n.className,!!n.className),e);return r.a.createElement("div",{className:M()(i),style:n.style},r.a.createElement(O.a,{transitionName:this.getTransitionName()},o))}}]),t}(o.Component);K.propTypes={prefixCls:b.a.string,transitionName:b.a.string,animation:b.a.oneOfType([b.a.string,b.a.object]),style:b.a.object,maxCount:b.a.number,closeIcon:b.a.node},K.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},K.newInstance=function(e,t){var n=e||{},a=n.getContainer,o=s()(n,["getContainer"]),i=document.createElement("div");a?a().appendChild(i):document.body.appendChild(i);var c=!1;N.a.render(r.a.createElement(K,p()({},o,{ref:function(e){c||(c=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){N.a.unmountComponentAtNode(i),i.parentNode.removeChild(i)}}))}})),i)};var _,D,P,A,J=K,z=n(13),U=3,B=1,L="ant-message",W="move-up";var q={open:function(e){var t=void 0!==e.duration?e.duration:U,n={info:"info-circle",success:"check-circle",error:"close-circle",warning:"exclamation-circle",loading:"loading"}[e.type],a=B++,r=new Promise(function(r){var i=function(){return"function"===typeof e.onClose&&e.onClose(),r(!0)};!function(e){D?e(D):J.newInstance({prefixCls:L,transitionName:W,style:{top:_},getContainer:P,maxCount:A},function(t){D?e(D):(D=t,e(t))})}(function(r){var s=o.createElement(z.a,{type:n,theme:"loading"===n?"outlined":"filled"});r.notice({key:a,duration:t,style:{},content:o.createElement("div",{className:"".concat(L,"-custom-content").concat(e.type?" ".concat(L,"-").concat(e.type):"")},e.icon?e.icon:n?s:"",o.createElement("span",null,e.content)),onClose:i})})}),i=function(){D&&D.removeNotice(a)};return i.then=function(e,t){return r.then(e,t)},i.promise=r,i},config:function(e){void 0!==e.top&&(_=e.top,D=null),void 0!==e.duration&&(U=e.duration),void 0!==e.prefixCls&&(L=e.prefixCls),void 0!==e.getContainer&&(P=e.getContainer),void 0!==e.transitionName&&(W=e.transitionName,D=null),void 0!==e.maxCount&&(A=e.maxCount,D=null)},destroy:function(){D&&(D.destroy(),D=null)}};["success","info","warning","error","loading"].forEach(function(e){q[e]=function(t,n,a){return"function"===typeof n&&(a=n,n=void 0),q.open({content:t,duration:n,type:e,onClose:a})}}),q.warn=q.warning;var F=q,G=n(33),H=n(34),Q=n(36),R=n(35),V=n(37),X=(n(239),n(93)),Y=n(94),Z=function(e){function t(){var e,n;Object(G.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(Q.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).state={inputMessages:[],value:""},n.keys=[],n.onClickSend=function(){var e=n.state,t=e.inputMessages,o=e.value;if(""===o.trim())return F.warn("\u8bf7\u8f93\u5165\u5185\u5bb9\u540e\u518d\u63d0\u4ea4\uff01");var r=n.createId();n.setState({inputMessages:[].concat(Object(a.a)(t),[{key:r,value:o}]),value:""})},n.createKeys=function(){var e=n.state.inputMessages;n.keys=e.map(function(e,t){return t})},n.createId=function(){var e=n.keys.length-1,t=(e<0?1:n.keys[e])+1;return n.keys.push(t),t},n.onChange=function(e){var t=e.target.value;n.setState({value:t})},n.updateInputMessages=function(e){return n.setState({inputMessages:e})},n.updateKeys=function(e){return n.keys=e},n}return Object(V.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){this.createKeys()}},{key:"render",value:function(){var e=this.state,t=e.inputMessages,n=e.value;return r.a.createElement("div",{className:"chat-app"},r.a.createElement(Y.default,{value:n,onChange:this.onChange,onClickSend:this.onClickSend}),r.a.createElement(X.default,{inputMessages:t,keys:this.keys,updateInputMessages:this.updateInputMessages,updateKeys:this.updateKeys}))}}]),t}(o.Component);t.default=Z},93:function(e,t,n){"use strict";n.r(t);n(131);var a=n(38),o=(n(253),n(252)),r=(n(134),n(13)),i=(n(241),n(242)),s=n(73),c=n(33),l=n(34),u=n(36),p=n(35),d=n(37),f=n(1),m=n.n(f),y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).deepClone=function(e){return JSON.parse(JSON.stringify(e))},n.onChangeMessages=function(e,t){var a=e.target.value,o=n.props,r=o.inputMessages,i=o.updateInputMessages,s=n.deepClone(r),c=s.findIndex(function(e){return e.key===t});s[c].value=a,i(s)},n.onDelete=function(e){var t=n.props,a=t.inputMessages,o=t.updateInputMessages,r=t.keys,i=t.updateKeys,c=n.deepClone(a),l=Object(s.a)(r),u=c.findIndex(function(t){return t.key===e});c.splice(u,1),l.splice(u,1),o(c),i(l)},n.onChangeStatus=function(e){var t=n.props,a=t.inputMessages,o=t.updateInputMessages,r=n.deepClone(a),i=r.findIndex(function(t){return t.key===e}),s=r[i];s.edit?s.edit=!1:s.edit=!0,o(r)},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.inputMessages;return m.a.createElement(a.a,null,m.a.createElement(o.a,{bordered:!0,size:"small",dataSource:t,renderItem:function(t){return m.a.createElement(o.a.Item,{key:t.key,className:"chat-app-item"},m.a.createElement("span",{className:"chat-app-item-text"},t.edit?m.a.createElement(i.a,{size:"small",placeholder:"please write something",value:t.value,onChange:function(n){return e.onChangeMessages(n,t.key)}}):t.value),m.a.createElement("span",{className:"chat-app-item-tools"},m.a.createElement("a",{href:"javascript:;",onClick:function(){return e.onChangeStatus(t.key)}},m.a.createElement(r.a,{type:t.edit?"check":"edit"})),m.a.createElement("a",{href:"javascript:;",onClick:function(){return e.onDelete(t.key)}},m.a.createElement(r.a,{type:"delete"}))))}}))}}]),t}(f.Component);t.default=y},94:function(e,t,n){"use strict";n.r(t);n(131);var a=n(38),o=(n(243),n(244)),r=(n(132),n(18)),i=(n(241),n(242)),s=n(33),c=n(34),l=n(36),u=n(35),p=n(37),d=n(1),f=n.n(d),m=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.onChange,s=e.onClickSend;return f.a.createElement(a.a,{type:"flex",gutter:8},f.a.createElement(r.a,{span:8},f.a.createElement(i.a,{placeholder:"please write your thinking",value:t,onChange:n})),f.a.createElement(r.a,null,f.a.createElement(o.a,{type:"primary",onClick:s},"Send")))}}]),t}(d.Component);t.default=m}}]);
//# sourceMappingURL=2.bbeef72e.chunk.js.map