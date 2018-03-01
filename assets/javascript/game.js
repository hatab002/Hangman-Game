const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const wordBank = ["friends", "suits", "lost", "seinfield", "Homeland", "supernatural", "rome", "limitless", "scrubs"];

const remainingGuesses = 15;


var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];


var remainingCharacters = chosenWord.length;


while(remainingCharacters = chosenWord.length){
var guess = document.getElementById("guesses");
guess.innerHTML === remainingGuesses;
document.onkeyup = function(event) {
    var keyPressed = event.key;
    console.log(keyPressed);
    var updatedLetters = document.createElement("div");
    updatedLetters.innerHTML = keyPressed;
    document.getElementById("lettersChosen").appendChild(updatedLetters); 
    
};

var answer = [];
for(i = 0; i < chosenWord.length; i++){
    answer[i] = "-";
    document.getElementById("currentWord").innerHTML(answer);
};


}


