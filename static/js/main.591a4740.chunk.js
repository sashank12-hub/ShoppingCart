(this.webpackJsonpecs=this.webpackJsonpecs||[]).push([[0],{37:function(e){e.exports=JSON.parse('[{"id":1,"name":"food card","description":"This card is used for spending on Food merchants","final_price":21,"original_price":30,"discount":30,"img_url":"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png"},{"id":2,"name":"travel card","description":"This card is used for spending on Travel and hotel bookings","final_price":20,"img_url":"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png"},{"id":3,"name":"epic card","description":"Use this card and get benefits on every transaction","final_price":40,"img_url":"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png"},{"id":4,"name":"happay premium card","description":"Use this card and get benefits on every transaction","final_price":40,"img_url":"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png"}]')},63:function(e,c,t){},67:function(e,c,t){},70:function(e,c,t){},71:function(e,c,t){},72:function(e,c,t){},76:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t(0),a=t.n(s),i=t(17),r=t.n(i),o=(t(63),t(9)),d=t(50),l=t.n(d),j=t(92),b=t(93),O=(t(67),t(24)),h=t(4),u=function(){var e=Object(h.f)();console.log(e.location.pathname);var c=Object(o.c)((function(e){return e.cart})),t=0;return c=c.map((function(e){return t+=e.count,e})),Object(n.jsxs)("div",{className:"header",children:[Object(n.jsxs)("div",{className:"left",children:[Object(n.jsx)("img",{alt:"logo",src:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"}),Object(n.jsx)("h4",{children:"Happay"})]}),Object(n.jsxs)("div",{className:"right",children:["/shoppingCart/cart"!==e.location.pathname?Object(n.jsx)(O.b,{to:"/shoppingCart/cart",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)("div",{className:"circle",children:t}),Object(n.jsx)(l.a,{className:"cart"})]})}):"",Object(n.jsx)(j.a,{children:Object(n.jsx)(b.a,{alt:"profile",src:"https://avatars.dicebear.com/api/human/".concat(Math.floor(5e3*Math.random()),".svg")})})]})]})},m=(t(70),t(37)),x=t.t(m,2),p=t(42),f=(t(71),"OPENMESSAGE"),g="CLOSEMESSAGE",v="SELECTED",N="USER",y="setTotal",_="addtocart",S="removefromcart",k=function(e){return{type:y,payload:e}},C=function(e){return{type:_,payload:e}},E=function(e){return{type:S,payload:e}},w=function(e){var c=e.item,t=Object(s.useState)(0),a=Object(p.a)(t,2),i=a[0],r=a[1],d=Object(s.useState)(!1),l=Object(p.a)(d,2),j=l[0],b=l[1],O=Object(o.b)(),h=Object(o.c)((function(e){return e.cart})).filter((function(e){return e.id==c.id}));Object(s.useEffect)((function(){var e;console.log(h),(null===(e=h[0])||void 0===e?void 0:e.count)>0&&(r(h[0].count),b(!0))}),[]),Object(s.useEffect)((function(){i<0&&(b(!1),r(0))}),[i]);console.log(c);var u=c.id,m=c.img_url,x=c.name,f=c.description,g=c.final_price,v=c.original_price,N=c.discount;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsxs)("div",{className:"image",children:[Object(n.jsx)("img",{alt:x,src:m}),N?Object(n.jsx)("div",{className:"discountband",children:"".concat(N,"% OFF")}):""]}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("div",{className:"content1",children:[Object(n.jsx)("div",{children:Object(n.jsx)("h5",{children:x})}),Object(n.jsxs)("div",{className:"cost",children:[v?Object(n.jsxs)("p",{style:{textDecoration:"line-through",color:"gray"},children:["$ ",parseInt(v).toFixed(2)]}):"",Object(n.jsxs)("p",{style:{fontWeight:"bold",fontSize:"20px"},children:["$  ",parseInt(g).toFixed(2)]})]})]}),Object(n.jsx)("div",{className:"content2",children:f}),!1===j?Object(n.jsx)("button",{className:"button",onClick:function(){b(!0),O(k("+1"))},children:"Add to cart"}):Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("button",{className:"sub",onClick:function(){console.log(h),i>0?(r((function(e){return e-1})),O(k("-1")),O(E(c))):(r((function(e){return e-1})),O(k("-1")))},children:"-"}),Object(n.jsx)("h5",{className:"countt",children:i}),Object(n.jsx)("button",{className:"add",onClick:function(){r((function(e){return e+1})),O(k("+1")),O(C(c))},children:"+"})]})]}),Object(n.jsx)("div",{className:"textbox"})]},u)},T=t(51),I=t.n(T),F=function(){var e=Object(o.c)((function(e){return e.data.default}));return Object(n.jsxs)("div",{children:[Object(n.jsx)(u,{}),Object(n.jsxs)("div",{className:"heading",children:[Object(n.jsx)("h5",{style:{opacity:"0.6"},children:"Most Popular"}),Object(n.jsxs)("div",{className:"contentt",children:[Object(n.jsx)("div",{className:"line"}),Object(n.jsx)(j.a,{children:Object(n.jsx)(I.a,{className:"staricon"})}),Object(n.jsx)("div",{className:"line"})]})]}),Object(n.jsx)("div",{className:"main",children:e.map((function(e){return Object(n.jsx)(w,{item:e})}))})]})},z=(t(72),t(90)),$=t(91),M=function(){var e=Object(o.b)(),c=Object(o.c)((function(e){return e.cart})),t=0;c=c.map((function(e){return t+=e.cost*e.count,e}));var s=Object(h.f)();return Object(n.jsxs)("div",{children:[Object(n.jsx)(u,{}),Object(n.jsxs)("div",{className:"cart_main1",children:[Object(n.jsxs)("button",{style:{backgroundColor:"transparent",color:"gray",border:"none"},onClick:function(){return s.goBack()},children:[" ",Object(n.jsx)(z.a,{})," Back to Home"]}),Object(n.jsxs)("h4",{style:{marginTop:"20px"},children:["Order Summary( ",c.length," items)"]}),Object(n.jsxs)("div",{className:"cart_main2",children:[Object(n.jsxs)("div",{className:"main21",children:[Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{className:"",children:[Object(n.jsx)("th",{children:"S. No."}),Object(n.jsx)("th",{children:"Items"}),Object(n.jsx)("th",{colSpan:"2",children:"QTY"})]})}),Object(n.jsx)("tbody",{children:c.map((function(c,t){return Object(n.jsxs)("tr",{className:"",children:[Object(n.jsx)("td",{children:t}),Object(n.jsx)("td",{children:c.name}),Object(n.jsxs)("td",{colSpan:"2",children:[Object(n.jsxs)("div",{className:"main21_wrapper",children:[Object(n.jsx)("button",{className:"subb",onClick:function(t){!function(c){e(E(c))}(c)},children:"-"}),Object(n.jsx)("p",{style:{backgroundColor:"transparent",border:"0.5px solid #4e5565",width:"50px",position:"relative",top:"8px",borderRadius:"5px"},children:c.count}),Object(n.jsx)("button",{className:"addd",onClick:function(t){!function(c){e(C(c))}(c)},children:"+"})]})," "]})]})}))})]}),Object(n.jsx)("h1",{}),Object(n.jsx)("div",{children:Object(n.jsx)("p",{onClick:function(){},style:{color:"skyblue",marginTop:"10px",marginLeft:"20px",fontWeight:"bold"},children:"+ Add more items"})})]}),Object(n.jsxs)("div",{className:"main22",children:[Object(n.jsx)("h5",{className:"main22_heading",children:"Price Details"}),Object(n.jsx)("div",{children:c.map((function(e){return Object(n.jsxs)("div",{className:"costperitem",children:[Object(n.jsxs)("div",{className:"middle1",children:["  ",Object(n.jsxs)("h5",{children:[e.count," * $ ",parseInt(e.cost).toFixed(2)]})]}),Object(n.jsxs)("div",{children:[" ",Object(n.jsxs)("h5",{children:["$ ",(parseInt(e.cost)*parseInt(e.count)).toFixed(2)]})]})]})}))}),Object(n.jsxs)("div",{className:"main22_middle_section",children:[Object(n.jsxs)("div",{className:"middlecontent",children:[Object(n.jsxs)("div",{className:"middle1",children:[" ",Object(n.jsx)("p",{children:"Total Savings"})]}),Object(n.jsx)("div",{children:Object(n.jsx)("p",{style:{color:"green"},children:"- $ 5.00 "})})]}),Object(n.jsxs)("div",{className:"middlecontent",children:[Object(n.jsx)("div",{className:"middle1",children:Object(n.jsx)("p",{children:"Delivery Fee"})}),Object(n.jsxs)("div",{children:[" ",Object(n.jsx)("p",{children:"$ 5.00 "})]})]}),Object(n.jsxs)("div",{className:"middlecontent",children:[Object(n.jsx)("div",{className:"middle1",children:Object(n.jsxs)("p",{children:["Taxes and charges ",Object(n.jsx)($.a,{})]})}),Object(n.jsxs)("div",{children:[" ",Object(n.jsx)("p",{children:"$ 5.00 "})]})]})]}),Object(n.jsxs)("div",{className:"middlecontent",children:[Object(n.jsx)("div",{className:"middle1",children:Object(n.jsx)("p",{children:"To Pay"})}),Object(n.jsxs)("div",{children:[" ",Object(n.jsx)("p",{style:{fontWeight:"bold",fontSize:"20px",color:"rgba(0,0,0,0.7)"},children:t+5})]})]})]})]})]})]})},D=function(){Object(o.c)((function(e){return e}));return Object(n.jsx)(O.a,{children:Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{exact:!0,path:"/ShoppingCart",component:F}),Object(n.jsx)(h.a,{exact:!0,path:"/ShoppingCart/cart",component:M})]})})},P=(t(73),t(38)),A=t(30),W=t(5),B={data:x,cart:[],total:0,currentdata:{}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;switch(t){case f:return Object(W.a)(Object(W.a)({},e),{},{openmessage:!e.openmessage});case g:return Object(W.a)(Object(W.a)({},e),{},{closemessage:!1});case v:return Object(W.a)(Object(W.a)({},e),{},{currentstate:n});case N:return Object(W.a)(Object(W.a)({},e),{},{Person:n});case y:return"-1"===n?Object(W.a)(Object(W.a)({},e),{},{total:e.total-1}):Object(W.a)(Object(W.a)({},e),{},{total:e.total+1});case _:var s,a=e.cart.findIndex((function(e){return e.id===n.id}));return console.log(a),a>=0?(e.cart[a].count=e.cart[a].count+1,s=e.cart[a],Object(W.a)(Object(W.a)({},e),{},{cart:Object(A.a)(e.cart)})):(s={name:n.name,id:n.id,cost:n.final_price,count:1},Object(W.a)(Object(W.a)({},e),{},{cart:[].concat(Object(A.a)(e.cart),[s])}));case S:var i=e.cart.findIndex((function(e){return e.id==n.id}));if(console.log(i),i>-1){if(e.cart[i].count>1)return console.log(e.cart[i].count),e.cart[i].count=e.cart[i].count-1,Object(W.a)(Object(W.a)({},e),{},{cart:Object(A.a)(e.cart)});if(1==e.cart[i].count)return console.log(e.cart[i].count),e.cart.splice(i,1),Object(W.a)(Object(W.a)({},e),{},{cart:Object(A.a)(e.cart)})}else console.warn("cant remove product as it is not present in basket");break;default:return e}},L=t(52),U=Object(P.createStore)(J,Object(L.composeWithDevTools)());r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(o.a,{store:U,children:Object(n.jsx)(D,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.591a4740.chunk.js.map