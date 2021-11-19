** MYSTERY WORD **

Introduction:

Mystery Word is a two player game where two players will try to guess a word selected by the other user. For each round, one player will select a word, and the other player will guess the letters that are included in that word. For every incorrect guess, a piece of a holiday themed drawing will be displayed. If the whole image is displayed the Player making the guesses loses that round, and the other player earns a point. If they correctly guess all the letters in the word, they win the round! For the following round, the players will switch places - the one who guessed in the first round, will select the word for the second round. The player who selected the word in the first round will guess letters belonging to the new word. The first player to win two rounds wins the overall game! 


Technologies Used: 

1. HTML
2. CSS
3. Javascript


Installation Instructions: 

1. Clone this repo into a local file 
2. Open the index.html file in your browser and get started! 


MVP User Stories: 

1. As a player, I want the game to allow either me or my opponent to submit a word so that the other player can guess the letters in that word.  
2. As a player, I want the word selected by my opponent to initially be hidden from view so that I won’t know what it is. 
3. As a player, I want to guess the letters in the word selected by my opponent so that the word will eventually be revealed to me.
4. As a player, I want to see the letter(s) that I guess correctly, so that I can see my progress and potentially guess the whole word. 
5. As a player I want the game to display a an image every time I guess a letter that does not belong to the hidden word, so that I the number of times I guess incorrectly is visually tracked.
6. As a player, I want to be notified if I have guessed all the letters correctly and won the round, or if I have run out of opportunities to make any more guesses and lost round. 
7. As a player, I want to be notified who the ultimate winner of the game is once either me or my opponent wins two rounds. 
8. As a player I want to see the score be updated every time a round is completed


Screenshots: 

<img src="first prompt answer.png">

<img src="hint prompt answer.png">

<img src="first alert.png">

<img src="guesses.png">

<img src="wrong guess alert.png">

<img src="hintDisplayed.png">

<img src="losingRound.png">


Stretch Goals: 

1. As a player guessing letters in the hidden word, I want the ability to guess the whole word. (Not implemented yet!)
2. As a player guessing letters in the hidden word, I want to receive a hint after a certain number of incorrect guesses. (Implemented)


Unsolved Problems: 

Currently the game does not properly reset by itself once a player wins 2 rounds. For this reason, the player is asked to select 'OK' in the following alert messages/ prompts they see and to then refresh the page.


Hurdle that was overcome: 

One issue that I faced early on was the way in which the Mystery Word was hidden on the page. I have created divs for each letter and then adjusted the display of the div to none. This caused issues because when a div's display is 'none', the page ignores the div as a whole and other elements on the page are rearranged. As a result, I matched the color of the Mystery Word to the color of the background, and changed the color of each letter to black when guessed correctly by the player. 

Wireframes: 

<img src="project1_wireframe2.png">
