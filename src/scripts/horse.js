import StaticObject from "./static-object";
import ShopContent from "./shop-content";

class Horse extends StaticObject{
    constructor(ctx, options){
        super(ctx, options)
        this.pos = [...options.pos]
    }

    increaseSpeed(){
        let currentLoadSpeed = parseFloat(localStorage.getItem("loadSpeed"))
        localStorage.setItem("loadSpeed", currentLoadSpeed + 0.35)

        let currentAnimationSpeed = parseInt(localStorage.getItem("animationSpeed"))
        localStorage.setItem("animationSpeed", currentAnimationSpeed - 50)

        ShopContent.updateStats();

        this.stopAnimation.bind(this)();
        this.animate.bind(this)();
    }

    drawImg(){
        let img = new Image();
        img.onload = () => {
            this.clear.bind(this)();
            this.ctx.drawImage(img, ...this.pos, ...this.size);
        }

        img.src = this.img;
    }

    animate(){
        setTimeout(this.stopAnimation.bind(this), 500);
        const internalAnimate = () => {
            this.pos[1] -= 2
            this.drawImg();
            this.animationFrameId = requestAnimationFrame(internalAnimate);
        }
        internalAnimate();
    }

    stopAnimation(){
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
            this.clear.bind(this)();
        }
    }

    clear(){
        this.ctx.clearRect(...this.pos, this.size[0], this.size[1] + 5)
    }
}

export default Horse