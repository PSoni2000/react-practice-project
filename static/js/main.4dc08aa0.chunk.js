(this["webpackJsonpreact-practice-project"]=this["webpackJsonpreact-practice-project"]||[]).push([[0],[,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__3E48S",modal:"ErrorModal_modal__ka7Ye",header:"ErrorModal_header__3U3cu",content:"ErrorModal_content__1Xyw-",actions:"ErrorModal_actions__3T9sa"}},,,,,,,function(e,t,n){e.exports={card:"Card_card__1Zdwy"}},function(e,t,n){e.exports={button:"Button_button__2Tsmx"}},function(e,t,n){e.exports={input:"AddUser_input__27baQ"}},function(e,t,n){e.exports={users:"UsersList_users__IrxO9"}},,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(8),s=n.n(a),o=(n(21),n(13)),i=n(6),l=n(9),u=n.n(l),d=n(0),j=function(e){return Object(d.jsx)("div",{className:"".concat(u.a.card," ").concat(e.className),children:e.children})},b=n(10),m=n.n(b),O=function(e){return Object(d.jsx)("button",{className:m.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},x=n(4),h=n.n(x),f=n(2),p=n.n(f),_=function(e){return Object(d.jsx)("div",{className:p.a.backdrop,onClick:e.onConfirm})},g=function(e){return Object(d.jsxs)(j,{className:p.a.modal,children:[Object(d.jsx)("header",{className:p.a.header,children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsx)("div",{className:p.a.content,children:Object(d.jsx)("p",{children:e.message})}),Object(d.jsx)("footer",{className:p.a.actions,children:Object(d.jsx)(O,{onClick:e.onConfirm,children:"Okay"})})]})},v=function(e){return Object(d.jsxs)(c.a.Fragment,{children:[h.a.createPortal(Object(d.jsx)(_,{onConfirm:e.onConfirm}),document.getElementById("backdrop-root")),h.a.createPortal(Object(d.jsx)(g,{title:e.title,message:e.message,onConfirm:e.onConfirm}),document.getElementById("overlay-root"))]})},y=function(e){return e.children},k=n(11),C=n.n(k),N=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),c=Object(r.useState)(),a=Object(i.a)(c,2),s=a[0],o=a[1];return Object(d.jsxs)(y,{children:[s&&Object(d.jsx)(v,{title:s.title,message:s.message,onConfirm:function(){o(null)}}),Object(d.jsx)(j,{className:C.a.input,children:Object(d.jsxs)("form",{onSubmit:function(r){r.preventDefault();var c=t.current.value,a=n.current.value;0!==c.trim().length&&0!==a.trim().length?+a<1?o({title:"Invalid age",message:"Please enter a valid age (> 0)."}):(e.onAddUser(c,a),t.current.value="",n.current.value=""):o({title:"Invalid input",message:"Please enter a valid name and age (non-empty values)."})},children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{id:"username",type:"text",ref:t}),Object(d.jsx)("label",{htmlFor:"age",children:"Age (Years)"}),Object(d.jsx)("input",{id:"age",type:"number",ref:n}),Object(d.jsx)(O,{type:"submit",children:"Add User"})]})})]})},E=n(12),U=n.n(E),I=function(e){return Object(d.jsx)(j,{className:U.a.users,children:Object(d.jsx)("ul",{children:e.users.map((function(e){return Object(d.jsxs)("li",{children:[e.name," (",e.age," years old)"]},e.id)}))})})};var M=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)(N,{onAddUser:function(e,t){c((function(n){return[].concat(Object(o.a)(n),[{name:e,age:t,id:Math.random().toString()}])}))}}),Object(d.jsx)(I,{users:n})]})};s.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(M,{}))}],[[23,1,2]]]);
//# sourceMappingURL=main.4dc08aa0.chunk.js.map