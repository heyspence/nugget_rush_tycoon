class Example {
    constructor(idName){
        this.idName = idName;
        this.idName.innerHTML = "<button class='main-clicker'>Click Me</button>"
        this.idName.addEventListener("click", this.handleClick.bind(this))
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