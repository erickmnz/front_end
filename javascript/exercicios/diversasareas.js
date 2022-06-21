
function genMatrix(areas){
    if (typeof(areas) !== 'object'){
        return 'Erro';
    }
    let m = [];
    for(let i = 0; i<areas.length-1; i=i+2){
        let dArea = [areas[i], areas[i+1]];
        m.push(dArea);
    }
    return m;
}
function calcularAreas(matrix){
    let res = [];
    for(let i=0; i<matrix.length;i++){
        res.push(matrix[i][0]*matrix[i][1]);
        
    }
    return res.forEach((i) => document.write('o resultado da area é '+ i+'\n'));
}
let a = genMatrix([10,20,30,40,20,20,40,50]);//retorna[[10,20],[30,40]...]
calcularAreas(a);