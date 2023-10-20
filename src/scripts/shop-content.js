class ShopContent{
    constructor(headerContent){
        this.shop = document.querySelector("#main-shop")
        this.headerContent = headerContent
        this.renderTitle()
        this.renderShopItems(15)
    }

    renderTitle(){
        let titleItem = document.createElement("h2")
        titleItem.setAttribute("id", "shop-title")
        titleItem.innerText = "Shop"
        this.shop.appendChild(titleItem)
    }

    renderShopItems(num, options){
        for(let i = 0; i < num; i++){
            let shopItem = document.createElement("div")
            shopItem.setAttribute("class","shop-item")


            let shopItemPrice = document.createElement("p")
            shopItemPrice.innerText = "$100"
            
            shopItem.appendChild(shopItemPrice)
            this.shop.appendChild(shopItem)

            shopItem.addEventListener("click", this.headerContent.resetTotal.bind(this.headerContent))
        }
    }
}

export default ShopContent