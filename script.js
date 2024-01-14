function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    const result = determineWinner(userChoice, computerChoice);
  
    document.getElementById('result').innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    }
  
    if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }
  
  function resetGame() {
    document.getElementById('result').innerText = '';
  }
  