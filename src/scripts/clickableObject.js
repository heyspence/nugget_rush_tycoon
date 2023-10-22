import Background from "./background";
import ProgressBar from "./progressBar";

class ClickableObject{
    constructor(ctx, options, headerContent){
        this.ctx = ctx
        this.img = options.img;
        this.size = options.size;
        this.pos = options.pos;
        this.headerContent = headerContent
        this.loadTime = options.loadTime;
        this.scale = options.scale ? options.scale : [1, 1]
        const progressBar = new ProgressBar(this.ctx, this.pos, this)
        this.progressBar = progressBar

        this.drawImg();
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

    clickHandler(event){
        const xCoordinates = [this.pos[0], this.pos[0] + this.size[0]]
        const withinX = (event.canvasX >= xCoordinates[0] && event.canvasX <= xCoordinates[1])
        const yCoordinates = [this.pos[1], this.pos[1] + this.size[1]]
        const withinY = (event.canvasY >= yCoordinates[0] && event.canvasY <= yCoordinates[1])
        
        if(withinX && withinY){
            this.progressBar.animate()
        }
    }

    addToTotal(num){
        this.headerContent.cashOnHand = this.headerContent.cashOnHand + num;
        this.headerContent.renderTotal();
    }

    autoClick(){
        setInterval(this.progressBar.animate, 450)
    }

    displayVictoryCrown(imgUri){
        const img = new Image();

        img.onload = () => {
            this.ctx.save(); 
            this.ctx.scale(...this.scale);
            this.ctx.drawImage(img, this.pos[0] - 15, this.pos[1] - 40, 100, 110); 
            this.ctx.restore(); 
        }
    
        img.src = imgUri;
    }
}

export default ClickableObject;