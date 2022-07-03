
const request = new XMLHttpRequest;
function cl(call){
    request.addEventListener('readystatechange', ()=>{
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            call(undefined, data);    
        }else if (request.readyState === 4 ){
            call('could not fetch', undefined);            
        }
    })

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
}

var a = cl((err, data)=>{
   if(err){
        console.log(err);
   }else{
        console.log(data);
   }
});
