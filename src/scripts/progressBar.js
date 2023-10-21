import ClickableObject from "./clickableObject";

class ProgressBar{
    constructor(ctx, pos){
        this.ctx = ctx
        this.pos = [pos[0] + 20, pos[1] - 30]
        this.size = [140, 15]

        this.draw()
    }

    draw(){
        this.ctx.fillStyle = "blue"
        this.ctx.fillRect(...this.pos, ...this.size)
    }
}

export default ProgressBar