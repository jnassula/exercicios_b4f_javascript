/* Cria uma função que recebe um array como argumento e retorna um array com o quadrado do valor de cada posição do array original.

Não alteres o array original.

Não utilizes a função map para este fim. */

function retornaQuadradoArray(array) {
    // escreve aqui a função 
    let resultado = []
    for (let i = 0; i < array.length; i++){
        resultado.push(array[i] * array[i])
    }
    return resultado;
}

