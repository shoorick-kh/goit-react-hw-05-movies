"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[460],{183:function(e,n,t){t.d(n,{Df:function(){return o},TP:function(){return i},IQ:function(){return a},Jh:function(){return u},Ph:function(){return s}});var r="23a6887a211ddc55a1dd6d751fafcbf6",c="https://api.themoviedb.org/3";function o(){return fetch("".concat(c,"/trending/movie/day?api_key=").concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("There is no data!"))}))}function i(e){return fetch("".concat(c,"/movie/").concat(e,"?api_key=").concat(r,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("There is no data!"))}))}function a(e){return fetch("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(r,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("There is no data!"))}))}function u(e){return fetch("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(r,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("There is no data!"))}))}function s(e){return fetch("".concat(c,"/search/movie?api_key=").concat(r,"&language=en-US&page=1&include_adult=false&query=").concat(e)).then((function(e){return e.ok?e.json():Promise.reject(new Error("There is no data!"))}))}},480:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(152),c=t(791),o=t(504),i="HomePage_link__CYdf4",a=t(183),u=t(139),s=t(184);function f(){var e=(0,c.useState)([]),n=(0,r.Z)(e,2),t=n[0],f=n[1],d=(0,c.useState)("idle"),h=(0,r.Z)(d,2),l=h[0],j=h[1],g=(0,c.useState)(),m=(0,r.Z)(g,2),_=m[0],v=m[1];return(0,c.useEffect)((function(){j("pending"),(0,a.Df)().then((function(e){f(e.results),j("resolved")})).catch((function(e){v(e),j("rejected")}))}),[]),"rejected"===l?alert(_):(0,s.jsxs)(s.Fragment,{children:["pending"===l&&(0,s.jsx)(u.Z,{}),"resolved"===l&&(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Trending today"}),(0,s.jsx)("ul",{children:t.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(o.OL,{className:i,to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})]})}}}]);
//# sourceMappingURL=HomePage.cad56142.chunk.js.map