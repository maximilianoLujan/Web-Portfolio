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
document.addEventListener("click",e=>{
    if (e.target.className === "cerrar--boton") funcionCerrar();
    if (e.target.className === "menu--boton") funcionBoton();
    if (e.target.className === "links github") window.open("https://github.com/maximilianoLujan");
    if (e.target.className === "links linkedln") window.open("https://www.linkedin.com/in/maximiliano-luj%C3%A1n-13323220a/");
    if (e.target.className === "links twitter") window.open("https://twitter.com/MaximilianoL01");
    if (e.target.className === "links instagram") window.open("https://www.instagram.com/maxilujan01/");
    if (e.target.className === "español") window.open("../CV/MaximilianoLujan(es)-cv.pdf");
})