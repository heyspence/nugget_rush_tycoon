class ClickableObject{
    constructor(ctx, options){
        this.ctx = ctx
        this.color = options.color;
        this.size = options.size;
        this.pos = options.pos;
        this.counter = 0

        this.draw(this.ctx)
        document.addEventListener("click", this.changeColor.bind(this))

        console.log("clickable object has been loaded")
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(...this.pos, ...this.size)
        ctx.fill();
    }

    changeColor(){
        this.counter++
        console.log("clicked " + `${this.counter}` + " times")
        this.className = "red"
    }

}

window.ClickableObject = ClickableObject

export default ClickableObject