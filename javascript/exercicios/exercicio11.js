var arr = Array('Cadeira', 'Impressora', 'Garfo');
function submit(){
    let valor = document.getElementById('texto').value;
    if (valor === ""){
        alert('Insira um elemento válido');
        console.log(valor);
    }
    else if (arr.includes(valor)){
        alert('O elemento já existe, insira outro');
        console.log(arr);
        document.getElementById('texto').value = '';
    }else{
        arr.push(valor);
        console.log(arr);
        document.getElementById('texto').value = '';
    }
    
}
function ordenate(){
    arr.sort();
    console.log(arr);
}