let arrPrecos = [10.1,20.50,20.2,5.25];
let soldo = 3600;
function preco(arr){
    return arr.reduce((a,b)=>{return a-b}, soldo);

}
console.log(preco(arrPrecos));