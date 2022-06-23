let str='sator arepo tenet opera rotas';
let a = str.split(' ');
let b =[];
for (let i =0; i<a.length;i++){
    b.push([a[i]]);
}
function includeReverse(matrix){
    
    for(let i =0;i<matrix.length;i++){
        let str='';
        for(let n = 0; n<matrix[i].length;n++){
            
            for (let j = matrix[i][n].length; j>=0;j--){
                str+=matrix[i][n].charAt(j);
            }
        }
        matrix[i].push(str);
    }
    return matrix;
}

console.log(includeReverse(b));
console.log(includeReverse(b));
console.log(includeReverse(b));
console.log(includeReverse(b));