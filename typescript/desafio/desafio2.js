var Profissao;
(function (Profissao) {
    Profissao[Profissao["padeiro"] = 0] = "padeiro";
    Profissao[Profissao["atriz"] = 1] = "atriz";
})(Profissao || (Profissao = {}));
;
var pessoas = [
    { nome: 'maria',
        idade: 29,
        profissao: Profissao.atriz },
    { nome: 'roberto',
        idade: 19,
        profissao: Profissao.padeiro },
    { nome: 'laura',
        idade: 32,
        profissao: Profissao.atriz },
    { nome: 'Carlos',
        idade: 19,
        profissao: Profissao.padeiro }
];
var pessoa1 = pessoas[0];
var pessoa2 = pessoas[1];
var pessoa3 = pessoas[2];
var pessoa4 = pessoas[3];
console.log(pessoa1, pessoa2, pessoa3, pessoa4);
