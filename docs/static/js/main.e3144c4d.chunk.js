(this["webpackJsonpestante-video-juegos"]=this["webpackJsonpestante-video-juegos"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(8),a=n.n(c),s=n(2),i=n(0),u=function(e){var t="Buscador de Video Juegos",n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],u=c[1];return Object(r.useEffect)((function(){for(var e=function(e){setTimeout((function(){u((function(n){return n+t[e]}))}),20*e)},n=0;n<t.length;n++)e(n)}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("h1",{children:a})})},o=n(9),l=n(3),j=n.n(l),m=n(6),d=function(){var e=Object(m.a)(j.a.mark((function e(t){var n,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.rawg.io/api/games?page_size=5&search=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.next=8,r.results.map((function(e){return e.name}));case 8:return c=e.sent,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.categoria,n=e.setInput,c=Object(r.useRef)(!0),a=Object(r.useState)([]),u=Object(s.a)(a,2),o=u[0],l=u[1],j=function(e){n(e.target.innerText)};return Object(r.useEffect)((function(){return function(){c.current=!1}}),[]),Object(r.useEffect)((function(){t.length%2==0&&(!0===c.current&&d(t).then((function(e){l(e)})).catch((function(e){return console.warn})))}),[t]),Object(i.jsxs)("div",{className:"d-flex flex-column ",children:[Object(i.jsx)("h2",{className:"mt-2",children:"Busquedas sugeridas."}),o.map((function(e){return Object(i.jsx)("a",{className:"btn text-white  mx-auto",onClick:j,children:e},e)}))]})},b=function(e){var t=e.setLista,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],u=c[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("form",{className:"form-group mt-3",onSubmit:function(e){e.preventDefault(),a.length>2&&t((function(e){return[a].concat(Object(o.a)(e))}))},children:[Object(i.jsx)("i",{className:"fas fa-search d-inline mx-2"}),Object(i.jsx)("input",{className:"form-control mx-auto w-75 d-inline",autoComplete:"off",onChange:function(e){u(e.target.value)},type:"text",name:"insJuego",value:a,placeholder:"Tu Juego Favorito"})]}),a.length>5&&Object(i.jsx)(f,{categoria:a,setInput:u})]})},p=function(){var e=Object(m.a)(j.a.mark((function e(t){var n,r,c,a,s,i,u,o,l,m,d,f,b,p,h;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.rawg.io/api/games?page_size=5&search=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.next=8,r.results[0];case 8:return c=e.sent,a=c.slug,s=c.name,e.next=13,fetch("https://api.rawg.io/api/games/".concat(a));case 13:return i=e.sent,e.next=16,i.json();case 16:return u=e.sent,o=u.genres.map((function(e){return e.name})),l=u.developers[0].name,m=u.publishers[0].name,d=u.platforms.map((function(e){return e})),f=d.map((function(e){return e.platform.name})),e.next=24,u;case 24:return b=e.sent,p=b.description_raw,h=b.background_image,e.abrupt("return",{name:s,description_raw:p,background_image:h,developers:l,publisher:m,platforms2:f,genres:o});case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=Object(r.useRef)(!0),n=Object(r.useState)({data:"",loading:!0}),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){return function(){t.current=!1,console.log(t.current)}}),[]),Object(r.useEffect)((function(){p(e).then((function(n){var r=n.name,c=n.description_raw,a=n.background_image,s=n.developers,u=n.publisher,o=n.platforms2,l=n.genres;setTimeout((function(){t.current&&i({name:r,description:c,background:a,developers:s,publisher:u,platfforms:o,genres:l,loading:!1},[e])}),1e3)}))}),[e]),a},x=function(e){var t=e.titulo,n=h(t),r=n.name,c=n.description,a=n.background,s=n.loading,u=n.developers,o=n.publisher,l=n.platfforms,j=n.genres;return Object(i.jsx)(i.Fragment,{children:s?Object(i.jsx)("div",{className:"alert alert-primary mt-3 animate__animated animate__flash animate__infinite infinite",role:"alert",children:"Loading..."}):Object(i.jsxs)("div",{className:"row bord mt-5",children:[Object(i.jsx)("div",{className:"col-xl-5 transparente  animate__animated animate__bounce",children:Object(i.jsxs)("div",{className:"card-body ",children:[Object(i.jsx)("h1",{className:"card-title",children:r}),Object(i.jsx)("img",{className:"w-100",src:a}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{className:"mt-3",children:"Ficha Tecnica"}),Object(i.jsx)("hr",{}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[" Publisher: ",o," "]}),Object(i.jsxs)("li",{children:[" Developer: ",u]}),Object(i.jsxs)("li",{children:["Genres: ",j.map((function(e){return"".concat(e,", ")}))," "]}),Object(i.jsxs)("li",{children:["Platforms: ",l.map((function(e){return"".concat(e,", ")}))]})]})]})]})}),Object(i.jsx)("div",{className:"col-xl-7  transparente animate__animated animate__bounce",children:Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("h1",{className:"mt-3",children:"Description"}),Object(i.jsx)("hr",{}),Object(i.jsx)("p",{className:"divP",children:c})]})})]})})},O=(n(16),function(e){var t=Object(r.useState)(["Kingdom hearts recoded","God eater 3"]),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(i.jsxs)("div",{className:"container-xxl text-center mt-5",children:[Object(i.jsx)(u,{}),Object(i.jsx)(b,{setLista:a}),Object(i.jsx)("div",{className:"row-xxl ",children:c.map((function(e){return Object(i.jsx)(x,{titulo:e},e)}))})]})}),g=document.getElementById("root");a.a.render(Object(i.jsx)(O,{}),g)}},[[17,1,2]]]);
//# sourceMappingURL=main.e3144c4d.chunk.js.map