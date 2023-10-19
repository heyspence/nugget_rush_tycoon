import Example from "./scripts/example";

document.addEventListener("DOMContentLoaded", () => {
    console.log('content has been loaded');
    const main = document.getElementById("main");
    new Example(main);
})