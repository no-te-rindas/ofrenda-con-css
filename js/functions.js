// variables
const audio = document.getElementById("audio");
const btnPlay = document.getElementById("play");
let play = 0;

// addeventListener
btnPlay.addEventListener('click', playMusic);

// funciones
// funcion para iniciar la musica
function playMusic(){
    if (play === 0) {
        btnPlay.classList.remove("icon-play3");
        btnPlay.classList.add("icon-pause2");
        audio.play();
        play=1;
    }else{
        btnPlay.classList.remove("icon-pause2");
        btnPlay.classList.add("icon-play3");
        audio.pause();
        play=0;
    }
}