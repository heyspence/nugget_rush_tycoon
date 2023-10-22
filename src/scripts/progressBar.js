class ProgressBar{
    constructor(ctx, pos, clickableObject){
        this.ctx = ctx;
        this.pos = [pos[0] + 20, pos[1] - 30];
        this.size = [140, 15];
        this.loadTime = 10000;
        this.currentWidth = 0;
        this.startTime = null;
        this.clickableObject = clickableObject;
        this.complete = false;

        this.drawLoadBackground();
        this.animate();
    }

    animate = ()=> {
        if(this.complete){
            return;
        }

        if(this.currentWidth >= this.size[0]){
            this.ctx.clearRect(...this.pos, ...this.size);
            this.drawLoadBackground();
            this.clickableObject.addToTotal(1);
            this.complete = true
            return;
        }

        this.currentWidth += 0.5
        this.update()


        requestAnimationFrame(this.animate);
    }
    
    update(color){
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(...this.pos, this.currentWidth, this.size[1]);
    }

    isComplete(){
        return this.currentWidth >= this.size[0];
    }

    reset(){
        this.currentWidth = 0;
        this.startTime = 0;
    }

    drawLoadBackground(){
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(...this.pos, ...this.size);
    }
}

export default ProgressBar