function chess(num){
    let space = ' ';
    let octo = '#';
    let t = '';
    for(let i=0; i<num; i++){
        if(i%2==0){
            let total = space + octo;
            t += total.repeat(Math.floor(num/2))+'\n';
        }else{
            let total = octo + space;
            t+=total.repeat(Math.floor(num/2))+'\n';

        }
        
    }
    return t;
}
console.log(chess(2));
console.log(chess(3));
console.log(chess(4));
console.log(chess(5));
console.log(chess(6));
console.log(chess(7));
console.log(chess(8));
console.log(chess(9));
console.log(chess(10));