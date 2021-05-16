/*Cria uma função que recebe como argumento um array e calcula o número que menos vezes se repete nesse array.

Se existirem dois números com o mesmo número de repetições, deves retornar o menor destes. */

function calculaMenorMaisRaroArray(array) {
    // escreve aqui a função
    
    let ordenado = array.sort((a,b) => a-b);
    let obj = {};
    for (let i = 0; i < ordenado.length; i++) {
        if (!obj[ordenado[i]]) {
            obj[ordenado[i]] = 0;
        }
        
        obj[ordenado[i]]++;
    }
    const numeros = Object.keys(obj);
    let numeroMenosFrequente = numeros[0];
    for (let i = 0; i <= numeros.length; i++) {
        if (obj[numeros[i]] < obj[numeroMenosFrequente]) {
            numeroMenosFrequente = numeros[i];
        }
        
    }
    return parseInt(numeroMenosFrequente)
}