const choice = ["rock", "paper", "scissors"];
const computerChoice = choice[Math.floor(Math.random() * choice.length)];
let player1 = prompt(
  "Let's play a game! Choose rock, paper, or scissors!"
).toLowerCase();
//Check if user input == rock, or input == paper , or input == scissors
if (player1 === "rock" || player1 === "scissors" || player1 === "paper") {
} else {
}

console.log("Player1: " + player1);
console.log("Computer: " + computerChoice);
if (player1 === computerChoice) {
  console.log("TIE");
} else if (
  (player1 === "scissors" && computerChoice === "paper") ||
  (player1 === "rock" && computerChoice === "scissors") ||
  (player1 === "paper" && computerChoice === "rock")
) {
  console.log("You Win!");
} else {
  console.log("LOSER!");
}

let names = ["Haylee", "Lollipop", "Acelee", "Pao"];
let me = names.length - 1;
console.log(names[me]);

let names2 = ["Haylee", "Me", "You", "And Us"];
for (let i = 0; i < names2.length; i++) {
  console.log(names2[i]);
}

let names3 = ["I", "Will", "Talk", "To"];
for (char of names3) {
  console.log(char);
}

let name = "Pao";
if (name === "Haylee") {
  console.log("Hey");
} else if (name === "Pao") {
  console.log("Hi");
}
