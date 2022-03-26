let winning_nos=19;
let userGuess=+prompt("Guess a nos ");
console.log(userGuess);
if(userGuess===winning_nos){
    console.log("your guess is right");
}else{
    if(userGuess<winning_nos){
        console.log("your guess is too low");
    }else{
        console.log("your guess is too high");
    }
}