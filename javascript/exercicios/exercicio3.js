function parSubstitute(arr){
    let nuArr =[];
    if(arr.length < 1 || typeof(arr)!= "object"){
        return -1;
    }
    else{
        for(let i of arr){
            (i%2==0 && i!=0)? nuArr.push(0): nuArr.push(i);
        }
    }
    return nuArr;
}

let a = [1,2,3,4];
console.log(parSubstitute(1));
console.log(parSubstitute([1,2,3,4,5,6,7,8,9,0]));
console.log(parSubstitute([2,2,2,2,2,2]));
console.log(parSubstitute(a));
console.log(parSubstitute([1,100,2," ", 40, 60, 40, 1,1,1,1,]));

   