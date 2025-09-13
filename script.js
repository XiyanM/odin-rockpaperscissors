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


function getHumanChoice() {
    let userInput = prompt("Input your move!")
    userInput = userInput.toLowerCase();
    return userInput;
}



function playRound(humanChoice, computerChoice) {
    if (humanChoice != computerChoice) {
        switch(humanChoice){
            case "rock":
                computerChoice == "paper" ? computerScore += 1 : humanScore +=1;
                break;
            case "paper":
                computerChoice == "scissors" ? computerScore +=1 : humanScore +=1;
                break;
            case "scissors":
                computerChoice == "rock" ? computerScore +=1 : humanScore +=1;
                break;
        }
        return console.log(humanScore, computerScore)
    }
    else{
        return console.log(humanScore, computerScore)
    }
}

function playGame(){
    let result;
    for (let i = 0; i < 5; i++) { 
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        result = playRound(humanSelection, computerSelection);
    }
    return result

}


console.log(playGame())