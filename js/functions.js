// variables
const audio = document.getElementById("audio");
const btnPlay = document.getElementById("play");
const btnCreate = document.getElementById("create");
const modal = document.getElementById("modal");
const modalCalavera = document.getElementById("modalCalavera");
const btnClose = document.getElementById("close");
const closeCalavera = document.getElementById("closeCalavera");
const btnLink = document.getElementById("btnLink");
const form = document.getElementById("form");
const wrapperShare = document.getElementById("wrapperShare");
const shareWhatsapp = document.getElementById("shareWhatsapp");
const shareFacebook = document.getElementById("shareFacebook");
const responseError = document.getElementById("responseError");
let play = 0;

// addeventListener
btnPlay.addEventListener('click', playMusic);
btnCreate.addEventListener('click', create);
btnClose.addEventListener('click', create)
btnLink.addEventListener('click', createLink)
closeCalavera.addEventListener('click', closeModalCalavera)
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

function create(){
    modal.classList.toggle("closeModal");
    // alert("hola")
}
function closeModalCalavera(){
    modalCalavera.classList.toggle("closeModal");
}
function createLink(e){
    e.preventDefault()
    const text = document.getElementById("text").value;
    console.log(text)
    if (text == "") {
        responseError.classList.remove("hidden");
        setTimeout(() => {
            responseError.classList.add("hidden");
        }, 3000);
    } else {
        // limpiar texto de espacios y saltos de linea
        const textoLimpio = limpiar(text);
        // creamos url
        const URLactual = window.location;
        url = URLactual.protocol+"//"+URLactual.host+URLactual.pathname+"?calavera="+textoLimpio;
        urlW = isMobile();
        whatsapp = urlW+url;
        facebook = "http://www.facebook.com/share.php?u="+url;
        shareWhatsapp.href=whatsapp;
        shareFacebook.href=facebook;
        

        form.classList.add('hidden');
        wrapperShare.classList.remove('hidden');
        console.log(whatsapp)
    }
    

}

function limpiar(text){
    // limpiamos saltos de linea
    text = text.replace(/\n|\r/g, "£")
    text = text.replace(/ /g,"_")
    text = text.replace(/,/g,"-")
    // text = text.replace("", "+")
    console.log(text)
    return text;
}

function leerCalaverita(){
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    page_type = urlParams.get('calavera')
    if(page_type!=null){
        console.log("abrir calavera")
        // alert(page_type)
        setTimeout(() => {
            modalCalavera.classList.toggle("closeModal");
            txt = page_type.replace(/_/g, " ");
            txt = txt.replace(/£/g, "<br>")
            txt = txt.replace(/-/g, ",<br>");
            document.getElementById("textCalavera").innerHTML=txt.toUpperCase();
        }, 3000);
    }
}

function isMobile(){
    const size = window.matchMedia("(max-width: 1024px)");
    let urlW;
    if (size.matches) { 
        // es mobile
        urlW = "whatsapp://send?text=";
    } else {
        // es escritorio
        urlW = "https://web.whatsapp.com/send?text=";
    }
    return urlW;
}

leerCalaverita();