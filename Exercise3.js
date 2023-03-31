// Dada una palabra, buscarla en la frase y devolver cuantas 
//veces aparece en la frase, la palabra debe ser un parametro
// en la función

function similarity(frase, search){
    //orden of these characters are so important: /[!¡,\-.]/gi
    let cleanText = frase.toLowerCase().replace(/[!¡,\-.]/gi, ""); 
    let result = 0;

    if(cleanText.includes(search)){
        let words = cleanText.split(" ");
        let map = {};

        for(let word of words){
            if(map[word]){
                map[word]++;

            }else{
                map[word] = 1;
            }
        }

        result = map[search];

    }else{
        result = 0;
    }
    return result;
}
console.log(
    "Number of similarities in the frase: ",
    similarity("hello, my Name is Kevin. You know, Kevin, like Kevin Arnold", "kevin")
);
