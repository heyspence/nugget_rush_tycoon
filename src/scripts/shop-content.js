import itemData from './store-items.json';
import StaticObject from './static-object';
import ClickableObject from './clickable-object';
import Clover from './clover';
import MainCharacter from './main-character';
import Horse from './horse';
import Tnt from './tnt';
import HiredHand from './hired-hand';
import Bank from './bank';

class ShopContent{
    constructor(headerContent, mainCharacter){
        this.shop = document.querySelector("#main-shop")
        this.headerContent = headerContent
        this.mainCharacter = mainCharacter
        this.ctx = mainCharacter.ctx
    
        if(!localStorage.getItem("maxGold")){
            localStorage.setItem("maxGold", 500)
        }
        
        this.renderTitle()
        this.renderShopItems()
        this.renderStats()
    }
    
    get maxGold(){
        let gold = localStorage.getItem("maxGold");
        return parseInt(gold);
    }
    get maxNugget(){
        let max = localStorage.getItem("maxLoot");
        return parseInt(max);
    }
    get digSpeed(){
        return localStorage.getItem("loadSpeed") ? Math.round(parseFloat(localStorage.getItem("loadSpeed")) * 10) : 0.5 ;
    }
    get minNugget(){
        let min = localStorage.getItem("minLoot");
        return parseInt(min);
    }
    
    static updateStats(){
        let currentMax = localStorage.getItem("maxGold");
        currentMax = parseInt(currentMax)
    
        let maxGold = document.querySelector("#max-gold")
        maxGold.innerText = `Max storage: $${currentMax}`

        let maxNugget = document.querySelector("#max-nugget")
        maxNugget.innerText = `Nugget Size: $${parseInt(localStorage.getItem("minLoot"))} - $${parseInt(localStorage.getItem("maxLoot"))}`
    
        let digSpeed = document.querySelector("#dig-speed")
        digSpeed.innerText = `Dig Speed: ${Math.round(parseFloat(localStorage.getItem("loadSpeed")) * 10)}`
    }

    renderTitle(){
        let titleItem = document.createElement("h2")
        titleItem.setAttribute("id", "shop-title")
        titleItem.innerText = "Shop"
        this.shop.appendChild(titleItem)
    }

    renderShopItems(){
        itemData["store-items"].forEach(item => {
            let shopItem = document.createElement("div")
            shopItem.setAttribute("class","shop-item")
            shopItem.classList.add("tooltip")
            shopItem.setAttribute("id", item.name)
            shopItem.setAttribute("data-tooltip", item.tooltip)
            shopItem.classList.add("btn")

            let shopItemPrice = document.createElement("p")
            shopItemPrice.innerText = `$${item.price}`

            let img = new Image(50, 50)
            img.src = `${item.imgSrc}`

            shopItem.appendChild(img)
            shopItem.appendChild(shopItemPrice)
            this.shop.appendChild(shopItem)

            const classMap = {
                "StaticObject": StaticObject,
                "ClickableObject": ClickableObject,
                "Clover": Clover,
                "MainCharacter": MainCharacter,
                "HiredHand": HiredHand,
                "Horse": Horse,
                "Tnt": Tnt,
                "Bank": Bank
            }

            shopItem.addEventListener("click", (e)=>{
                if(item.stock !== 0){
                    if(this.headerContent.subtractFromTotal(`${item.price}`)){
                        if(item.newInstance){
                            let newClass = classMap[item.class]
                            let newChar = new newClass(this.ctx, item.args, this.headerContent)

                            if(item.action){
                                newChar[item.action]()
                            }
                        }else if(item.method){
                            this[item.method][item.action](...item.args)
                        }

                        item.stock--;
                        if(item.stock === 0){
                            event.currentTarget.classList.add("sold-out")
                        }
                    }
                }else{
                    shopItem.addEventListener("click", ()=>{
                        if(!item.stock === 0){
                            if(this.headerContent.subtractFromTotal(`${item.price}`)){
                                if(item.newInstance){
                                    let newClass = classMap[item.class]
                                    let newChar = new newClass(this.ctx, item.args, this.headerContent)
        
                                    if(item.action){
                                        newChar[item.action]()
                                    }
                                }else if(item.method){
                                    this[item.method][item.action](...item.args)
                                }
        
                                item.stock--;
                                if(item.stock === 0){
                                    event.currentTarget.classList.add("sold-out")
                                }
                            }
                        }else{
                            if(!event.currentTarget.classList.contains("sold-out")){
                                event.currentTarget.classList.add("sold-out")
                            }
                            console.log("Item out of stock")
                        }
                    })
                    console.log("Item out of stock")
                }
            })
        })
    }

    renderStats(){
        let statsItem = document.createElement("div")
        statsItem.setAttribute("id", "main-stats")

        let statsHeader = document.createElement("h2")
        statsHeader.innerText = "Current Stats"

        let maxGold = document.createElement("p")
        maxGold.setAttribute("id", "max-gold")
        maxGold.innerText = `Max Storage: $${this.maxGold}`

        let maxNugget = document.createElement("p")
        maxNugget.setAttribute("id", "max-nugget")
        maxNugget.innerText = `Nugget Size: $${this.minNugget} - $${this.maxNugget}`

        let digSpeed = document.createElement("p")
        digSpeed.setAttribute("id", "dig-speed")
        digSpeed.innerText = `Dig Speed: ${this.digSpeed}`

        statsItem.appendChild(statsHeader)
        statsItem.appendChild(maxGold)
        statsItem.appendChild(maxNugget)
        statsItem.appendChild(digSpeed)
        this.shop.appendChild(statsItem)
    }

    soldOut(ele){
        ele.classList.add("sold-out");
        console.log("sold-out")
    }
}

export default ShopContent