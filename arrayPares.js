/* Cria uma função que recebe um array como argumento e retorna um array contendo apenas os valores pares do array original.

Não alteres o array original.

Não utilizes a função filter para este fim. */

function retornaParesArray(array) {
    // escreve aqui a função 
    let arrayPares = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            arrayPares.push(array[i]);
        }
    }
    return arrayPares
}