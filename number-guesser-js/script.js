let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
  return Math.floor(Math.random()*10)}

const compareGuesses = (userGuess,computerGuess, secretTargetNum) => {
  let compareUser = Math.abs(userGuess - secretTargetNum);
  let compareComputer =Math.abs(computerGuess-secretTargetNum)
  if (compareUser <= compareComputer){
    return true 
  } else {
    return false
  } 
}

function updateScore(winner){
  winner === 'human' ? humanScore++ : computerScore++
  }

const advanceRound = () => currentRoundNumber++;

