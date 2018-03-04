var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordBank = ["friends", "suits", "lost", "seinfield", "homeland", "supernatural", "rome", "limitless", "scrubs"];
var img = ["assets/images/hangman2.png", "assets/images/hangman3.png", "assets/images/hangman4.png", "assets/images/hangman5.png", "assets/images/hangman6.png", "assets/images/hangman7.png"]
var remainingGuesses = 6;
// var wins = 0;
var losses = 0;
var blanks = [];
var keyPressed = [];
var wrongGuess = [];
// while ( remainingGuesses > 0){
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// var splitWord = chosenWord.split('')
    function startGame () {
        var backgroundMusic = document.createElement("audio");
        backgroundMusic.setAttribute("src", "assets/background-music.mp3");
        backgroundMusic.play();
        
    
    for(i = 0; i < chosenWord.length; i++){
        blanks.push(' _ ');
    }
    var splitWord = chosenWord.split("");
    console.log(splitWord);

    document.getElementById("currentWord").innerHTML = blanks.join(" ");

    var wrongGuess = [];

    
    var remainingGuesses = 6;
    document.getElementById("guesses").innerHTML = remainingGuesses;
    // var wins = 0;
    // document.getElementById("wins").innerHTML = wins;
    document.onkeypress = function (event){
        keyPressed = event.key;
        if (alphabet.indexOf(keyPressed) === -1){
            alert("Please enter a valid letter!")
        } else if (alphabet.indexOf(keyPressed) > -1){
            // var isGameDone = false;
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
                
                if (document.getElementById("lettersChosen").innerHTML.indexOf(keyPressed) === -1){
                    document.getElementById("lettersChosen").innerHTML = document.getElementById("lettersChosen").innerHTML + " " + keyPressed;
                    
                    remainingGuesses--;
                    document.getElementById("guesses").innerHTML = remainingGuesses;

                    }
    // changing picture
    var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "assets/pain.mp3")
                    if(remainingGuesses === 5){
                        document.getElementById("img").src = "assets/images/hangman2.png";
                        audioElement.play();
                    } 
                    if (remainingGuesses === 4){
                        document.getElementById("img").src = "assets/images/hangman3.png";
                        audioElement.play();
                    }
                    if (remainingGuesses === 3){
                        document.getElementById("img").src = "assets/images/hangman4.png";
                        audioElement.play();
                    }
                    if (remainingGuesses === 2){
                        document.getElementById("img").src = "assets/images/hangman5.png";
                        audioElement.play();
                    }
                    if (remainingGuesses === 1){
                        document.getElementById("img").src = "assets/images/hangman6.png";
                        audioElement.play();
                    }
                    if (remainingGuesses === 0){
                        document.getElementById("img").src = "assets/images/hangman7.png";
                        audioElement.play();
                    }
                    
                }
            } 
            // end boolean 
            
            if(blanks.indexOf(' _ ') === -1) {
                        alert("YOU WIN!!!");
                        alert("Word is " + chosenWord.toUpperCase());
                        
                    }
            if(remainingGuesses < 0){
                alert("Game Over!");
                location.reload();
            }
            
        }
    };

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
        
    

        // if ( chosenWord.indexOf(keyPressed) > -1)
        // { console.log(keyPressed);
        //     for (var j = 0; j < chosenWord.length; j++) {
        //             if (chosenWord[j] === keyPressed) {
        //             blanks[j] = keyPressed;
        //             remainingGuesses--;}}
        
        // }

        //     else {
        //         // document.getElementById("lettersChosen").innerHTML = wrongGuess;
        //         // console.log(wrongGuess);
        //         var wrongGuess = document.createElement("p");
        //         // function wrong (){ wrongGuess.push(keyPressed)};
        //         wrongGuess.innerHTML = keyPressed;
        //         document.getElementById("lettersChosen").appendChild(wrongGuess);
        //         // remainingGuesses--;
        //         // console.log(remainingGuesses)
        //         }
        //     // }
        
    // }
        
        
        


// var answer = [];
// for(i = 0; i < chosenWord.length; i++){
//     answer[i] = "-";
// }
// var remainingCharacters = chosenWord.length;

// // while (remainingCharacters > 0) {

//     document.onkeyup = function(event) {
//     var keyPressed = event.key;
//     console.log(keyPressed);
//         var updatedLetters = document.createElement("div");
//         updatedLetters.innerHTML = keyPressed;
//         document.getElementById("lettersChosen").appendChild(updatedLetters);

// }
    // Show the player their progress

//     alert(answer.join(" "));
//     // Get a guess from the player
//     var guess = prompt("Guess a letter, or click Cancel to stop playing.");
//     if (guess === null) {
//     // Exit the game loop
//     break;
//     } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//     } else {
//     // Update the game state with the guess
//     
//     }
// }
// }
    
    
// while(remainingCharacters = chosenWord.length){
// var guess = document.createElement('div');
// guess.innerHTML = "remainingGuesses";
// document.getElementById("guesses").appendChild(guess);



// }
//     if (keyPressed === "" )

    


//     var blanks = document.createElement("div");
//     blanks.innerHTML = answer[i];
//     document.getElementById("currentWord").appendChild(blanks);
// };


// }


