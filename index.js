const tiempo = document.querySelector("#tiempo");
const start = document.querySelector("#start");
const stopb = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let tiempoI = 0;
let tiempoT = 0;
let tiempoC = 0;
let parar = true;
let intervalo;
let hrs = 0;
let mins = 0;
let segs = 0;

start.addEventListener("click", () => {
    if(parar){
        parar = false;
        tiempoI = Date.now() - tiempoT;
        intervalo = setInterval(updateTime, 1000);
    }
});
stopb.addEventListener("click", () => {
    if(!parar){
        parar = true;
        tiempoT = Date.now() - tiempoI;
        clearInterval(intervalo);
    }
});
reset.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalo);
    tiempoI = 0;
    tiempoT = 0;
    tiempoC = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    tiempo.textContent = "00:00:00";
    parar = true;
});

function updateTime(){
    tiempoT = Date.now() - tiempoI;
    segs = Math.floor((tiempoT / 1000) % 60);
    mins = Math.floor((tiempoT / (1000 * 60)) % 60);
    hrs = Math.floor((tiempoT / (1000 * 60 * 60)) % 60);

    segs = pad(segs);
    mins = pad(mins);
    hrs = pad(hrs);

    tiempo.textContent = `${hrs}:${mins}:${segs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}