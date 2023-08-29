//rock paper scissors game

//scores
let playerScore = 0;
let computerScore = 0;

//the computer
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


//round
function playRound (playerSelection , computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if(playerSelection == computerSelection){
    alert ("It's a tie!");
  }
    else if(playerSelection === 'rock'){
      if(computerSelection === 'paper'){
        alert ('you lose paper beats rock'),
        computerScore++;
    }else{
      alert ('you win rock beats scissors'),
      playerScore++;
    }
    }else if(playerSelection === 'scissors'){
      if(computer === 'rock'){
          alert ('you lose rock beats scissors'),
          computerScore++;
      }else{
          alert ('you win scissors beats paper'),
          playerScore++;
      }
    }else if(playerSelection === 'paper'){
      if(computerSelection === 'scissors'){
          alert ( 'you lose scissors beats paper'),
          computerScore++;
      }else{
          alert ('you win paper beats rock'),
          playerScore++;
      }    
    }     
}


//game loop
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


