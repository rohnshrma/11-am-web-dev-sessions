var words = ["react", "javascript", "next", "python", "cascading", "style"];

let playAgain = "yes";

while (playAgain.toLowerCase() === "yes") {
  var word = words[Math.floor(Math.random() * words.length)].toLowerCase();

  var progress = Array(word.length).fill("_");

  var guessedLetters = [];
  var chances = 10;
  var won = false;

  alert(
    `=== New Hangman Game Started ===\nWord Progress : ${progress.join(" ")}`,
  );

  while (chances > 0) {
    var letter = prompt("Enter your guess : ").toLowerCase();

    if (letter === null) {
      alert("You must enter a letter to continue");
      continue;
    }

    if (letter.length !== 1 || !/^[a-z]$/.test(letter)) {
      alert("Invalid Input. Please enter a single letter (a-z)");
      continue;
    }

    if (guessedLetters.includes(letter)) {
      alert("Already Guessed the letter.");
      continue;
    }

    guessedLetters.push(letter);

    if (word.includes(letter)) {
      for (var i = 0; i < word.length; i += 1) {
        if (word[i] === letter) {
          progress[i] = letter;
        }
      }
    } else {
      chances--;
      alert(`Wrong! ${chances} chances left. `);
    }

    alert(
      `Word Progress : ${progress.join(" ")}\nGuessed so far : ${guessedLetters.join(", ")}\nChances left : ${chances}`,
    );

    if (!progress.includes("_")) {
      won = true;
      break;
    }

    if (chances === 0) {
      break;
    }
  }

  if (won) {
    alert(`You Win\nThe word was ${word}.`);
  } else {
    alert(`You Lost\nThe word was ${word}.`);
  }

  playAgain = prompt("Play Again? (yes/no) : ").toLowerCase() || "no";
}

alert("Thanks for playing! Come Again.");
