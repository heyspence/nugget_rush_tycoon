import ClickableObject from "./scripts/clickableObject";
import Background from "./scripts/background";
import HeaderContent from "./scripts/header-content"
import ShopContent from "./scripts/shop-content";

window.addEventListener("load", () => {
    console.log('content has been loaded');

    const canvas = document.getElementById("canvas")

    const ctx = canvas.getContext("2d")
    const background = new Background(ctx)
    
    const headerContent = new HeaderContent()
    canvas.addEventListener("click", headerContent.countClicks.bind(headerContent))

    const shopContent = new ShopContent(headerContent)

    const clickableObjectOptions = {
        color: "red",
        pos: [200, 300],
        size: [100, 100]
    }
    const clickableObject = new ClickableObject(ctx, clickableObjectOptions)
})
    