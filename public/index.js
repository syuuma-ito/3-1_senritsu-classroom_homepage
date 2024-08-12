const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

console.log("Hello, world!");

window.addEventListener("load", () => {
    console.log("The page has loaded!");
});
