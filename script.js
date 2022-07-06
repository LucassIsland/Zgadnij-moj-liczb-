'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage(
    'Jaką liczbę mam na myśli... Zgadnij i wpisz w prostokąt po lewej stronie😉'
  );
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  displayNumber('?');
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('📛 Nie wpisałaś żadnej liczny :)');
  } else if (guess === secretNumber) {
    displayMessage('❤ Poprawna odpowiedź!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Nie, za wysoka ;)' : 'Nie, za niska ;)'
      );
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    } else {
      displayMessage('🔥Oh... niestety, tym razem przegrałaś ;/');
      score = 0;
      document.querySelector('.score').textContent = score;
      displayNumber(secretNumber);
    }
  }
});
