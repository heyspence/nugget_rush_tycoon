import itemData from './store-items.json';

class ShopContent{
    constructor(headerContent){
        this.shop = document.querySelector("#main-shop")
        this.headerContent = headerContent
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
            
            shopItem.appendChild(shopItemPrice)
            this.shop.appendChild(shopItem)

            shopItem.addEventListener("click", ()=>{this.headerContent.subtractFromTotal(`${item.price}`)})
        })
    }

    renderStats(){
        let statsItem = document.createElement("div")
        statsItem.setAttribute("id", "main-stats")
        this.shop.appendChild(statsItem)
    }
}

export default ShopContent