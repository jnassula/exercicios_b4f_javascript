/* Cria uma função que recebe um array como argumento e retorna um array com o quadrado do valor de cada posição do array original.

Utiliza a função map. */

function retornaQuadradoArray(array) {
    // escreve aqui a função
    const arrayQuadrado = (elemento) => elemento * elemento
    let resultado = array.map(arrayQuadrado)

    return resultado;
}