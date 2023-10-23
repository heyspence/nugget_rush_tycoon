import ProgressBar from "./progress-bar";

class ClickableObject{
    constructor(ctx, options, headerContent){
        this.ctx = ctx;
        this.ctx.imageSmoothingEnabled = false;

        this.img1 = new Image();
        this.img1.src = options.img1;
        this.img2 = new Image();
        this.img2.src = options.img2;
        this.img3 = new Image();
        this.img3.src = options.img3;
        this.img4 = new Image();
        this.img4.src = options.img4;
        this.counter = 0;
        this.idleImg = new Image();
        this.idleImg.src = options.idleImg;
        this.currentImg = this.img1;
        this.toggleInterval = null;

        this.size = options.size;
        this.pos = options.pos;

        this.headerContent = headerContent
        this.scale = options.scale ? options.scale : [1, 1]

        const progressBar = new ProgressBar(this.ctx, this.pos, this)
        this.progressBar = progressBar

        this.renderIdle()
        this.idleImg.onload = () => {
            this.ctx.clearRect(...this.pos, ...this.size);
            this.ctx.drawImage(this.idleImg, ...this.pos, ...this.size)
        }

        if(!localStorage.getItem("animationSpeed")){
            localStorage.setItem("animationSpeed", 450)
        }
    }

    get animationSpeed(){
        return parseInt(localStorage.getItem("animationSpeed"));
    }
    
    set animationSpeed(num){
        localStorage.setItem("animationSpeed", num)
    }

    renderIdle(){
        this.ctx.clearRect(...this.pos, ...this.size);
        this.ctx.drawImage(this.idleImg, ...this.pos, ...this.size)
    }

    toggleImages(){
        let images = [this.img3, this.img4]
        if(this.counter === images.length - 1){
            this.counter = 0
        }else{
            this.counter++
        }
        this.ctx.clearRect(...this.pos, ...this.size)
        this.ctx.drawImage(images[this.counter], ...this.pos, ...this.size)
    }

    animate(){
        if(this.toggleInterval) return;

        this.toggleInterval = setInterval(() => {
            this.toggleImages();
        }, this.animationSpeed)
    }

    stopAnimation(){
        if(this.toggleInterval){
            clearInterval(this.toggleInterval);
            this.toggleInterval = null;
            this.renderIdle();
        }
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
            this.ctx.drawImage(img, this.pos[0] - 10, this.pos[1] + 10, 110, 110); 
            this.ctx.restore(); 
        }
    
        img.src = imgUri;
    }
}

export default ClickableObject;