import ProgressBar from "./progress-bar";

class ClickableObject{
    constructor(ctx, options, headerContent){
        this.ctx = ctx;
        this.ctx.imageSmoothingEnabled = false;

        this.imgList = []
        for(let i = 1; i < Object.keys(options).length; i++){
            if(options['img' + i]){
                this.imgList.push(options['img' + i]);
            }
        }

        for(let i = 0; i < this.imgList.length; i++){
            this['img' + (i + 1)] = this.loadImg(this.imgList[i])
        }

        this.counter = 0;
        this.idleImg = this.loadImg(options.idleImg);
        this.currentImg = this.imgList[0];
        this.toggleInterval = null;

        this.size = options.size;
        this.pos = options.pos;

        this.headerContent = headerContent
        this.scale = options.scale ? options.scale : [1, 1]

        this.rewardPos = options.rewardPos;

        const progressBar = new ProgressBar(this.ctx, this.pos, this.rewardPos, this)
        this.progressBar = progressBar
        
        this.idleImg.onload = () => {
            this.ctx.clearRect(...this.pos, ...this.size);
            this.ctx.drawImage(this.idleImg, ...this.pos, ...this.size)
        }
        
        this.renderIdle()

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
    
    loadImg(src){
        let img = new Image();
        img.src = src;
        return img;
    }

    renderIdle(){
        this.ctx.clearRect(...this.pos, ...this.size);
        this.ctx.drawImage(this.idleImg, ...this.pos, ...this.size)
    }

    animate(){
        if(this.toggleInterval) return;
        
        this.toggleInterval = setInterval(() => {
            this.toggleImages();
        }, this.animationSpeed)
    }
    
    toggleImages(){
        let images = [this.img1, this.img2]
        if(this.counter === images.length - 1){
            this.counter = 0
        }else{
            this.counter++
        }
        this.ctx.clearRect(...this.pos, ...this.size)
        this.ctx.drawImage(images[this.counter], ...this.pos, ...this.size)
    }

    stopAnimation(){
        if(this.toggleInterval){
            clearInterval(this.toggleInterval);
            this.toggleInterval = null;
            this.currentImg = this.img4
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
}

export default ClickableObject;