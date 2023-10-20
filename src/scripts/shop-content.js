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

    async getShopItems(){
        const response = await fetch('../store-items.json')
        const data = await response.json();
        return data["shop-items"]
    }

    async renderShopItems(){
        const items = await this.getShopItems()

        items.forEach(item => {
            let shopItem = document.createElement("div")
            shopItem.setAttribute("class","shop-item")
            shopItem.setAttribute("name", item.name)

            let shopItemPrice = document.createElement("p")
            shopItemPrice.innerText = `$${item.price}`
            
            shopItem.appendChild(shopItemPrice)
            this.shop.appendChild(shopItem)

            shopItem.addEventListener("click", this.headerContent.resetTotal.bind(this.headerContent))
        })
    }

    renderStats(){
        let statsItem = document.createElement("div")
        statsItem.setAttribute("id", "main-stats")
        this.shop.appendChild(statsItem)
    }
}

export default ShopContent