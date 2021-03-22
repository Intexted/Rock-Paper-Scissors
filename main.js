let human = 0;
let computer = 0;
let result = "";

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


function playRound(HumanPlay, computerSelection) {
    let playerSelection = "";
    let HumanSelection = "";
    if (typeof HumanPlay === 'string') {
        HumanSelection = HumanPlay.toLowerCase();
        playerSelection = HumanSelection.charAt(0).toUpperCase() + HumanSelection.slice(1);
    }

    if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log(`Draw \n Human ${human} vs computer ${computer}`)
    } else
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        human++;
        console.log(`You win,Rock beats Scissors \n Human ${human} vs computer ${computer} `);
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computer++;
        console.log(`You lose, Paper beats Rock \n Human ${human} vs computer ${computer}`);
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        console.log(`Draw \n Human ${human} vs computer ${computer}`)
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        human++;
        console.log(`You win, Paper beats Rock \n Human ${human} vs computer ${computer}`);
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computer++;
        console.log(`You lose,Scissors beats Paper \n Human ${human} vs computer ${computer}`);
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        human++;
        console.log(`You win,Scissors beats Paper \n Human ${human} vs computer ${computer}`);
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computer++;
        console.log(`You lose,Rock beats Scissors \n Human ${human} vs computer ${computer} `);
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        console.log(`Draw \n Human ${human} vs computer ${computer}`)
    }


}

function game() {
    let round = 5;
    for (let i = 0; i < round; i++) {
        playRound(prompt(), computerPlay());
    }
    if (human > computer) {
        return "human win"
    } else if (human < computer) {
        return "computer win"
    } else {
        return "No winner"
    }
    human = 0;
    computer = 0;
}