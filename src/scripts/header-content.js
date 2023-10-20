class HeaderContent {
    constructor(){
        this.cashOnHand = 0

        this.renderLogo()
        this.renderTotal()
        this.renderMenu()
    }

    renderLogo(){
        const logoEle = document.querySelector("#main-title-container")
        const logo = document.createElement("img")
        logo.setAttribute("src", "./assets/output-onlinepngtools (3).png")
        logoEle.appendChild(logo)
    }

    countClicks(){
        this.cashOnHand++;
        this.renderTotal();
    }

    renderTotal() {
        const totalEle = document.querySelector("#main-total");
        totalEle.innerHTML = `<h2>Total: $${this.cashOnHand}</h2>`;
    }

    renderMenu() {
        const menuEle = document.querySelector("#main-menu");
        menuEle.innerHTML = '<h2>Menu</h2>'
    }
}

export default HeaderContent