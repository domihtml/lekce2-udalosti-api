

let nadpis = document.querySelector("h1");
nadpis.classList.add("zluty");


let odstavec = document.getElementsByClassName ("odstavec");

function Ztucni(udalost){
udalost.target.style.fontWeight = "bold";
}

function Vratzpet(udalost) {
udalost.target.style.fontWeight ="normal";
}

/* 
function Tucni() {
    document.querySelector(".odstavecdva").style.fontWeight = "bold";
}


function Vracej() {
    document.querySelector(".odstavecdva").style.fontWeight = "normal";
}
*/
