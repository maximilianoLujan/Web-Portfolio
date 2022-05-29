const $botonmenu = document.querySelector(".menu--boton"); 
const $mimenu = document.querySelector(".menu");
const $botoncerrar = document.querySelector(".cerrar--boton")
function funcionBoton(){
    $mimenu.style.display = "block";
    $botonmenu.style.display ="none";
    $botoncerrar.style.display ="block";
}
function funcionCerrar(){
    $mimenu.style.display = "none";
    $botoncerrar.style.display ="none";
    $botonmenu.style.display ="block";
}
$botonmenu.addEventListener("click",funcionBoton);
$botoncerrar.addEventListener("click",funcionCerrar);