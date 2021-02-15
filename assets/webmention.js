/*
MIT License

Copyright (c) 2018-2020 fluffy (https://beesbuzz.biz/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
!function(){"use strict";function e(e,t){return document.currentScript.getAttribute("data-"+e)||t}var t=e("page-url",window.location.href.replace(/#.*$/,"")),o=e("add-urls",void 0),n=e("id","webmentions"),r=e("wordcount"),a=e("max-webmentions",30),i=e("prevent-spoofing")?"wm-source":"url",s=e("sort-by","published"),u=e("sort-dir","up"),c=e("comments-are-reactions"),l={"in-reply-to":"replied","like-of":"liked","repost-of":"reposted","bookmark-of":"bookmarked","mention-of":"mentioned",rsvp:"RSVPed","follow-of":"followed"},f={"in-reply-to":"","like-of":"","repost-of":"","bookmark-of":"","mention-of":"",rsvp:"","follow-of":""},p={yes:"",no:"",interested:"",maybe:""};function h(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function m(e,t){var o=h(e.author&&e.author.name?e.author.name:e.url.split("/")[2]),n=l[e["wm-property"]]||"reacted";!t&&e.content&&e.content.text&&(n+=": "+g(e));var r='<a class="reaction" rel="nofollow ugc" title="'+o+" "+n+'" href="'+e[i]+'">';return e.author&&e.author.photo&&(r+='<img src="'+h(e.author.photo)+'">'),r+=f[e["wm-property"]]||"💥",e.rsvp&&p[e.rsvp]&&(r+="<sub>"+p[e.rsvp]+"</sub>"),r+="</a>"}function d(e){return e.substr(e.indexOf("//"))}function v(e){var t=[],o={};return e.forEach((function(e){var n=d(e.url);o[n]||(t.push(e),o[n]=!0)})),t}function g(e){var t=h(e.content.text);if(r){var o=t.replace(/\s+/g," ").split(" ",r+1);o.length>r&&(o[r-1]+="&hellip;",t=(o=o.slice(0,r)).join(" "))}return t}window.addEventListener("load",(function(){var e=document.getElementById(n);if(e){var r=[d(t)];o&&o.split("|").forEach((function(e){r.push(d(e))}));var l="https://webmention.io/api/mentions.jf2?per-page="+a+"&sort-by="+s+"&sort-dir="+u;r.forEach((function(e){l+="&target[]="+encodeURIComponent("http:"+e)+"&target[]="+encodeURIComponent("https:"+e)})),function(e,t){if(window.fetch)window.fetch(e).then((function(e){return e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error(e.statusText))})).then((function(e){return e.json()})).then(t).catch((function(e){console.error("Request failed",e)}));else{var o=new XMLHttpRequest;o.onload=function(e){t(JSON.parse(e))},o.onerror=function(e){console.error("Request failed",e)}}}(l,(function(t){var o="",n=[],r=[];c&&(n=r);var a={"in-reply-to":n,"like-of":r,"repost-of":r,"bookmark-of":r,"mention-of":n,rsvp:n};t.children.forEach((function(e){var t=a[e["wm-property"]];t&&t.push(e)})),n.length>0&&n!==r&&(o+=function(e){var t="<h2>"+e.length+" Response"+(e.length>1?"s":"")+'</h2><ul class="comments">';return e.forEach((function(e){var o,n;t+="<li>",t+=m(e,!0),t+=' <a class="source" rel="nofollow ugc" href="'+e[i]+'">',e.author&&e.author.name?t+=h(e.author.name):t+=h(e.url.split("/")[2]),t+="</a>: ",e.name?(o="name",n=e.name):e.content&&e.content.text?(o="text",n=g(e)):(o="name",n="(mention)"),t+='<span class="'+o+'">'+n+"</span>",t+="</li>"})),t+="</ul>"}(v(n))),r.length>0&&(o+=function(e){var t="<h2>"+e.length+" Reaction"+(e.length>1?"s":"")+'</h2><ul class="reacts">';return e.forEach((function(e){t+=m(e)})),t}(v(r))),e.innerHTML=o}))}}))}();
