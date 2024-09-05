const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

let isAnimated = false;

const setEffect = async () => {
    let target = document.querySelector(".effect-target");
    window.addEventListener("scroll", async () => {
        if (isAnimated) {
            return;
        }

        // ターゲットが画面内に入ったらホラーエフェクトを実行
        var scroll = window.scrollY;
        var windowHeight = window.innerHeight;
        var targetPos = target.getBoundingClientRect().top + scroll;
        if (scroll > targetPos - windowHeight) {
            isAnimated = true;
            console.log("アニメーションスタート");
            horrorEffect();
        }
    });
};

const horrorEffect = async () => {
    // スクロールを無効化
    document.body.style.overflowY = "hidden";

    await sleep(1000);

    //  .overlay 要素に .overlay--active クラスを追加
    let overlay = document.querySelector(".overlay");
    overlay.classList.add("overlay--active");
    // 1秒待つ
    // .overlay に "次はお前"というテキストで画面を少しずつ埋め尽くす
    let text = "次はお前 ";
    let textContainer = document.querySelector(".overlay");
    for (let j = 0; j < 200; j++) {
        textContainer.textContent += text;
        await sleep(50);
    }
    overlay.classList.remove("overlay--active");

    // スクロールを有効化
    document.body.style.overflowY = "scroll";
};

const main = () => {
    // setEffect();
};

window.addEventListener("load", () => {
    console.log("The page has loaded!");

    main();
});
