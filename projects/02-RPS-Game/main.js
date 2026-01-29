function getComputerChoice() {
  let computerChoice;
  let num = Math.floor(Math.random() * 9);
  computerChoice = num < 3 ? "paper" : 3 < num && num < 6 ? "rock" : "scissors";
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice");
  return humanChoice.toLowerCase();
}
// console.log(getHumanChoice());
// console.log(getComputerChoice());

let humanScore = 0,
  computerScore = 0;

function playRound(computerChoice, humanChoice) {
  if (
    (computerChoice == "rock" && humanChoice == "paper") ||
    (computerChoice == "scissors" && humanChoice == "rock") ||
    (computerChoice == "paper" && humanChoice == "scissors")
  ) {
    console.log("You Win! , paper beat rock");
    humanScore += 1;
    console.log(`Your score is ${humanScore}`);
    return humanScore;
  } else if (
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "paper")
  ) {
    console.log("You Lose! , paper beat rock");
    computerScore += 1;
    console.log(`computer score is ${computerScore}`);
    return computerScore;
  } else {
    console.log("Draw!, both choice are the same");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let choice1 = getComputerChoice();
    let choice2 = getHumanChoice();
    playRound(choice1, choice2);
  }
}

playGame();
