var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordBank = ["friends", "suits", "lost", "seinfield", "homeland", "supernatural", "rome", "limitless", "scrubs"];
var remainingGuesses = 15;
var wins = 0;
var losses = 0;
var blanks = [];
var keyPressed = [];
var wrongGuess = [];

// while ( remainingGuesses > 0){
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// var splitWord = chosenWord.split('')
    
    for(i = 0; i < chosenWord.length; i++){
        blanks.push(' _ ');
    }
    var splitWord = chosenWord.split("");
    console.log(splitWord);

    document.getElementById("currentWord").innerHTML = blanks.join(" ");

    var wrongGuess = [];
    var remainingGuesses = 15;
    document.getElementById("guesses").innerHTML = remainingGuesses;

    
    document.onkeypress = function (event){
        keyPressed = event.key;
        if (alphabet.indexOf(keyPressed) === -1){
            alert("Please enter a valid letter!")
        } else if (alphabet.indexOf(keyPressed) > -1){
            remainingGuesses--;
            document.getElementById("guesses").innerHTML = remainingGuesses;
            for ( j = 0; j < chosenWord.length; j++){
                if(splitWord[j] === keyPressed){
                    blanks[j] = keyPressed;
                    document.getElementById("currentWord").innerHTML = blanks.join("");
                    console.log(blanks);
                    
                }
            }
        }
    }

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


