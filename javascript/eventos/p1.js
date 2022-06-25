function fcs(){
    document.getElementById('campo_teste').style.background = '#FFFF00';
}
function oblur(){
    let valor = document.getElementById('campo_teste').value;
    if (valor.length<3){
        document.getElementById('campo_teste').style.background = '#FF0000';
    }else if(valor.length>=3){
        document.getElementById('campo_teste').style.background = '#00FF00';
    }

}