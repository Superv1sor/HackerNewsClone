(this.webpackJsonphackernewsclone=this.webpackJsonphackernewsclone||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),r=c.n(s),a=c(4),i=c.n(a),l=c(2);function o(e){var t=e.article,s=(e.index,c(10)),r=t.created;console.log("Created: "+t.created),console.log("TS: "+r);var a=s.unix(r).fromNow();return Object(n.jsx)("article",{className:"Story",children:Object(n.jsx)("div",{className:"Story_container",children:Object(n.jsxs)("div",{className:"Story_data",children:[Object(n.jsxs)("div",{className:"Story_title",children:[Object(n.jsx)("a",{href:"",children:Object(n.jsx)("span",{children:t.text})}),Object(n.jsxs)("a",{href:t.url,target:"_blank",className:"Story_link",children:["(",t.url,")"]})]}),Object(n.jsxs)("div",{className:"Story_meta",children:[Object(n.jsx)("span",{children:Object(n.jsxs)("a",{href:"",children:[t.points," points"]})}),Object(n.jsx)("span",{className:"Story_separator",children:"|"}),Object(n.jsx)("span",{children:Object(n.jsx)("a",{href:"",children:Object(n.jsx)("span",{children:t.author})})}),Object(n.jsx)("span",{className:"Story_separator",children:"|"}),Object(n.jsxs)("span",{children:[Object(n.jsx)("a",{href:""}),a]}),Object(n.jsx)("span",{className:"Story_separator",children:"|"}),Object(n.jsx)("span",{children:Object(n.jsxs)("a",{href:"",children:[t.comments," comments"]})})]})]})})})}function j(){var e=Object(s.useState)("/index.css"),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(n.jsx)("div",{children:Object(n.jsx)("button",{type:"button",onClick:function(){r("/index.css"===c?"/style2.css":"/index.css"),document.getElementById("style-edit").href="/HackerNewsClone"+c},children:"Click to update stylesheet"})})}function d(e){var t=e.setQuery,c=Object(s.useState)(""),r=Object(l.a)(c,2),a=r[0],i=r[1];return Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a&&t(a)},children:[Object(n.jsx)("input",{type:"search",placeholder:"Search stories by title, url or author",className:"SearchInput",value:a,onChange:function(e){return i(e.target.value)}}),Object(n.jsx)("button",{className:"searchButton",children:"Search"})]})}function h(e){var t=e.setQuery;return Object(n.jsx)("header",{className:"SearchHeader container",children:Object(n.jsxs)("div",{className:"SearchHeader_search",children:[Object(n.jsxs)("a",{className:"SearchHeader_logo",href:"/",children:[Object(n.jsx)("img",{src:"//d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png",alt:"Logo"}),Object(n.jsxs)("div",{className:"SearchHeader_label",children:["Search",Object(n.jsx)("br",{}),"H",Object(n.jsx)("span",{children:"acker "}),"N",Object(n.jsx)("span",{children:"ews "}),"Clone"]})]}),Object(n.jsxs)("div",{className:"SearchHeader_container",children:[Object(n.jsx)("span",{className:"SearchIcon",children:Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(n.jsx)("circle",{cx:"11",cy:"11",r:"8"}),Object(n.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),Object(n.jsx)(d,{setQuery:t}),Object(n.jsx)(j,{})]})]})})}c(12);var u=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(s.useState)("react"),i=Object(l.a)(a,2),j=i[0],d=i[1],u=Object(s.useState)(!1),b=Object(l.a)(u,2),x=b[0],O=b[1],m=function(e){O(!0);var t="https://hn.algolia.com/api/v1/search?query=".concat(j);fetch(t).then((function(e){return e.json()})).then((function(t){O(!1);var c=t.hits.map((function(e){return{text:e.title,url:e.url,points:e.points,comments:e.num_comments,author:e.author,created:e.created_at_i,isCompleted:!1}})).sort((function(e,t){return e.num_comments>t.num_comments?-1:1}));e(c),d(t.query)})).catch((function(e){O(!1),alert(e)}))};return Object(s.useEffect)((function(){m(r);var e=setInterval((function(){m(r)}),3e5);return function(){return clearInterval(e)}}),[j]),Object(n.jsx)("div",{className:"default light",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(h,{setQuery:d}),Object(n.jsx)("div",{className:"loader-container",style:x?{display:"block"}:{display:"none"},children:Object(n.jsx)("div",{className:"loader"})}),Object(n.jsx)("section",{className:"SearchResults",style:x?{display:"none"}:{display:"block"},children:Object(n.jsxs)("div",{className:"SearchResults_container",children:[Object(n.jsx)("div",{className:"search-term",children:c.length?"".concat(c.length,' News about "').concat(j,'": '):'No news found for "'.concat(j,'"')}),c.map((function(e,t){return Object(n.jsx)(o,{index:t,article:e},t)}))]})})]})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(u,{})}),document.getElementById("root")),b()}},[[13,1,2]]]);
//# sourceMappingURL=main.6d6d6d4a.chunk.js.map