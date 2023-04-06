//Dado un número, mostrar una escalera con escalones de "[-]"
//usando el número para los niveles de la escalera.
//ej:
//statir(4)  ->  Returns: 
//                          [-]
//                          [-][-]
//                          [-][-][-]
//                          [-][-][-][-]

function stair(number){
    let allStair = "";

    for (let level = 1; level <= number; level++){
        let steps = "";
        
        for (let step = 1; step <= level; step++) {
            steps += "[-]";
        }
        allStair += steps + "\n";
    }
    return allStair;
}

console.log(stair(5));