// Do not remove this line
const prompt = require("syncprompt");
const randomNumber = Math.ceil(Math.random() * 20);
let numGuesses=1;
let guess = 0;
while (guess!=randomNumber){
guess = Number(prompt("guess a number between 1 - 20: "));
if(guess==randomNumber){
    console.log("You won!" + randomNumber + " You took ", numGuesses, "guesses.");
} else if (guess < randomNumber){
    console.log("You guess too low.")
}else if (guess > randomNumber) {
    console.log("You guessed too high.");
}
numGuesses++;
}
