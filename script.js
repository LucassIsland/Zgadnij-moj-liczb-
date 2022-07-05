'use strict';

// console.log(
//   (document.querySelector('.message').textContent = '❤ Correct Answer!')
// );

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 100) + 1;

let score = 20;

let highScore = 0;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent =
    'Jaką liczbę mam na myśli... Wpisz swoją propozycję w prostokąt po lewej';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      '📛 Nie wpisałaś żadnej liczny :)';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '❤ Poprawna odpowiedź!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Niestety... za wysoka, próbuje dalej ;)';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '🔥Oh... niestety, tym razem przegrałaś ;/';
      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = secretNumber;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Za niska, próbuj dalej ;)';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '🔥Oh... niestety, tym razem przegrałaś ;/';
      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = secretNumber;
    }
  }
});
