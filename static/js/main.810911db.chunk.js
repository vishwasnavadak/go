(this.webpackJsonpgo=this.webpackJsonpgo||[]).push([[0],{41:function(e,n,a){e.exports=a(54)},48:function(e,n,a){},54:function(e,n,a){"use strict";a.r(n);var r=a(1),t=a.n(r),l=a(29),c=a.n(l),o=a(14),s=a(39),i=a(40),u=a(7),h=a(36),p=a(13),m=a(30),d=a(31),g=a.n(d),E=a(22),f=a(20);function w(){var e=Object(m.a)(["\n  query urlshortener($url: String!) {\n    urlshortener(where: { short_url: { _eq: $url } }) {\n      long_url\n    }\n  }\n"]);return w=function(){return e},e}var b=g()(w()),v=function(e){var n,a=Object(E.a)(b,{skip:!e.match,variables:{url:e.match.params.shorturl}}),r=a.loading,l=a.error,c=a.data;if(r)n=t.a.createElement("p",{className:"loading"},t.a.createElement("span",{className:"spinner","aria-label":"Redirecting Spinner"},t.a.createElement(f.b,null)),t.a.createElement("span",{className:"loading-text"},"Redirecting..."));else if(l)console.log("Error: ",l),n=t.a.createElement("p",{className:"spinner loading"},t.a.createElement("span",{"aria-label":"Loading Spinner"},t.a.createElement(f.a,null)));else if(c&&c.urlshortener&&c.urlshortener.length){var o=c.urlshortener[0].long_url;window.location.href=o}else 0===c.urlshortener.length&&(n=t.a.createElement("p",{className:"spinner loading"},t.a.createElement("span",{"aria-label":"Loading Spinner"},t.a.createElement(f.a,null))),window.location.href="https://vishwas.tech");return t.a.createElement("div",{className:"container"},n)},N=(a(48),function(){return t.a.createElement(h.a,{basename:"/"},t.a.createElement(p.c,null,t.a.createElement(p.a,{exact:!0,path:"/",component:function(){return window.location.href="https://vishwas.tech",null}}),t.a.createElement(p.a,{path:"/:shorturl",component:v})))}),S=new o.a({link:Object(i.a)({uri:"https://url-shortner-vishwas-tech.herokuapp.com/v1/graphql",headers:{"x-hasura-admin-secret":"05PPDSrxP#qfRz3YGiSu","content-type":"application/json"}}),cache:new s.a});c.a.render(t.a.createElement(u.a,{client:S},t.a.createElement(N,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.810911db.chunk.js.map