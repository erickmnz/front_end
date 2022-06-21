function age(){
    let arrIdade=[];
    for(let i =0; i<10;i++){
        var idade = prompt("Digite a idade: ");
        idade = parseInt(idade);
        arrIdade.push(idade);
    }

    for(let i =0; i<arrIdade.length; i++){
        if (arrIdade[i] >= 0 && arrIdade[i] < 15){
            alert(arrIdade[i] + " anos é criança");
        }else if (arrIdade[i] >= 15 && arrIdade[i] < 30){
            alert(arrIdade[i] + " anos é jovem");
        }else if (arrIdade[i] >= 30 && arrIdade[i] < 60){
            alert(arrIdade[i] + " anos é adulto");
        }else if (arrIdade[i] >= 60){
            alert(arrIdade[i] + " anos é idoso");
        }
    }
}
function ageDois(){
    let arrIdade = [0,1,10,20,30,33,50,30,32,23,60,62,44,32];
    for(let i =0; i<arrIdade.length; i++){
        if (arrIdade[i] >= 0 && arrIdade[i] < 15){
            alert(arrIdade[i] + " anos é criança");
        }else if (arrIdade[i] >= 15 && arrIdade[i] < 30){
            alert(arrIdade[i] + " anos é jovem");
        }else if (arrIdade[i] >= 30 && arrIdade[i] < 60){
            alert(arrIdade[i] + " anos é adulto");
        }else if (arrIdade[i] >= 60){
            alert(arrIdade[i] + " anos é idoso");
        }
    }
}
