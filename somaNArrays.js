/* Numa plantação existem n filas de macieiras que podem ter comprimentos diferentes.

Cria uma função que recebe como argumento um array contendo em cada posição um array que representam cada uma das filas de macieiras; e retorna o índice da primeira fila com mais maçãs a serem colhidas e o número de maçãs que nela existem.

O resultado deve ser uma string:

A fila "índice" é a que tem mais maçãs a serem colhidas, mais especificamente "valor" unidades. */

function calculaMelhorColheita(filas) {
    // escreve aqui a função 
    let somatorio = []
    
    for (let fila of filas){
        let somatorioDaFila = 0;
        for (let i = 0; i < fila.length; i++){
            somatorioDaFila += fila[i];
        }
        somatorio.push(somatorioDaFila);
    }

    let index;
    let max = Math.max(...somatorio);
    for (let i = 0; i < somatorio.length; i++){
        if (somatorio[i] === max){
            index = i;
            break
        }
    }
    return (`A fila ${index} é a que tem mais maçãs a serem colhidas, mais especificamente ${max} unidades.`)
}