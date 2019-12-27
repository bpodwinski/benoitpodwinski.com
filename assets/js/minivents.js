function Events(i){var c={},f=[];(i=i||this).on=function(n,t,e){return(c[n]=c[n]||[]).push([t,e]),i},i.off=function(n,t){n||(c={});for(var e=c[n]||f,r=e.length=t?e.length:0;r--;)t==e[r][0]&&e.splice(r,1);return i},i.emit=function(n){for(var t,e=c[n]||f,r=0<e.length?e.slice(0,e.length):e,l=0;t=r[l++];)t[0].apply(t[1],f.slice.call(arguments,1));return i}}
//# sourceMappingURL=minivents.js.map
