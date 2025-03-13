const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("your-score");
const computerScoreEl = document.getElementById("computer-score");
let playerScore = 0;
let computerScore = 0;
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
        resultEl.innerText= result;
    });
});
function computerPlay() {
    const choices = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}
function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "Its a tie!"
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
    ){
        playerScore++;
        playerScoreEl.innerText= playerScore;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else 
    {
        computerScore++;
        computerScoreEl.innerText= computerScore;
        return "You lose! " + computerSelection + " beats " + playerSelection
    }
}