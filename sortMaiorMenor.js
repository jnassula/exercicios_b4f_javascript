/* Cria uma função que recebe como argumento um array de strings e retorna um array com as strings ordenadas pelo tamanho, da maior à menor.

Utiliza a função sort.

*/

function retornaStringsOrdenadas(array) {
    // escreve aqui a função 
    function arrayComparador (a, b){
        return b.length - a.length
    }
    return array.sort(arrayComparador)
}