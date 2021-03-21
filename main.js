

let nadpis = document.querySelector("h1");
nadpis.classList.add("zluty");

let odstavec = document.querySelector("#odstavec")

function Ztucni(udalost){
udalost.target.style.fontWeight = "bold";
}

function Vratzpet(udalost){
udalost.target.style.fontWeight ="normal";
}

function Zmenbarvu(){

odstavec.classList.add("cervena");
}


function ChangeFontSize(){
var fontSize = parseInt(window.getComputedStyle(odstavec).fontSize);

odstavec.style.fontSize = fontSize + 1 + "px";
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


function Zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}


function Ztis(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.muted = true;
}

function ChangeVolume(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0.5;
}

function MaxVolume(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 1;
}

function BackToBeginning(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.currentTime = 0;

}
