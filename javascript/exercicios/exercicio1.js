function maiorMenor(a, b){
    let igualdade = (a==b)?"Iguais":"Diferentes";
    let soma = a+b;
    let maior = (soma > 10)? "maior":"menor";
    let menor = (soma< 20)?"menor": "maior";
    return `Os numeros sao ${igualdade}, sua soma é ${soma} e é ${maior} que 10 e ${menor} que 20`;
}

console.log(maiorMenor(1,1));