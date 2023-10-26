import ShopContent from "./shop-content";

class StaticObject{
    constructor(ctx, options){
        this.ctx = ctx
        this.img = options.img;
        this.size = options.size;
        this.pos = options.pos;
        this.scale = options.scale ? options.scale : [1, 1];

        this.drawImg();
        this[options.ability]();
    }

    drawImg(){
        const img = new Image();

        img.onload = () => {
            this.ctx.save(); 
            this.ctx.scale(...this.scale);
            this.ctx.drawImage(img, ...this.pos, ...this.size); 
            this.ctx.restore(); 
        }
    
        img.src = this.img;
    }

    increaseMaxStorage(){
        let currentStorage = parseInt(localStorage.getItem("maxGold"))
        localStorage.setItem("maxGold", currentStorage * 20);
        ShopContent.updateStats();
    }

    increaseSpeed(){
        let currentLoadSpeed = parseFloat(localStorage.getItem("loadSpeed"))
        localStorage.setItem("loadSpeed", currentLoadSpeed + 0.35)

        let currentAnimationSpeed = parseInt(localStorage.getItem("animationSpeed"))
        localStorage.setItem("animationSpeed", currentAnimationSpeed - 50)
    }
}

export default StaticObject