(window.webpackJsonpresume=window.webpackJsonpresume||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(16),r=n.n(o),i=(n(49),n(2)),s=n(3),l=n(5),u=n(4),m=n(6),d=n(9),p=(n(50),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.children;return c.a.createElement("div",{className:"fullPage ".concat(this.props.className||""),style:{backgroundColor:this.props.background}},e)}}]),t}(a.Component)),h=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",background:this.props.background}},c.a.createElement("img",{src:"down2.png",style:{maxWidth:"30px",marginTop:"100px",transform:"translateY(-45px)"}}))}}]),t}(a.Component),b=n(41),f=n(10),g=n(42),k=n.n(g),v=(n(69),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(p,{className:"first1",background:this.props.background},c.a.createElement(k.a,null),c.a.createElement("h1",{id:"home",style:{color:this.props.color}},d.title),c.a.createElement("h2",{id:"subtitle",style:{color:this.props.color}},d.subtitle),c.a.createElement("div",null,Object.keys(d.links).map(function(e){return c.a.createElement(b.SocialIcon,{className:"icon",url:d.links[e]})})),c.a.createElement(f.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:136,duration:530,onSetActive:this.handleSetActive},c.a.createElement(h,null)),c.a.createElement(f.Element,{name:"about",className:"element"}))}}]),t}(a.Component)),E=(n(70),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(p,{className:"second",background:this.props.background},c.a.createElement("h1",{id:"second",style:{color:this.props.color}},d.sections[0].title),c.a.createElement("p",null,d.sections[0].items[0].content),c.a.createElement(f.Element,{name:"skills",className:"element"}))}}]),t}(a.Component)),j=(n(71),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.skill;return c.a.createElement("div",{className:"carddd"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("img",{id:"img",src:e.content.image})),c.a.createElement("div",{className:"skill-title-wrapper"},c.a.createElement("h4",null,e.content.title)))}}]),t}(a.Component)),O=(n(72),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(p,{className:"third",background:this.props.background},c.a.createElement("h1",{id:"third",style:{color:this.props.color}},d.sections[1].title),c.a.createElement("div",{className:"card-wrapper"},d.sections[1].items.map(function(e){return c.a.createElement(j,{skill:e})})))}}]),t}(a.Component)),w=(n(73),n(43)),y=n.n(w),N=n(21),C=n.n(N),S=(n(74),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{variant:"light",fixed:"top"},c.a.createElement(C.a,{className:"mr-auto"},c.a.createElement(f.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:115,duration:530,onSetActive:this.handleSetActive},c.a.createElement(C.a.Link,{class:"nav-link"},"About")),c.a.createElement(f.Element,{name:"about",className:"element"}),c.a.createElement(f.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:240,duration:550,onSetActive:this.handleSetActive},c.a.createElement(C.a.Link,{class:"nav-link"},"Skills")),c.a.createElement(f.Element,{name:"skills",className:"element"}))))}}]),t}(a.Component)),A=(n(101),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).changeColor=function(){var e=["black","#b3cde0","orange","yellow"];n.state.counter>=3?n.setState({counter:0,color:e[n.state.counter],background_first:"#00FA9A",background_second:"#3CB371",background_third:"\t#90EE90"}):n.setState({color:e[n.state.counter],background_first:["#14812c","#a30522","#071066"][n.state.counter],background_second:["\t#1dd247","#fa123e","#0e1ea7"][n.state.counter],background_third:["#58e779","#fa6c86","#3f52ee"][n.state.counter],counter:n.state.counter+1})},n.state={color:"white",background:"#004080",counter:0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(S,null),c.a.createElement("div",{className:"change-color"},c.a.createElement("img",{src:"./paint-palette.png",alt:"",onClick:this.changeColor})),c.a.createElement(v,{color:this.state.color,background:this.state.background_first}),c.a.createElement(E,{color:this.state.color,background:this.state.background_second}),c.a.createElement(O,{color:this.state.color,background:this.state.background_third}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t,n){e.exports=n(102)},49:function(e,t,n){},50:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},9:function(e){e.exports=JSON.parse('{"title":"Hello I\'m Niloofar","subtitle":"Computer Engeneering student | Front End Developer","links":{"github":"https://github.com/niloofarmojoodi","linkedin":"https://www.linkedin.com/in/niloofar-mojoodi/","twitter":"https://twitter.com/niloofar_m78","telegram":" https://t.me/niloofar_m78"},"sections":[{"title":"About","items":[{"type":"p","content":"my name is Niloofar Mojoodi.I 20 years old and i love learning:)"}]},{"title":"Skills","items":[{"type":"card","content":{"image":"https://www.flaticon.com/premium-icon/icons/svg/1183/1183621.svg","title":"React"}},{"type":"card","content":{"image":"https://www.flaticon.com/premium-icon/icons/svg/2085/2085130.svg","title":"JavaScript"}},{"type":"card","content":{"image":"https://www.flaticon.com/premium-icon/icons/svg/2085/2085138.svg","title":"Html"}},{"type":"card","content":{"image":"https://www.flaticon.com/premium-icon/icons/svg/2085/2085155.svg","title":"Css"}}]}]}')}},[[44,1,2]]]);
//# sourceMappingURL=main.e148a69c.chunk.js.map