/* Numa plantação existem duas filas de macieiras que podem ter comprimentos diferentes.

Cria uma função que recebe como argumentos dois arrays: fila1 e fila2, que representam cada uma das filas de macieiras; e retorna o número da fila com mais maçãs a serem colhidas e o número de maçãs que nela existem.

O resultado deve ser uma string:

A fila "valor" é a que tem mais maçãs a serem colhidas, mais especificamente "valor" unidades.

Nota: Caso as duas filas tenham o mesmo número de maçãs, retorna a string:

Ambas as filas têm "valor" unidades.

 */

function calculaMelhorColheita(fila1, fila2) {
    // escreve aqui a função 
    let somaArray1 = 0
    let somaArray2 = 0

    for (let i = 0; i < fila1.length; i++){
        somaArray1 += fila1[i];
    }
    for (let i = 0; i < fila2.length; i++){
        somaArray2 += fila2[i];
    }
    if (somaArray1 === somaArray2){
        return "Ambas as filas têm " + somaArray1 + " unidades."
    }
    if (somaArray1 > somaArray2){
        return "A fila 1 é a que tem mais maçãs a serem colhidas, mais especificamente "+ somaArray1 +" unidades."
    }
    if (somaArray1 < somaArray2){
        return "A fila 2 é a que tem mais maçãs a serem colhidas, mais especificamente "+ somaArray2 +" unidades."
    }
}