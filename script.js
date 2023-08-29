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
  computerSelection = computerSelection.toString().toLowerCase();
  
  //tie
  
  if(playerSelection === computerSelection){
  alert ("It's a tie!");
  return;
  }
  
  //rock
  if(playerSelection === 'rock'){
  if(computerSelection === 'paper'){
  alert ('you lose paper beats rock'),
  computerScore++;
  }else{
  alert ('you win rock beats scissors'),
  playerScore++;
  }
  }
  //scissors
  else if(playerSelection === 'scissors'){
  if(computerSelection === 'rock'){
  alert ('you lose rock beats scissors'),
  computerScore++;
  }else{
  alert ('you win scissors beats paper')
  playerScore++;
  }
  }
  //paper
  else if(playerSelection === 'paper'){
  if(computerSelection === 'scissors'){
  alert ( 'you lose scissors beats paper'),
  computerScore++;
  }else{
  alert ('you win paper beats rock'),
  playerScore++;
  } 
  } 
  }
//function to check winner
function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
  const winner =
  playerScore === 5
  ? "You win the game! Congratulations!"
  : "Computer wins the game! Try again next time!";
  alert(winner);
  return true;
  }
  return false;
  }

//game loop
function game(){
  for(playerScore == 0 && computerScore == 0 ; playerScore <= 5 || computerScore <= 5 ; playRound(window.prompt("player" + ' ' + playerScore + " " + "vs" + " " + computerScore + ' ' + "computer" ), getComputerChoice())){
  if(playerScore === 5 || computerScore == 5){
  checkWinner();
  break; 
  }
  }
  }
  console.log(game());
  

