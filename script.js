let randomNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    let guess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");
    guess = Number(guess);
    if (guess === randomNumber) {
        message.textContent = "Correct! You guessed the number!";
    }
    else if (guess < randomNumber) {
        message.textContent = "Too low! Try again.";
    }
    else {
        message.textContent = "Too high! Try again.";
    }
}