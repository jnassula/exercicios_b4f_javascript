/* Cria uma função que recebe um array como argumento e retorna um array contendo apenas os valores pares do array original.

Utiliza a função filter para filtrar os pares. */
function retornaParesArray(array) {
    // escreve aqui a função 
    let arrayPares = (pares) => pares % 2 == 0;
    
    return array.filter(arrayPares)

    
}

//outra forma de fazer  

/*
function retornaParesArray(array){
    let arrayPares = array.filter((pares) => pares % 2 == 0)
    return arrayPares
}*/