/*okay so i have to play a game of rock paper scizors
with the computer.*/

//for that I need to make the computer play
//how to make the computer play,well the course says to create a function that acts as the computer
//then what is it that the computer has to make?to choose between the options ramdonly
//how do i do that?

function getComputerChoice () {

    let computerOptions = ["rock" , "paper" , "scissors"];
    let randomChoice = Math.floor(Math.random() * computerOptions.length) + 1;

 if (randomChoice === 1) {
   return "rock";
 } if (randomChoice === 2) {
   return "paper";
 } if (randomChoice === 3) {
   return "scissors";
 }

}




//to make it play a round with the 'player'.
//so to  make it play i create a function called playround that takes two parameters my and the computer
/*
it isn't working correctly,it gives different results,why?
  
 */

function playRound (playerSelection , computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if(playerSelection == computerSelection){
    return "It's a tie!"}
    else if(playerSelection === 'rock'){
      if(computerSelection === 'paper'){
        return 'you lose paper beats rock';
    }else{
      return 'you win rock beats scissors'}
    }else if(playerSelection === 'scissors'){
      if(computer === 'rock'){
          return 'you lose rock beats scissors';
      }else{
          return 'you win scissors beats paper';
      }
    }else if(playerSelection === 'paper'){
      if(computerSelection === 'scissors'){
          return 'you lose scissors beats paper';
      }else{
          return 'you win paper beats rock';
      }    
    }     
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));