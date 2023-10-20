class Background{
    constructor(ctx, options){
        this.ctx = ctx
        this.color = options.color;
        this.size = options.size;
        this.pos = options.pos;
        this.clicks = 0

        this.drawBackground(this.ctx)

        console.log("background has been loaded")
    }

    drawBackground(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(...this.pos, ...this.size)
        ctx.fill();
    }

    countClicks(){
        this.clicks++
        console.log("clicked " + `${this.clicks}` + " times")
    }
}

export default Background