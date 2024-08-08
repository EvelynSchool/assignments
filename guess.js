// Do not remove this line
const prompt = require("syncprompt");
const randomNumber = Math.ceil(Math.random() * 20);
let numGuesses=1;
let guess = prompt("guess a number between 1 - 20: ");
while (guess!=randomNumber){
guess = prompt("guess a number between 1 - 20: ");
if(guess==randomNumber){
    console.log("You won! You took ", numGuesses, "guesses.");
} else if (guess>randomNumber) {
    console.log("You guessed too high.");
} else if (guess<randomNumber){
    console.log("You guess too low.")
}
numGuesses++;
}
