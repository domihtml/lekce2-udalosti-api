

let nadpis = document.querySelector("h1");
nadpis.classList.add("zluty");


let odstavec = document.getElementsByClassName ("odstavec")[0];

function Ztucni(udalost){
udalost.target.style.fontWeight = "bold";
}

function Vratzpet(udalost) {
udalost.target.style.fontWeight ="normal";
}

function Zmenbarvu(){

odstavec.classList.add("cervena");
}

/* 
function Tucni() {
    document.querySelector(".odstavecdva").style.fontWeight = "bold";
}


function Vracej() {
    document.querySelector(".odstavecdva").style.fontWeight = "normal";
}
*/

/**  
* @param {string} elementSelector
* 
*/

function Prehraj(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
}

/**  
* @param {string} elementSelector
* 
*/

function Zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}




