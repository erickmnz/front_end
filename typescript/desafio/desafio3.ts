const botaoAualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
const botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

let total = 0;

function somarAoSaldo(soma:number){
    total += soma;
    campoSaldo.innerHTML = total.toString();
    limparCampo();
}
function limparSaldo(){
    campoSaldo.innerHTML = '0';
    total = 0;
}
function limparCampo(){
    soma.value= '';
}
botaoAualizar.addEventListener('click', ()=>somarAoSaldo(Number(soma.value)));
botaoLimpar.addEventListener('click',()=>{limparSaldo()})
