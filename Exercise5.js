//¿Cuanto es el X% de X número?
function percentages(persentage, number){
    let operation = number * (persentage/100);
    let result = `the ${persentage}% of ${number} is ${operation}`;
    return result;
}
console.log(percentages(50, 250)); 