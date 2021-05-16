/*Cria uma função que recebe como argumento um array e calcula o número que mais vezes se repete nesse array.

Se existirem dois números com o mesmo número de repetições, deves retornar o menor destes.*/

function calculaModaArray(array) {
    // escreve aqui a função 
    let ordenar = false
    while (!ordenar){
        ordenar = true;
        for (let i = 0; i < array.length - 1; i++){
            if (array[i] > array[i + 1]){
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;

                ordenar = false;
            }
        }
    }
    let countAtual = 0
    let elementAtual = array[0]
    let countMaisFrequente = countAtual
    let elementMaisFrequente = elementAtual

    for (let i = 0; i < array.length; i++){
        if (array[i] !== elementAtual){
            countAtual = 1;
            elementAtual = array[i];
        }else{
            countAtual++;
        }
        if (countAtual > countMaisFrequente){
            countMaisFrequente = countAtual;
            elementMaisFrequente = elementAtual;
        }
    }
    return elementMaisFrequente;
};