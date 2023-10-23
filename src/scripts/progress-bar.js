class ProgressBar{
    constructor(ctx, pos, clickableObject){
        this.ctx = ctx;
        this.pos = [pos[0] - 15, pos[1] - 22];
        this.size = [140, 15];
        this.loadTime = 0.5;
        this.currentWidth = 0;
        this.clickableObject = clickableObject;
        this.complete = false;
        this.animating = false;


        if(!localStorage.getItem("loadSpeed")){
            localStorage.setItem("loadSpeed", 0.5)
        }
    }

    get loadSpeed(){
        return parseFloat(localStorage.getItem("loadSpeed"))
    }

    set loadSpeed(num){
        localStorage.setItem("loadSpeed", num)
    }

    animate = ()=> {
        let currentCash = parseInt(localStorage.getItem("cashOnHand"))
        let currentMax = parseInt(localStorage.getItem("maxGold"))
        if(this.animating){
            return;
        }
        if(currentCash >= currentMax){
            console.log("storage insuficient");
            return;
        }
        
        this.drawBackground();

        const internalAnimate = () => {
            if(this.complete){
                this.reset();
                return;
            }

            this.clickableObject.animate()

            if(this.currentWidth >= this.size[0]){
                let reward = Math.floor(Math.random() * 100)
                this.ctx.clearRect(...this.pos, ...this.size);
                this.clickableObject.addToTotal(reward);
                this.complete = true;
                this.clickableObject.stopAnimation();
                this.renderReward(reward);
            }

            this.animating = true;
            this.currentWidth += this.loadSpeed;
            this.update()

            requestAnimationFrame(internalAnimate);
        }

        internalAnimate();
    }
    
    update(){
        this.ctx.fillStyle = "rgb(253 214 67)";
        this.ctx.fillRect(this.pos[0] + 2, this.pos[1] + 3, this.currentWidth, this.size[1]);
    }

    clear(){
        this.ctx.clearRect(this.pos[0] - 2, this.pos[1], this.size[0] + 6, this.size[1] + 6)
    }

    isComplete(){
        return this.currentWidth >= this.size[0];
    }

    reset(){
        this.currentWidth = 0;
        this.clear()
        this.animating = false;
        this.complete = false;
    }

    renderReward(num){
        this.ctx.fillStyle = "rgb(38, 22, 23)";
        this.ctx.font = "38px Luckiest Guy";
        this.ctx.fillText(`+$${num}`, this.pos[0] + 120, this.pos[1] + 220);

        let textMetrix = this.ctx.measureText(`+$${num}`);
        let textWidth = textMetrix.width;

        setTimeout( ()=> this.ctx.clearRect(this.pos[0] + 120, this.pos[1] + 186, textWidth, 38), 1000);
    }

    drawBackground(){
        this.ctx.fillStyle = "rgb(38 22 23)";
        this.ctx.fillRect(this.pos[0] - 2, this.pos[1], this.size[0] + 6, this.size[1] + 6);
    }
}

export default ProgressBar