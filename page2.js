// ===============================
// 300 Counter Animation
// ===============================

const counter = document.getElementById("counter");
const message = document.querySelector(".message");
const button = document.getElementById("nextButton");

let number = 0;
const target = 300;
const speed = 15; // 숫자가 올라가는 속도 (작을수록 빠름)

const animation = setInterval(() => {

    number++;

    counter.textContent = number;

    if (number >= target) {

        clearInterval(animation);

        // 메시지 등장
        message.classList.add("show");

        // 버튼 등장
        setTimeout(() => {
            button.classList.add("show");
        }, 800);

    }

}, speed);


// ===============================
// Background Particles
// ===============================

const particles = document.querySelector(".particles");

for(let i = 0; i < 40; i++){

    const dot = document.createElement("div");

    dot.classList.add("particle");

    dot.style.left = Math.random() * 100 + "vw";
    dot.style.top = Math.random() * 100 + "vh";

    dot.style.animationDelay = Math.random() * 8 + "s";
    dot.style.animationDuration = (8 + Math.random() * 8) + "s";

    particles.appendChild(dot);

}


// ===============================
// Next Page
// ===============================

button.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "page3.html";

    }, 1200);

});
