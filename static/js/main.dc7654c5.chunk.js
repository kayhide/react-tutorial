(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){e.exports=n(230)},228:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),i=n.n(c),l=n(235),o=n(13),u=n(79),s=n.n(u),m=n(80),E=n.n(m),p=n(28),f=n.n(p);var v=function(e){return r.a.createElement(s.a,{position:"fixed",color:"default"},r.a.createElement(E.a,null,r.a.createElement(f.a,{variant:"h6",color:"inherit"},"Tic Tac Toe")))},h=n(236),d=n(232),g=n(234),b=n(233),O=n(12),w=n.n(O),j=n(81),y=n.n(j),S=n(82),T=n.n(S),k=n(84),_=n(83),D=n.n(_);var x=Object(k.withStyles)({button:{margin:2,height:64,width:64,display:"flex",justifyContent:"center",alignItems:"center"}})(function(e){var t=e.classes,n=e.highlight?"contained":"outlined",a={"":"default",X:"primary",O:"secondary"}[e.value];return r.a.createElement(D.a,{className:t.button,variant:n,color:a,onClick:e.onClick},r.a.createElement("span",null,e.value))});var C=function(e){return r.a.createElement("div",null,y()(3).map(function(t){return r.a.createElement(w.a,{key:"row-".concat(t),container:!0},T()(3*t,3*t+3).map(function(t){return r.a.createElement(w.a,{key:t,item:!0,xs:!0},r.a.createElement(x,{value:e.squares[t],highlight:e.highlights.has(t),onClick:function(){return e.onClick(t)}}))}))}))},q=n(85),I=n(86),N=n(97),X=n(87),U=n(98),G=n(93),F=n.n(G),P=n(91),L=n.n(P),M=n(92),J=n.n(M),R=n(90),V=n.n(R),A=n(88),B=n.n(A),W=n(89),Y=n.n(W),z={GET:"GET",PUT:"PUT"},H={types:z,get:function(e){return{type:z.GET,step:e}},put:function(e){return{type:z.PUT,pos:e}}};function K(e){var t=e.desc,n=Object.assign({transition:"200ms transform"},t?{transform:"scaleY(-1)"}:{});return r.a.createElement(B.a,{variant:"contained",onClick:e.onDescFlip},r.a.createElement(Y.a,{style:n}))}function Q(e){return r.a.createElement(V.a,{action:r.a.createElement(K,{desc:e.desc,onDescFlip:e.onDescFlip}),title:"Move List"})}var Z=function(e){function t(e){var n;return Object(q.a)(this,t),(n=Object(N.a)(this,Object(X.a)(t).call(this,e))).state={desc:!1},n}return Object(U.a)(t,e),Object(I.a)(t,[{key:"toggleDesc",value:function(){this.setState({desc:!this.state.desc})}},{key:"render",value:function(){var e=this,t=this.props.items.map(function(t,n){return r.a.createElement(L.a,{key:n,selected:t.active,button:!0,dense:!0,onClick:function(){return e.props.get(n)}},t.desc)});return r.a.createElement(J.a,null,r.a.createElement(Q,{desc:this.state.desc,onDescFlip:function(){return e.toggleDesc()}}),r.a.createElement(F.a,null,this.state.desc?t.reverse():t))}}]),t}(r.a.Component),$=Object(o.b)(null,{get:H.get})(Z);var ee=Object(o.b)(function(e){return e.game},{put:H.put})(function(e){var t=e.moves,n=e.currentStep,a=t[n],c=a.winning,i=c.winner,l=c.hits,o=new Set((l||[]).flat()),u=n%2===0?"X":"O",s=i?"Winner: ".concat(i):9===n?"Draw":"Next player: ".concat(u),m=t.map(function(e,t){var a=e.pos;return{desc:0===t?"Game Start":"Move #".concat(t," (").concat(a%3,", ").concat(Math.floor(a/3),")"),active:t===n}});return r.a.createElement("div",null,r.a.createElement(w.a,{container:!0,direction:"row",alignItems:"stretch",spacing:24},r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"headline"},s)),r.a.createElement(w.a,{item:!0,xs:12,sm:!0,className:"game-board"},r.a.createElement(w.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(w.a,{item:!0},r.a.createElement(C,{squares:a.squares,highlights:o,onClick:e.put})))),r.a.createElement(w.a,{item:!0,xs:!0,sm:!0},r.a.createElement($,{items:m}))))});var te=function(e){return r.a.createElement(w.a,{container:!0,direction:"row",alignItems:"stretch"},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(ee,null)))},ne="/react-tutorial";function ae(e){return Object(o.b)(function(e){return e})(Object(d.a)(function(t){var n=0===t.game.currentStep?"".concat(ne,"/"):"".concat(ne,"/moves/").concat(t.game.currentStep);return t.location.pathname!==n?r.a.createElement(h.a,{to:n}):r.a.createElement(e,t)}))}var re=function(e){return r.a.createElement(g.a,null,r.a.createElement(b.a,{path:"".concat(ne,"/"),exact:!0,component:ae(te)}),r.a.createElement(b.a,{path:"".concat(ne,"/moves/:move"),component:ae(te)}))};var ce,ie=function(e){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("main",null,r.a.createElement(re,null)))},le=n(22),oe=Object(le.a)(),ue=n(21),se=n(96),me=n(29),Ee=n(50),pe=n(95);var fe=(ce={},Object(me.a)(ce,H.types.GET,function(e,t){var n=e.moves,a=t.step;return 0<=a&&a<n.length?Object(pe.a)({},e,{currentStep:a}):e}),Object(me.a)(ce,H.types.PUT,function(e,t){var n=e.moves,a=e.currentStep,r=t.pos,c=n[a];if(!c.winning.winner&&!c.squares[r]){var i=Object(Ee.a)(c.squares);i[r]=function(e){return e%2===0?"X":"O"}(a);var l=function(e){var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].filter(function(t){var n=t.map(function(t){return e[t]}),a=Object(se.a)(n,3),r=a[0],c=a[1],i=a[2];return null!==r&&r===c&&c===i&&i===r});return{winner:t.length>0?e[t[0][0]]:null,hits:t}}(i);return{moves:[].concat(Object(Ee.a)(n.slice(0,a+1)),[{squares:i,pos:r,winning:l}]),currentStep:a+1}}return e}),ce),ve=Object(ue.b)({game:function(e,t){return e?(fe[t.type]||function(e,t){return e})(e,t):null}}),he={game:{moves:[{squares:Array(9).fill(null),winning:{winner:null}}],currentStep:0}},de=Object(ue.c)(ve,he,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n(226),n(228);i.a.render(r.a.createElement(o.a,{store:de},r.a.createElement(l.a,{history:oe},r.a.createElement(ie,null))),document.getElementById("root"))}},[[100,2,1]]]);
//# sourceMappingURL=main.dc7654c5.chunk.js.map