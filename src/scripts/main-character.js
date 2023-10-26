import ClickableObject from "./clickable-object";

class MainCharacter extends ClickableObject{
    constructor(ctx, options, headerContent, ...args){
        super(ctx, options, headerContent);
        this.victorySound = new Audio('assets/audio/success-fanfare-trumpets-6185.mp3');
    }

    displayVictoryCrown(imgUri){
        const img = new Image();

        img.onload = () => {
            this.ctx.save(); 
            this.ctx.scale(...this.scale);
            this.victorySound.play()
            this.ctx.drawImage(img, this.pos[0] - 10, this.pos[1] + 10, 110, 110); 
            this.ctx.restore(); 
        }
    
        img.src = imgUri;
    }
}

export default MainCharacter;