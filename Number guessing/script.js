let round = document.getElementById('round');
let target = document.getElementById('target');
//let humanGuess = document.getElementById('humanGuess').value;
let winner = document.getElementById('winnerMessage');
let hScore = document.getElementById('hScore');
let cScore = document.getElementById('cScore');
//let targetNumber = randomNumber();
let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
//let computerGuess = randomNumber();

function randomNumber() { return Math.floor(Math.random() * 11) };



function nextRound() {
    currentRound++;
    document.getElementById('round').innerHTML = currentRound;
}


let playbtn = document.getElementById('play');


playbtn.addEventListener('click', () => {

    let humanGuess = document.getElementById('humanGuess').value;
    let targetNumber = randomNumber();
    let computerGuess = randomNumber();


    function compareGuess() {
        hguess = Math.abs(targetNumber - humanGuess)
        cguess = Math.abs(targetNumber - computerGuess)
        if (hguess < cguess) { return 'human' }
        else if
            (hguess > cguess) { return 'computer' }
        else if
            (hguess === cguess) { winner.innerHTML = 'It`s a TIE!!!' };
    }


    function updateScore(func) {
        if (func === 'human') {
            humanScore++;
            winner.innerHTML = 'You win';
            hScore.innerHTML = humanScore;
        } else if (func === 'computer') {
            computerScore++;
            winner.innerHTML = 'Computer wins';
            cScore.innerHTML = computerScore
        }
    }


    document.getElementById('computerGuess').innerHTML = computerGuess;
    document.getElementById('target').innerHTML = targetNumber;
    let who = compareGuess();
    updateScore(who);


    playbtn.setAttribute('disabled', true);
    nextbtn.removeAttribute('disabled');
})

nextbtn = document.getElementById('next');


nextbtn.addEventListener('click', () => {
    playbtn.removeAttribute('disabled');
    nextbtn.setAttribute('disabled', true)

    nextRound();

    document.getElementById('computerGuess').innerHTML = '';
    document.getElementById('target').innerHTML = '?';
    document.getElementById('humanGuess').value = 'N';
    winner.innerHTML = 'Chose your number!';

})


