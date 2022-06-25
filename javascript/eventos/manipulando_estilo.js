function modEstilo(body, corTexto, div){
    document.body.style.backgroundColor = body;
    document.body.style.color = corTexto;
    document.getElementById("square").style.backgroundColor= div;
    document.getElementById("texto").style.color= corTexto;
    document.getElementById("numero").style.color= corTexto;
}