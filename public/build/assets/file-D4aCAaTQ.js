const w=o=>["image/jpeg","image/gif","image/png","image/svg","image/webp",".jpeg",".jpg",".gif",".png",".svg",".webp",".bmp"].some(a=>o.type.includes(a)||o.name.includes(a)),c=o=>{const a=[".mp4",".ogg",".webm"],t=[".mp3",".wav",".ogg",".wma"],d=[".pdf"];return[...a,...t,...d].some(n=>o.type.includes(n)||o.name.includes(n))},b=(o,a,t,d)=>{var i=[o],n=new Blob(i,{type:t});if(typeof window.navigator.msSaveBlob<"u")window.navigator.msSaveBlob(n,a);else{var s=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(n):window.webkitURL.createObjectURL(n),e=document.createElement("a");e.style.display="none",e.href=s,e.setAttribute("download",a),typeof e.download>"u"&&e.setAttribute("target","_blank"),document.body.appendChild(e),e.click(),setTimeout(function(){document.body.removeChild(e),window.URL.revokeObjectURL(s)},200)}};export{c as a,b as d,w as i};
