// 4.b

let rock = "rock";
let paper = "paper";
let scissors = "scissors";
game();
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return rock;
  } else if (randomNumber === 2) {
    return paper;
  } else if (randomNumber === 3) {
    return scissors;
  }
}

function playRound(computerSelection) {
  computerPlay();
  let choice = prompt("What's your choice?");
  choice = choice.toLowerCase();

  if (choice == "rock" && computerSelection == "paper") {
    alert("You Lose! Paper beats Rock");
    return "You Lose! Paper beats Rock";
  } else if (choice == "scissors" && computerSelection == "rock") {
    alert("You Lose! Rock beats Scissors");
    return "You Lose! Rock beats Scissors";
  } else if (choice == "paper" && computerSelection == "scissors") {
    alert("You Lose! Scissors beats Paper");
    return "You Lose! Scissors beats Paper";
  } else if (choice == "rock" && computerSelection == "scissors") {
    alert("You Win! Rock beats Scissors");
    return "You Win! Rock beats Scissors";
  } else if (choice == "paper" && computerSelection == "rock") {
    alert("You Win! Paper beats Rock");
    return "You Win! Paper beats Rock";
  } else if (choice == "scissors" && computerSelection == "paper") {
    alert("You Win! Scissors beats Paper");
    return "You Win! Scissors beats Paper";
  } else if (choice != "rock" && choice != "paper" && choice != "scissors") {
    alert("Incorrect choice");
    return i--;
  } else if (choice == "rock" && computerSelection == "rock") {
    alert("Draw");
    return "Draw";
  } else if (choice == "paper" && computerSelection == "paper") {
    alert("Draw");
    return "Draw";
  } else if (choice == "scissors" && computerSelection == "scissors") {
    alert("Draw");
    return "Draw";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    playRound(computerSelection);
    
  }
}

