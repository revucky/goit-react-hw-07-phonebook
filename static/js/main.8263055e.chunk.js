(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{18:function(e,t,a){e.exports={switcher:"LangSwitcher_switcher__rPDe9",btn:"LangSwitcher_btn__3a1l0",active:"LangSwitcher_active__PAcUF LangSwitcher_btn__3a1l0"}},28:function(e,t,a){},44:function(e){e.exports=JSON.parse('{"phonebook":{"title":"Phone book","subtitle":"Contacts list"},"contactForm":{"label":"Name and surname","placeholder":"Type name a new contact","labelNum":"Tel. number","placeholderNum":"Add, number contact","button":"Add contact"},"filter":{"p":"Search by name","filterPlaceholder":"Start type name"},"contactList":{"delete":"delete"}}')},45:function(e){e.exports=JSON.parse('{"phonebook":{"title":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0433\u0430","subtitle":"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432"},"contactForm":{"label":"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 \u0442\u0430 \u0456\u043c\u02bc\u044f","placeholder":"\u0412\u0432\u0435\u0434\u0438 \u0456\u043c\u02bc\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443","labelNum":"\u041c\u043e\u0431. \u043d\u043e\u043c\u0435\u0440","placeholderNum":"\u0414\u043e\u0434\u0430\u0439, \u043d\u043e\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430","button":"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"},"filter":{"p":"\u041f\u043e\u0448\u0443\u043a \u043f\u043e \u0456\u043c\u0435\u043d\u0456","filterPlaceholder":"\u041f\u043e\u0447\u043d\u0438 \u0432\u0432\u043e\u0434\u0438\u0442\u0438 \u0456\u043c\u02bc\u044f"},"contactList":{"delete":"\u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438"}}')},58:function(e,t,a){},65:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(12),o=a.n(r),i=a(27),s=a(22),l=a(47),d=a(7),u=a(89),b=a(13),j=a.n(b),m=a(20),f=a(10),p=a(14),h="https://61c47078f1af4a0017d9953f.mockapi.io",O=function(){var e=Object(m.a)(j.a.mark((function e(t){var a,n,c=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,fetch("".concat(h,"/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.ok?n.json():Promise.reject(new Error(n.statusText)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g="contacts",x=Object(f.b)("contacts/getContactStatus",Object(m.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O(g,void 0));case 1:case"end":return e.stop()}}),e)})))),v=Object(f.b)("contacts/createContactsStatus",(function(e){return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=Object(p.a)({method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}},a);return O(e,n)}(g,e)})),N=Object(f.b)("contacts/ddeleteContactsStatus",(function(e){return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return O("".concat(e,"/").concat(t),Object(p.a)({method:"DELETE"},a))}(g,e)})),C=(a(58),a(2)),k=function(e){var t=e.allContacts,a=(e.onSubmit,Object(n.useState)("")),c=Object(i.a)(a,2),r=c[0],o=c[1],b=Object(n.useState)(""),j=Object(i.a)(b,2),m=j[0],f=j[1],p=Object(d.b)(),h=Object(u.a)().t,O=v,g=function(){o(""),f("")},x=Object.values({name:r,number:m}).some((function(e){return!e}));return Object(C.jsxs)("form",{className:"forma",onSubmit:function(e){e.preventDefault();t.some((function(e){return e.name===r}))?s.b.error("".concat(r,", \u0432\u0436\u0435 \u0443 \u0442\u0432\u043e\u0454\u043c\u0443 \u0441\u043f\u0438\u0441\u043a\u0443 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456!")):p(O({name:r,number:m,id:Object(l.a)(3)})),g()},children:[Object(C.jsxs)("label",{className:"label",children:[h("contactForm.label"),Object(C.jsx)("input",{type:"text",name:"name",className:"input",value:r,placeholder:h("contactForm.placeholder"),onChange:function(e){return o(e.target.value)},title:" Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan ",required:!0})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("label",{className:"label",children:[h("contactForm.labelNum"),Object(C.jsx)("input",{type:"tel",name:"number",value:m,className:"input",placeholder:h("contactForm.placeholderNum"),onChange:function(e){return f(e.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:" Phone number must be digits and can contain spaces, dashes, parentheses and can start with + ",required:!0})]}),Object(C.jsx)("br",{}),Object(C.jsx)("button",{className:"btn",type:"submit",disabled:x,children:h("contactForm.button")})]})},y=a(46),w=Object(f.c)({name:"contacts",initialState:{data:{items:[],loading:!1,error:null},filter:""},reducers:{changeFilter:function(e,t){var a=t.payload;return Object(p.a)(Object(p.a)({},e),{},{filter:a})}},extraReducers:function(e){e.addCase(x.pending,(function(e){e.data.loading=!0,e.data.error=null})).addCase(x.fulfilled,(function(e,t){var a=t.payload;e.data.loading=!1,e.data.items=a})).addCase(x.rejected,(function(e,t){var a=t.payload;e.data.loading=!1,e.data.error=a})).addCase(v.pending,(function(e){e.data.loading=!0,e.data.error=null})).addCase(v.fulfilled,(function(e,t){var a=t.payload;e.data.loading=!1,e.data.items=[].concat(Object(y.a)(e.data.items),[a])})).addCase(v.rejected,(function(e,t){var a=t.payload;e.data.loading=!1,e.data.error=a})).addCase(N.pending,(function(e){e.data.loading=!0,e.data.error=null})).addCase(N.fulfilled,(function(e,t){var a=t.payload;e.data.loading=!1;var n=e.data.items.findIndex((function(e){return e.id===a.id}));e.data.items.splice(n,1)})).addCase(N.rejected,(function(e,t){var a=t.payload;e.data.loading=!1,e.data.error=a}))}}),S=(a(65),function(){var e=Object(d.c)((function(e){return e.contacts.filter})),t=Object(d.b)(),a=Object(u.a)().t,n=w.actions.changeFilter;return Object(C.jsxs)("div",{className:"filterWrap",children:[Object(C.jsx)("p",{className:"title-filter",children:a("filter.p")}),Object(C.jsx)("input",{className:"input",type:"text",name:"filter",value:e,placeholder:a("filter.filterPlaceholder"),onChange:function(e){return t(n(e.target.value))}})]})}),F=(a(28),a(34)),L=function(e){var t=e.lists,a=e.onClick,n=Object(u.a)().t;return Object(C.jsx)("div",{children:Object(C.jsx)("ul",{className:"list",children:t.map((function(e){var t=e.name,c=e.phone,r=e.id;return Object(C.jsxs)("li",{className:"list-item",children:[Object(C.jsx)(F.a,{className:"icon"})," ",t,": ",c,Object(C.jsx)("button",{className:"btn btn-list",type:"button",id:r,onClick:function(){return a(r)},children:n("contactList.delete")})]},r)}))})})},_=(a(66),a(35)),P=x,T=N,A=function(){var e=Object(u.a)().t,t=Object(d.c)((function(e){return e.contacts.data.items})),a=Object(d.c)((function(e){return e.contacts.filter})),c=Object(d.b)();Object(n.useEffect)((function(){c(P())}),[c]);return Object(C.jsxs)("div",{className:"main",children:[Object(C.jsxs)("h1",{className:"hero",children:[Object(C.jsx)(_.a,{color:"#f57b0b",className:"icon"}),e("phonebook.title")]}),Object(C.jsx)(k,{allContacts:t}),Object(C.jsx)("h2",{className:"title",children:e("phonebook.subtitle")}),Object(C.jsx)(S,{}),Object(C.jsx)(L,{lists:t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})),onClick:function(e){c(T(e))}}),Object(C.jsx)(s.a,{position:"top-center",autoClose:3e3})]})},E=a(36),J=a.n(E),B=a(18),U=a.n(B),D={uk:{icon:a.p+"static/media/Ua.1684b729.png",nativeName:"\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"},en:{icon:a.p+"static/media/Uk.da5a98ee.png",nativeName:"english"}},q=function(e){var t=Object(u.a)().i18n;return Object(C.jsx)("div",{className:U.a.switcher,children:Object.keys(D).map((function(e){return Object(C.jsx)("div",{className:U.a.btnWrp,children:Object(C.jsx)("button",{className:t.resolvedLanguage===e?U.a.active:U.a.btn,type:"submit",onClick:function(){return t.changeLanguage(e)},children:Object(C.jsx)("img",{src:D[e].icon,alt:D[e].nativeName,width:"30"})})},e)}))})},z=function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(n.Suspense,{fallback:Object(C.jsx)(J.a,{type:"Bars",color:"#00BFFF",height:80,width:80,timeout:3e3}),children:Object(C.jsx)(q,{})}),Object(C.jsx)(n.Suspense,{fallback:"",children:Object(C.jsx)(A,{})})]})},I=a(37),M=a(38),W=a(9),R=a(39),G={key:"contact",storage:a.n(R).a,blacklist:["filter"],whitelist:["items"]},H=Object(M.createLogger)({collapsed:function(e,t,a){return!a.error},timestamp:!1}),K=Object(f.a)({reducer:{contacts:Object(W.g)(G,w.reducer)},middleware:function(e){return e({serializableCheck:{ignoredActions:[W.a,W.f,W.b,W.c,W.d,W.e]}}).concat(H)},devTools:!1}),Q=Object(W.h)(K),V=a(26),X=a(17),Y=a(41),Z=a(43),$={en:{translation:a(44)},uk:{translation:a(45)}};V.a.use(Y.a).use(Z.a).use(X.e).init({resources:$,fallbackLng:"en",debug:!0});V.a,a(87);o.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(d.a,{store:K,children:Object(C.jsx)(I.a,{loading:null,persistor:Q,children:Object(C.jsx)(z,{})})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.8263055e.chunk.js.map