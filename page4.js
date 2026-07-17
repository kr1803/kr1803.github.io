const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const from = document.getElementById("from");

setTimeout(()=>{

line1.textContent="Happy 300 Days ❤️";
line1.classList.add("show");

},500);

setTimeout(()=>{

line2.innerHTML="300일 동안<br>내 곁에 있어줘서 고마워.";
line2.classList.add("show");

},2000);

setTimeout(()=>{

line3.innerHTML="앞으로도<br>지금처럼<br>행복하자.";
line3.classList.add("show");

},4000);

setTimeout(()=>{

from.innerHTML="From. 강린";
from.classList.add("show");

},6500);
