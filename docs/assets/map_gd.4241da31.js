var e=Object.defineProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(o,t,n)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n;import{d as r}from"./vendor.563a6fc1.js";const c=r.desktop();window.mapLoaded=async function(){let e;if(c){let o=await new Promise((e=>{AMap.plugin("AMap.CitySearch",(function(){(new AMap.CitySearch).getLocalCity((function(o,t){"complete"===o&&"OK"===t.info&&e(t)}))}))}));console.log("result:",o),e=[o.bounds.southWest.lng,o.bounds.southWest.lat]}else{let e=await function(){let e={enableHighAccuracy:!1,timeout:5e3,maximumAge:0};return new Promise(((o,t)=>{navigator.geolocation.getCurrentPosition((e=>{o(e.coords)}),(e=>{console.warn(e),t(e)}),e)}))}();console.log("position:",e)}console.log("center:",e),new AMap.Map("container",((e,r)=>{for(var c in r||(r={}))t.call(r,c)&&a(e,c,r[c]);if(o)for(var c of o(r))n.call(r,c)&&a(e,c,r[c]);return e})({viewMode:"3D",zoom:10},e?{center:e}:{}))},window.onload=async function(){!function(){let e=document.querySelector("#select-area");e.addEventListener("change",(()=>{console.log(e.value)}))}()};
