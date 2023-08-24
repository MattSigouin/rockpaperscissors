function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex]
}

const computerChoice = getComputerChoice();


console.log(computerChoice)