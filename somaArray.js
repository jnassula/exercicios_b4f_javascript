/*Cria uma função que recebe como argumentos dois arrays e retorna um array com a soma dos valores de cada posição dos arrays.

Os arrays podem ter tamanhos diferentes. Por exemplo, se receber os arrays [1, 2, 3, 4] e [2, 1, 0] retorna o array [3, 3, 3, 4].

*/ 

function calculaSomaArrays(array1, array2) {
    // escreve aqui a função 
    let resultado = []
    let tamanhoMenorArray = Math.min(array1.length, array2.length)
    for (let i = 0; i < tamanhoMenorArray; i++){
        resultado.push(array1[i] + array2[i]);
    }
    let tamanhoMaiorArray = Math.max(array1.length, array2.length)
    for (let i = tamanhoMenorArray; i < tamanhoMaiorArray; i++){
        resultado.push((array1[i] || 0)  + (array2[i] || 0));
    }
    return resultado
};