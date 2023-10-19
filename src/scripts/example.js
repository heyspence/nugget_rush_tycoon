class Example {
    constructor(ele){
        this.ele = ele;
        this.ele.innerHTML = "<h1>It's Alive!!</h1>"
        this.ele.addEventListener("click", this.handleClick.bind(this))
    }

    handleClick(){
        // let childText = this.ele.children[0].innerText;
        // if(childText === 'Ouch!') childText = 'thats better';
        // else childText = 'Ouch!';
        // childText = "ouch!"

        this.ele.children[0].innerText = "ouch!"
    }
}

export default Example