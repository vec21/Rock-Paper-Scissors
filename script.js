
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const gameOption = document.querySelector('#game-option');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const playerOption = document.querySelector('.player-option');
const computerOption = document.querySelector('.computer-option');





let contPlayerSelectionWin = 0
let contComputerSelectionWin = 0



// 
function computerPlay() {
    var result = Math.ceil(Math.random() * 3);

    if (result === 1) {
        return "Rock";
    } else if (result === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();

    playerOption.innerHTML = `<code>Player: ${playerSelection}</code>`;
    computerOption.innerHTML = `<code>Computer: ${computerSelection}</code>`;



    const paperWinPlayerSelection = (playerSelection === "Paper" && computerSelection === "Rock");
    const paperWinComputerSelection = (playerSelection === "Rock" && computerSelection === "Paper");

    const rockWinPlayerSelection = (playerSelection === "Rock" && computerSelection === "Scissors");
    const rockWinComputerSelection = (playerSelection === "Scissors" && computerSelection === "Rock");

    const ScissorsWinPlayerSelection = (playerSelection === "Scissors" && computerSelection === "Paper");
    const ScissorsWinComputerSelection = (playerSelection === "Paper" && computerSelection === "Scissors");

    const TieScissors = (playerSelection === "Scissors" && computerSelection === "Scissors");
    const TieRock = (playerSelection === "Rock" && computerSelection === "Rock");
    const TiePaper = (playerSelection === "Paper" && computerSelection === "Paper");

    if (paperWinPlayerSelection) {
        contPlayerSelectionWin++;
        playerScore.innerHTML = `<code>Player: ${contPlayerSelectionWin}</code>`;
        gameOption.textContent = "You Win! Paper beats Rock";
    } else if (paperWinComputerSelection) {
        contComputerSelectionWin++;
        computerScore.innerHTML = `<code>Computer: ${contComputerSelectionWin}</code>`;
        gameOption.textContent = "You Lose! Paper beats Rock";
    } else if (rockWinPlayerSelection) {
        contPlayerSelectionWin++;
        playerScore.innerHTML = `<code>Player: ${contPlayerSelectionWin}</code>`;
        gameOption.textContent = "You Win! Rock beats Scissors";
    } else if (rockWinComputerSelection) {
        contComputerSelectionWin++;
        computerScore.innerHTML = `<code>Computer: ${contComputerSelectionWin}</code>`;
        gameOption.textContent = "You Lose! Rock beats Scissors";
    } else if (ScissorsWinPlayerSelection) {
        contPlayerSelectionWin++;
        playerScore.innerHTML = `<code>Player: ${contPlayerSelectionWin}</code>`;
        gameOption.textContent = "You Win! Scissors beats Paper";
    } else if (ScissorsWinComputerSelection) {
        contComputerSelectionWin++;
        computerScore.innerHTML = `<code>Computer: ${contComputerSelectionWin}</code>`;
        gameOption.textContent = "You Lose! Scissors beats Paper";
    } else if (TieScissors) {
        gameOption.textContent = "Tie ";
    } else if (TieRock) {
        gameOption.textContent = "Tie ";
    } else if (TiePaper) {
        gameOption.textContent = "Tie ";
    } else {
        gameOption.textContent = "ERROR!";
    }
}

