let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let result = document.querySelector("#result-statement");
let userScoreObj = document.querySelector("#user-s");
let compScoreObj = document.querySelector("#comp-s");
let restGame = document.querySelector("#new-game");

let rockSound = document.getElementById('rockSound');
let paperSound = document.getElementById('paperSound');
let scissorsSound = document.getElementById('scissorsSound');

restGame.addEventListener("click", () => {
    userScore = 0;
    userScoreObj.innerText = userScore;
    compScore = 0;
    compScoreObj.innerText = compScore;
    result.innerText = "Play Move";
    result.style.backgroundColor = "#03045e";
})

let generateComputerChoice = () =>{
    let options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}
const drawMsg = (userChoice,compChoice) => {
    result.innerText = `Draw! ${userChoice} VS ${compChoice}`;
    result.style.backgroundColor = "#03045e";
}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin)
    {
        userScore++;
        userScoreObj.innerText = userScore;
        result.innerText = `You Won! ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green"
    }
    else
    {
        compScore++;
        compScoreObj.innerText = compScore;
        result.innerText = `You Lost! ${userChoice} is beaten by ${compChoice}`;
        result.style.backgroundColor = "red"
    }
}
const checkWinner = (userChoice) => {
    let compChoice = generateComputerChoice();
    //Here is the real decision making
    let userWin = true;
    if(userChoice === compChoice)
    {
        drawMsg(userChoice,compChoice);
    }
    else
    {
        if(userChoice ===  "rock")
            {
                if(compChoice === "paper")
                {
                    userWin = false;
                }
                if(compChoice === "scissors")
                {
                    userWin = true;
                }
            }
            if(userChoice === "paper")
            {
                if(compChoice === "rock")
                {
                    userWin = true;
                }
                if(compChoice === "scissors")
                {
                    userWin = false;
                }
            }
            if(userChoice === "scissors")
            {
                if(compChoice === "rock")
                {
                    userWin = false;
                }
                if(compChoice === "paper")
                {
                    userWin = true;
                }
            }
            showWinner(userWin,userChoice,compChoice);
    }

}


choices.forEach(choice => {
    choice.addEventListener("click", () =>{
        let userChoice = choice.id;
        checkWinner(userChoice);
        if (userChoice === "rock") {
            rockSound.play();
        } else if (userChoice === "paper") {
            paperSound.play();
        } else if (userChoice === "scissors") {
            scissorsSound.play();
        }
    })    
});