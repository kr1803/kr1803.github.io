const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const from = document.getElementById("from");

setTimeout(() => {

    line1.classList.add("show");
    line1.textContent = "I love you.";

}, 500);

setTimeout(() => {

    line2.classList.add("show");
    line2.textContent = "Happy 300 Days.";

}, 2500);

setTimeout(() => {

    line3.classList.add("show");
    line3.innerHTML = `
    300일은<br><br>
    우리가 함께한<br><br>
    첫 번째 이야기였으면 좋겠어.
    `;

}, 5000);

setTimeout(() => {

    from.classList.add("show");
    from.textContent = "- From. 강린 ❤️";

}, 8500);


// 별

const stars=document.getElementById("stars");

for(let i=0;i<150;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    let size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.animationDelay=Math.random()*5+"s";

    stars.appendChild(star);

}


// 하트

const hearts=document.getElementById("hearts");

for(let i=0;i<20;i++){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(12+Math.random()*15)+"px";

    heart.style.animationDuration=(10+Math.random()*10)+"s";

    heart.style.animationDelay=Math.random()*8+"s";

    hearts.appendChild(heart);

}
