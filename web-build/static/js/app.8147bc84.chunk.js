(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{113:function(e,t,n){e.exports=n.p+"static/media/background1.45ba87b3.jpg"},161:function(e,t,n){"use strict";var r=n(0),o=n(219),i=n(220),c=n(163),a=n(25),s=n(2),l=n(1),u=n(74),d=n(30),f=n(11),h=function(){return Object(f.jsx)(s.a,{style:b.container,children:Object(f.jsxs)(u.a,{source:n(174),style:{width:"100%",height:"100%"},children:[Object(f.jsx)(a.a,{style:b.welcome,children:"Welcome back,"}),Object(f.jsx)(a.a,{style:b.welcome,children:"Ting!"})]})})},j=d.a.get("window").width,b=l.a.create({container:{flex:1,backgroundColor:"#eee",alignItems:"center",justifyContent:"center"},welcome:{color:"white",fontSize:50,fontWeight:"600",paddingTop:50,paddingLeft:.05*j}}),x=n(19),g=n.n(x),y=n(20),m=n.n(y),p=n(23),O=n.n(p),C=n(24),w=n.n(C),v=n(12),S=n.n(v),T=n(138),R=n(221);function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S()(e);if(t){var o=S()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w()(this,n)}}var B=function(e){O()(r,e);var t=k(r);function r(e){var n;return g()(this,r),(n=t.call(this,e)).state={isLoading:!0,dataSource:null},n}return m()(r,[{key:"componentDidMount",value:function(){var e=this;return fetch("https://reactnative.dev/movies.json").then((function(e){return e.json()})).then((function(t){e.setState({isLoading:!1,dataSource:t.movies})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){if(this.state.isLoading)return Object(f.jsx)(s.a,{style:I.container,children:Object(f.jsx)(u.a,{source:n(113),style:{width:"100%",height:"100%",justifyContent:"center"},imageStyle:{opacity:.5},children:Object(f.jsx)(T.a,{size:"large",color:"white"})})});var e=this.state.dataSource.map((function(e,t){return Object(f.jsxs)(R.a.Row,{style:I.item,children:[Object(f.jsx)(R.a.Cell,{style:{justifyContent:"flex-start",flex:.5},numeric:!0,children:e.id}),Object(f.jsx)(R.a.Cell,{style:{justifyContent:"flex-start",flex:1.5},children:e.title}),Object(f.jsx)(R.a.Cell,{style:{justifyContent:"flex-end"},numeric:!0,children:e.releaseYear})]},t)})),t=d.a.get("window").width,r=d.a.get("window").height;return Object(f.jsx)(s.a,{style:I.container,children:Object(f.jsx)(u.a,{source:n(113),style:{width:"100%",height:"100%",alignItems:"center"},imageStyle:{opacity:.5},children:Object(f.jsxs)(R.a,{style:{top:15,width:.85*t,height:.75*r,maxHeight:.75*r,backgroundColor:"white",borderRadius:15},children:[Object(f.jsxs)(R.a.Header,{style:{backgroundColor:"tomato",borderTopLeftRadius:10,borderTopRightRadius:10},children:[Object(f.jsx)(R.a.Title,{style:{justifyContent:"flex-start",flex:.5},numeric:!0,children:Object(f.jsx)(a.a,{style:I.titles,children:"ID"})}),Object(f.jsx)(R.a.Title,{style:{justifyContent:"flex-start",flex:1.5},children:Object(f.jsx)(a.a,{style:I.titles,children:"MOVIE NAMES"})}),Object(f.jsx)(R.a.Title,{style:{justifyContent:"flex-end"},numeric:!0,children:Object(f.jsx)(a.a,{style:I.titles,children:"RELEASE YEAR"})})]}),e,Object(f.jsx)(R.a.Pagination,{page:1,numberOfPages:1,onPageChange:function(e){return e},label:"1-5 of 5",showFastPagination:!0})]})})})}}]),r}(r.Component),I=l.a.create({container:{flex:1,backgroundColor:"#ffa494",alignItems:"center",justifyContent:"center"},item:{margin:11,borderBottomWidth:1,borderBottomColor:"#eee",justifyContent:"flex-start"},titles:{color:"white",fontSize:12,fontWeight:"500"}}),E=Object(i.a)(),L=function(){return Object(f.jsxs)(E.Navigator,{screenOptions:function(e){var t=e.route;return{tabBarStyle:{marginBottom:10,marginTop:10,borderTopWidth:0},tabBarIcon:function(e){var n,r=e.focused,o=e.color,i=e.size;return"HOME"===t.name?n=r?"home":"home-outline":"MY WATCHLIST"===t.name&&(n=r?"planet":"planet-outline"),Object(f.jsx)(c.a,{name:n,size:i,color:o})},tabBarActiveTintColor:"tomato",tabBarInactiveTintColor:"gray"}},children:[Object(f.jsx)(E.Screen,{name:"HOME",component:h}),Object(f.jsx)(E.Screen,{name:"MY WATCHLIST",component:B,options:{tabBarBadge:5}})]})};t.a=function(){return Object(f.jsx)(o.a,{children:Object(f.jsx)(L,{})})}},166:function(e,t,n){e.exports=n(210)},174:function(e,t,n){e.exports=n.p+"static/media/background.cec39ddb.png"}},[[166,1,2]]]);
//# sourceMappingURL=app.8147bc84.chunk.js.map