import ClickableObject from "./clickableObject";

class Background{
    constructor(ctx){
        this.ctx = ctx

        this.addBackgroundImg(this.ctx)
    }

    addBackgroundImg(ctx) {
        const img  = document.querySelector("#main-background-img");
        ctx.drawImage(img, -750, -400);
    }
};

export default Background;