const number = document.getElementById("number");

let value = 0;

const timer = setInterval(() => {

    value++;

    number.textContent = value;

    if(value >= 300){

        clearInterval(timer);

    }

}, 8);

document.getElementById("nextBtn").onclick = () => {

    document.body.classList.add("fadeout");

    setTimeout(() => {

        location.href = "page3.html";

    },700);

};
