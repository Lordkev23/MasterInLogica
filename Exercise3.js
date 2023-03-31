// Dada una palabra, buscarla en la frase y devolver cuantas 
//veces aparece en la frase, la palabra debe ser un parametro
// en la función

function similarity(frase, search){
    //orden of these characters are so important: /[!¡,\-.]/gi
    let cleanText = frase.toLowerCase().replace(/[!¡,\-.]/gi, ""); 
    let result = 0;

    if(cleanText.includes(search)){
        //.split() creates an Array of words in cleanText
        let words = cleanText.split(" ");

        let map = {};

        for(let word of words){
            if(map[word]){
                map[word]++;

            }else{
                //a key is created in the map object and the value is assigned 1
                map[word] = 1;
            }
        }
        // En map se almacena el texto con el valor de cada clave(palabra)
        // Search busca en map la clave que coincida con su "valor actual" y devuelve su valor
        //ej:
        //search = kevin -> valor actual de Search
        //map = {hello:1 my:1 name:1 is:1 kevin:3 you:1 know:1 like:1 arnold:1}
        //retorna 3 porque xq el valor de la clave kevin es 3.
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
