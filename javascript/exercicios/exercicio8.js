let operacao = prompt("Digite a operaçao que deseja realizar(as opçoes são adição, subtração, multiplicação, divisão");
let numero = prompt("digite um numero");
numero = parseInt(numero);
let numero2 = prompt("digite outro numero");
numero2 = parseInt(numero2);

function calc(num1,num2, op){
    switch(op){
        case 'subtração':{
            return num1-num2;
        }
        case 'adição':{
            return num1+num2;
        }
        case 'multiplicação':{
            return num1*num2;
        }
        case 'divisão':{
            return num1/num2;
        }
        default:{
            return 'DIGITE UMA DAS OPÇOES:  adição, subtração, divisão e multiplicação'
        }
    }
}
document.write(calc(numero,numero2,operacao));