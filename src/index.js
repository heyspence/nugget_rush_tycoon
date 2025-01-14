import Background from "./scripts/background";
import HeaderContent from "./scripts/header-content"
import ShopContent from "./scripts/shop-content";
import MainCharacter from "./scripts/main-character";
import Menu from "./scripts/menu";
import Timer from "./scripts/timer";
import { displayLeaderboard } from "./scripts/leaderboard";

window.addEventListener("load", () => {

    const canvas = document.getElementById("canvas");
    const canvas2 = document.getElementById("canvas2");

    const ctx = canvas.getContext("2d");
    const ctx2 = canvas2.getContext("2d");
    
    const background = new Background(ctx);
    const menu = new Menu();
    const timer = new Timer();
    const headerContent = new HeaderContent();
    
    const mainCharacterOptions = {
        pos: [165, 175],
        size: [150, 170],
        rewardPos: [165, 165],
        img1: "assets/Cowboy 4 HiRes/Cowboy4_idle without gun_3.png",
        img2: "assets/finalShovel.png",
        idleImg: "assets/Cowboy 4 HiRes/Cowboy4_idle without gun_1.png"
    }
    
    const mainCharacter = new MainCharacter(ctx2, mainCharacterOptions, headerContent, timer)
    canvas2.addEventListener("click", (event) => {
        const rect = canvas2.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        event.canvasX = x;
        event.canvasY = y;
        
        mainCharacter.clickHandler(event);
    });

    displayLeaderboard();
    
    const shopContent = new ShopContent(headerContent, mainCharacter)
})    
