import ClickableObject from "./clickableObject";

class Background{
    constructor(ctx, options){
        this.ctx = ctx
        this.color = options.color;
        this.size = options.size;
        this.pos = options.pos;

        this.drawBackground(this.ctx)
        this.addBackgroundImg(this.ctx)
    }

    drawBackground(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(...this.pos, ...this.size);
        ctx.fill();
    }

    addBackgroundImg(ctx) {
        const img  = document.createElement("img");
        img.setAttribute("src", "assets/DALL·E 2023-10-18 16.49.37 - Illustration of a broad desert scene with a central river, occasional tumbleweeds, and sparse vegetation. The horizon is marked by distant mountain si.png");
        
        img.onload = () => {
            ctx.scale(0.33, 0.33);
            ctx.drawImage(img, -800, -400);
            console.log("background image loaded");
        }
    }
};

export default Background;