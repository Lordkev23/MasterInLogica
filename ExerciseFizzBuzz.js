function fizzBuzz(){
    let acc = "";
    for(let i=1;i<=100;i++){
        let youSee = "";
        if(i %3 === 0 && i%5 === 0) {
            youSee= "FizzBuzz";
        } else if (i%3 === 0) {
            youSee = "Fizz";
        } else if (i%5 === 0) {
            youSee = "Buzz";
        } else youSee= i.toString();
        acc += youSee + "\n";
    }
    return acc
}
console.log(fizzBuzz());
