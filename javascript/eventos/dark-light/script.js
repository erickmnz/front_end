const corpo = document.getElementsByTagName("body")[0];
const botao = document.getElementById('botao');
function change(){
    corpo.classList.toggle("dark");
    if(corpo.classList.contains('dark')){
        botao.innerHTML = 'Light mode';
    }else{
        botao.innerHTML = 'Dark mode';
    }
}
