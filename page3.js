const envelope = document.getElementById("envelope");
const openText = document.getElementById("openText");

const paper = document.getElementById("paper");
const letterText = document.getElementById("letterText");
const nextButton = document.getElementById("nextButton");

const letter = `
안녕.

벌써 우리가 함께한 지 300일이 되었네.

시간이 정말 빠른 것 같아.

너와 함께한 하루하루는
평범한 일상도 특별한 추억으로 만들어줬어.

항상 내 곁에서 웃어주고,
사랑해줘서 정말 고마워.

앞으로도 지금처럼
많이 웃고,
많이 사랑하자.

Happy 300 Days ❤️
`;

envelope.addEventListener("click", () => {

    envelope.style.display = "none";
    openText.style.display = "none";

    paper.classList.add("show");

    setTimeout(() => {

        letterText.textContent = letter;
        letterText.classList.add("show");

    }, 300);

    setTimeout(() => {

        nextButton.classList.add("show");

    }, 1000);

});

nextButton.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "page4.html";

    }, 1000);

});
