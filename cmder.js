;(function(root){
 let is={},fn={};
 is.string=function(value) {
  return toString.call(value) === '[object String]';
 }
 fn.q=(s,doc=document)=>{return doc.querySelector(s)}
 fn.a2=function(me,p){p.appendChild(me);return me}
 fn.i3=(d)=>{
  if(typeof d !=='string') return d
  var el=document.createElement('table'); el.innerHTML=d.trim();
  var me=el.childNodes[0]
  el=void 0;
  return me
 }
 ;
 function css(h,a){
  return `
[data-cmder]{
text-align:${a};
}
[data-cmder]>span{
cursor:pointer
}
[data-cmder]>span:hover{
color:${h};
}`
 }
 function entry(query,hovcolor,align){
  let o={}
  o.el=is.string(query)?fn.q(query):query
  o.el.dataset.cmder='true'
  o.css=fn.i3(`<style class="cmdercss">${css(hovcolor,align)}</style>`)
  fn.a2(o.css,o.el)
  o.cmd=(str,f)=>{
   let a=fn.i3(`<span>${str}</span>`)
   a.onclick=f;
   fn.a2(a,o.el)
   return o;
  }
  return o;
 }
 root.cmder=entry;
})(this);
/*
usage
cmder('.tar','#f26','right')
 .cmd('[x]',(ev)=>{})
 .cmd('[y]',(ev)=>{})
 .cmd('[z]',(ev)=>{})
 .cmd('[p]',(ev)=>{})
 .cmd('[q]',(ev)=>{})
 */

