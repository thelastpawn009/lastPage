(this.webpackJsonpdojo=this.webpackJsonpdojo||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(16),j=c.n(r),i=(c(22),c(6)),l=c(2),o=c(0),a=function(){return Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsx)("h1",{children:Object(o.jsx)(i.b,{to:"/",children:"The Last Page"})}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)(i.b,{to:"/",children:"Home"}),Object(o.jsx)(i.b,{to:"/create",children:"New Blog"})]})]})},b=function(e){var t=e.blogs,c=e.title;return Object(o.jsxs)("div",{className:"blogs-list",children:[Object(o.jsx)("h2",{children:c}),t.map((function(e){return Object(o.jsx)("div",{className:"blog-preview",children:Object(o.jsxs)(i.b,{to:"/blogs/".concat(e.id),children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsx)("p",{children:e.author})]})},e.id)}))]})},d=c(8),h=function(e){var t=Object(n.useState)(null),c=Object(d.a)(t,2),s=c[0],r=c[1],j=Object(n.useState)(null),i=Object(d.a)(j,2),l=i[0],o=i[1],a=Object(n.useState)(!0),b=Object(d.a)(a,2),h=b[0],O=b[1];return Object(n.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("problem fetching that data");return e.json()})).then((function(e){O(!1),r(e)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(O(!1),o(e.message))})),function(){return t.abort()}}),[e]),{data:s,error:l,ispending:h}},O=function(){var e=h("http://localhost:8000/blogs"),t=e.data,c=e.error,n=e.ispending;return Object(o.jsxs)("div",{className:"home",children:[c&&Object(o.jsx)("div",{children:c}),n&&Object(o.jsx)("div",{children:"loading...."}),t&&Object(o.jsx)(b,{blogs:t,title:"ALL BLOGS"})]})},u=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),j=Object(d.a)(r,2),i=j[0],a=j[1],b=Object(n.useState)("Yoshie"),h=Object(d.a)(b,2),O=h[0],u=h[1],x=Object(n.useState)(!1),f=Object(d.a)(x,2),g=f[0],p=f[1],v=Object(l.f)();return Object(o.jsxs)("div",{className:"create",children:[Object(o.jsx)("h2",{children:"Add a New Blog"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:i,author:O};p(!0),fetch("http://localhost:8000/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){p(!1),v.push("/")}))},children:[Object(o.jsx)("label",{children:"Blog Title : "}),Object(o.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){s(e.target.value)}}),Object(o.jsx)("label",{children:"Body :"}),Object(o.jsx)("textarea",{required:!0,value:i,onChange:function(e){a(e.target.value)}}),Object(o.jsx)("label",{children:"Author : "}),Object(o.jsxs)("select",{value:O,onChange:function(e){u(e.target.value)},children:[Object(o.jsx)("option",{value:"Author 1",children:"Author 1"}),Object(o.jsx)("option",{value:"Author 2",children:"Author 2"}),Object(o.jsx)("option",{value:"Author 3",children:"Author 3"})]}),!g&&Object(o.jsx)("button",{children:"Add Blog"}),g&&Object(o.jsx)("button",{disabled:!0,children:"Adding...."})]})]})},x=function(){var e=Object(l.f)(),t=Object(l.g)().id,c=h("http://localhost:8000/blogs/"+t),n=c.data,s=c.error,r=c.ispending;return Object(o.jsxs)("div",{className:"blog-details",children:[r&&Object(o.jsx)("div",{children:"loading...."}),s&&Object(o.jsx)("div",{children:s}),n&&Object(o.jsxs)("article",{children:[Object(o.jsx)("h2",{children:n.title}),Object(o.jsxs)("p",{children:["written by ",n.author]}),Object(o.jsx)("div",{children:n.body}),Object(o.jsx)("button",{onClick:function(){fetch("http://localhost:8000/blogs/"+n.id,{method:"DELETE"}).then((function(){e.push("/")}))},children:"Delete"})]})]})},f=function(){return Object(o.jsxs)("div",{className:"notFound",children:[Object(o.jsx)("h2",{children:"ERROR 404 !!!"}),Object(o.jsx)("p",{children:"Sorry page not found"}),Object(o.jsx)("p",{className:"link",children:Object(o.jsx)(i.b,{to:"/",children:"Back to Home"})})]})};var g=function(){return Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(a,{}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",children:Object(o.jsx)(O,{})}),Object(o.jsx)(l.a,{path:"/create",children:Object(o.jsx)(u,{})}),Object(o.jsx)(l.a,{path:"/blogs/:id",children:Object(o.jsx)(x,{})}),Object(o.jsx)(l.a,{path:"*",children:Object(o.jsx)(f,{})})]})})]})})};j.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.889b58c4.chunk.js.map