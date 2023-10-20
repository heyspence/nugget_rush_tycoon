!function(){"use strict";!function(){class e{constructor(e,t){this.ctx=e,this.color=t.color,this.size=t.size,this.pos=t.pos,this.counter=0,this.draw(this.ctx)}draw(e){e.fillStyle=this.color,e.fillRect(...this.pos,...this.size),e.fill(),console.log("clickable object has been loaded")}changeColor(){this.counter++,console.log(`clicked ${this.counter} times`),this.className="red"}}window.ClickableObject=e;var t=e,s=class{constructor(e,t){this.ctx=e,this.color=t.color,this.size=t.size,this.pos=t.pos,this.drawBackground(this.ctx),this.addBackgroundImg(this.ctx)}drawBackground(e){e.fillStyle=this.color,e.fillRect(...this.pos,...this.size),e.fill()}addBackgroundImg(e){const t=document.createElement("img");t.setAttribute("src","assets/DALL·E 2023-10-18 16.49.37 - Illustration of a broad desert scene with a central river, occasional tumbleweeds, and sparse vegetation. The horizon is marked by distant mountain si.png"),t.onload=()=>{e.scale(.33,.33),e.drawImage(t,-800,-400),console.log("background image loaded")}}},n=class{constructor(){this.cashOnHand=0,this.renderLogo(),this.renderTotal(),this.renderMenu()}renderLogo(){const e=document.querySelector("#main-title-container"),t=document.createElement("img");t.setAttribute("src","./assets/output-onlinepngtools (3).png"),e.appendChild(t)}countClicks(){this.cashOnHand++,this.renderTotal()}renderTotal(){document.querySelector("#main-total").innerHTML=`<h2>Total: $${this.cashOnHand}</h2>`}renderMenu(){document.querySelector("#main-menu").innerHTML="<h2>Menu</h2>"}resetTotal(){this.cashOnHand=0,this.renderTotal()}},o=class{constructor(e){this.shop=document.querySelector("#main-shop"),this.headerContent=e,this.renderTitle(),this.renderShopItems(15)}renderTitle(){let e=document.createElement("h2");e.setAttribute("id","shop-title"),e.innerText="Shop",this.shop.appendChild(e)}renderShopItems(e,t){for(let t=0;t<e;t++){let e=document.createElement("div");e.setAttribute("class","shop-item");let t=document.createElement("p");t.innerText="$100",e.appendChild(t),this.shop.appendChild(e),e.addEventListener("click",this.headerContent.resetTotal.bind(this.headerContent))}}};document.addEventListener("DOMContentLoaded",(()=>{console.log("content has been loaded");const e=document.getElementById("canvas"),i=e.getContext("2d");new s(i,{color:"rgb(183 142 114)",pos:[0,0],size:[720,465]});const r=new n;e.addEventListener("click",r.countClicks.bind(r)),new o(r),new t(i,{color:"red",pos:[0,0],size:[100,100]})}))}()}();
//# sourceMappingURL=main.js.map