
function switchPlayer() {
    if (currentPlayer = 'Player1'){
        currentPlayer = 'Player2';
        wordSelector = 'Player1';
    }
    currentPlayer = 'Player1';
    wordSelector = 'Player2';
}


let guessForm = document.querySelector('#guessForm');

let gameOver = false; 

response = prompt(`Welcome to Mystery Word! Please enter a Mystery Word and don't tell your opponent!`)


function checkLetter() {
    if (response.includes(input)) {
        document.querySelector('#placeholders').innerText = input;
    }
    else {
        alert('oops! Looks like the letter you entered is not in the Mystery Word!')
    }
}

guessForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    let input = document.querySelector('#playersGuess').value;
    console.log(response === input);

})



    // while (gameOver == false){
    //     response = prompt(`Welcome to Mystery Word! Please enter a Mystery Word and don't tell your opponent!`)
    //     checkLetter()

    // }







