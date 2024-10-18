import ClickableObject from "./clickable-object";
import { collectUsername, postScore } from "./leaderboard";
import Timer from "./timer";

class MainCharacter extends ClickableObject{
    constructor(ctx, options, headerContent, timer, ...args){
        super(ctx, options, headerContent);
        this.victorySound = new Audio('assets/audio/success-fanfare-trumpets-6185.mp3');
        this.timer = timer;
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
        this.timer.stopTimer();
        const username = collectUsername();
        postScore(username, this.timer.time);
        displayLeaderboard();
    }
}

export default MainCharacter;