// Dado un número, devolver su tabla de multiplicar completa

function multiplicationTable(number){
    // "\n" sirve para dar un espacio entre lineas (como si fuera un enter)
    let result = `# table of number ${number} # \n`; 

for(let i=1; i<=10; i++){
    let multiplication = (i*number);
    // "\n" sirve para dar un espacio entre lineas (como si fuera un enter)
    result += `${i} x ${number} = ${multiplication} \n`
}
return result;

}
console.log(multiplicationTable(7));