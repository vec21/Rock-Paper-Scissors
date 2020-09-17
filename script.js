var rockOption = document.querySelector("#rock")
var paperOption = document.querySelector("#paper")
var scissorsOption = document.querySelector("#scissors")

rockOption.addEventListener('click', game)


function computerPlay() {
    var resul = Math.ceil(Math.random() * 3)

    if (resul === 1) {
        return "ROCK"
    } else if (resul === 2) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}
function playRound(playerSelection, computerSelection) {

    const paperWinPlayerSelection = (playerSelection === "PAPER" && computerSelection === "ROCK")
    const paperWinComputerSelection = (playerSelection === "ROCK" && computerSelection === "PAPER")

    const rockWinPlayerSelection = (playerSelection === "ROCK" && computerSelection === "SCISSORS")
    const rockWinComputerSelection = (playerSelection === "SCISSORS" && computerSelection === "ROCK")

    const ScissorsWinPlayerSelection = (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    const ScissorsWinComputerSelection = (playerSelection === "PAPER" && computerSelection === "SCISSORS")

    const TieScissors = (playerSelection === "SCISSORS" && computerSelection === "SCISSORS")
    const TieRock = (playerSelection === "ROCK" && computerSelection === "ROCK")
    const TiePaper = (playerSelection === "PAPER" && computerSelection === "PAPER")

    if (paperWinPlayerSelection) {
        return "You Win! Paper beats Rock"
    } else if (paperWinComputerSelection) {
        return "You Lose! Paper beats Rock"
    } else if (rockWinPlayerSelection) {
        return "You Win! Rock beats Scissors"
    } else if (rockWinComputerSelection) {
        return "You Lose! Rock beats Scissors"
    } else if (ScissorsWinPlayerSelection) {
        return "You Win! Scissors beats Paper"
    } else if (ScissorsWinComputerSelection) {
        return "You Lose! Scissors beats Paper"
    } else if (TieScissors) {
        return "Tie "
    } else if (TieRock) {
        return "Tie "
    } else if (TiePaper) {
        return "Tie "
    } else {
        return "ERRRRRRROOOOOOOOOOOOOOOOOO!"
    }
}

function game(plays) {
    var contPlayerSelectionWin = 0
    var contComputerSelection = 0
    var contTie = 0

    for (let i = 0; i < plays; i++) {
        //var playerSelection = prompt("Rock Paper Scissors\n\n Choose an option").toUpperCase()
        var playerSelection = rockOption.value
        var computerSelection = computerPlay()
        console.log(`\n${i + 1}º play \nComputer = ${computerSelection} \nYour = ${playerSelection} \n`)
        console.log(playRound(playerSelection, computerSelection))

        if ((playRound(playerSelection, computerSelection) == "You Win! Paper beats Rock") || (playRound(playerSelection, computerSelection) == "You Win! Rock beats Scissors") || (playRound(playerSelection, computerSelection) == "You Win! Scissors beats Paper")) {
            contPlayerSelectionWin++
        } else if ((playRound(playerSelection, computerSelection) == "You Lose! Paper beats Rock") || (playRound(playerSelection, computerSelection) == "You Lose! Rock beats Scissors") || (playRound(playerSelection, computerSelection) == "You Lose! Scissors beats Paper")) {
            contComputerSelection++
        } else {
            contTie++
        }
    }

    return `-----------------------------------\nYour Score = ${contPlayerSelectionWin}\nComputer Score = ${contComputerSelection}\nTie = ${contTie}`
}
//var plays = Number(prompt("How many plays do you want?"))
var plays = 4
console.log(game(plays))





