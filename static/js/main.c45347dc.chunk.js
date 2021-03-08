(this["webpackJsonppet-store"]=this["webpackJsonppet-store"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(4),o=n.n(c),a=n(16),r=n(10),i=n(2),s=n(1),u=n(9),l=n.n(u),j=n(0),d=function(e){var t=e.pet,n=e.onEdit,c=e.onRemove;return Object(j.jsxs)("div",{className:"pet",children:[t.photo?Object(j.jsx)("img",{className:"img",src:t.photo,alt:"Animals"}):Object(j.jsx)("div",{className:"no-photo",children:"?"}),Object(j.jsx)("div",{className:"kind",children:t.kind}),Object(j.jsx)("button",{className:"pet-name",onClick:n,children:t.name}),Object(j.jsx)("button",{className:"adopt-btn",onClick:c,children:Object(j.jsx)("span",{role:"img","aria-label":"adopt this pet",children:Object(j.jsx)("img",{className:"adopt-img",src:"https://www.buttonmuseum.org/sites/default/files/CA-adopt-a-pet-button-busy-beaver-button-museum.png",alt:"Adopt"})})})]})},h=n(6),b=n.n(h),p=n(11),m=function(e){var t=e.pet,n=e.onSave,c=e.onCancel,o=t||{name:"",kind:"",photo:null},a=Object(s.useState)(o.name),r=Object(i.a)(a,2),u=r[0],l=r[1],d=Object(s.useState)(o.kind),h=Object(i.a)(d,2),b=h[0],m=h[1],f=Object(s.useState)(o.photo),O=Object(i.a)(f,2),x=O[0],v=O[1],k=Object(s.useState)(null),g=Object(i.a)(k,2),y=g[0],C=g[1],N=Object(s.useState)(!1),S=Object(i.a)(N,2),w=S[0],E=S[1],A=Object(s.useRef)();return Object(j.jsxs)("form",{action:"",className:"pet-form",onSubmit:function(e){e.preventDefault(),E(!0),n(Object(p.a)(Object(p.a)({},t),{},{name:u,kind:b,photo:x})).catch((function(e){console.error(e),C(e),E(!1)}))},children:[x&&Object(j.jsx)("img",{className:"img img-form",alt:"the pet",src:x}),Object(j.jsx)("label",{className:"label-photo",htmlFor:"photo",children:"Photo"}),Object(j.jsx)("input",{type:"file",id:"photo",ref:A,onChange:function(){var e=A.current.files&&A.current.files[0];if(e){var t=new FileReader;t.onloadend=function(){return v(t.result)},t.readAsDataURL(e)}}}),Object(j.jsx)("label",{htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{type:"text",id:"name",value:u,onChange:function(e){return l(e.target.value)}}),y&&y.name&&Object(j.jsx)("div",{className:"error",children:y.name}),Object(j.jsx)("label",{htmlFor:"kind",children:"Kind"}),Object(j.jsxs)("select",{name:"kind",id:"kind",value:b,onChange:function(e){return m(e.target.value)},children:[Object(j.jsx)("option",{value:"",children:"Choose a kind"}),Object(j.jsx)("option",{value:"cat",children:"Cat"}),Object(j.jsx)("option",{value:"dog",children:"Dog"})]}),y&&y.kind&&Object(j.jsx)("div",{className:"error",children:y.kind}),Object(j.jsx)("button",{className:"form-btn",disabled:w,type:"button",onClick:c,children:"Cancel"}),Object(j.jsx)("button",{className:"form-btn",disabled:w,type:"submit",children:"Save"})]})},f=function(e){var t=e.onCancel,n=e.onSave;return Object(j.jsxs)(b.a,{isOpen:!0,onRequestClose:t,children:[Object(j.jsx)("h2",{children:"New Pet"}),Object(j.jsx)(m,{onCancel:t,onSave:n})]})},O=function(e){var t=e.pet,n=e.onCancel,c=e.onSave;return Object(j.jsxs)(b.a,{isOpen:!0,onRequestClose:n,children:[Object(j.jsx)("h2",{children:"Edit Pet"}),Object(j.jsx)(m,{pet:t,onCancel:n,onSave:c})]})},x=function(e){return e.ok?e:e.json().then((function(e){throw e}))},v=function(e){return fetch("https://rocky-hamlet-86164.herokuapp.com/pets",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(x).then((function(e){return e.json()}))},k=function(e){return fetch("https://rocky-hamlet-86164.herokuapp.com/pets/".concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(x).then((function(e){return e.json()}))},g=(n(34),function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(s.useState)(!1),l=Object(i.a)(u,2),h=l[0],b=l[1],p=Object(s.useState)(null),m=Object(i.a)(p,2),g=m[0],y=m[1],C=Object(s.useState)(!1),N=Object(i.a)(C,2),S=N[0],w=N[1];Object(s.useEffect)((function(){w(!0),fetch("https://rocky-hamlet-86164.herokuapp.com/pets").then((function(e){return e.json()})).then((function(e){return c(e)})).finally((function(){return w(!1)}))}),[]);var E=function(){var e=Object(r.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v(t).then((function(e){c([].concat(Object(a.a)(n),[e])),b(!1)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(r.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k(t).then((function(e){c((function(t){return t.map((function(t){return t.id===e.id?e:t}))})),y(null)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(e){var t;window.confirm("Are you sure you want to adopt ".concat(e.name," ?"))&&(t=e,fetch("https://rocky-hamlet-86164.herokuapp.com/pets/".concat(t.id),{method:"DELETE"}).then(x).then((function(e){return e.json()}))).then((function(){c((function(t){return t.filter((function(t){return t.id!==e.id}))}))}))};return Object(j.jsxs)("main",{children:[Object(j.jsx)("h1",{children:"Adopt-a-Pet"}),S?Object(j.jsx)("div",{className:"loading",children:"Loading ..."}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:"img-container",children:n.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(d,{pet:e,onRemove:function(){return R(e)},onEdit:function(){return y(e)}})},e.id)}))}),Object(j.jsx)("button",{className:"add-a-pet",onClick:function(){return b(!0)},children:" Add a pet "}),Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("p",{class:"footer-text",children:["Copyright @2021 | Designed With \u2764\u2764 by ",Object(j.jsx)("a",{href:"https://www.linkedin.com/in/mohd-maqbool-82a697142/",children:"Mohd Maqbool"})]})})]}),h&&Object(j.jsx)(f,{onCancel:function(){return b(!1)},onSave:E}),g&&Object(j.jsx)(O,{pet:g,onCancel:function(){return y(null)},onSave:A})]})});l.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.c45347dc.chunk.js.map