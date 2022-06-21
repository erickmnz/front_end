function reverseStr(string){
    let nuString = string.split("").reverse().join("");
    return (nuString == string) ? "É um palindromo": "Nao é um palindromo";
}
console.log(reverseStr("hello"));
console.log(reverseStr("sator arepo tenet opera rotas"))