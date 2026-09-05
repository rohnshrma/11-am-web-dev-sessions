var secret = Math.floor(Math.random() * 100) + 1;

var attempts = 0;
var max_attempts = 6;

while (attempts < max_attempts) {
  attempts += 1;
  var guess = parseInt(prompt("Enter your guess : "));
  if (guess > secret) {
    alert("Too High! Try Low.");
  } else if (guess < secret) {
    alert("Too Low! Try High.");
  } else {
    alert(
      `Congratulations! You've Guessed the correct number ${guess} in ${attempts} attempts.`,
    );
    break;
  }
}

if (attempts > max_attempts)
  alert(`Failed to guess the correct number\nThe correct number was ${secret}`);
