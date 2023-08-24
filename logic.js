function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}



function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "It's a Draw!"
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return "You lose! Paper beats rock."
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return "You lose! Scissors beats paper."
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return "You lose! Rock beats scissors."
    } else if (computerSelection === 'rock' && playerSelection === 'paper'){
        return "Player Wins. Paper beats rock."
    } else if (computerSelection === 'paper' && playerSelection === 'scissors'){
        return "Player Wins! Scissors beats paper."
    } else (computerSelection === 'scissors' && playerSelection === 'rock')
    
    {
        return "Player Wins! Rock beats scissors."
    } 
}

const playerSelection = prompt("Do you choose rock, paper, or scissors").toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))