function fatorial(x){
    if (x<=0){return 1;}
    else{
        return x * fatorial(x-1);
    }
}
console.log(fatorial(5));