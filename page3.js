const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const nextBtn = document.getElementById("nextBtn");

let opened = false;

envelope.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    // 봉투 열기
    envelope.classList.add("open");

    // 봉투가 열린 뒤 편지 등장
    setTimeout(() => {

        paper.classList.add("show");

    }, 900);

    // 봉투는 천천히 사라짐
    setTimeout(() => {

        envelope.classList.add("hide");

        document.querySelector(".guide").style.opacity = "0";

    }, 1300);

});

nextBtn.addEventListener("click", () => {

    document.body.style.opacity = "0";

    document.body.style.transition = ".8s";

    setTimeout(() => {

        location.href = "page4.html";

    },800);

});
