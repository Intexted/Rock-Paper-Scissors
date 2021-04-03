const restart = document.getElementById('restart');
const container = document.querySelector('#roundResult');
const paragraph = document.createElement('h2');
const modal = document.querySelector('.modal');
const winner = document.getElementById('winner');
const loser = document.getElementById('loser');

container.appendChild(paragraph);
const scoreboard = {
    player: 0,
    computer: 0
};

function computerPlay() {

    let response = "";
    let output = Math.floor((Math.random() * 3) + 1);
    switch (output) {
        case 1:
            response = "Rock"
            break;
        case 2:
            response = "Paper"
            break;
        default:
            response = "Scissors"
    }
    return response
}


function playRound(humanPlay, computerSelection) {
    restart.style.display = 'inline-block';
    let playerSelection = "";
    if (humanPlay === 'rock') {
        playerSelection = "Rock";
    } else if (humanPlay === 'paper') {
        playerSelection = "Paper";
    } else {
        playerSelection = "Scissors";
    }

    if (playerSelection === "Rock" && computerSelection === "Rock") {
        displayResults(`Null Rock vs Rock  `, paragraph);
    } else
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        scoreboard.player++;

        displayResults(`You win, Rock beats Scissors  `, paragraph);
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        scoreboard.computer++;

        displayResults(`You lose, Paper beats Rock  `, paragraph);
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        displayResults(`Null Paper vs Paper  `, paragraph);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        scoreboard.player++;

        displayResults(`You win, Paper beats Rock  `, paragraph);
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        scoreboard.computer++;

        displayResults(`You lose, Scissors beats Paper  `, paragraph);
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        scoreboard.player++;

        displayResults(`You win, Scissors beats Paper  `, paragraph);
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        scoreboard.computer++;

        displayResults(`You lose, Rock beats Scissors  `, paragraph);
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        displayResults(`Null Scissors vs Scissors  `, paragraph);
    }



}

function updateScoreBoard() {
    // Show score
    score.innerHTML = `
<h2>Player: ${scoreboard.player}</h2>
<h2>Computer: ${scoreboard.computer}</h2>
`;
}

function displayResults(str, element) {
    if (scoreboard.player === 5 || scoreboard.computer === 5) {
        declareWinner();
    } else {

        element.textContent = str;
        updateScoreBoard();
    }
}

function declareWinner() {
    if (scoreboard.player > scoreboard.computer) {
        modal.style.display = 'block';
        loser.style.display = 'none'

    } else {
        modal.style.display = 'block';
        winner.style.display = 'none'

    }

}


function restartGame() {
    scoreboard.computer = 0;
    scoreboard.player = 0;
    paragraph.textContent = '';
    restart.style.display = 'none';
    updateScoreBoard()
}

function replayGame() {
    modal.style.display = 'none';
    loser.style.display = 'block';
    winner.style.display = 'block'
    restartGame()
}


const replayButton = document.querySelectorAll("span");

replayButton.forEach((button) => {

    button.addEventListener('click',
        () => {
            replayGame();
        })
})

const buttons = document.querySelectorAll('i');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    button.addEventListener('click',
        () => {
            playRound(button.id, computerPlay());
        })
})

restart.addEventListener('click', () => restartGame());