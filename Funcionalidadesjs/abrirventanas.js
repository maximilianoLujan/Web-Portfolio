export default function abrirV(ventana,link){
    const d = document;
    d.addEventListener("click",e=>{
        if(e.target.matches(ventana)){
            window.open(link)
        }
    })
}