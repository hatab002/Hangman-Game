var wins = 0;
var losses = 0;
function startGame () {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wordBank = ["friends", "suits", "lost", "seinfield", "homeland", "supernatural", "rome", "limitless", "scrubs"];
    var img = ["assets/images/hangman1.png", "assets/images/hangman2.png", "assets/images/hangman3.png", "assets/images/hangman4.png", "assets/images/hangman5.png", "assets/images/hangman6.png", "assets/images/hangman7.png"]
    var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    var remainingGuesses = 6;
    var blanks = [];
    var keyPressed = [];
    var wrongGuess = [];

// Background Music

    var backgroundMusic = document.createElement("audio");
    backgroundMusic.setAttribute("src", "assets/background-music.mp3");
    backgroundMusic.play();

// Setup

    document.getElementById("lettersChosen").innerHTML = [];
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("img").src = "assets/images/hangman1.png"

// Adding Blanks

    for(i = 0; i < chosenWord.length; i++){
        blanks.push(' _ ');
    }
    var splitWord = chosenWord.split("");
    console.log(splitWord);

    document.getElementById("currentWord").innerHTML = blanks.join(" ");

// When player presses key
    
    document.onkeypress = function (event){
        keyPressed = event.key;
        if (alphabet.indexOf(keyPressed) === -1){
            alert("Please enter a valid letter!")
        } else if (alphabet.indexOf(keyPressed) > -1){
            
            var isLetterFound = false;
            for ( j = 0; j < chosenWord.length; j++){
                if(splitWord[j] === keyPressed){
                    blanks[j] = keyPressed;
                    document.getElementById("currentWord").innerHTML = blanks.join("");
                    isLetterFound = true;

                    console.log(blanks);

                }

                }
            if ( isLetterFound === false) {
                    
// Sound effect for wrong guess
                var audioElement = document.createElement("audio");
                audioElement.setAttribute("src", "assets/pain.mp3");
                audioElement.play();

                if (document.getElementById("lettersChosen").innerHTML.indexOf(keyPressed) === -1){
                    document.getElementById("lettersChosen").innerHTML = document.getElementById("lettersChosen").innerHTML + " " + keyPressed;

                    remainingGuesses--;
                    document.getElementById("guesses").innerHTML = remainingGuesses;

                    }
// changing picture
    
                    if(remainingGuesses === 5){
                        document.getElementById("img").src = "assets/images/hangman2.png";
                        
                    }
                    if (remainingGuesses === 4){
                        document.getElementById("img").src = "assets/images/hangman3.png";
                        
                    }
                    if (remainingGuesses === 3){
                        document.getElementById("img").src = "assets/images/hangman4.png";
                        
                    }
                    if (remainingGuesses === 2){
                        document.getElementById("img").src = "assets/images/hangman5.png";
                        
                    }
                    if (remainingGuesses === 1){
                        document.getElementById("img").src = "assets/images/hangman6.png";
                        
                    }
                    if (remainingGuesses === 0){
                        document.getElementById("img").src = "assets/images/hangman7.png";
                        
                    }

                }
            }
// Win/Lose scenario 

            if(blanks.indexOf(' _ ') === -1) {

                        alert("YOU WIN!!!");
                        alert("Word is " + chosenWord.toUpperCase());
                        wins++;
                        document.getElementById("wins").innerHTML = wins;
                        startGame();
                    }
            if(remainingGuesses === 0){
                alert("Game Over!");
                alert("Word was " + chosenWord.toUpperCase());
                losses++;
                document.getElementById("losses").innerHTML = losses;
                startGame();
            }

        }
    };


// Buttons

var button = document.getElementById("button");
    button.addEventListener("click", function buttonFunction(){
        startGame();
        if(remainingGuesses <= 6){
            document.getElementById("button").setAttribute("disabled", true);

        }

    })

var button1 = document.getElementById("button1");
    button1.addEventListener("click", function buttonFunction1(){
        location.reload();

    })

 


