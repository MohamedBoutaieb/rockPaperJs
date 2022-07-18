const play = ["Rock", "Scissors", "Paper"]
const userPlay = document.querySelector('#user')
const pcPlay = document.querySelector("#pc")
const result = document.querySelector("#result")
const userScore = document.querySelector("#player")
const compScore = document.querySelector("#computer")
const finalRes = document.querySelector('.final')
let pcScore = 0;
let playerScore = 0;
function computerPlay() {
    let random = (Math.floor(Math.random() * 3));
    let computerPlay = play[random];
    pcPlay.innerText = "computer chose " + computerPlay;
    return computerPlay;
}
function clickButton(event) {
    userPlay.innerText = "you chose " + event.target.className.toUpperCase()
    playRound(computerPlay(), event.target.className.toUpperCase())
}
function playRound(computerSelection, PlayerSelection) {
    if (PlayerSelection === null) {
        alert("sorry you didn't like the game , refresh to replay")
        return -3;
    }
    PlayerSelection = PlayerSelection.toUpperCase()
    switch (PlayerSelection) {
        case "ROCK":
            if (computerSelection == "Scissors") {
                res.innerText = "you win the round ! rock beats scissors"
                playerScore++;
            }
            else if (computerSelection == "Rock") {
                res.innerText = "Rocky draw !"
            }
            else {
                res.innerText = "You lost the round :( ! paper beats rock"
                pcScore++;
            }
            break;
        case "SCISSORS":
            if (computerSelection == "Scissors") {
                res.innerText = "Scissors draw !"
            }
            else if (computerSelection == "Rock") {
                res.innerText = "you lost the round :( ! rock beats scissors"
                pcScore++;
            }
            else {
                res.innerText = "you win the round ! scissors cuts paper"
                playerScore++;
            }
            break;
        case "PAPER":
            if (computerSelection == "Paper") {
                res.innerText = "Paper draw !"
            }
            else if (computerSelection == "Rock") {
                res.innerText = "you win the round ! paper flips rock"
                playerScore++;
            }
            else {
                res.innerText = "you lost the round :( ! scissors cuts paper"
                pcScore++;
            }
            break;
        default:
            res.innerText = "please enter a valid input :))))"
            break;
    }
    userScore.innerText = playerScore;
    compScore.innerText = pcScore;
    game()
}

function game() {
    if (playerScore == 5 ) {
        finalRes.innerText ="congratulations !!! you're the ultimate winner"
        finalRes.innerText +="\n refresh the page to play again"
        buttons.forEach(btn => btn.disabled = true)
    }
    else if (pcScore == 5) {
       finalRes.innerText ="you lost .."
       buttons.forEach(btn => btn.disabled = true)
       finalRes.innerText +="refresh the page to play again"
    }
    
    }
let buttons = document.querySelectorAll("button")
buttons.forEach(btn => btn.addEventListener('click', clickButton)) 