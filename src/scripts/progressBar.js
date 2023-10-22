class ProgressBar{
    constructor(ctx, pos, clickableObject){
        this.ctx = ctx;
        this.pos = [pos[0] - 30, pos[1] - 40];
        this.size = [140, 15];
        this.loadTime = 10000;
        this.currentWidth = 0;
        this.clickableObject = clickableObject;
        this.complete = false;
        this.animating = false;

        this.drawBackground();
    }

    animate = ()=> {
        if(this.animating)return;

        const internalAnimate = () => {
            if(this.complete){
                this.reset()
                return;
            }

            if(this.currentWidth >= this.size[0]){
                this.ctx.clearRect(...this.pos, ...this.size);
                this.clickableObject.addToTotal(1);
                this.complete = true
            }

            this.animating = true
            this.currentWidth += 1
            this.update()

            requestAnimationFrame(internalAnimate);
        }

        internalAnimate();
    }
    
    update(){
        this.ctx.fillStyle = "rgb(253 214 67)";
        this.ctx.fillRect(this.pos[0] + 2, this.pos[1] + 3, this.currentWidth, this.size[1]);
    }

    isComplete(){
        return this.currentWidth >= this.size[0];
    }

    reset(){
        this.drawBackground()
        this.currentWidth = 0;
        this.update()
        this.animating = false;
        this.complete = false;
    }

    drawBackground(){
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.pos[0] - 2, this.pos[1], this.size[0] + 6, this.size[1] + 6);
    }
}

export default ProgressBar