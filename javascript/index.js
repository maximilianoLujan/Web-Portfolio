import abrirV from "../Funcionalidadesjs/abrirventanas.js";
import hamburgerMenu from "../Funcionalidadesjs/menu.js";
const d = document;

d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".menu",".mi-boton")
    abrirV(".linkedln","https://www.linkedin.com/in/maximiliano-luj%C3%A1n-13323220a/")
    abrirV(".instagram","https://www.instagram.com/maxilujan01/")
    abrirV(".twitter","https://twitter.com/MaximilianoL01")
    abrirV(".github","https://github.com/maximilianoLujan")
    abrirV(".español","../CV/MaximilianoLujan(es)-cv.pdf")
})