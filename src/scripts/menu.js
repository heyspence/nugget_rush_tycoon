class Menu{
    constructor(){
        let menuEle = document.querySelector("#main-menu");
        menuEle.addEventListener("click", this.revealModal.bind(this));

        this.overlay = document.querySelector(".overlay");
        this.modal = document.querySelector(".modal");
        
        let closeBtn = document.querySelector(".btn-close");
        closeBtn.addEventListener("click", this.hideModal.bind(this));
        this.overlay.addEventListener("click", this.hideModal.bind(this));

        let resetBtn = document.querySelector("#reset")
        resetBtn.addEventListener("click", this.resetGame.bind(this))

        let demoBtn = document.querySelector("#demo");
        demoBtn.addEventListener("click", this.cheat.bind(this));
    }

    revealModal(){
        console.log("menu clicked");
        this.modal.classList.remove("hidden");
        this.overlay.classList.remove("hidden");

    }

    hideModal(){
        this.modal.classList.add("hidden");
        this.overlay.classList.add("hidden");
    }

    resetGame(){
        localStorage.clear();
        location.reload();
    }

    cheat(){
        localStorage.setItem("cashOnHand", 100000);
        location.reload();
    }
}

export default Menu;