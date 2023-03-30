//verifica si hay palindromos (capicua) o no

function palindromo(text){
    let invert = text.split("").reverse().join("");

    return "De Answer is: " + (invert === text);
}
console.log(palindromo("otto"));