(this["webpackJsonpreact-practice-project"]=this["webpackJsonpreact-practice-project"]||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__3E48S",modal:"ErrorModal_modal__ka7Ye",header:"ErrorModal_header__3U3cu",content:"ErrorModal_content__1Xyw-",actions:"ErrorModal_actions__3T9sa"}},,,,,function(e,t,n){e.exports={card:"Card_card__1Zdwy"}},function(e,t,n){e.exports={button:"Button_button__2Tsmx"}},function(e,t,n){e.exports={input:"AddUser_input__27baQ"}},function(e,t,n){e.exports={users:"UsersList_users__IrxO9"}},,,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),r=n.n(a),s=(n(21),n(12)),i=n(2),o=n(8),l=n.n(o),d=n(0),u=function(e){return Object(d.jsx)("div",{className:"".concat(l.a.card," ").concat(e.className),children:e.children})},j=n(9),b=n.n(j),m=function(e){return Object(d.jsx)("button",{className:b.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},O=n(3),h=n.n(O),x=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:h.a.backdrop,onClick:e.onConfirm}),Object(d.jsxs)(u,{className:h.a.modal,children:[Object(d.jsx)("header",{className:h.a.header,children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsx)("div",{className:h.a.content,children:Object(d.jsx)("p",{children:e.message})}),Object(d.jsx)("footer",{className:h.a.actions,children:Object(d.jsx)(m,{onClick:e.onConfirm,children:"Okay"})})]})]})},p=n(10),_=n.n(p),f=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),l=o[0],j=o[1],b=Object(c.useState)(),O=Object(i.a)(b,2),h=O[0],p=O[1];return Object(d.jsxs)("div",{children:[h&&Object(d.jsx)(x,{title:h.title,message:h.message,onConfirm:function(){p(null)}}),Object(d.jsx)(u,{className:_.a.input,children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==a.trim().length&&0!==l.trim().length?+l<1?p({title:"Invalid age",message:"Please enter a valid age (> 0)."}):(e.onAddUser(a,l),r(""),j("")):p({title:"Invalid input",message:"Please enter a valid name and age (non-empty values)."})},children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{id:"username",type:"text",value:a,onChange:function(e){r(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"age",children:"Age (Years)"}),Object(d.jsx)("input",{id:"age",type:"number",value:l,onChange:function(e){j(e.target.value)}}),Object(d.jsx)(m,{type:"submit",children:"Add User"})]})})]})},g=n(11),v=n.n(g),k=function(e){return Object(d.jsx)(u,{className:v.a.users,children:Object(d.jsx)("ul",{children:e.users.map((function(e){return Object(d.jsxs)("li",{children:[e.name," (",e.age," years old)"]},e.id)}))})})};var y=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{onAddUser:function(e,t){a((function(n){return[].concat(Object(s.a)(n),[{name:e,age:t,id:Math.random().toString()}])}))}}),Object(d.jsx)(k,{users:n})]})};r.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(y,{}))}],[[23,1,2]]]);
//# sourceMappingURL=main.bbf53399.chunk.js.map