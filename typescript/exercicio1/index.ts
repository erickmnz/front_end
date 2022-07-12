/*
//funções
function soma(a:number, b:number){
    document.write(`| ${a} + `+`${b} = `+ (a+b)+`| `);
}
soma(1,2);
soma(2,2);
soma(1,1);

//eventos
const input = document.getElementById('texto') as HTMLInputElement;
const botao = document.getElementById("calcular") as HTMLButtonElement;

botao.addEventListener('click',()=>alert(eval(input.value)));

//generic types
function addApp<T>(arr:T[], val:T){
    return arr.map(()=>val);
}
console.log(addApp([1,2,3],3));
*/
/*
//parametros com condicionais

interface User{
    readonly id: string;
    readonly email: string;
}
interface Adm extends User{
    cargo: 'supervisor'| 'gerente'| 'superadm';
}
function redirecionar(usuario: User | Adm){
    if ('cargo' in usuario){
        console.log('adm');
    }else{
        console.log('usuario normal');
    }
}

class mAdm implements Adm{
    id;
    email;
    cargo;

    constructor(id, email, cargo){
        this.id = id;
        this.email = email;
        this.cargo = cargo;
    }
}
class mUser implements User{
    id;
    email;
    constructor(id, email){
        this.id = id;
        this.email = email;
    }

}
const us = new mUser('212','a@sb.c');
const adm = new mAdm('213', 'a@a.c', 'supervisor');
redirecionar(adm);
redirecionar(us);
*/
