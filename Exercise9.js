// Dados 2 arrays, devolver un array con solo los elementos comunes entre ambos
//ej:
// regularElements([4,5,6,7], [7,8,9,7,5])  ->  Devuelve: [5,7]

function regularElements(array1, array2){
    const filter = array1.filter(element => array2.includes(element));
    return filter;
}

console.log(regularElements([4,5,6,7], [7,8,9,7,5]));