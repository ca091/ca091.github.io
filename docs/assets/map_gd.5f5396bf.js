import{d as e}from"./vendor.563a6fc1.js";const o=e.desktop();window.mapLoaded=async function(){if(o){let e=await new Promise((e=>{AMap.plugin("AMap.CitySearch",(function(){(new AMap.CitySearch).getLocalCity((function(o,n){"complete"===o&&"OK"===n.info&&e(n)}))}))}));console.log("result:",e)}else{let e=await function(){let e={enableHighAccuracy:!1,timeout:5e3,maximumAge:0};return new Promise(((o,n)=>{navigator.geolocation.getCurrentPosition((e=>{o(e.coords)}),(e=>{console.warn(e),n(e)}),e)}))}();console.log("position:",e)}new AMap.Map("container")},window.onload=async function(){!function(){let e=document.querySelector("#select-area");e.addEventListener("change",(()=>{console.log(e.value)}))}()};