import{g as m}from"./index-e906c83d.js";function k(a,o){for(var n=0;n<o.length;n++){const t=o[n];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in a)){const i=Object.getOwnPropertyDescriptor(t,e);i&&Object.defineProperty(a,e,i.get?i:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var l,h;function x(){if(h)return l;h=1,l=a,a.displayName="qsharp",a.aliases=["qs"];function a(o){(function(n){function t(r,s){return r.replace(/<<(\d+)>>/g,function(u,w){return"(?:"+s[+w]+")"})}function e(r,s,u){return RegExp(t(r,s),u||"")}function i(r,s){for(var u=0;u<s;u++)r=r.replace(/<<self>>/g,function(){return"(?:"+r+")"});return r.replace(/<<self>>/g,"[^\\s\\S]")}var p={type:"Adj BigInt Bool Ctl Double false Int One Pauli PauliI PauliX PauliY PauliZ Qubit Range Result String true Unit Zero",other:"Adjoint adjoint apply as auto body borrow borrowing Controlled controlled distribute elif else fail fixup for function if in internal intrinsic invert is let mutable namespace new newtype open operation repeat return self set until use using while within"};function q(r){return"\\b(?:"+r.trim().replace(/ /g,"|")+")\\b"}var c=RegExp(q(p.type+" "+p.other)),v=/\b[A-Za-z_]\w*\b/.source,g=t(/<<0>>(?:\s*\.\s*<<0>>)*/.source,[v]),d={keyword:c,punctuation:/[<>()?,.:[\]]/},f=/"(?:\\.|[^\\"])*"/.source;n.languages.qsharp=n.languages.extend("clike",{comment:/\/\/.*/,string:[{pattern:e(/(^|[^$\\])<<0>>/.source,[f]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e(/(\b(?:as|open)\s+)<<0>>(?=\s*(?:;|as\b))/.source,[g]),lookbehind:!0,inside:d},{pattern:e(/(\bnamespace\s+)<<0>>(?=\s*\{)/.source,[g]),lookbehind:!0,inside:d}],keyword:c,number:/(?:\b0(?:x[\da-f]+|b[01]+|o[0-7]+)|(?:\B\.\d+|\b\d+(?:\.\d*)?)(?:e[-+]?\d+)?)l?\b/i,operator:/\band=|\bor=|\band\b|\bnot\b|\bor\b|<[-=]|[-=]>|>>>=?|<<<=?|\^\^\^=?|\|\|\|=?|&&&=?|w\/=?|~~~|[*\/+\-^=!%]=?/,punctuation:/::|[{}[\];(),.:]/}),n.languages.insertBefore("qsharp","number",{range:{pattern:/\.\./,alias:"operator"}});var b=i(t(/\{(?:[^"{}]|<<0>>|<<self>>)*\}/.source,[f]),2);n.languages.insertBefore("qsharp","string",{"interpolation-string":{pattern:e(/\$"(?:\\.|<<0>>|[^\\"{])*"/.source,[b]),greedy:!0,inside:{interpolation:{pattern:e(/((?:^|[^\\])(?:\\\\)*)<<0>>/.source,[b]),lookbehind:!0,inside:{punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-qsharp",inside:n.languages.qsharp}}},string:/[\s\S]+/}}})})(o),o.languages.qs=o.languages.qsharp}return l}var y=x();const j=m(y),_=k({__proto__:null,default:j},[y]);export{_ as q};
