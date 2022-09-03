function computerPlay() {
    let num = ((Math.random() * 8) % 2).toFixed();
    let moves = ['rock', 'paper', 'scissors'];
    return moves[num];
}

function round(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    switch (computerSelection) {
        case 'rock':
            if(playerSelection === 'rock'){
                return "It's a Draw! We both chose Rock";
            }
            else if(playerSelection === 'paper'){
                return "You Win! Paper beats Rock";
            }
            else if(playerSelection === 'scissors'){
                return "You Lose! Rock beats Scissors";
            }
            else{
                return "Invalid entry, try again!";
            }
        break;
        case 'paper':
            if(playerSelection === 'rock'){
                return "You Lose! Paper beats Rock";
            }
            else if(playerSelection === 'paper'){
                return "It's a Draw! We both chose Paper";
            }
            else if(playerSelection === 'scissors'){
                return "You Win! Scissors beats Paper";
            }
            else{
                return "Invalid entry, try again!";
            }
        break;
        default:
            if(playerSelection === 'rock'){
                return "You Win! Rock beats Scissors";
            }
            else if(playerSelection === 'paper'){
                return "You Lose! Scissors beats Paper";
            }
            else if(playerSelection === 'scissors'){
                return "It's a Draw! We both chose Scissors";
            }
            else{
                return "Invalid entry, try again!";
            }
        break;
    }
}

function game(roundNum) {
    console.log()
    if(isNaN(roundNum)){
        alert("You did not enter a number, please try again.");
        let roundNum = prompt("Please enter number of rounds:", "6")
        game(roundNum)
    }
    else{
        let userWinCount = 0;
        let compWinCount = 0;
        let drawCount = 0;
        for (let i = 0; i < parseInt(roundNum); i++) {
            let comp = computerPlay();
            let player = prompt("Please enter your rock, paper or scissors:");
            let result = round(player, comp);
            if(result.includes("You Win")){
                userWinCount = userWinCount + 1;
            }
            else if(result.includes("You Lose")){
                compWinCount = compWinCount + 1;
            }
            else if(result.includes("Draw")){
                drawCount = drawCount + 1;
            }
            while(result === "Invalid entry, try again!"){
                comp = computerPlay();
                player = prompt("Please enter your rock, paper or scissors:");
                result = round(player, comp);
                alert(result);
            }
            alert(result);
        }
        alert("Game results: User = " + userWinCount + ", VS Computer = " + compWinCount + ", Draws = " + drawCount);
    }
}

const roundNum = prompt("Please enter number of rounds:", "6")
game(roundNum)