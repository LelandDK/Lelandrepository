/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');


/* At start of the game, set scoreE1's inner text to 0. */ 
/* Have document listen for document to complete loading and then set scoreE1's inner text to 0.*/

/*Add DOMContentLoaded event to the document object */
document.addEventListener("DOMContentLoaded", setScoretoZero);

/* declare and define setScoretoZero function used above */

function setScoretoZero() {
  scoreEl.innerText = score;
}

/* Have js-ball listen for click.  Then increase "score" by 10 each time ball is clicked and assign scoreE1's inner text to "score" each time ball is clicked */

/*Add event listener to ballE1 with two handlers (functions) (https://www.w3schools.com/js/js_htmldom_eventlistener.asp) */

ballEl.addEventListener("click", upScore); /*changes value of variable "score" */

ballEl.addEventListener("click", increaseElScore);
/* Assigns scoreEl's innerText value to "score." */

/*Declare and define upScore and increaseElScore functions used above */ 

function upScore() {
  score = score + 10;
}

function increaseElScore () {
   scoreEl.innerText = score; 
 }

 
/*Whenever the ball is clicked, I also want it to run a conditional statement where the user is notified they win If their score exceeds 100. */

/*The addEventListener syntax does not permit me to add a handler that is a conditional.  I only can add a handler that's a function. */

/* Thus, I must put the condition (I want applied when the ball is clicked) into a function*/
ballEl.addEventListener("click", compareToWin);

/*Now, I must create the function I identified in the addEventListener statement (above). */

function compareToWin() {
  if (score < 100) {
    scoreEl.innerText = score;
  } else {
    declareWinner();
  }
}

function declareWinner() {
  document.body.classList.add('game-over');
}

 

