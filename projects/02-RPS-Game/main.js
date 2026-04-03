// let con = document.querySelector(".container");
// let scoreDisplay = document.querySelector(".score");
// console.log(scoreDisplay);

// let rock = document.querySelector(".rock");
// rock.addEventListener("click", (e) => playRound(getComputerChoice(), "rock"));

// let scissors = document.querySelector(".scissors");
// scissors.addEventListener("click", (e) =>
//   playRound(getComputerChoice(), "scissors"),
// );

// let paper = document.querySelector(".paper");
// paper.addEventListener("click", (e) => playRound(getComputerChoice(), "paper"));

// function getComputerChoice() {
//   let computerChoice;
//   let num = Math.floor(Math.random() * 9);
//   computerChoice = num < 3 ? "paper" : 3 < num && num < 6 ? "rock" : "scissors";
//   return computerChoice;
// }
// let humanScore = 0;
// let computerScore = 0;
// function playRound(computerChoice, humanChoice) {
//   if (computerScore === 5 || humanScore === 5) {
//     scoreDisplay.textContent =
//       computerScore > humanScore ? "Computer Win And You Lose" : "You Win!!";
//     humanScore = 0;
//     computerScore = 0;
//   } else if (
//     (computerChoice == "rock" && humanChoice == "paper") ||
//     (computerChoice == "scissors" && humanChoice == "rock") ||
//     (computerChoice == "paper" && humanChoice == "scissors")
//   ) {
//     scoreDisplay.textContent = `computer Score: ${computerScore} |   | human score: ${++humanScore}`;
//   } else if (
//     (computerChoice == "paper" && humanChoice == "rock") ||
//     (computerChoice == "rock" && humanChoice == "scissors") ||
//     (computerChoice == "scissors" && humanChoice == "paper")
//   ) {
//     scoreDisplay.textContent = `computer Score: ${++computerScore} |   | human score: ${humanScore}`;
//     scoreDisplay.style.fontWieght = bold;
//   } else {
//     scoreDisplay.textContent = "both choice are the same!!";
//   }
// }
function printerError(s) {
  let num = 0;
  s.split("").map((chr) => (chr <= "m" && chr >= "a" ? ++num : ""));
  return `${num} / ${s.length}`;
}
console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"),
);
