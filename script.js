let playerScore = 0;
let computerScore = 0;

let playerChoice 
let computerChoice

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const message = document.getElementById("message");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceDisplay.textContent = computerChoice.substring(0, 1).toUpperCase() + computerChoice.substring(1);
    return computerChoice;
}

rock.addEventListener("click", function() {
    chooseRock();
    game();
})

paper.addEventListener("click", function() {
    choosePaper();
    game();
})

scissors.addEventListener("click", function() {
    chooseScissors();
    game();
})

function playerDisplay() {
    playerChoiceDisplay.textContent = playerChoice.substring(0, 1).toUpperCase() + playerChoice.substring(1);
}

function chooseRock() {
    playerChoice = choices[0];
    message.textContent = "You chose rock."
}

function choosePaper() {
    playerChoice = choices[1];
    message.textContent = "You chose paper."
}

function chooseScissors() {
    playerChoice = choices[2];
    message.textContent = "You chose scissors."
}

function game() {
    playerDisplay();
    getComputerChoice();
    if (playerChoice === computerChoice) {
    message.textContent = "It's a tie! You both chose " + playerChoice + ".";
    }
    else if (playerChoice == "rock" && computerChoice == "scissors" ||
             playerChoice == "paper" && computerChoice == "rock" ||
             playerChoice == "scissors" && computerChoice == "paper") {
    message.textContent = "You win, " + playerChoice + " beats " + computerChoice + "!";
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    if (playerScore == 5) {
    message.textContent = "You won the game! Reload the page to play again.";
    gameOver();
    }
    }
    else {
    message.textContent = "You lost, " + playerChoice + " loses to " + computerChoice + ".";
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    if (computerScore == 5) {
    message.textContent = "You lost! Reload the page to play again.";
    gameOver();
    }
    }
}

function gameOver() {
    rock.replaceWith(rock.cloneNode(true));
    paper.replaceWith(paper.cloneNode(true));
    scissors.replaceWith(scissors.cloneNode(true));
}