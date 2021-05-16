/*Cria uma função que recebe como argumento um array e calcula a sua Mediana.

Caso o array tenha um número par de elementos a mediana é calculada através da média dos números das posições centrais. */

function calculaMedianaArray(array) {
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
    let mediana = Math.floor(array.length/2);
    if (array.length % 2){
        return array[mediana]
    }else{
        return (array[mediana - 1] + array[mediana]) / 2;
    }

};