import Reward from "./reward";

class ProgressBar{
    constructor(ctx, pos, rewardPos, clickableObject){
        this.ctx = ctx;
        this.pos = [pos[0] + 5, pos[1] - 22];
        this.size = [140, 15];
        this.loadTime = 0.5;
        this.currentWidth = 0;
        this.clickableObject = clickableObject;
        this.complete = false;
        this.animating = false;
        this.reward = new Reward(ctx, pos, this.size, rewardPos)

        if(!localStorage.getItem("loadSpeed")){
            localStorage.setItem("loadSpeed", 1.15)
        }

        if(!localStorage.getItem("maxLoot")){
            localStorage.setItem("maxLoot", 80)
        }

        if(!localStorage.getItem("minLoot")){
            localStorage.setItem("minLoot", 1)
        }
    }

    get loadSpeed(){
        return parseFloat(localStorage.getItem("loadSpeed"))
    }

    animate = ()=> {
        let currentCash = parseInt(localStorage.getItem("cashOnHand"))
        let currentMax = parseInt(localStorage.getItem("maxGold"))
        if(this.animating){
            return;
        }
        if(currentCash >= currentMax){
            // console.log("storage insufficient");
            return;
        }
        
        this.drawBackground();

        const internalAnimate = () => {
            if(this.complete){
                this.reset();
                return;
            }
            
            if(this.clickableObject.imgList.length > 1) this.clickableObject.animate()

            if(this.currentWidth >= this.size[0]){
                let reward = Reward.calculateReward();
                this.ctx.clearRect(...this.pos, ...this.size);
                this.clickableObject.addToTotal(reward);
                this.complete = true;
                this.clickableObject.stopAnimation();
                this.reward.renderReward(reward);
            }

            this.animating = true;

            if((this.currentWidth + this.loadSpeed) > this.size[0]){
                this.currentWidth = this.size[0]
            }else{
                this.currentWidth += this.loadSpeed;
            }
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
        this.ctx.clearRect(this.pos[0] - 2, this.pos[1], this.size[0] + 8, this.size[1] + 6)
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

    drawBackground(){
        this.ctx.fillStyle = "rgb(38 22 23)";
        this.ctx.fillRect(this.pos[0] - 2, this.pos[1], this.size[0] + 8, this.size[1] + 6);
    }
}

export default ProgressBar