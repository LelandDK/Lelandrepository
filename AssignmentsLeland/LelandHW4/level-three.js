/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

arenaEl.addEventListener('click', function(e) {
  if ( e.target.classList.contains('js-ball') ) {
    score += parseInt(e.target.dataset.increment);
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

/* For some reason, when I just tested my level 3 webpage--before I made any additions to the level 3 JS document--the program already works. The only thing that doesn't work is that the screen stays at "0000", and doesn't reset to "0" like it does in my level 2 and level 1 programs. */

/*My theory as to why this is so is that all my programming in levels 1 and 2 still apply to this level 3 document. */

/* To test this theory, I went back to my level 2 js document, commented out my setScoretoZero function, and then ran the program.  Level 2 worked fine except that the starting score remained at "0000" instead of changing to "0".  I like the score at "0", so uncommented the setScoretoZero function and added it to this level 3 js document (below). */

document.addEventListener("DOMContentLoaded", setScoretoZero); 

function setScoretoZero() {
  scoreEl.innerText = score;
}

/* To further test my theory, I went to my level 2 js document and commented out my event listener statements for the variable "allBallsSecondLevel".  Both the level 2 and the level 3 programs continued to work.  Not sure why?  Does this mean my level 1 programming is sufficient for the following two levels? */
