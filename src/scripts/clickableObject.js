class ClickableObject{
    constructor(ctx, options){
        this.ctx = ctx
        this.color = options.color;
        this.size = options.size;
        this.pos = options.pos;
        this.counter = 0;

        this.draw(this.ctx);
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(...this.pos, ...this.size);
        ctx.fill();

        console.log("clickable object has been loaded");
    }
}

window.ClickableObject = ClickableObject;

export default ClickableObject;