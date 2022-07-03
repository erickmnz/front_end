function arrAndNum(array, number){
    try {
        if(!array && !number){throw ReferenceError("parametros são necessários")}
        if(typeof(array)!== 'object' || typeof(number)!== 'number'){throw TypeError}
        if(array.lenght != number){throw RangeError}
        
        return array;
    } catch (e ) {
        if( e instanceof ReferenceError){
            console.log("ReferenceError");
            console.log(e)
        }
        else if(e instanceof TypeError){
            console.log("TypeError");
            console.log(e)
        }else if(e instanceof RangeError){
            console.log("rangeerror");
            console.log(e)
        }else{
            console.log('erro desconhecido')
            console.log(e)
        }
        
    }
}

