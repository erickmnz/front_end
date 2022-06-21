function exponecial(num, pot){ //dois argumentos(base e potencia)
    let a = num; // passa a base para a variavel a
    for (let i = 1; i<pot; i++){//laço for começa como 1 para que nao itere uma vez a mais
        a = a * num; //soma a base armazenada na variavel a com o a base fixa e armazena na variavel a a cada iteraçao
        
    }
    return a; //retorna o resultado
}
console.log(exponecial(3,10));
