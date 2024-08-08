// Do not remove this line
const prompt = require("syncprompt");
const randomNumber = Math.ceil(Math.random() * 20);
let timer=0;
while (guess!=randomNumber){
let guess = prompt("guess a number between 1 - 20: ");
if(guess==randomNumber){
    console.log("You won!");
} else if (guess>randomNumber) {
    console.log("You guessed too high.");
} else{
    console.log("You guess too low.")
}
timer++;
}
