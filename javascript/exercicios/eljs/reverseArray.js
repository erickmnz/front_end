function reverseArr(arr){
    let nuArr = [];
    for(let i = arr.length-1; i>=0; i--){
        nuArr.push(arr[i]);
    }
    return nuArr;
}
let array=[1,2,3,4,5];
console.log(reverseArr(array));