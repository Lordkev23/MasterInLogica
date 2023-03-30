// Dada una cadena de texto, darle la vuelta e invertir el orden
// de sus caracteres, sin usar métodos propios del lenguaje,
// solo estructuras de control.

function inversed(text){
    let inverse = "";

    for(let word of text){
        inverse = word + inverse;
    }
    return inverse;   
}
console.log(
"Inverse Text: ",
inversed("github.com/Lordkev23")
);
