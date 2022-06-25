const { type } = require("jquery");

function distribuiCaracter(){
    let campoCaracter = document.getElementById('digite').value;
    document.getElementById('texto').value;
    document.getElementById('numero').value;

    let digreg = new RegExp(/\d+/g);
    let match1 = campoCaracter.match(digreg).join('');

    let texreg = new RegExp(/\D+/g);
    let match2 = campoCaracter.match(texreg).join('');
    document.getElementById('texto').value = match2;
    document.getElementById('numero').value = match1;
    
        
    

}