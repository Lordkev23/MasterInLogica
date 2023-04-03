//Dados 2 numeros, devolver cuantos numeros impares hay entre ellos.

function odd(number1, number2){
    let counter = 0;
    while(number1 < number2){
        if (number1%2 !== 0) counter++;

        number1++;
    }
    return counter;
}

console.log("odd numbers: ", odd(1,100));