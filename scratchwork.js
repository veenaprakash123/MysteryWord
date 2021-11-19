
function switchPlayer() {
    if (letterGuesser == 'Player 2'){
        letterGuesser = 'Player 1';
        wordSelector = 'Player 2';
    }
    else if (letterGuesser == 'Player 1') {
        letterGuesser = 'Player 2';
        wordSelector = 'Player 1';
    }
    // imgArray.style.visibility = 'hidden';
}


let guessForm = document.querySelector('#guessForm');

let gameOver = false; 

wordSelector = 'Player 1';

letterGuesser = 'Player 2';

// Intro to game: 

let mysteryLetters

// let winningPoints

// let antipoints


let rachel = document.getElementById('0');
let monica = document.getElementById('1');
let chandler = document.getElementById('2');
let pheobe = document.getElementById('3');
let joey = document.getElementById('4');
let ross = document.getElementById('5');


let imgArray = [rachel, monica, chandler, pheobe, joey,
ross];


function introMessage() {
    response = prompt(`Welcome to Mystery Word! ${wordSelector}, please enter a Mystery Word and don't tell your opponent! The Mystery Word should have at least 5 characters.`);

    hint = prompt(`Please enter a hint that may help your opponent guess the Mystery Word in case they are struggling too much.`);

    //display the hint in an alert to Player 2 if they do not guess all the letters correctly before 

    mysteryLetters = Array.from(response);
    console.log(mysteryLetters);

    var placeholders = document.querySelector('.placeholders');

    //imgArray.style.visibility = 'hidden'

    alert(`${letterGuesser}, it's time for you to start guessing which letters are in the Mystery Word! There are ${response.length} letters in the word. `)

    Array.from(placeholders.children).forEach(e => e.remove());


    for (let i=0; i<mysteryLetters.length; i++){
        var mysteryLetter = document.createElement("div");
        mysteryLetter.innerText = mysteryLetters[i];
        placeholders.append(mysteryLetter);
        mysteryLetter.setAttribute('id', i+1);
        console.log(mysteryLetter);
    }

    placeholders.append(mysteryLetter);


    // let rachel = document.getElementById('0');
    // let monica = document.getElementById('1');
    // let chandler = document.getElementById('2');
    // let pheobe = document.getElementById('3');
    // let joey = document.getElementById('4');
    // let ross = document.getElementById('5');
    

    // let imgArray = [rachel, monica, chandler, pheobe, joey,
    // ross];


    // let imgArray = ['../rachelFriends.png', '../monicaFriends.png', '../chandlerFriends.png', '../pheobeFriends.png', '../joeyFriends.png', '../rossFriends.png'];
        

    // //imgArray.style.display = block;

    // let images = document.querySelector('.images');

    // images.append(imgArray);




    //console.dir(placeholders);
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

// Need to find a way to end the game/ break the loop. 
function checkGameStatus() {
    if (letterGuesser == 'Player 2'){
        if (player2Score == 2){
            alert(`GAME OVER! Player 2 wins the game!`);
        }
    }
    else if (letterGuesser == 'Player 1'){
        if (player1Score == 2) {
        alert(`GAME OVER! Player 1 wins the game!`);
        }
    }
    else if (wordSelector == 'Player 2') {
        if (player2Score == 2){
        alert(`GAME OVER! Player 2 wins the game!`);
        }
    }
    else if (wordSelector == 'Player 1'){
        if (player1Score == 2){
            alert(`GAME OVER! Player 1 wins the game!`);
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
    if (antipoints == 7){
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

function showImage() {  
    imgArray[antipoints-1].style.visibility = 'visible'
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
        showImage();
    }
})







