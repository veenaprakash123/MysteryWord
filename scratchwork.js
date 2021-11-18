
function switchPlayer() {
    if (letterGuesser == 'Player 2'){
        letterGuesser = 'Player 1';
        wordSelector = 'Player 2';
    }
    else if (letterGuesser == 'Player 1') {
        letterGuesser = 'Player 2';
        wordSelector = 'Player 1';
    }
}


let guessForm = document.querySelector('#guessForm');

let gameOver = false; 

wordSelector = 'Player 1';

letterGuesser = 'Player 2';

// Intro to game: 

let mysteryLetters

// let winningPoints

// let antipoints

function introMessage() {
    response = prompt(`Welcome to Mystery Word! ${wordSelector}, please enter a Mystery Word and don't tell your opponent! The Mystery Word should have at least 5 characters.`);

    hint = prompt(`Please enter a hint that may help your opponent guess the Mystery Word in case they are struggling too much.`);

    //display the hint in an alert to Player 2 if they do not guess all the letters correctly before 

    mysteryLetters = Array.from(response);
    console.log(mysteryLetters);

    var placeholders = document.querySelector('.placeholders');

    alert(`${letterGuesser}, it's time for you to start guessing which letters are in the Mystery Word! There are ${response.length} letters in the word. `)

    Array.from(placeholders.children).forEach(e => e.remove());


    for (let i=0; i<mysteryLetters.length; i++){
        var mysteryLetter = document.createElement("div");
        mysteryLetter.innerText = mysteryLetters[i];
        placeholders.append(mysteryLetter);
        mysteryLetter.setAttribute('id', i+1);
        console.log(mysteryLetter);
    }

    console.dir(placeholders);
}

introMessage ();

let round = 1;
let winningPoints = 0;
let antipoints = 0;
let player1Score = 0
let player2Score = 0

let roundDisplayed = document.getElementById("round");

function nextRound() {
    round = round + 1;
    console.log(round); // This part isn't working properly. 
    roundDisplayed.innerText= `Round ${round}`;
    winningPoints = 0;
    antipoints = 0;
    switchPlayer();
}


function updateScoreWS () {
    if (wordSelector == 'Player 2'){
        player2Score = player2Score + 1;
        document.getElementById('player2').innerText = `Player 2: ${player2Score}`;
    }
    else {
    player1Score = player1Score + 1;
    document.getElementById('player1').innerText = `Player 1: ${player1Score}`;
    }
}



function updateScoreLG (){
    if (letterGuesser == 'Player 2'){
        player2Score = player2Score + 1;
        document.getElementById('player2').innerText = `Player 2: ${player2Score}`;
    }
    else {
    player1Score = player1Score + 1;
    document.getElementById('player1').innerText = `Player 1: ${player1Score}`;
    }
}


function checkGameStatus() {
    if (letterGuesser == 'Player 2'){
        if (player2Score == 2){
            alert(`GAME OVER! Player 2 wins the game!`);
            break;
        }
    }
    else if (letterGuesser == 'Player 1'){
        if (player1Score == 2) {
        alert(`GAME OVER! Player 1 wins the game!`);
        break;
        }
    }
    else if (wordSelector == 'Player 2') {
        if (player2Score == 2){
        alert(`GAME OVER! Player 2 wins the game!`);
        break;
        }
    }
    else if (wordSelector == 'Player 1'){
        if (player1Score == 2){
            alert(`GAME OVER! Player 1 wins the game!`);
            break;
        }
    }
}


function checkWin() {
    console.log(winningPoints, mysteryLetters.length);
    if (winningPoints == mysteryLetters.length){
        console.log(`Congratulations, you won the game!`);
        setTimeout (function (){
            if (window.confirm(`Congratulations ${letterGuesser}, you won Round ${round}!`)) {
                updateScoreLG();
                checkGameStatus();
                nextRound();
                setTimeout ( function () {
                    introMessage();
                }, 1300 );
                }
            }, 1000);
    }
}

function checkLoss() {
    if (antipoints == 11){
        setTimeout (function () {
            if (window.confirm(`Oops! Looks like you lost Round ${round} to ${wordSelector}!`)) {
                updateScoreWS();
                checkGameStatus();
                nextRound();
                setTimeout ( function () {
                    introMessage();
                }, 1300 );
            }
        }, 1000);
    }
}
    
function checkForHint () {
    if (antipoints == 5){
        alert(`Here's a hint: ${hint}`);
    }
}



guessForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    let input = document.querySelector('#playersGuess').value;
    // create div for each letter of the input. CSS for each div will display, but the inner text will be hidden. Use 'For loop' to assign an id to each div. 
    //console.log(mysteryLetters);
    if (response.includes(input)) {
        console.log('good job!');
        for (i=0; i<mysteryLetters.length; i++){
            if (mysteryLetters[i] == input){
                //document.getElementById(i+1).style.display = 'block';
                document.getElementById(i+1).style.color = 'black';
                winningPoints = winningPoints + 1; 
                console.log('Number of correct guesses:' , winningPoints);
                checkWin(); 
            }
        }
    }
    else {
        console.log('oops!');
        alert(`Oops! Looks like the letter you entered isn't in the Mystery Word. Please try again!`);
        checkForHint();
        antipoints = antipoints + 1; 
        console.log(`Number of incorrect guesses:` , antipoints);
        checkLoss();
    }
})







