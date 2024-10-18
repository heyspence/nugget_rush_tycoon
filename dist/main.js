!function(){"use strict";!function(){var t=class{constructor(t){this.ctx=t,this.addBackgroundImg(this.ctx)}addBackgroundImg(t){const e=document.querySelector("#main-background-img");t.drawImage(e,-750,-400)}},e=class{constructor(){this.renderLogo(),this.renderTotal(),this.renderMenu(),"NaN"===localStorage.getItem("cashOnHand")&&localStorage.setItem("cashOnHand",0)}get cashOnHand(){let t=localStorage.getItem("cashOnHand");return t?parseInt(t):0}set cashOnHand(t){localStorage.setItem("cashOnHand",t.toString())}renderLogo(){const t=document.querySelector("#main-title-container"),e=document.createElement("img");e.setAttribute("src","./assets/output-onlinepngtools (2).png"),t.appendChild(e)}renderTotal(){document.querySelector("#main-total").innerHTML=`<h2>Total: $${this.cashOnHand}</h2>`}renderMenu(){document.querySelector("#main-menu").innerHTML="<h2>Menu</h2>"}subtractFromTotal(t){return this.cashOnHand>=t&&(this.cashOnHand-=t,this.renderTotal(),!0)}resetTotal(){this.cashOnHand=0,this.renderTotal()}},s=JSON.parse('{"I":[{"name":"level-2-chest","price":"200","imgSrc":"assets/ORIGINALS/props/chest-level-2.png","class":"StaticObject","args":{"pos":[40,305],"size":[75,75],"img":"assets/ORIGINALS/props/chest-level-2.png","ability":"increaseMaxStorage"},"newInstance":true,"tooltip":"Storage level 1","stock":1},{"name":"level-1-chest","price":"500","imgSrc":"assets/ORIGINALS/props/chest-level-1.png","class":"StaticObject","args":{"pos":[60,325],"size":[75,75],"img":"assets/ORIGINALS/props/chest-level-1.png","ability":"increaseMaxStorage"},"newInstance":true,"tooltip":"Storage level 2","stock":1},{"name":"gold-chest","price":"10000","imgSrc":"assets/ORIGINALS/props/gold-chest.png","class":"StaticObject","args":{"pos":[90,345],"size":[75,75],"img":"assets/ORIGINALS/props/gold-chest.png","ability":"increaseMaxStorage"},"newInstance":true,"tooltip":"Storage level 3","stock":1},{"name":"experienced-hired-hand","price":"1000","imgSrc":"assets/output-onlinepngtools (3).png","class":"HiredHand","action":"autoClick","args":{"pos":[550,120],"size":[115,130],"rewardPos":[-20,180],"img1":"assets/Cowboy 4 HiRes/Cowboy4_idle without gun_3.png","img2":"assets/finalShovel.png","idleImg":"assets/Cowboy 4 HiRes/Cowboy4_idle without gun_1.png"},"newInstance":true,"tooltip":"Hired hand","stock":1},{"name":"bank","price":"10000","imgSrc":"assets/ORIGINALS/Wild West Props 16x16 (v1.5)/Building\'s/house copy.png","class":"Bank","action":"autoClick","args":{"pos":[320,40],"size":[200,145],"rewardPos":[50,200],"idleImg":"assets/ORIGINALS/Wild West Props 16x16 (v1.5)/Building\'s/house.png","img1":"assets/ORIGINALS/Wild West Props 16x16 (v1.5)/Building\'s/house.png"},"newInstance":true,"tooltip":"Bank","stock":1},{"name":"crown","price":"100000","imgSrc":"assets/crown.png","method":"mainCharacter","action":"displayVictoryCrown","args":["assets/crown.png"],"tooltip":"Crown","stock":1},{"name":"tnt","price":"20","imgSrc":"assets/ORIGINALS/Wild West Props 16x16 (v1.5)/Tools/tnt-big.png","class":"Tnt","args":{"pos":[120,260],"size":[40,40],"img":"assets/ORIGINALS/Wild West Props 16x16 (v1.5)/Tools/tnt-big.png","ability":"increaseMaxLoot"},"newInstance":true,"tooltip":"Increase min nugget size"},{"name":"four-leaf-clover","price":"40","imgSrc":"assets/ORIGINALS/Item 7-1.png.png","class":"Clover","args":{"pos":[80,230],"size":[110,110],"img":"assets/ORIGINALS/Item 7-1.png.png","ability":"increaseMaxLoot"},"newInstance":true,"tooltip":"Incease max nugget size"},{"name":"horse","price":"80","imgSrc":"assets/pony.png","class":"Horse","args":{"pos":[115,250],"size":[40,40],"img":"assets/pony.png","ability":"increaseSpeed"},"newInstance":true,"tooltip":"Increase speed"}]}'),a=class{constructor(t,e){this.ctx=t,this.img=e.img,this.size=e.size,this.pos=e.pos,this.scale=e.scale?e.scale:[1,1],this.drawImg(),this[e.ability]()}drawImg(){const t=new Image;t.onload=()=>{this.ctx.save(),this.ctx.scale(...this.scale),this.ctx.drawImage(t,...this.pos,...this.size),this.ctx.restore()},t.src=this.img}increaseMaxStorage(){let t=parseInt(localStorage.getItem("maxGold"));localStorage.setItem("maxGold",10*t),u.updateStats()}increaseSpeed(){let t=parseFloat(localStorage.getItem("loadSpeed"));localStorage.setItem("loadSpeed",t+.35);let e=parseInt(localStorage.getItem("animationSpeed"));localStorage.setItem("animationSpeed",e-50)}},i=class{constructor(t,e,s,a){this.ctx=t,this.pos=[e[0]+a[0],e[1]+a[1]],this.size=s,this.smallRewardSound=new Audio("assets/audio/little_robot_sound_factory_fantasy_Pickup_Gold_00.mp3"),this.bigRewardSound=new Audio("assets/audio/arcade-game-fruit-machine-jackpot-001-short.mp3"),localStorage.getItem("maxLoot")||localStorage.setItem("maxLoot",80),localStorage.getItem("minLoot")||localStorage.setItem("minLoot",1)}get maxLoot(){return parseFloat(localStorage.getItem("maxLoot"))}get minLoot(){return parseFloat(localStorage.getItem("minLoot"))}get loadSpeed(){return parseFloat(localStorage.getItem("loadSpeed"))}static calculateReward(){let t=0,e=100*Math.random(),s=parseFloat(localStorage.getItem("maxLoot"))?parseFloat(localStorage.getItem("maxLoot")):80,a=.8*s;const i=new Audio("assets/audio/little_robot_sound_factory_fantasy_Pickup_Gold_00.mp3"),o=new Audio("assets/audio/arcade-game-fruit-machine-jackpot-001-short.mp3");return e<=15?(t=Math.ceil(Math.random()*(s-a)+a),o.play()):(a=parseFloat(localStorage.getItem("minLoot"))?parseFloat(localStorage.getItem("minLoot")):1,t=Math.ceil(Math.random()*(s/20-a)+a),t=t<a?a:t,i.play()),t}renderReward(t){this.ctx.fillStyle="rgb(253 214 67)",this.ctx.strokeStyle="rgb(178 98 18)",this.ctx.font="42px Luckiest Guy",this.ctx.fillText(`+$${t}`,...this.pos),this.ctx.strokeText(`+$${t}`,...this.pos);let e=this.ctx.measureText(`+$${t}`).width;setTimeout((()=>this.ctx.clearRect(this.pos[0],this.pos[1]-38,e,38)),800/this.loadSpeed)}},o=class{constructor(t,e,s,a){this.ctx=t,this.pos=[e[0]+5,e[1]-22],this.size=[140,15],this.loadTime=.5,this.currentWidth=0,this.clickableObject=a,this.complete=!1,this.animating=!1,this.reward=new i(t,e,this.size,s),localStorage.getItem("loadSpeed")||localStorage.setItem("loadSpeed",1.15),localStorage.getItem("maxLoot")||localStorage.setItem("maxLoot",80),localStorage.getItem("minLoot")||localStorage.setItem("minLoot",1)}get loadSpeed(){return parseFloat(localStorage.getItem("loadSpeed"))}animate=()=>{let t=parseInt(localStorage.getItem("cashOnHand")),e=parseInt(localStorage.getItem("maxGold"));if(this.animating)return;if(t>=e)return;this.drawBackground();const s=()=>{if(this.complete)this.reset();else{if(this.clickableObject.imgList.length>1&&this.clickableObject.animate(),this.currentWidth>=this.size[0]){let t=i.calculateReward();this.ctx.clearRect(...this.pos,...this.size),this.clickableObject.addToTotal(t),this.complete=!0,this.clickableObject.stopAnimation(),this.reward.renderReward(t)}this.animating=!0,this.currentWidth+this.loadSpeed>this.size[0]?this.currentWidth=this.size[0]:this.currentWidth+=this.loadSpeed,this.update(),requestAnimationFrame(s)}};s()};update(){this.ctx.fillStyle="rgb(253 214 67)",this.ctx.fillRect(this.pos[0]+2,this.pos[1]+3,this.currentWidth,this.size[1])}clear(){this.ctx.clearRect(this.pos[0]-2,this.pos[1],this.size[0]+8,this.size[1]+6)}isComplete(){return this.currentWidth>=this.size[0]}reset(){this.currentWidth=0,this.clear(),this.animating=!1,this.complete=!1}drawBackground(){this.ctx.fillStyle="rgb(38 22 23)",this.ctx.fillRect(this.pos[0]-2,this.pos[1],this.size[0]+8,this.size[1]+6)}},n=class{constructor(t,e,s){this.ctx=t,this.ctx.imageSmoothingEnabled=!1,this.imgList=[];for(let t=1;t<Object.keys(e).length;t++)e["img"+t]&&this.imgList.push(e["img"+t]);for(let t=0;t<this.imgList.length;t++)this["img"+(t+1)]=this.loadImg(this.imgList[t]);this.counter=0,this.idleImg=this.loadImg(e.idleImg),this.currentImg=this.imgList[0],this.toggleInterval=null,this.size=e.size,this.pos=e.pos,this.headerContent=s,this.scale=e.scale?e.scale:[1,1],this.rewardPos=e.rewardPos;const a=new o(this.ctx,this.pos,this.rewardPos,this);this.progressBar=a,this.idleImg.onload=()=>{this.ctx.clearRect(...this.pos,...this.size),this.ctx.drawImage(this.idleImg,...this.pos,...this.size)},this.renderIdle(),localStorage.getItem("animationSpeed")||localStorage.setItem("animationSpeed",450)}get animationSpeed(){return parseInt(localStorage.getItem("animationSpeed"))}set animationSpeed(t){localStorage.setItem("animationSpeed",t)}loadImg(t){let e=new Image;return e.src=t,e}renderIdle(){this.ctx.clearRect(...this.pos,...this.size),this.ctx.drawImage(this.idleImg,...this.pos,...this.size)}animate(){this.toggleInterval||(this.toggleInterval=setInterval((()=>{this.toggleImages()}),this.animationSpeed))}toggleImages(){let t=[this.img1,this.img2];this.counter===t.length-1?this.counter=0:this.counter++,this.ctx.clearRect(...this.pos,...this.size),this.ctx.drawImage(t[this.counter],...this.pos,...this.size)}stopAnimation(){this.toggleInterval&&(clearInterval(this.toggleInterval),this.toggleInterval=null,this.currentImg=this.img4,this.renderIdle())}clickHandler(t){const e=[this.pos[0],this.pos[0]+this.size[0]],s=t.canvasX>=e[0]&&t.canvasX<=e[1],a=[this.pos[1],this.pos[1]+this.size[1]],i=t.canvasY>=a[0]&&t.canvasY<=a[1];s&&i&&this.progressBar.animate()}addToTotal(t){this.headerContent.cashOnHand=this.headerContent.cashOnHand+t,this.headerContent.renderTotal()}},r=class extends a{constructor(t,e){super(t,e),this.pos=[...e.pos]}increaseMaxLoot(){let t=parseInt(localStorage.getItem("maxLoot"));localStorage.setItem("maxLoot",t+25),u.updateStats(),this.stopAnimation.bind(this)(),this.animate.bind(this)()}drawImg(){let t=new Image;t.onload=()=>{this.clear.bind(this)(),this.ctx.drawImage(t,...this.pos,...this.size)},t.src=this.img}animate(){setTimeout(this.stopAnimation.bind(this),500);const t=()=>{this.pos[1]-=2,this.drawImg(),this.animationFrameId=requestAnimationFrame(t)};t()}stopAnimation(){this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null,this.clear.bind(this)())}clear(){this.ctx.clearRect(this.pos[0]+40,this.pos[1]+40,30,40)}};function l(t){return`${Math.floor(t/60).toString().padStart(2,"0")}:${(t%60).toString().padStart(2,"0")}`}const c=async()=>{await(async()=>{fetch("https://nugget-rush.spencerheywood.com/api/leaderboard").then((t=>t.json())).then((t=>{localStorage.setItem("leaderboard",JSON.stringify(t))})).catch((t=>console.error("Error fetching leaderboard:",t)))})();const t=(()=>{const t=localStorage.getItem("leaderboard");return t?JSON.parse(t):[]})(),e=document.getElementById("leaderboard-container");e.innerHTML="",t.forEach(((t,s)=>{const a=document.createElement("div");a.classList.add("leaderboard-row"),a.innerHTML=`\n            <div class="leaderboard-cell" style="width: 100px;">${s+1}</div>\n            <div class="leaderboard-cell" style="width: 100px;">${t.username}</div>\n            <div class="leaderboard-cell" style="width: 100px;">${l(t.score)}</div>\n        `,e.appendChild(a)}))};var d=class extends n{constructor(t,e,s,a){super(t,e,s),this.victorySound=new Audio("assets/audio/success-fanfare-trumpets-6185.mp3"),this.timer=a}displayVictoryCrown(t){const e=new Image;e.onload=()=>{this.ctx.save(),this.ctx.scale(...this.scale),this.victorySound.play(),this.ctx.drawImage(e,this.pos[0]-10,this.pos[1]+10,110,110),this.ctx.restore()},e.src=t,this.timer.stopTimer(),(async(t,e)=>{const s=await fetch("https://nugget-rush.spencerheywood.com/api/leaderboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,score:e})});if(!s.ok)throw console.error(s),new Error("Failed to post score");const a=await s.json();localStorage.setItem("leaderboard",JSON.stringify(a)),c()})(prompt("Enter your username"),this.timer.time)}},h=class extends a{constructor(t,e){super(t,e),this.pos=[...e.pos]}increaseSpeed(){let t=parseFloat(localStorage.getItem("loadSpeed"));localStorage.setItem("loadSpeed",t+.35);let e=parseInt(localStorage.getItem("animationSpeed"));localStorage.setItem("animationSpeed",e-50),u.updateStats(),this.stopAnimation.bind(this)(),this.animate.bind(this)()}drawImg(){let t=new Image;t.onload=()=>{this.clear.bind(this)(),this.ctx.drawImage(t,...this.pos,...this.size)},t.src=this.img}animate(){setTimeout(this.stopAnimation.bind(this),500);const t=()=>{this.pos[1]-=2,this.drawImg(),this.animationFrameId=requestAnimationFrame(t)};t()}stopAnimation(){this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null,this.clear.bind(this)())}clear(){this.ctx.clearRect(...this.pos,this.size[0],this.size[1]+5)}},m=class extends a{constructor(t,e){super(t,e),this.pos=[...e.pos]}increaseMaxLoot(){let t=parseInt(localStorage.getItem("minLoot"));localStorage.setItem("minLoot",t+3),u.updateStats(),this.stopAnimation.bind(this)(),this.animate.bind(this)()}drawImg(){let t=new Image;t.onload=()=>{this.clear.bind(this)(),this.ctx.drawImage(t,...this.pos,...this.size)},t.src=this.img}animate(){setTimeout(this.stopAnimation.bind(this),500);const t=()=>{this.pos[1]-=2,this.drawImg(),this.animationFrameId=requestAnimationFrame(t)};t()}stopAnimation(){this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null,this.clear.bind(this)())}clear(){this.ctx.clearRect(this.pos[0],this.pos[1],50,50)}},g=class extends n{constructor(t,e,s){super(t,e,s)}autoClick(){setInterval(this.progressBar.animate,2500)}},p=class extends n{constructor(t,e,s){super(t,e,s)}autoClick(){setInterval(this.progressBar.animate,2500)}},u=class{constructor(t,e){this.shop=document.querySelector("#main-shop"),this.headerContent=t,this.mainCharacter=e,this.ctx=e.ctx,localStorage.getItem("maxGold")||localStorage.setItem("maxGold",500),this.renderTitle(),this.renderShopItems(),this.renderStats()}get maxGold(){let t=localStorage.getItem("maxGold");return parseInt(t)}get maxNugget(){let t=localStorage.getItem("maxLoot");return parseInt(t)}get digSpeed(){return localStorage.getItem("loadSpeed")?Math.round(10*parseFloat(localStorage.getItem("loadSpeed"))):.5}get minNugget(){let t=localStorage.getItem("minLoot");return parseInt(t)}static updateStats(){let t=localStorage.getItem("maxGold");t=parseInt(t),document.querySelector("#max-gold").innerText=`Max storage: $${t}`,document.querySelector("#max-nugget").innerText=`Nugget Size: $${parseInt(localStorage.getItem("minLoot"))} - $${parseInt(localStorage.getItem("maxLoot"))}`,document.querySelector("#dig-speed").innerText=`Dig Speed: ${Math.round(10*parseFloat(localStorage.getItem("loadSpeed")))}`}renderTitle(){let t=document.createElement("h2");t.setAttribute("id","shop-title"),t.innerText="Shop",this.shop.appendChild(t)}renderShopItems(){s.I.forEach((t=>{let e=document.createElement("div");e.setAttribute("class","shop-item"),e.classList.add("tooltip"),e.setAttribute("id",t.name),e.setAttribute("data-tooltip",t.tooltip),e.classList.add("btn");let s=document.createElement("p");s.innerText=`$${t.price}`;let i=new Image(50,50);i.src=`${t.imgSrc}`,e.appendChild(i),e.appendChild(s),this.shop.appendChild(e);const o={StaticObject:a,ClickableObject:n,Clover:r,MainCharacter:d,HiredHand:g,Horse:h,Tnt:m,Bank:p};e.addEventListener("click",(s=>{if(0!==t.stock){if(this.headerContent.subtractFromTotal(`${t.price}`)){if(t.newInstance){let e=new(0,o[t.class])(this.ctx,t.args,this.headerContent);t.action&&e[t.action]()}else t.method&&this[t.method][t.action](...t.args);t.stock--,0===t.stock&&event.currentTarget.classList.add("sold-out")}}else e.addEventListener("click",(()=>{if(0===!t.stock){if(this.headerContent.subtractFromTotal(`${t.price}`)){if(t.newInstance){let e=new(0,o[t.class])(this.ctx,t.args,this.headerContent);t.action&&e[t.action]()}else t.method&&this[t.method][t.action](...t.args);t.stock--,0===t.stock&&event.currentTarget.classList.add("sold-out")}}else event.currentTarget.classList.contains("sold-out")||event.currentTarget.classList.add("sold-out")}))}))}))}renderStats(){let t=document.createElement("div");t.setAttribute("id","main-stats");let e=document.createElement("h2");e.innerText="Current Stats";let s=document.createElement("p");s.setAttribute("id","max-gold"),s.innerText=`Max Storage: $${this.maxGold}`;let a=document.createElement("p");a.setAttribute("id","max-nugget"),a.innerText=`Nugget Size: $${this.minNugget} - $${this.maxNugget}`;let i=document.createElement("p");i.setAttribute("id","dig-speed"),i.innerText=`Dig Speed: ${this.digSpeed}`,t.appendChild(e),t.appendChild(s),t.appendChild(a),t.appendChild(i),this.shop.appendChild(t)}soldOut(t){t.classList.add("sold-out"),console.log("sold-out")}},I=class{constructor(){document.querySelector("#main-menu").addEventListener("click",this.revealModal.bind(this)),this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal"),document.querySelector(".btn-close").addEventListener("click",this.hideModal.bind(this)),this.overlay.addEventListener("click",this.hideModal.bind(this)),document.querySelector("#reset").addEventListener("click",this.resetGame.bind(this)),document.querySelector("#demo").addEventListener("click",this.cheat.bind(this))}revealModal(){this.modal.classList.remove("hidden"),this.overlay.classList.remove("hidden")}hideModal(){this.modal.classList.add("hidden"),this.overlay.classList.add("hidden")}resetGame(){localStorage.clear(),location.reload()}cheat(){localStorage.setItem("cashOnHand",1e5),location.reload()}},S=class{constructor(){this.time=Number(localStorage.getItem("time"))||0,this.startTimer(),this.intervalId=localStorage.getItem("intervalId")||null,this.blinkIntervalId=null,this.draw()}startTimer(){this.intervalId=setInterval((()=>{this.time++,this.draw()}),1e3),localStorage.setItem("intervalId",this.intervalId)}stopTimer(){clearInterval(this.intervalId),localStorage.removeItem("intervalId"),this.blinkTime()}get time(){return Number(localStorage.getItem("time"))}set time(t){localStorage.setItem("time",t)}blinkTime(){const t=document.querySelector("#timer-container");let e=0;this.blinkIntervalId=setInterval((()=>{e%3==0?t.classList.add("hidden"):t.classList.remove("hidden"),e++}),400)}draw(){const t=document.querySelector("#timer-container"),e=l(this.time);t.textContent=e}};window.addEventListener("load",(()=>{const s=document.getElementById("canvas"),a=document.getElementById("canvas2"),i=s.getContext("2d"),o=a.getContext("2d"),n=(new t(i),new I,new S),r=new e,l=new d(o,{pos:[165,175],size:[150,170],rewardPos:[165,165],img1:"assets/Cowboy 4 HiRes/Cowboy4_idle without gun_3.png",img2:"assets/finalShovel.png",idleImg:"assets/Cowboy 4 HiRes/Cowboy4_idle without gun_1.png"},r,n);a.addEventListener("click",(t=>{const e=a.getBoundingClientRect(),s=t.clientX-e.left,i=t.clientY-e.top;t.canvasX=s,t.canvasY=i,l.clickHandler(t)})),c(),new u(r,l)}))}()}();
//# sourceMappingURL=main.js.map