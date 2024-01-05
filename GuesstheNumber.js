// function guessNumber() {
//     let target = Math.floor(Math.random() * 100) + 1;
//     let maxTries = 7;
//     for (let tries = 1; tries <= maxTries; tries++) {
//         let guess = prompt('Guess a number 1-100!');

//         if (guess < target) {
//             alert('Woah woah woah. Go up');
//         } else if (guess > target) {
//             alert('Aye man thats too high!');
//         } else {
//             alert('Amazing! Youre amazing!');
//             return;
//         }
//     }

//     alert(`You guessed 7 times already. The correct number was ${target}`);
//     let playAgain = prompt('Would you like to play again? Yay or Nay?')

//     }
// guessNumber();

function guessNumber() {
    let playAgain = 'yay'
    while(playAgain === 'yay'){
        let target = Math.floor(Math.random() * 100) + 1;
        let maxTries = 7;
        for (let tries = 1; tries <= maxTries; tries++) {
            let guess = prompt('Guess a number 1-100!');
            
            if (guess < target) {
                alert('Woah woah woah. Go up');
            } else if (guess > target) {
                alert('Aye man thats too high!');
            } else {
                alert('Amazing! Youre amazing!');
                return;
            }
        }
        
        alert(`You guessed 7 times already. The correct number was ${target}`);
        playAgain = prompt('Would you like to play again? Yay or Nay?')
        if (playAgain.toLowerCase() == 'nay'){
            alert('Bye Bye')
            return;
        }
    }
} 
guessNumber();
