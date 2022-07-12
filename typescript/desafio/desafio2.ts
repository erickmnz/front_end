enum Profissao{
    padeiro,
    atriz
};

interface Pessoa{
    nome:string;
    idade:number;
    profissao:Profissao;
}

const pessoas:Pessoa[]=[
    {nome:'maria',
    idade:29,
    profissao:Profissao.atriz},
    {nome:'roberto',
    idade:19,
    profissao:Profissao.padeiro},
    {nome:'laura',
    idade:32,
    profissao:Profissao.atriz},
    {nome:'Carlos',
    idade:19,
    profissao:Profissao.padeiro}
];
