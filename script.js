let humanScore= 0, computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    let result;
    switch (num) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "scissors";
            break;
    }
    return result
}


document.querySelector(".rock").addEventListener("click", () => playRound("rock", getComputerChoice()))
document.querySelector(".paper").addEventListener("click", () => playRound("paper", getComputerChoice()))
document.querySelector(".scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()))



function playRound(humanChoice, computerChoice) {
    let result = document.querySelector(".results")
    if (humanChoice === computerChoice) {
        let tie = document.createElement("div")
        result.textContent = "TIE!"
        return;
    }
    
    const humanWins =
    (humanChoice === "rock"     && computerChoice === "scissors") ||
    (humanChoice === "paper"    && computerChoice === "rock")     ||
    (humanChoice === "scissors" && computerChoice === "paper");
    if (humanWins) {
        humanScore+=1;
        result.textContent = "WIN!"
    }
    else {
        computerScore+=1;
        let lose = document.createElement("div")
        result.textContent = "LOSE!"
    }
    let scoreboard = document.querySelector(".scoreboard")
    scoreboard.textContent = `HumanScore = ${humanScore}, ComputerScore = ${computerScore}`
}




