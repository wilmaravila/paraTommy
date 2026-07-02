function abrir() {
    document.getElementsByClassName("corazon")[0].style.animation = "open 0.5s forwards";
    document.getElementsByClassName("texto-corazon")[0].style.display = "none";
    setTimeout(function() {
        document.getElementsByClassName("corazon")[0].style.visibility = "hidden";
        document.getElementsByClassName("corazon")[0].style.display = "none";
        document.getElementsByTagName("main")[0].style.display = "block";
    }, 400);
    document.getElementsByClassName("contenido")[0].style.visibility = "visible";

}