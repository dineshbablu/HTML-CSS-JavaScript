const buttonContainer = document.getElementById("buttonContainer");
const diceImg = document.getElementById("diceImg");
const resetScore = document.getElementById("resetScore");
const showRules = document.getElementById("showRules");
const mainContainer = document.getElementById("gameContainer");
const score = document.getElementById("score");
let existingScore = 0;
let selectedNumber = null;

const buttonNumbers = [1,2,3,4,5,6];
buttonNumbers.forEach( (num) => {
    const button = document.createElement("button");
    button.innerText = num;
    buttonContainer.appendChild(button);
    button.addEventListener("click", function(e){
        if(e.target.tagName === "BUTTON") {
            // let buttonValue = (`${event.target.innerText}`);
            let buttonValue = event.target.innerText;
            selectedNumber = buttonValue;
            return selectedNumber;
        }
    })
});
function rollDice(){
    const randomNumber = Math.floor(Math.random() * 6)+1;
    const error = document.createElement("div")
    error.id = "error";
    const existingError = document.getElementById("error");
    if (existingError) {
        existingError.remove();
    }
    if(selectedNumber === null && randomNumber) {
        error.innerText = "You have not selected any number";
        mainContainer.prepend(error);
    }
    else{
        error.remove();
        diceImg.src = `./Images/dice_${randomNumber}.png`;
        if(parseInt(selectedNumber) === randomNumber) {
        existingScore += randomNumber;
    }
    else{
        existingScore -= 2;
    }
}
    score.innerText = existingScore;
}
function reset() {
    score.innerText = 0;
}
showRules.addEventListener("click", function(){
    if (rulesContainer.classList.contains("hidden")){
        rulesContainer.classList.remove("hidden");
        showRules.innerText = "Hide Rules";
    }
    else {
        rulesContainer.classList.add("hidden");
        showRules.innerText = "Show Rules";
    }
});

