import{s as e,r as l,j as t}from"./index-24048fec.js";const d=e.div`
  position: relative; /* For the copy button positioning */
  padding: 20px;
  background: #000;
`,x=e.div`
  color: #f8f8f8;
  overflow-x: auto;
  white-space: pre;
`,u=e.div`
  display: table-row;
`,h=e.span`
  display: table-cell;
  text-align: right;
  padding-right: 10px;
  user-select: none;
  opacity: 0.5;
`,g=e.span`
  display: table-cell;
`,y=e.button`
  position: absolute;
  top: 8px;
  right: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #000;
  margin-top: 3px;
  border-radius: 4px;
  height: 26px;
  width: 26px;
  padding: 2px;
`,b=({token:r})=>{const[a,n]=l.useState(!1),p=async()=>{try{await navigator.clipboard.writeText(s),n(!0),setTimeout(()=>n(!1),2e3)}catch(o){console.error("Failed to copy!",o)}},s=r.value,c=s.split(`
`).map((o,i)=>t.jsxs(u,{children:[t.jsx(h,{children:i+1}),t.jsx(g,{children:o})]},i));return t.jsxs(d,{children:[t.jsx(y,{onClick:()=>{p()},children:a?"✅":"📋"}),t.jsx(x,{children:c})]})};export{b as CodeBlock};
