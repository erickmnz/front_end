function stair(num){
    let str = '';
    for(let i = '#'; i.length<=num; i = i+'#'){
        str+=i+'\n';
    }
    return str;
}
stair(6);
function invStair(num){
    let str='';
    for(i=0;i<=num;i++){
        let space = " ".repeat(num-i);
        let octa = "#".repeat(i);
        str += space+octa+'\n'; 
    }
    return str;
}

function piramid(num){
    str=" ".repeat(num)+'#';
    for(i=0;i<=num;i++){
        let space = " ".repeat(num-i);
        let octa = "#".repeat(i);
        str += space+octa+octa+'\n'; 
    }
    return str;
    
}
console.log(piramid(6));
console.log(invStair(6));
console.log(stair(6));