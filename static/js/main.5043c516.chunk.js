(this["webpackJsonpfull-stack-coffee-shop"]=this["webpackJsonpfull-stack-coffee-shop"]||[]).push([[0],{101:function(e,t,c){},135:function(e,t,c){},140:function(e,t,c){},141:function(e,t,c){},142:function(e,t,c){},144:function(e,t,c){},145:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(14),r=c.n(a),s=c(7),o=c.n(s),l=c(13),d=c(8),j=(c(101),c(77)),u=new(c.n(j).a)("pk_test_37223e261f675080b9ebf38c6ff6fa8cca0abcce66fba",!0),b=c(18),h=c(9),m=(c(135),c(22)),p=c(1),f=function(e){var t=e.item,c=e.handleUpdateCartQty,n=e.handleRemoveFromCart;return Object(p.jsxs)("div",{className:"cart-item",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(m.h,{className:"cart-icons",onClick:function(){return n(t.id)}}),Object(p.jsx)("img",{src:t.image.url,alt:"pic"}),Object(p.jsx)("p",{children:t.name})]}),Object(p.jsxs)("div",{className:"quantity",children:[Object(p.jsx)(m.e,{className:"cart-icons",onClick:function(){return c(t.id,t.quantity-1)}}),Object(p.jsx)("p",{children:t.quantity}),Object(p.jsx)(m.g,{className:"cart-icons",onClick:function(){return c(t.id,t.quantity+1)}})]}),Object(p.jsx)("p",{children:t.line_total.formatted_with_symbol})]})},x=function(e){var t,c=e.cartProducts,n=e.handleUpdateCartQty,i=e.handleRemoveFromCart;return Object(p.jsxs)("div",{className:"container cart-container",children:[Object(p.jsx)("h2",{children:"Shopping Cart"}),Object(p.jsxs)("div",{className:"cart-headers",children:[Object(p.jsx)("p",{style:{textAlign:"left"},children:"Item"}),Object(p.jsx)("p",{children:"Quanity"}),Object(p.jsx)("p",{children:"Price"})]}),Object(p.jsx)("div",{className:"cart-items",children:null===(t=c.line_items)||void 0===t?void 0:t.map((function(e){return Object(p.jsx)(f,{item:e,handleUpdateCartQty:n,handleRemoveFromCart:i},e.id)}))}),Object(p.jsxs)("div",{className:"subtotal",children:[Object(p.jsx)("h4",{children:"Subtotal"}),Object(p.jsx)("h4",{children:c.subtotal.formatted_with_symbol})]}),Object(p.jsx)(b.b,{to:"/Checkout",children:Object(p.jsx)("h5",{children:"Checkout"})})]})},O=c(59),v=c(196),g=c(194),y=c(197),w=c(191),N=c(204),k=c(198),C=c(202),M=c(16),S=c(184),B=Object(S.a)((function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(M.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(M.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(M.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),T=c(32),H=c(187),D=c(200),A=c(193),G=c(44),q=c(201),W=function(e){var t=e.name,c=e.label,n=e.required,i=Object(G.d)().control;return Object(p.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(p.jsx)(G.a,{name:t,control:i,render:function(e){var t=e.field;return Object(p.jsx)(q.a,Object(T.a)(Object(T.a)({},t),{},{label:c,fullWidth:!0,required:n}))}})})},E=function(e){var t=e.checkoutToken,c=e.test,i=Object(G.c)(),a=Object(n.useState)([]),r=Object(d.a)(a,2),s=r[0],j=r[1],h=Object(n.useState)(""),m=Object(d.a)(h,2),f=m[0],x=m[1],v=Object(n.useState)([]),y=Object(d.a)(v,2),w=(y[0],y[1]),N=Object(n.useState)(""),k=Object(d.a)(N,2),C=k[0],M=k[1],S=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.services.localeListSubdivisions("US");case 2:t=e.sent,c=t.subdivisions,j(c),x(Object.keys(c)[0]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){S()}),[]),Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(t,c){var n,i,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>2&&void 0!==a[2]?a[2]:null,e.next=3,u.checkout.getShippingOptions(t.id,{country:c,region:n});case 3:i=e.sent,w(i),M(i[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();t&&e(t,"US",f)}),[f]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O.a,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),Object(p.jsx)(G.b,Object(T.a)(Object(T.a)({},i),{},{children:Object(p.jsxs)("form",{onSubmit:i.handleSubmit((function(e){return c(Object(T.a)(Object(T.a)({},e),{},{shippingSubdivision:f,shippingOption:C}))})),children:[Object(p.jsxs)(H.a,{container:!0,spacing:3,children:[Object(p.jsx)(W,{required:!0,name:"firstName",label:"First name"}),Object(p.jsx)(W,{required:!0,name:"lastName",label:"Last name"}),Object(p.jsx)(W,{required:!0,name:"email",label:"Email"}),Object(p.jsx)(W,{required:!0,name:"address",label:"Address"}),Object(p.jsx)(W,{required:!0,name:"city",label:"City"}),Object(p.jsx)(W,{required:!0,name:"zip",label:"ZIP / Postal code"}),Object(p.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(p.jsx)(D.a,{value:f,fullWidth:!0,onChange:function(e){return x(e.target.value)},children:Object.entries(s).map((function(e){var t=Object(d.a)(e,2);return{id:t[0],label:t[1]}})).map((function(e){return Object(p.jsx)(A.a,{value:e.id,children:e.label},e.id)}))})})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(p.jsx)(g.a,{component:b.b,variant:"outlined",to:"/cart",children:"Back to Cart"}),Object(p.jsx)(g.a,{type:"submit",variant:"contained",color:"primary",children:"Next"})]})]})}))]})},_=c(52),P=c(82),$=c(192),R=c(146),L=c(195),F=function(e){var t=e.checkoutToken;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O.a,{variant:"h6",gutterBottom:!0,children:"Order summary"}),Object(p.jsxs)($.a,{disablePadding:!0,children:[t.live.line_items.map((function(e){return Object(p.jsxs)(R.a,{style:{padding:"10px 0"},children:[Object(p.jsx)(L.a,{primary:e.name,secondary:"Quantity: ".concat(e.quantity)}),Object(p.jsx)(O.a,{variant:"body2",children:e.line_total.formatted_with_symbol})]},e.name)})),Object(p.jsxs)(R.a,{style:{padding:"10px 0"},children:[Object(p.jsx)(L.a,{primary:"Total"}),Object(p.jsx)(O.a,{variant:"subtitle1",style:{fontWeight:700},children:t.live.subtotal.formatted_with_symbol})]})]})]})},I=Object(P.a)("".concat("pk_test_51K8LJGEvR7jgm2oM1NHjnzWR3jl30ENSExLNElCYpYlrNF6saJ92R8exrzGkoC4V8ckQwXWfRYWSSyUvgrBtgBEj00p7QM1bNA")),Y=function(e){var t=e.checkoutToken,c=e.nextStep,n=e.backStep,i=e.shippingData,a=e.onCaptureCheckout,r=function(){var e=Object(l.a)(o.a.mark((function e(n,r,s){var l,d,j,u,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),s&&r){e.next=3;break}return e.abrupt("return");case 3:return l=r.getElement(_.CardElement),e.next=6,s.createPaymentMethod({type:"card",card:l});case 6:d=e.sent,j=d.error,u=d.paymentMethod,j?console.log("[error]",j):(b={line_items:t.live.line_items,customer:{firstname:i.firstName,lastname:i.lastName,email:i.email},shipping:{name:"Domestic",street:i.address,town_city:i.city,county_state:i.shippingSubdivision,postal_zip_code:i.zip,country:"US"},fulfillment:{shipping_method:i.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:u.id}}},a(t.id,b),c());case 10:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(F,{checkoutToken:t}),Object(p.jsx)(v.a,{}),Object(p.jsx)(O.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),Object(p.jsx)(_.Elements,{stripe:I,children:Object(p.jsx)(_.ElementsConsumer,{children:function(e){var c=e.elements,i=e.stripe;return Object(p.jsxs)("form",{onSubmit:function(e){return r(e,c,i)},children:[Object(p.jsx)(_.CardElement,{}),Object(p.jsx)("br",{})," ",Object(p.jsx)("br",{}),Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(p.jsx)(g.a,{variant:"outlined",onClick:n,children:"Back"}),Object(p.jsxs)(g.a,{type:"submit",variant:"contained",disabled:!i,color:"primary",children:["Pay ",t.live.subtotal.formatted_with_symbol]})]})]})}})})]})},V=["Shipping address","Payment details"],Q=function(e){var t=e.cartProducts,c=e.onCaptureCheckout,i=e.order,a=e.error,r=Object(n.useState)(null),s=Object(d.a)(r,2),j=s[0],h=s[1],m=Object(n.useState)(0),f=Object(d.a)(m,2),x=f[0],M=f[1],S=Object(n.useState)({}),T=Object(d.a)(S,2),H=T[0],D=T[1],A=B(),G=function(){return M((function(e){return e+1}))},q=function(){return M((function(e){return e-1}))};Object(n.useEffect)((function(){if(t.id){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.checkout.generateToken(t.id,{type:"cart"});case 3:c=e.sent,h(c),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[t]);var W=function(){return i.customer?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)(O.a,{variant:"h5",children:["Thank you for your purchase, ",i.customer.firstname," ",i.customer.lastname,"!"]}),Object(p.jsx)(v.a,{className:A.divider}),Object(p.jsxs)(O.a,{variant:"subtitle2",children:["Order ref: ",i.customer_reference]})]}),Object(p.jsx)("br",{}),Object(p.jsx)(g.a,{component:b.b,variant:"outlined",type:"button",to:"/",children:"Back to home"})]}):Object(p.jsx)("div",{className:A.spinner,children:Object(p.jsx)(y.a,{})})};a&&(W=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O.a,{variant:"h5",children:"Payment Successful"}),Object(p.jsx)("br",{}),Object(p.jsx)(g.a,{component:b.b,variant:"outlined",type:"button",to:"/",children:"Back to home"})]})});var _=function(e){D(e),console.log(e),G()},P=function(){return 0===x?Object(p.jsx)(E,{checkoutToken:j,nextStep:G,setShippingData:D,test:_}):Object(p.jsx)(Y,{checkoutToken:j,nextStep:G,backStep:q,shippingData:H,onCaptureCheckout:c})};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:A.toolbar}),Object(p.jsx)("main",{className:A.layout,children:Object(p.jsxs)(w.a,{className:A.paper,children:[Object(p.jsx)(O.a,{variant:"h4",align:"center",children:"Checkout"}),Object(p.jsx)(N.a,{activeStep:x,className:A.stepper,children:V.map((function(e){return Object(p.jsx)(k.a,{children:Object(p.jsx)(C.a,{children:e})},e)}))}),x===V.length?Object(p.jsx)(W,{}):Object(p.jsx)(P,{})]})})]})},U=(c(140),function(){return Object(p.jsxs)("div",{className:"topMenuContainer topNextContainer container",children:[Object(p.jsx)("div",{className:"menuTopRight",children:Object(p.jsx)("img",{className:"imageContain",src:"https://images.unsplash.com/photo-1606509036992-4399d5c5afe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",alt:"Coffee"})}),Object(p.jsxs)("div",{className:"menuTopLeft",children:[Object(p.jsx)("h2",{className:"top-event-header",style:{textAlign:"center"},children:Object(p.jsx)("span",{className:"event-header",children:"Events"})}),Object(p.jsx)("p",{className:"events-par",children:"We have a different event every day of the week. Come and enjoy yourself with one of our delicious coffees. Tickets do go fast, so be sure to reserve a seat."})]})]})}),z=function(e){var t=e.time,c=e.event,n=e.description,i=e.pic;return Object(p.jsxs)("div",{className:"bottom-events container",children:[Object(p.jsxs)("div",{className:"eventsTopLeft",children:[Object(p.jsx)("h2",{children:Object(p.jsx)("span",{children:c})}),Object(p.jsx)("h5",{style:{paddingLeft:".5rem"},children:t}),Object(p.jsx)("p",{children:n})]}),Object(p.jsx)("div",{className:"eventsTopRight",children:Object(p.jsx)("img",{className:"imageContain",src:i,alt:"Coffee"})})]})},J=function(){var e=[{time:"Monday's All Day",event:"Strong Coffee Monday's",description:"Start your day with any and a free shot of espresso on us. Who said Monday's needed to be bad.",pic:"https://images.unsplash.com/photo-1599579089328-852ca6423ef0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{time:"Tuesday's All Day",event:"Charity Day",description:"Come and drink some coffee and donate to a great cause. We will be donating 10% of all purchases to a charity of your choice.",pic:"https://images.unsplash.com/photo-1459257831348-f0cdd359235f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{time:"Wednesday's 4PM - 7PM",event:"Board Game Mania",description:"Come and play some board games and enjoy a cup of coffee. We have a great selection, but feel free to bring your favorite game.",pic:"https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{time:"Thursdays's 5PM - 7PM",event:"Trivia Night",description:"Grab a group of friends and come join us for some trivia. Winners will be rewarded",pic:"https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{time:"Friday's 7PM - 9PM",event:"Live Music",description:"Nothing is better than live music after a long day. Come and enjoy your Friday's with us.",pic:"https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{time:"Saturday's 6PM - 8PM",event:"Salsa Night",description:"Come and show off your dance skills. All levels are welcome. The only rule is, if it's your first time at Salsa Night, then you have to dance.",pic:"https://images.unsplash.com/photo-1542401520-180a59daad21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1877&q=80"},{time:"Sunday's 2PM - 4PM",event:"Dog Days",description:"Come enjoy a cup of coffee, on our spacious patio, with your dog. Dog owner's get 10% off all day",pic:"https://images.unsplash.com/photo-1480279237099-0c30d0fdf76d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"}];return Object(p.jsx)("div",{className:"events-bottom",children:e.map((function(t,c){return Object(p.jsx)(z,{time:e[c].time,event:e[c].event,description:e[c].description,pic:e[c].pic},c)}))})},K=function(){return Object(p.jsxs)("div",{className:"eventsContainer",children:[Object(p.jsx)(U,{}),Object(p.jsx)(J,{})]})},X=function(){return Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{children:"Location"}),Object(p.jsx)("p",{children:"Downtown Seattle"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{children:"Phone"}),Object(p.jsx)("p",{children:"434-321-4567"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{children:"Email"}),Object(p.jsx)("p",{children:"QuickBrew@gmail.com"})]}),Object(p.jsxs)("div",{className:"socials",children:[Object(p.jsx)("a",{href:"https://www.facebook.com/",children:Object(p.jsx)(m.c,{className:"social"})}),Object(p.jsx)("a",{href:"https://twitter.com/",children:Object(p.jsx)(m.i,{className:"social"})}),Object(p.jsx)("a",{href:"https://www.instagram.com/",children:Object(p.jsx)(m.d,{className:"social"})}),Object(p.jsx)("a",{href:"https://www.pinterest.com/",children:Object(p.jsx)(m.f,{className:"social"})})]})]})},Z=(c(141),function(){return Object(p.jsx)("div",{children:Object(p.jsx)("section",{id:"top",children:Object(p.jsxs)("div",{className:"container top-container",children:[Object(p.jsx)("div",{className:"left-top",children:Object(p.jsx)("img",{src:"https://images.unsplash.com/photo-1514066558159-fc8c737ef259?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",alt:"img"})}),Object(p.jsxs)("div",{className:"right-top",children:[Object(p.jsx)("h1",{children:"Enjoy Your Coffee"}),Object(p.jsx)("p",{children:"If you are looking for a good cup of coffee and a great place to drink it, then look no further."}),Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("div",{className:"button",children:Object(p.jsx)("button",{children:Object(p.jsx)("a",{style:{color:"white"},href:"https://www.google.com/maps/place/730-702+E+Lombard+St,+Baltimore,+MD+21202/@39.2879229,-76.6084257,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x89c803aed6f483b7:0x44896a84223e758!2sBaltimore,+MD!3b1!8m2!3d39.2903848!4d-76.6121893!3m4!1s0x89c80482b6ac7afd:0xdf16ca3f153a4b59!8m2!3d39.28792!4d-76.6062394",children:"Directions"})})}),Object(p.jsx)("div",{className:"button",children:Object(p.jsx)("button",{children:Object(p.jsx)("a",{className:"reviews-link",href:"#reviews",children:"Reviews"})})})]})]})]})})})}),ee=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("section",{id:"about",children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"top-about-container container",children:[Object(p.jsxs)("div",{className:"left-about",children:[Object(p.jsx)("h2",{children:"From Seed to Cup"}),Object(p.jsx)("p",{children:"We search for the best quality beans around the world. We then take care of the roasting process on site. This guarantees that your coffee is always fresh and of the highest quality."})]}),Object(p.jsx)("div",{className:"right-about",children:Object(p.jsx)("img",{src:"https://images.unsplash.com/photo-1525088553748-01d6e210e00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",alt:"img"})})]}),Object(p.jsx)("div",{className:"bottom-about-container",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"pics",children:[Object(p.jsxs)("div",{className:"left-container",children:[Object(p.jsx)("div",{className:"left-pic",children:Object(p.jsx)("div",{className:"writing-container",children:Object(p.jsx)("p",{children:"Sometimes the best results come from the simplest actions."})})}),Object(p.jsx)("h5",{children:"Traditional"})]}),Object(p.jsxs)("div",{className:"middle-container",children:[Object(p.jsx)("div",{className:"middle-pic",children:Object(p.jsx)("div",{className:"writing-container",children:Object(p.jsx)("p",{children:"Perfect for someone who wants more caffeine and a vibrant taste."})})}),Object(p.jsx)("h5",{children:"Drip"})]}),Object(p.jsxs)("div",{className:"right-container",children:[Object(p.jsx)("div",{className:"right-pic",children:Object(p.jsx)("div",{className:"writing-container",children:Object(p.jsx)("p",{children:"Great for a hot day and for those who want something sweeter."})})}),Object(p.jsx)("h5",{children:"Cold Brew"})]})]})})})]})})})},te=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("section",{id:"area",children:Object(p.jsxs)("div",{className:"container area-container",children:[Object(p.jsx)("div",{className:"left-area",children:Object(p.jsx)("img",{src:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",alt:"img"})}),Object(p.jsxs)("div",{className:"right-area",children:[Object(p.jsx)("h1",{children:"Perfect Atmosphere"}),Object(p.jsx)("p",{children:"We understand that coffee is only part of the reason most people visit us. We work hard to provide a good place that will cater to anyone's needs. There are areas for communicating and areas for the people looking for a quiet place to work."})]})]})})})},ce=function(e){var t=e.text,c=e.user,n=e.changeReviewRight,i=e.changeReviewLeft;return Object(p.jsx)("div",{children:Object(p.jsx)("section",{id:"reviews",children:Object(p.jsxs)("div",{className:"slider",children:[Object(p.jsx)(m.a,{className:"clickers",style:{paddingRight:".5rem"},onClick:i}),Object(p.jsxs)("div",{className:"review",children:[Object(p.jsx)("p",{children:t}),Object(p.jsxs)("div",{className:"user",children:[Object(p.jsx)(m.j,{style:{margin:"auto 0",paddingRight:"1rem"}}),Object(p.jsx)("h5",{children:c})]})]}),Object(p.jsx)(m.b,{className:"clickers",style:{paddingLeft:".5rem"},onClick:n})]})})})},ne=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),c=t[0],i=t[1],a=[{text:"We had such a great time at Quick Brew. The staff were very nice and the prices were also very good.",user:"Emily"},{text:"Excellent coffee shop. Will definitely be going back soon. The staff were very helpful and fast.",user:"Sam"},{text:"Had a blast learning to dance salsa. They always have the best events. It is a great way to meet some new people.",user:"Anna"},{text:"They have some of the best coffee in town. They also have incredible tea, which is a rare find. ",user:"Sierra"},{text:"Go for the coffee, stay for the vibe. It is such a chill place and everything is of the highest quality.",user:"Todd"}];return Object(p.jsx)("div",{children:Object(p.jsx)(ce,{text:a[c].text,user:a[c].user,changeReviewRight:function(){i(c>3?0:c+1)},changeReviewLeft:function(){i(c<1?3:c-1)}})})},ie=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(Z,{}),Object(p.jsx)(ee,{}),Object(p.jsx)(te,{}),Object(p.jsx)(ne,{})]})},ae=(c(142),function(){return Object(p.jsxs)("div",{className:"topMenuContainer",children:[Object(p.jsxs)("div",{className:"menuTopLeft",children:[Object(p.jsx)("h1",{children:"Options for everyone"}),Object(p.jsx)("p",{children:"We have spent a lot of time listening to our customers, to find create a menu for everyone. Take a look at the menu below."}),Object(p.jsx)("div",{className:"buttons",children:Object(p.jsx)("div",{className:"button",children:Object(p.jsx)("button",{children:Object(p.jsx)("a",{style:{color:"white"},href:"#menu",children:"Menu"})})})})]}),Object(p.jsx)("div",{className:"menuTopRight",children:Object(p.jsx)("img",{className:"imageContain",src:"https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",alt:"Coffee"})})]})}),re=function(e){var t=e.item,c=e.price,n=e.description;return Object(p.jsxs)("div",{className:"item-container",children:[Object(p.jsxs)("div",{className:"itemTop",children:[Object(p.jsx)("h2",{children:t}),Object(p.jsx)("div",{className:"dotLine"}),Object(p.jsx)("h2",{children:c})]}),Object(p.jsx)("div",{className:"itemBottom",children:Object(p.jsx)("p",{children:n})})]})},se=function(e){var t=e.list;return Object(p.jsx)("div",{className:"item-container",children:t.map((function(e,c){return Object(p.jsx)(re,{item:t[c].item,price:t[c].price,description:t[c].description},c)}))})},oe=function(){var e=Object(n.useState)([{item:"Home Brew",price:"$2.50",description:"Our famous home brewed coffee"},{item:"Drip Coffee",price:"$3.00",description:"Hot coffee made by drip"},{item:"Expresson Brew",price:"$2.80",description:"A drink to get you going"},{item:"Americano",price:"$2.50",description:"You can't go wrong with this classic"},{item:"Latte",price:"$3.75",description:"Perfect for any day"},{item:"Cappuccino ",price:"$3.50",description:"Strong and foamy"},{item:"Iced Coffee",price:"$2.75",description:"Great choice for a hot day"},{item:"Frapacino",price:"$4.00",description:"if you are looking for something cold and sweet"}]),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)("active1"),r=Object(d.a)(a,2),s=r[0],o=r[1],l=[{item:"Home Brew",price:"$2.50",description:"Our famous home brewed coffee"},{item:"Drip Coffee",price:"$3.00",description:"Hot coffee made by drip"},{item:"Espresso Brew",price:"$2.80",description:"A drink to get you going"},{item:"Americano",price:"$2.50",description:"You can't go wrong with this classic"},{item:"Latte",price:"$3.75",description:"Perfect for any day"},{item:"Cappuccino ",price:"$3.50",description:"Strong and foamy"},{item:"Iced Coffee",price:"$2.75",description:"Great choice for a hot day"},{item:"Frappuccino",price:"$4.00",description:"if you are looking for something cold and sweet"}],j=[{item:"Green Tea",price:"$1.50",description:"Mix it up with this classic"},{item:"Black Tea",price:"$1.60",description:"Tired of coffee, but need some energy"},{item:"Fruit Tea",price:"$1.80",description:"Be sure to add some honey"},{item:"Milk Tea",price:"$2.25",description:"Perfect for a hot day"},{item:"Green Tea Latte",price:"$2.75",description:"What a great combination"}],u=[{item:"Water",price:"$1.00",description:"Sometimes you just need to hydrate"},{item:"Hot Chocolate",price:"$1.80",description:"The drink of winter"},{item:"Irish Coffee",price:"$4.50",description:"Do you need something a little stronger"}],b=[{item:"Cake",price:"$1.60",description:"Not just for birthdays"},{item:"Muffin",price:"$1.25",description:"The perfect snack to complement your coffee"},{item:"Cookie",price:"$1.00",description:"Made fresh everyday"},{item:"Biscotti",price:"$1.40",description:"Such a delicious snack"}],h=function(e){"coffee"===e?i(l):"tea"===e?i(j):"other"===e?i(u):"dessert"===e&&i(b)},m=function(e){o(e)};return Object(p.jsxs)("div",{className:"bottom-menu-container",id:"menu",children:[Object(p.jsxs)("div",{className:"menuHeading",children:[Object(p.jsx)("h1",{children:"Menu"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{onClick:function(){return h("coffee")},children:Object(p.jsx)("span",{className:"active1"===s?"active":"none",onClick:function(){return m("active1")},children:"Coffee"})}),Object(p.jsx)("li",{onClick:function(){return h("tea")},children:Object(p.jsx)("span",{className:"active2"===s?"active":"none",onClick:function(){return m("active2")},children:"Tea"})}),Object(p.jsx)("li",{onClick:function(){return h("other")},children:Object(p.jsx)("span",{className:"active3"===s?"active":"none",onClick:function(){return m("active3")},children:"Other"})}),Object(p.jsx)("li",{onClick:function(){return h("dessert")},children:Object(p.jsx)("span",{className:"active4"===s?"active":"none",onClick:function(){return m("active4")},children:"Dessert"})})]})]}),Object(p.jsx)(se,{list:c})]})},le=function(){return Object(p.jsxs)("div",{className:"container menu-container",children:[Object(p.jsx)(ae,{}),Object(p.jsx)(oe,{})]})},de=c(199),je=function(e){var t=e.totalItems,c=Object(n.useState)("active1"),i=Object(d.a)(c,2),a=i[0],r=i[1],s=Object(n.useState)("nav-nav"),o=Object(d.a)(s,2),l=o[0],j=o[1],u=function(e){r(e)};return Object(p.jsx)("div",{children:Object(p.jsxs)("nav",{className:"nav-container",children:[Object(p.jsxs)("button",{href:"#",className:"toggle-button",onClick:function(){j("nav-nav"===l?"nav-nav active-nav":"nav-nav")},children:[Object(p.jsx)("span",{className:"bar1"}),Object(p.jsx)("span",{className:"bar2"}),Object(p.jsx)("span",{className:"bar3"})]}),Object(p.jsx)("div",{className:"nav-left",children:Object(p.jsx)("h1",{children:"Quick Brew"})}),Object(p.jsx)("div",{className:"nav-middle",children:Object(p.jsxs)("ul",{className:l,children:[Object(p.jsx)("li",{onClick:function(){return u("active1")},children:Object(p.jsx)(b.b,{className:"active1"===a?"active":"none",to:"/",children:"Home"})}),Object(p.jsx)("li",{onClick:function(){return u("active2")},children:Object(p.jsx)(b.b,{className:"active2"===a?"active":"none",to:"/Events",children:"Events"})}),Object(p.jsx)("li",{onClick:function(){return u("active3")},children:Object(p.jsx)(b.b,{className:"active3"===a?"active":"none",to:"/Menu",children:"Menu"})}),Object(p.jsx)("li",{onClick:function(){return u("active4")},children:Object(p.jsx)(b.b,{className:"active4"===a?"active":"none",to:"/Shop",children:"Shop"})})]})}),Object(p.jsxs)("div",{className:"nav-right",children:[Object(p.jsx)(b.b,{onClick:function(){return u("active5")},to:"/Cart",children:Object(p.jsx)(de.a,{className:"shopping-icon"})}),Object(p.jsx)("p",{className:"badge",children:t})]})]})})},ue=(c(144),function(e){var t=e.headerName;return Object(p.jsx)("div",{className:"header-container",children:Object(p.jsx)("h1",{className:"header-tittle",children:t})})}),be=function(e){var t=e.changeArr,c=e.active;return Object(p.jsxs)("div",{className:"shopNav",children:[Object(p.jsx)("p",{className:"All Items"===c?"activeShop":"none",onClick:function(){return t("All Items","All Items")},style:{marginTop:"0"},children:"See all items"}),Object(p.jsx)("p",{className:"Coffee"===c?"activeShop":"none",onClick:function(){return t("<p>Coffee</p>","Coffee")},children:"Coffee"}),Object(p.jsx)("p",{className:"Equipment"===c?"activeShop":"none",onClick:function(){return t("<p>Equipment</p>","Equipment")},children:"Equipment"}),Object(p.jsx)("p",{className:"Mugs"===c?"activeShop":"none",onClick:function(){return t("<p>Mugs</p>","Mugs")},children:"Mugs"}),Object(p.jsx)("p",{className:"Gift Cards"===c?"activeShop":"none",onClick:function(){return t("<p>Gift Cards</p>","Gift Cards")},children:"Gift Cards"})]})},he=function(e){var t=e.product,c=e.onAddToCart;return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"item-card",children:[Object(p.jsx)("div",{className:"card-top",children:Object(p.jsx)("div",{className:"item-img-container",children:Object(p.jsx)("img",{src:t.image.url,alt:"item"})})}),Object(p.jsxs)("div",{className:"card-bottom",children:[Object(p.jsx)("h3",{className:"card-description",children:t.name}),Object(p.jsxs)("div",{className:"buy-item",children:[Object(p.jsx)("h3",{className:"card-price",children:t.price.formatted_with_symbol}),Object(p.jsx)(de.a,{className:"add-basket",onClick:function(){return c(t.id,1)}})]})]})]})})},me=function(e){var t=e.display,c=e.onAddToCart;return Object(p.jsx)("div",{className:"item-cards",children:t.map((function(e){return Object(p.jsx)(he,{product:e,onAddToCart:c})}))})},pe=function(e){var t=e.products,c=e.onAddToCart,i=Object(n.useState)("All Items"),a=Object(d.a)(i,2),r=a[0],s=a[1],o=Object(n.useState)("All Items"),l=Object(d.a)(o,2),j=l[0],u=l[1],b=Object(n.useState)(t),h=Object(d.a)(b,2),m=h[0],f=h[1];return Object(p.jsxs)("div",{className:"container shop-container",children:[Object(p.jsx)(ue,{headerName:r}),Object(p.jsxs)("div",{className:"shop-main",children:[Object(p.jsx)("div",{children:Object(p.jsx)(be,{active:j,changeArr:function(e,c){f("All Items"===e?t:t.filter((function(t){return t.description===e}))),s(c),u(c)}})}),Object(p.jsx)(me,{display:m,onAddToCart:c})]})]})},fe=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)({}),r=Object(d.a)(a,2),s=r[0],j=r[1],m=Object(n.useState)({}),f=Object(d.a)(m,2),O=f[0],v=f[1],g=Object(n.useState)(""),y=Object(d.a)(g,2),w=y[0],N=y[1],k=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.products.list();case 2:t=e.sent,c=t.data,i(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,u.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(o.a.mark((function e(t,c){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.cart.add(t,c);case 2:n=e.sent,j(n.cart);case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(o.a.mark((function e(t,c){var n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.cart.update(t,{quantity:c});case 2:n=e.sent,i=n.cart,j(i);case 5:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.cart.remove(t);case 2:c=e.sent,n=c.cart,j(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.cart.refresh();case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(l.a)(o.a.mark((function e(t,c){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.checkout.capture(t,c);case 3:n=e.sent,v(n),T(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),N(e.t0.data.error.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){k(),C()}),[]),Object(p.jsx)(b.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(je,{totalItems:s.total_items}),Object(p.jsxs)(h.c,{children:[Object(p.jsx)(h.a,{exact:!0,path:"/",element:Object(p.jsx)(ie,{})}),Object(p.jsx)(h.a,{exact:!0,path:"/Events",element:Object(p.jsx)(K,{})}),Object(p.jsx)(h.a,{exact:!0,path:"/Shop",element:Object(p.jsx)(pe,{products:c,onAddToCart:M})}),Object(p.jsx)(h.a,{exact:!0,path:"/Menu",element:Object(p.jsx)(le,{})}),Object(p.jsx)(h.a,{exact:!0,path:"/Cart",element:Object(p.jsx)(x,{cartProducts:s,handleUpdateCartQty:S,handleRemoveFromCart:B})}),Object(p.jsx)(h.a,{exact:!0,path:"/Checkout",element:Object(p.jsx)(Q,{cartProducts:s,order:O,onCaptureCheckout:H,error:w})})]}),Object(p.jsx)(X,{})]})})};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(fe,{})}),document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.5043c516.chunk.js.map