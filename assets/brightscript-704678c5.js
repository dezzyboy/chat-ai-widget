import{g as c}from"./index-e906c83d.js";function b(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var s,a;function d(){if(a)return s;a=1,s=e,e.displayName="brightscript",e.aliases=[];function e(t){t.languages.brightscript={comment:/(?:\brem|').*/i,"directive-statement":{pattern:/(^[\t ]*)#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if).*/im,lookbehind:!0,alias:"property",inside:{"error-message":{pattern:/(^#error).+/,lookbehind:!0},directive:{pattern:/^#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if)/,alias:"keyword"},expression:{pattern:/[\s\S]+/,inside:null}}},property:{pattern:/([\r\n{,][\t ]*)(?:(?!\d)\w+|"(?:[^"\r\n]|"")*"(?!"))(?=[ \t]*:)/,lookbehind:!0,greedy:!0},string:{pattern:/"(?:[^"\r\n]|"")*"(?!")/,greedy:!0},"class-name":{pattern:/(\bAs[\t ]+)\w+/i,lookbehind:!0},keyword:/\b(?:As|Dim|Each|Else|Elseif|End|Exit|For|Function|Goto|If|In|Print|Return|Step|Stop|Sub|Then|To|While)\b/i,boolean:/\b(?:false|true)\b/i,function:/\b(?!\d)\w+(?=[\t ]*\()/,number:/(?:\b\d+(?:\.\d+)?(?:[ed][+-]\d+)?|&h[a-f\d]+)\b[%&!#]?/i,operator:/--|\+\+|>>=?|<<=?|<>|[-+*/\\<>]=?|[:^=?]|\b(?:and|mod|not|or)\b/i,punctuation:/[.,;()[\]{}]/,constant:/\b(?:LINE_NUM)\b/i},t.languages.brightscript["directive-statement"].inside.expression.inside=t.languages.brightscript}return s}var p=d();const u=c(p),l=b({__proto__:null,default:u},[p]);export{l as b};
