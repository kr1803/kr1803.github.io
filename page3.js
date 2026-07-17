const intro = document.getElementById("intro");
const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");

envelope.onclick = () => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

        paper.classList.add("show");

        window.scrollTo(0,0);

    },500);

};

document.getElementById("nextPage").onclick = () => {

    location.href="page4.html";

};
