(()=>{"use strict";function e(e,t,n=!1){const i=e.getBoundingClientRect().width/1e3;t.setDimensions({width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height}),n&&t.setZoom(i),function(e,t){const n=e.getObjects();if(0===n.length)return;const i=e.width/2/t,c=e.height/2/t;n.forEach((e=>{e.set({left:i,top:c,originX:"center",originY:"center"})})),e.renderAll()}(t,i)}function t(t,n,i=1/0){const c=window.innerWidth,o=Math.min(.65*c,parseInt(i));t.style.width=`${o}px`,t.style.height=`${o}px`,e(t,n,!0)}const n=new fabric.Canvas("image__canvas"),i=document.querySelector(".wrapper"),c=document.querySelector(".slider"),o=["https://screendoogmacom.s3.amazonaws.com/abc/oreo.com.oreoid-0m2j6s0y88i-screen.png","https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg","https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649"];let a=0,s="simple",r=null;function d(e){!function(e,t,n){fabric.Image.fromURL(t,(t=>{t.set({left:e.width/2,top:e.height/2,originX:"center",originY:"center"}),t.scaleToWidth(e.width-40),e.add(t),n(t)}))}(n,e,(e=>{r=e,centerCanvasContent(n)}))}e(i,n),d(o[a]),c.addEventListener("input",(e=>{const c=e.target.value,o=n.item(0);if(r)switch(s){case"simple":!function(e,t,n){const i=n/800;t.scaleX=i,t.scaleY=i,e.requestRenderAll()}(n,o,c);break;case"smoothing":!function(e,t,n){t.scaleToWidth(n),e.contextContainer.imageSmoothingEnabled=!0,e.contextContainer.imageSmoothingQuality="high",e.requestRenderAll()}(n,o,c);break;case"css":t(i,n,c);break;case"offscreen":!function(e,t,n){const i=document.createElement("canvas"),c=i.getContext("2d"),o=t.getElement(),a=n/o.width,s=o.width*a,r=o.height*a;i.width=s,i.height=r,c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(o,0,0,s,r);const d=i.toDataURL();fabric.Image.fromURL(d,(function(t){t.set({left:e.width/2,top:e.height/2,originX:"center",originY:"center"}),e.clear(),e.add(t),e.requestRenderAll()}))}(n,r,c);break;case"off":break;default:console.warn("Unknown scaling option:",s)}})),window.addEventListener("resize",(()=>t(i,n)));const l=document.querySelectorAll(".switch");l.forEach((e=>{e.addEventListener("click",(()=>{l.forEach((e=>e.classList.remove("active"))),e.classList.add("active"),s=e.getAttribute("data-option")}))})),document.getElementById("previous").addEventListener("click",(()=>{a=(a-1+o.length)%o.length,n.clear(),d(o[a])})),document.getElementById("next").addEventListener("click",(()=>{a=(a+1)%o.length,n.clear(),d(o[a])})),document.getElementById("addNewImage").addEventListener("click",(()=>{const e=document.querySelector('.add__image input[type="text"]'),t=e.value.trim();/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp))(?:\?.*)?$/i.test(t)?(o.push(t),a=o.length-1,n.clear(),d(t),e.value=""):(alert("Please enter a valid image URL."),e.value="")}))})();