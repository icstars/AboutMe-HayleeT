function decideWinner() {
  let Player1 = prompt("Choose your fighter! Rock, Paper, or Scissors?");
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  if (Player1 === computerChoice) {
    return "TIE";
  } else if (
    (Player1 === "scissors" && computerChoice === "paper") ||
    (Player1 === "rock" && computerChoice === "scissors") ||
    (Player1 === "paper" && computerChoice === "rock")
  ) {
    return `Player1 chose ${Player1} and won against ${computerChoice}`;
  } else {
    return `Comp chose ${computerChoice} and won against ${Player1}`;
  }
}
console.log(decideWinner());
