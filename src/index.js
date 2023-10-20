import ClickableObject from "./scripts/clickableObject";
import Background from "./scripts/background";
import HeaderContent from "./scripts/header-content"
import ShopContent from "./scripts/shop-content";

document.addEventListener("DOMContentLoaded", () => {
    console.log('content has been loaded');

    const canvas = document.getElementById("canvas")

    const ctx = canvas.getContext("2d")
    const options = {
        color: "rgb(183 142 114)",
        pos: [0, 0],
        size: [720, 465]
    }

    const background = new Background(ctx, options)
    
    const headerContent = new HeaderContent()
    canvas.addEventListener("click", headerContent.countClicks.bind(headerContent))

    const shopContent = new ShopContent()

    // const clickableObjectOptions = {
    //     color: "red",
    //     pos: [0, 0],
    //     size: [100, 100]
    // }
    // const clickableObject = new ClickableObject(ctx, clickableObjectOptions)
})
    