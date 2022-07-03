function range(inicio, fim, step= inicio<fim ? 1:-1){
    let r = [];
    if(step>0){
        for(let i = inicio; i<=fim; i +=step ){
            r.push(i);
        }
    }else {
        for(let i = inicio; i>= fim; i+=step){
            r.push(i);
        }
    }
    return r;
}

function sum(arr){
    let a = 0;
    for (let cada of arr){
        a+=cada;
    }
    return a;
}


console.log(sum(range(10,2,-2)));
console.log(sum(range(1,3)))
