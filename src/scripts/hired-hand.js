import ClickableObject from "./clickable-object";
import MainCharacter from "./main-character";

class HiredHand extends ClickableObject{
    constructor(ctx, options, headerContent, ...args){
        super(ctx, options, headerContent)
    }
}

export default HiredHand;