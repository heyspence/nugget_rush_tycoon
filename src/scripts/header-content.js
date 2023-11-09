class HeaderContent {
    constructor(){
        this.renderLogo()
        this.renderTotal()
        this.renderMenu()
        if(localStorage.getItem("cashOnHand") === 'NaN'){
            localStorage.setItem("cashOnHand", 0)
        }
    }
    
    get cashOnHand(){
        let cash = localStorage.getItem("cashOnHand")
        return cash ? parseInt(cash) : 0
    }

    set cashOnHand(num) {
        localStorage.setItem("cashOnHand", num.toString())
    }

    renderLogo(){
        const logoEle = document.querySelector("#main-title-container")
        const logo = document.createElement("img")
        logo.setAttribute("src", "./assets/output-onlinepngtools (2).png")
        logoEle.appendChild(logo)
    }

    renderTotal() {
        const totalEle = document.querySelector("#main-total");
        totalEle.innerHTML = `<h2>Total: $${this.cashOnHand}</h2>`;
    }

    renderMenu() {
        const menuEle = document.querySelector("#main-menu");
        menuEle.innerHTML = '<h2>Menu</h2>'
    }

    subtractFromTotal(num){
        if(this.cashOnHand >= num){
            this.cashOnHand -= num;
            this.renderTotal();
            return true;
        }else{
            // console.log("insufficientfunds")
            return false;
        }
    }

    resetTotal(){
        this.cashOnHand = 0
        this.renderTotal()
    }
}

export default HeaderContent