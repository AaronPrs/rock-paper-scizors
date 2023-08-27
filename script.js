/*okay so i have to play a game of rock paper scissors
with the computer.*/

//for that I need to make the computer play
//how to make the computer play,well the course says to create a function that acts as the computer
//then what is it that the computer has to make?to choose between the options 
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
//so to  make it play i create a function called play round that takes two parameters my and the computer
/*
it isn't working correctly,it gives different results,why?
  
 */
let moves = 0;

function playRound (playerSelection , computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if(playerSelection == computerSelection){
    alert ("It's a tie!"),
    moves++;
  }
    else if(playerSelection === 'rock'){
      if(computerSelection === 'paper'){
        alert ('you lose paper beats rock'),
        computerScore++,
        moves++;
    }else{
      alert ('you win rock beats scissors'),
      playerScore++,
      moves++}
    }else if(playerSelection === 'scissors'){
      if(computer === 'rock'){
          alert ('you lose rock beats scissors'),
          computerScore++,
          moves++;
      }else{
          alert ('you win scissors beats paper'),
          playerScore++,
          moves++;
      }
    }else if(playerSelection === 'paper'){
      if(computerSelection === 'scissors'){
          alert ( 'you lose scissors beats paper'),
          computerScore++,
          moves++;
      }else{
          alert ('you win paper beats rock'),
          playerScore++,
          moves++;
      }    
    }     
}

const playerSelection = prompt();
const computerSelection = getComputerChoice();




function game(playerScore, computerScore,){
for (playerScore  || computerScore  ; playerScore !== 5 || computerScore !== 5 ; playRound ){
  if (playerScore === 5 || computerScore === 5) {
    const winner =
      playerScore === 5
        ? "You win the game! Congratulations!"
        : "Computer wins the game! Try again next time!";
    alert (winner);
  }
}
}


console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));
console.log(game(playerScore, computerScore));
