const $botonmenu = document.querySelector(".menu--boton"); 
const $mimenu = document.querySelector(".menu"); 
console.log($mimenu)
function funcionBoton(){
    $mimenu.style.display = "block";
    document.body.after($mimenu);
}
$botonmenu.addEventListener("click",funcionBoton);
document.body.append($mimenu)