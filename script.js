// ===============================
// Typing Animation
// ===============================

const text = "안녕,\n내가 가장 사랑하는 사람.";

const typing = document.getElementById("typing");

let index = 0;

function typeWriter() {

    if (index < text.length) {

        if (text.charAt(index) === "\n") {
            typing.innerHTML += "<br>";
        } else {
            typing.innerHTML += text.charAt(index);
        }

        index++;

        setTimeout(typeWriter, 120);

    }

}

setTimeout(typeWriter, 800);


// ===============================
// Stars
// ===============================

const stars = document.getElementById("stars");

for (let i = 0; i < 180; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 5 + "s";

    stars.appendChild(star);

}


// ===============================
// Hearts
// ===============================

const hearts = document.getElementById("hearts");

const heartIcons = ["❤", "♡"];

for (let i = 0; i < 20; i++) {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
        heartIcons[Math.floor(Math.random() * heartIcons.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (14 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (10 + Math.random() * 8) + "s";

    heart.style.animationDelay =
        Math.random() * 8 + "s";

    hearts.appendChild(heart);

}


// ===============================
// Click → Page2
// ===============================

let clicked = false;

document.body.addEventListener("click", () => {

    if (clicked) return;

    clicked = true;

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "page2.html";

    }, 1400);

});
