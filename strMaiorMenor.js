/* Cria uma função que recebe como argumento um array de strings e retorna um array com as strings ordenadas pelo tamanho, da maior à menor.

Podes alterar o array original.

Não utilizes a função sort para este fim. */

function retornaStringsOrdenadas(array) {
    // escreve aqui a função 
    let ordenar = false
    while (!ordenar){
        ordenar = true;
        for (let i = 0; i < array.length - 1; i++){
            if (array[i].length < array[i + 1].length){
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;

                ordenar = false;
            }
        }
        
    }
    return array;   
}