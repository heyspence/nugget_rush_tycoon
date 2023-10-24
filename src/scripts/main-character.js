import ClickableObject from "./clickable-object";

class MainCharacter extends ClickableObject{
    constructor(ctx, options, headerContent, ...args){
        super(ctx, options, headerContent)
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

export default MainCharacter;