
function game(){
    const choices = ["rock", "paper", "scissors"];
    const buttons = document.querySelectorAll("button");
    const resultsDiv = document.getElementById("results");
    const scoreDiv = document.getElementById("score");

    let playerScore = 0;
    let computerScore = 0;

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
            } else if (computerSelection === 'scissors' && playerSelection === 'rock'){
                return "Player Wins! Rock beats scissors."
            } 
        }

        function getComputerChoice(){
            const randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex]
        }

        buttons.forEach((button) => {
            button.addEventListener("click", ()=> {
                const playerSelection = button.id;
                const computerSelection = getComputerChoice();
                const result = playRound(playerSelection, computerSelection);
                handleRoundResult(result);
            })
        })

        function handleRoundResult(result){
            scoreDiv.textContent = 'Player: ${playerScore} - Computer: ${computerScore}';
            resultsDiv.textContent = result;

            if (playerScore === 5 || computerScore === 5){
                if (playerScore === 5){
                    resultsDiv.textContent = "Player Wins the Game!";
                } else {
                    resultsDiv.textContent = "Computer Wins the Game!";
                }

                buttons.forEach((button) => {
                    button.disabled = true;
                })
            }
        }
    }

game();
