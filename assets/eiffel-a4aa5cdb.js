import{g as l}from"./index-6d3f640d.js";function d(e,a){for(var n=0;n<a.length;n++){const r=a[n];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const i=Object.getOwnPropertyDescriptor(r,t);i&&Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o,s;function u(){if(s)return o;s=1,o=e,e.displayName="eiffel",e.aliases=[];function e(a){a.languages.eiffel={comment:/--.*/,string:[{pattern:/"([^[]*)\[[\s\S]*?\]\1"/,greedy:!0},{pattern:/"([^{]*)\{[\s\S]*?\}\1"/,greedy:!0},{pattern:/"(?:%\s+%|%.|[^%"\r\n])*"/,greedy:!0}],char:/'(?:%.|[^%'\r\n])+'/,keyword:/\b(?:across|agent|alias|all|and|attached|as|assign|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,boolean:/\b(?:True|False)\b/i,"class-name":{pattern:/\b[A-Z][\dA-Z_]*\b/,alias:"builtin"},number:[/\b0[xcb][\da-f](?:_*[\da-f])*\b/i,/(?:\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*|\d(?:_*\d)*\.?/i],punctuation:/:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,operator:/\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/}}return o}var f=u();const c=l(f),b=d({__proto__:null,default:c},[f]);export{b as e};
