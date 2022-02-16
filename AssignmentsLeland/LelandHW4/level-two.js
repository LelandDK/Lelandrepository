/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

arenaEl.addEventListener('click', function(e) {
  if ( e.target.classList.contains('js-ball') ) {
    score += 10;
    if ( score < 100 ) {
      scoreEl.innerText = score;
    } else {
      declareWinner();
    }
  }
})

function declareWinner() {
  document.body.classList.add('game-over');
}

/* At start of the game, set scoreE1's inner text to 0. */ 

/* Have document listen for document to complete loading and then set scoreE1's inner text to 0.*/

/*Add DOMContentLoaded event to the document object */
document.addEventListener("DOMContentLoaded", setScoretoZero); 

/* declare and define setScoretoZero function used above, where scoreEl (declared and defined above) finds the class, "js-score", where the webpages score value resides. */

function setScoretoZero() {
  scoreEl.innerText = score;
}

/* Have each ball listen for click.  Then increase "score" by 10 each time ball is clicked and assign scoreE1's inner text to "score" each time ball is clicked */

/*All the balls have the same two classes, " ball" and "jsball," so they can all be targeted together. */

/* Declare and define variable for the method of targeting balls by class. */

let allBallsSecondLevel = document.querySelector(".js-ball");

/* Add event listener (to all balls using variable above) to listen for click.  Then increase "score" by 10 each time ball is clicked, assign scoreE1's inner text to "score" each time ball is clicked, and run a conditional statement where the user is notified they win If their score exceeds 100. */

/* Add one event listener (any ball clicked) to all balls and add three handlers to the event */

allBallsSecondLevel.addEventListener("click", upScore); /* Changes value of variable "score" */

allBallsSecondLevel.addEventListener("click", increaseElScore); /*assigns score El's innerText value to "score"*/

allBallsSecondLevel.addEventListener("click", compareToWin);


/* On level 1, this is where I declared and defined fucntions for the handlers (functions) included within the addEventListener statements.  But there's no need to do so here since all three handlers were previously declared and defined at level one. */


