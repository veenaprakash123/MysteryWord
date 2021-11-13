// Prompt asks Player 1 to enter a word. Use prompt for this. Value of user's response should be saved. 


// Alert to tell Player 2 that the mystery word has been determined and that they can begin guessing. 


//User enters guess into input field. Event listner needs to be added to the submit button. 




let guessForm = document.querySelector('#guessForm');

 // Question: Why do we add an event listener to the whole page instead of only to the submit button?

guessForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    let input = document.querySelector('#guessForm').value;
})


let currentPlayer = Player2
let wordSelector = Player1

function switchPlayer() {
    if (currentPlayer = Player1){
        currentPlayer = Player2;
        wordSelector = Player1;
    }
    currentPlayer = Player1;
    wordSelector = Player2;
}

let gameOver = false; 
while (gameOver == false) {
    // initial Prompt
    response = prompt(`Welcome to Mystery Word! Please enter a Mystery Word and don't tell your opponent!`)
}
    // case sensistivity 

    // Game needs to draw out the number of squares for each letter in the word that was entered. Use for loop to loop through each letter of the mystery word and disaply an empty square. Question: how can each of these squares be assigned a unique id? 

    for (i=0; i<response.length; i++){
    // display blank slot/ empty square OR display each letter in a box. Hide all boxes. Might need to use forEach function. 
    }
    alert(`${currentPlayer.value}, get ready to start guessing letters within the Mystery Word!`);
    // // If the response contains the input, then display 
    // if (response.contains(input))



