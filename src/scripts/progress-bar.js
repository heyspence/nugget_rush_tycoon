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
            localStorage.setItem("loadSpeed", 0.8)
        }

        if(!localStorage.getItem("maxLoot")){
            localStorage.setItem("maxLoot", 75)
        }
    }

    get loadSpeed(){
        return parseFloat(localStorage.getItem("loadSpeed"))
    }

    set loadSpeed(num){
        localStorage.setItem("loadSpeed", num)
    }

    get maxLoot(){
        return parseFloat(localStorage.getItem("maxLoot"))
    }

    set maxLoot(num){
        localStorage.setItem("maxLoot", num)
    }

    animate = ()=> {
        let currentCash = parseInt(localStorage.getItem("cashOnHand"))
        let currentMax = parseInt(localStorage.getItem("maxGold"))
        if(this.animating){
            return;
        }
        if(currentCash >= currentMax){
            console.log("storage insufficient");
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
                let reward = this.calculateReward.bind(this)();
                this.ctx.clearRect(...this.pos, ...this.size);
                this.clickableObject.addToTotal(reward);
                this.complete = true;
                this.clickableObject.stopAnimation();
                this.renderReward(reward);
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

    calculateReward(){
        let num = 0
        let percent = (Math.random() * 100)

        if(percent <= 10){
            let min = (4/5) * this.maxLoot;
            let max = this.maxLoot
            num = Math.ceil(Math.random() * (max - min) + min)
        }else{
            num = Math.floor(Math.random() * (this.maxLoot / 10))
        }
        return num;
    }

    renderReward(num){
        this.ctx.fillStyle = "rgb(253 214 67)";
        this.ctx.strokeStyle = "rgb(178 98 18)";
        this.ctx.font = "42px Luckiest Guy";
        this.ctx.fillText(`+$${num}`, this.pos[0] + 165, this.pos[1] + 150);
        this.ctx.strokeText(`+$${num}`, this.pos[0] + 165, this.pos[1] + 150);

        let textMetrix = this.ctx.measureText(`+$${num}`);
        let textWidth = textMetrix.width;

        setTimeout( ()=> this.ctx.clearRect(this.pos[0] + 165, this.pos[1] + 114, textWidth, 38), 
            (800 / this.loadSpeed));
    }

    drawBackground(){
        this.ctx.fillStyle = "rgb(38 22 23)";
        this.ctx.fillRect(this.pos[0] - 2, this.pos[1], this.size[0] + 8, this.size[1] + 6);
    }
}

export default ProgressBar