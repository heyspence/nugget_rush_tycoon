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

        this.drawImg();
        this.drawLoadingBar();
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

    drawLoadingBar(){

    }

    clickHandler(event){
        const xCoordinates = [this.pos[0], this.pos[0] + this.size[0]]
        const withinX = (event.canvasX >= xCoordinates[0] && event.canvasX <= xCoordinates[1])
        const yCoordinates = [this.pos[1], this.pos[1] + this.size[1]]
        const withinY = (event.canvasY >= yCoordinates[0] && event.canvasY <= yCoordinates[1])
        
        if(withinX && withinY){
            new ProgressBar(this.ctx, this.pos, this)
        }
    }

    addToTotal(num){
        this.headerContent.cashOnHand = this.headerContent.cashOnHand + num;
        this.headerContent.renderTotal();
    }
}

export default ClickableObject;