/*Dado un número entero, invertirlo y devolver de nuevo el entero
ej:
reverseNumber(89)  ->   Devuelve: 98
*/

function reverseNumber(number){
    //Math.sign() permite obtener el signo de un número
    let reverse = parseInt(number.toString().split('').reverse().join('')) * Math.sign(number);
    return reverse;
}

console.log("the reverse numbere is: ", reverseNumber(-56));