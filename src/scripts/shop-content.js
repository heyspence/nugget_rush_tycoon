class ShopContent{
    constructor(){
        this.shop = document.querySelector("#main-shop")
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
            this.shop.appendChild(shopItem)
        }
    }
}

export default ShopContent