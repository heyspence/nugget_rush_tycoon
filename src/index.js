import Example from "./scripts/example";
import ClickableObject from "./scripts/clickableObject";
import Background from "./scripts/background";

document.addEventListener("DOMContentLoaded", () => {
    console.log('content has been loaded');

    const backgroundEle = document.querySelector("#background")


    const canvas = document.getElementById("canvas")

    const ctx = canvas.getContext("2d")
    const options = {
        color: "rgb(183 142 114)",
        pos: [0, 0],
        size: [710, 425]
    }

    const background = new Background(ctx, options)
    canvas.addEventListener("click", Background.countClicks.bind(background))
})
    