//Dibuiar un cuadrado hueco con asteriscos
function side(number){
    let asterisks = "";
    for (let i = 0; i < number; i++) {
        asterisks += "*";
        
    }
    return asterisks;
}

function square(number){
    //UP
    let draw = side(number) +"\n";

    //INSIDE
    let container = "";
    for (let i = 0; i < number-2; i++) {
        container = "*";

        for (let j = 0; j < number-2; j++) {
            container += " ";
        }
        container += "*";
        
        draw += container +"\n";
    }
    
    //DOWN
    draw += side(number);

    return draw;
}
console.log(square(5));