import StaticObject from "./static-object";
import ShopContent from "./shop-content";

class Tnt extends StaticObject{
    constructor(ctx, options){
        super(ctx, options)
        this.pos = [...options.pos]
    }

    increaseMaxLoot(){
        let currentMin = parseInt(localStorage.getItem("minLoot"))
        localStorage.setItem("minLoot", currentMin + 1);

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
        this.ctx.clearRect(this.pos[0], this.pos[1], 50, 50)
    }
}

export default Tnt