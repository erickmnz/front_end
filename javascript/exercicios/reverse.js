function reverseString(str){
    let nuStr ='';
    for (let i = str.length-1; i>=0;i--){
        nuStr+=str.charAt(i);
    }
    return nuStr;
}
console.log(reverseString('sator arepo tenet opera rotas'));