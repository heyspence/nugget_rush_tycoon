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
    
    const shopContent = new ShopContent(headerContent)
    
    const mainCharacterOptions = {
        pos: [180, 180],
        size: [150, 200],
        img: "assets/main-transparent.png"
    }

    const mainCharacter = new ClickableObject(ctx, mainCharacterOptions, headerContent)
    canvas.addEventListener("click", (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
    
        event.canvasX = x;
        event.canvasY = y;
    
        mainCharacter.clickHandler(event);
    });
    
})
    