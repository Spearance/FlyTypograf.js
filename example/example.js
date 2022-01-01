(()=>{"use strict";function e(e,t){i(e,t),t.add(e)}function t(e,t,a){i(e,t),t.set(e,a)}function i(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function a(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i}function n(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,r(e,t,"set"),i),i}function s(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,r(e,t,"get"))}function r(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}var l=new WeakMap,p=new WeakMap,h=new WeakMap,c=new WeakMap,g=new WeakMap,o=new WeakMap,u=new WeakMap,$=new WeakMap,w=new WeakMap,d=new WeakSet,f=new WeakSet,b=new WeakSet;function v(e){e.forEach((e=>{n(this,p,s(this,p).replace(e.pattern,e.replace))}))}function m(){if(this._isContentEditable){this._element.focus();let e=document.getSelection().getRangeAt(0),t=e.cloneRange();return t.selectNodeContents(this._element),t.setEnd(_rang.endContainer,e.endOffset),t.toString().length}n(this,h,this._element.selectionStart)}function E(e){if(this._isContentEditable)return this._element.focus(),void document.getSelection().collapse(this._element,e);this._element.setSelectionRange(e,e)}const k=document.querySelector("#typograf"),_=new class{constructor(i,a){e(this,b),e(this,f),e(this,d),t(this,l,{writable:!0,value:""}),t(this,p,{writable:!0,value:""}),t(this,h,{writable:!0,value:0}),t(this,c,{writable:!0,value:"«"}),t(this,g,{writable:!0,value:"»"}),t(this,o,{writable:!0,value:{literals:{"1/2":"½","1/3":"⅓","1/4":"¼","1/5":"⅕","1/6":"⅙","1/7":"⅐","1/8":"⅛","1/9":"⅑","1/10":"⅒","2/3":"⅔","2/5":"⅖","3/4":"¾","3/5":"⅗","3/8":"⅜","4/5":"⅘","5/6":"⅚","5/8":"⅝","7/8":"⅞"},str:function(){return Object.values(this.literals).join("")}}}),t(this,u,{writable:!0,value:{literals:{0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹","—":"⁻","+":"⁺","=":"⁼","(":"⁽",")":"⁾",o:"°",о:"°",'"':"″"},str:function(){return Object.values(this.literals).join("")}}}),t(this,$,{writable:!0,value:[{pattern:/\u00A0 | \u00A0/g,replace:"  "},{pattern:/\u202F | \u202F/g,replace:" "},{pattern:/[\u00A0\u202F]+/g,replace:" "},{pattern:/[—–−]/g,replace:"-"}]}),t(this,w,{writable:!0,value:[{pattern:/(?<= |^|\d)-(?=\d)/g,replace:"−"},{pattern:/(?<![!])--(?!>)/g,replace:()=>(n(this,h,+s(this,h)-1),"-")},{pattern:/\+\/-/g,replace:()=>(n(this,h,s(this,h)-2),"±")},{pattern:/(?<=(?:\d|[a-z])\s*)-:-/gi,replace:()=>(n(this,h,s(this,h)-2),"÷")},{pattern:/(?<= |^|>|[^-!а-яёa-z0-9])-(?= |$|[^-])/gim,replace:"—"},{pattern:/(?<!^|[":;.!?…, ]) —(?!-)/gm,replace:" —"},{pattern:/([ ]+)—([ ]*?)([a-zа-яё0-9])/gim,replace:(e,t,i,a)=>(n(this,h,s(this,h)-((t.length?t.length-1:0)+(i.length?i.length-1:0))),` — ${a}`)},{pattern:new RegExp(`(\\d|[${s(this,o).str()}])\\s?[-—]\\s?(\\d|[${s(this,o).str()}])`,"g"),replace:(e,t,i)=>(n(this,h,s(this,h)-(e.length-`${t}−${i}`.length)),`${t}−${i}`)},{pattern:/\([cс]\)/gi,replace:()=>(n(this,h,s(this,h)-2),"©")},{pattern:/\(r\)/gi,replace:()=>(n(this,h,s(this,h)-2),"®")},{pattern:/\(tm\)/gi,replace:()=>(n(this,h,s(this,h)-3),"™")},{pattern:/\(р\)/gi,replace:()=>(n(this,h,s(this,h)-2),"₽")},{pattern:/(?<![.…])\.{3}/g,replace:()=>(n(this,h,s(this,h)-2),"…")},{pattern:/…(\.+)/g,replace:(e,t)=>(n(this,h,s(this,h)+2),`...${t}`)},{pattern:/(\d)[xх](\d)/gi,replace:"$1×$2"},{pattern:/\b([123457]\/(?:[2-9]|10))\b/g,replace:(e,t)=>(s(this,o).literals[`${t}`]&&n(this,h,s(this,h)-2),s(this,o).literals[t]?s(this,o).literals[t]:t)},{pattern:new RegExp(`([${s(this,o).str()}])(\\d)`,"g"),replace:(e,t,i)=>(n(this,h,s(this,h)+2),`${Object.entries(s(this,o).literals).find((e=>e[1]===t))[0]}${i}`)},{pattern:/(\S)\^([0-9—+-=\(\)]|[oо"])/gi,replace:(e,t,i)=>(n(this,h,+s(this,h)-1),`${t}${s(this,u).literals[i]?s(this,u).literals[i]:i}`)},{pattern:new RegExp(`([${s(this,u).str()}])(?![ .])([0-9+-=()])`,"g"),replace:(e,t,i)=>`${t}${s(this,u).literals[i]}`},{pattern:new RegExp(` ([${s(this,u).str()}])`,"g"),replace:(e,t)=>{console.log(s(this,u).str());for(let e in s(this,u).literals)if(s(this,u).literals[e]===t)return` ${e}`}},{pattern:/["»](\S)/gi,replace:`${s(this,c)}$1`},{pattern:/(\S)["«]/gi,replace:`$1${s(this,g)}`},{pattern:new RegExp(`"(${s(this,c)}[a-zа-яё0-9…])`,"ig"),replace:`${s(this,c)}$1`},{pattern:new RegExp(`([a-zа-яё0-9…?!]${s(this,g)})"`,"ig"),replace:`$1${s(this,g)}`},{pattern:new RegExp(`([-a-z0-9]+=)[${s(this,c)}${s(this,g)}]([^${s(this,c)}${s(this,g)}]*?)`,"ig"),replace:'$1"$2'},{pattern:new RegExp(`([-a-z0-9]+=)["]([^>${s(this,c)}${s(this,g)}]*?)[${s(this,c)}${s(this,g)}]`,"ig"),replace:'$1"$2"'},{pattern:/\b'([std]|ve|ll|clock)\b/gi,replace:"’$1"},{pattern:new RegExp(`([0-6]?[0-9])['′]([0-6]?[0-9])?(\\d+)[${s(this,g)}"]`,"g"),replace:"$1′$2$3″"},{pattern:/((?:[ \u00A0]|>|^|\t)[a-zа-яё]{1,2}) /gim,replace:"$1 "},{pattern:/-(то|ка)\u00A0/gi,replace:"-$1 "},{pattern:/(?:\s|\t|[\u00A0 ])(же?|л[иь]|бы?|ка)([.,!?:;])?\u00A0/gi,replace:" $1$2 "}]}),this._element=i,this._isContentEditable=!0===this._element.contentEditable,a&&(n(this,c,a.leftQuote||"«"),n(this,g,a.rightQuote||"«"))}get result(){return s(this,p)}process(){n(this,p,this._element.value),a(this,d,v).call(this,s(this,$)),a(this,f,m).call(this),a(this,d,v).call(this,s(this,w)),this._element.value=s(this,p),a(this,b,E).call(this,s(this,h))}}(k);k.addEventListener("input",(()=>{_.process()}));const S=document.querySelector("#highLight");k.addEventListener("keyup",(()=>{const e=[];S.innerHTML=`\n\t\t<p>\n\t\t\t${k.value.replace(/\bon[a-z]+="?[^">]+"?/gi,"").replace(/="?javascript:/gi,'="#').replace(/(<\/?[a-z]+[^>]*?>)/gi,((t,i)=>(e.push(i),"<*>"))).replace(/\n{2,}/g,"</p><p>").replace(/\n/g,"<br />").replace(/\u00a0/g,'<span class="hlg">&nbsp;</span>').replace(/([…©®™₽×—–−„“«»″′’½⅓¼⅕⅙⅛⅔⅖¾⅗⅜⅘⅚⅝⅞±÷⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺⁼⁽⁾°]+)/gi,'<span class="hlb">$1</span>').replaceAll("<*>",(()=>{const t=e[0];return e.splice(0,1),t}))}\n\t\t</p>\n\t`}))})();