let arr = [5,4,1,6,8,9,20,40,22,3,2,0];

function sort(arr){
    for(let i=1; i<arr.length;i++){
        let key = arr[i];
        let j = i-1;
        console.log('for'+arr);
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j-=1;
            console.log('while'+arr);
        }
        arr[j+1]=key;
        console.log('for fim'+arr);
    }
    return arr;
}
sort(arr);