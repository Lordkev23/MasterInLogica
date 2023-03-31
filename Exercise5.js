//¿Cuanto es el X% de Y número?
function percentages(persentage, number){
    let operation = (persentage/100) * number ;
    let result = `the ${persentage}% of ${number} is ${operation}`;
    return result;
}
console.log(percentages(50, 250)); 