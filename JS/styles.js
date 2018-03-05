// DEFAULT BUTTON VISIBILITY SEETINGS
document.getElementById('dice-roll1').style.visibility = 'visible';
document.getElementById('hold1').style.visibility = 'visible';
document.getElementById('dice-roll2').style.visibility = 'hidden';
document.getElementById('hold2').style.visibility = 'hidden';

// PLAYER 1

// ESTABLISHING GLOBAL CONSTANTS FOR PLAYER 1
const runningTotal1 = document.getElementById( 'runningTotal1' );
const parsedTotal1 = parseInt(runningTotal1.innerText);
const turnTotal1 = document.getElementById( 'turnTotal1' );
const parsedturnTotal1 = parseInt(turnTotal1.innerText);

// BUTTON ONCLICK EVENT FOR "ROLL DICE" BUTTON
window.addEventListener( 'DOMContentLoaded', function () {
	
    const buttonrollDice = document.querySelector( '#dice-roll1' );

function rollDice () {

    // ESTABLISHING LOCAL CONSTANTS FOR PLAYER 1
    const die1 = document.getElementById( 'die1' );
    const die2 = document.getElementById( 'die2' );
    const status1 = document.getElementById( 'status1' );

    const side1 = Math.floor( Math.random() * 6 ) + 1;
    const side2 = Math.floor( Math.random() * 6 ) + 1;
    const diceTotal1 = side1 + side2;
    die1.innerHTML = side1;
    die2.innerHTML = side2;
    status1.innerHTML = 'You rolled ' + diceTotal1 + '.';
    turnTotal1.innerHTML = parseInt(turnTotal1.innerText) + diceTotal1;
    // runningTotal1.innerHTML = parsedTotal1 + diceTotal1;

    // HIDE BUTTONS AND SET TURN TOTAL TO ONE IF A 0 IS ROLLED
    if (side1 === 1 || side2 === 1) {
        document.getElementById('dice-roll1').style.visibility = 'hidden';
        document.getElementById('dice-roll1').style.visibility = 'hidden';
        document.getElementById('hold1').style.visibility = 'hidden';
        document.getElementById('dice-roll2').style.visibility = 'visible';
        document.getElementById('hold2').style.visibility = 'visible';
        turnTotal1.innerHTML = 0;
    }

}

buttonrollDice.addEventListener( 'click', rollDice, false );

}, false);

// ONLICK EVENT FOR "HOLD" BUTTON
window.addEventListener( 'DOMContentLoaded', function () {
	
    const buttonHold1 = document.querySelector( '#hold1' );
// CHANGE BUTTON VISIBILITY, ADD TURN TOTAL TO RUNNING TOTAL AND SET TURN TOTAL TO 0
function Hold1() {
    document.getElementById('dice-roll1').style.visibility = 'hidden';
    document.getElementById('hold1').style.visibility = 'hidden';
    document.getElementById('dice-roll2').style.visibility = 'visible';
    document.getElementById('hold2').style.visibility = 'visible';
    runningTotal1.innerHTML = parseInt(turnTotal1.innerHTML) + parseInt(runningTotal1.innerHTML);
    turnTotal1.innerHTML = 0;

        // END GAME IF 100 IS REACHED
        if (parsedTotal1.innerHTML >= 100) {
            status1.innerHTML = 'You Win!';
            status2.innerHTML = 'You Lose!';
            document.getElementById('dice-roll1').style.visibility = 'hidden';
            document.getElementById('hold1').style.visibility = 'hidden';
            document.getElementById('dice-roll2').style.visibility = 'hidden';
            document.getElementById('hold2').style.visibility = 'hidden';
    }
}

buttonHold1.addEventListener( 'click', Hold1, false );

}, false);
// PLAYER 1 ENDS
