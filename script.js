/*okay so i have to play a game of rock paper scizors
with the computer.*/

//for that I need to make the computer play
//how to make the computer play,well the course says to create a function that acts as the computer
//then what is it that the computer has to make?to choose between the options ramdonly
//how do i do that?

function getComputerChoice () {

    let computerOptions = ["rock" , "paper" , "scissors"]
    let randomChoice = Math.floor(Math.random() * computerOptions.length) + 1

 if (randomChoice === 1) {
   return "rock";
 } if (randomChoice === 2) {
   return "paper";
 } if (randomChoice === 3) {
   return "scissors";
 }

}

console.log(getComputerChoice());


//to make it understand how the game works(rock beats scizor beats paper and so on)
//to make it play a round with the 'player'.
