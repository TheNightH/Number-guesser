let btn = document.getElementById('btn');
let input = document.getElementById('input').value
let conclusion = document.getElementById('conclusion');
let humanscore = 0;
let computerscore = 0;
let random = Math.floor(Math.random());
let score = document.getElementById('human-score').innerHTML = `Human Score: ${humanscore}`;

function compare() {
    if (input === random) { conclusion.innerHTML = 'You guessed right' } else { conclusion.innerHTML = `wrong, number is ${random}` }
}

btn.addEventListener('click', compare());

console.log('meow')


