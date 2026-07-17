const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

envelope.onclick = () => {

    envelope.classList.add("open");

    setTimeout(()=>{

        letter.classList.add("show");

        letter.scrollIntoView({
            behavior:"smooth"
        });

    },500);

};

document.getElementById("nextBtn").onclick=()=>{

    location.href="page4.html";

};
