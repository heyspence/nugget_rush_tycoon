import ClickableObject from "./clickable-object";
import MainCharacter from "./main-character";

class HiredHand extends ClickableObject{
    constructor(ctx, options, headerContent, ...args){
        super(ctx, options, headerContent)
    }

    autoClick(){
        setInterval(this.progressBar.animate, 2500)
    }
}

export default HiredHand;