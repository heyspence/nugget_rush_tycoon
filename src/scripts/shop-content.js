import itemData from './store-items.json';
import StaticObject from './static-object';
import ClickableObject from './clickable-object';

class ShopContent{
    constructor(headerContent, mainCharacter){
        this.shop = document.querySelector("#main-shop")
        this.headerContent = headerContent
        this.mainCharacter = mainCharacter
        this.ctx = mainCharacter.ctx
        
        if(!localStorage.getItem("maxGold")){
            localStorage.setItem("maxGold", 1000)
        }
        
        this.renderTitle()
        this.renderShopItems()
        this.renderStats()
    }
    
    get maxGold(){
        let gold = localStorage.getItem("maxGold");
        return parseInt(gold);
    }
    
    set maxGold(num){
        localStorage.setItem("maxGold", num.toString());
    }
    
    static updateStats(){
        let currentMax = localStorage.getItem("maxGold");
        currentMax = parseInt(currentMax)
    
        let maxGold = document.querySelector("#max-gold")
        maxGold.innerText = `Max storage: $${currentMax}`
    
        let bestTime = document.querySelector("#best-time")
        bestTime.innerText = `Best Time: TBD`
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
            shopItem.setAttribute("id", item.name)

            let shopItemPrice = document.createElement("p")
            shopItemPrice.innerText = `$${item.price}`

            let img = new Image(50, 50)
            img.src = `${item.imgSrc}`

            shopItem.appendChild(img)
            shopItem.appendChild(shopItemPrice)
            this.shop.appendChild(shopItem)

            const classMap = {
                "StaticObject": StaticObject,
                "ClickableObject": ClickableObject
            }

            shopItem.addEventListener("click", ()=>{
                if(this.headerContent.subtractFromTotal(`${item.price}`)){
                    if(item.newInstance){
                        debugger
                        let newClass = classMap[item.class]
                        new newClass(this.ctx, item.args, this.headerContent)
                    }else if(item.method){
                        this[item.method][item.action](...item.args)
                    }
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
        maxGold.innerText = `Max storage: $${this.maxGold}`

        let bestTime = document.createElement("p")
        bestTime.setAttribute("id", "best-time")
        bestTime.innerText = `Best Time: TBD`

        statsItem.appendChild(statsHeader)
        statsItem.appendChild(maxGold)
        statsItem.appendChild(bestTime)
        this.shop.appendChild(statsItem)
    }
}

export default ShopContent