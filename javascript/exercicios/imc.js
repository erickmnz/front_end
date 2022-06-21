function imcSimples(){
    let nome = prompt("Digite o nome: ");
    let altura = prompt("Digite a altura em centimetros: ")
    let peso = prompt("Digite o peso: ")
    altura = parseFloat(altura)/100;
    peso = parseFloat(peso);
    massa = peso/(altura*altura);
    if(massa < 16.0){
        alert(nome+ ' possui índice de massa corporal igual a ' +massa+', sendo classificado como baixo peso muito grave' );
    }else if(massa >=16.0 && massa <= 16.99){
        alert(nome+ ' possui índice de massa corporal igual a ' +massa+', sendo classificado como baixo peso grave');
    }else if(massa >= 17.0 && massa <= 18.49){
        alert(nome+ ' possui índice de massa corporal igual a ' +massa+', sendo classificado como baixo peso');
    }else if(massa >= 18.50 && massa <= 24.99){
        alert(nome+ ' possui índice de massa corporal igual a ' +massa+', sendo classificado como peso normal');
    }else if(massa >= 25.0 && massa <= 29.99){
        alert(nome+ ' possui índice de massa corporal igual a ' +massa+', sendo classificado como  sobrepeso');
    }else if(massa >= 30.0 && massa <= 34.99){
        alert(nome+ ' possui índice de massa corporal igual a ' +massa+', sendo classificado como  obesidade grau I');
    }else if(massa >= 35.0 && massa <= 39.99){
        alert(nome+ ' possui índice de massa corporal igual a ' +massa+', sendo classificado como  obesidade grau II');
    }else{
        alert(nome+ ' possui índice de massa corporal igual a ' +massa+', sendo classificado como  Obesidade grau III')
    }

}
imcSimples();