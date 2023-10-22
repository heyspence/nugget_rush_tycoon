import itemData from './store-items.json';

class ShopContent{
    constructor(headerContent, mainCharacter){
        this.shop = document.querySelector("#main-shop")
        this.headerContent = headerContent
        this.mainCharacter = mainCharacter
        this.renderTitle()
        this.renderShopItems()
        this.renderStats()
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
            shopItem.setAttribute("name", item.name)

            let shopItemPrice = document.createElement("p")
            shopItemPrice.innerText = `$${item.price}`

            let img = new Image(50, 50)
            img.src = `${item.imgSrc}`

            shopItem.appendChild(img)
            shopItem.appendChild(shopItemPrice)
            this.shop.appendChild(shopItem)

            shopItem.addEventListener("click", ()=>{
                if(this.headerContent.subtractFromTotal(`${item.price}`)){
                    if(item.method && item.action){
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
        statsHeader.setAttribute("style", "text-decoration: underline; font-size: 20px; margin: 5px 0px 5px 20px;")
        statsHeader.innerText = "Current Stats"

        statsItem.appendChild(statsHeader)
        this.shop.appendChild(statsItem)
    }
}

export default ShopContent