const text = "Happy\n300 Days";

const title = document.getElementById("title");

let i = 0;

function typing(){

if(i < text.length){

if(text[i] == "\n"){

title.innerHTML += "<br>";

}

else{

title.innerHTML += text[i];

}

i++;

setTimeout(typing,90);

}

}

typing();

document.body.onclick = () => {

document.body.classList.add("fadeout");

setTimeout(()=>{

location.href="page2.html";

},800);

}
