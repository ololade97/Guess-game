'use strict';
/*
console.log((document.querySelector('.number').textContent = 13));
console.log(document.querySelector('.answer').textContent);
*/

const guessNumber = 14;

const guessAnswer = function (write) {
  document.querySelector('.answer').textContent = write;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessing = Number(document.querySelector('.guess').value);
  if (guessing < guessNumber) {
    guessAnswer('Your guess is low😒');
  } else if (guessing > guessNumber) {
    guessAnswer('Oh no! That is too high');
  } else if (guessing === guessNumber) {
    guessAnswer('You win! You guessed right ✔');
    document.querySelector('.number').textContent = guessNumber;
    document.querySelector('body').style.backgroundColor = 'grey';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  guessAnswer('Answer: 0');
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'black';
});
