'use strict';

const again_btn = document.querySelector('.btn.again'),
  number = document.querySelector('.number'),
  guess = document.querySelector('.guess'),
  check_btn = document.querySelector('.btn.check'),
  message = document.querySelector('.message'),
  score = document.querySelector('.score'),
  highScore = document.querySelector('.highScore');

highScore.textContent = localStorage.getItem('max') | 0;

let randomNumber = Math.round(Math.random() * 20 + 1);
check_btn.addEventListener('click', () => {
  if (Number(score.textContent) <= 0) {
    message.textContent = 'Game Over😴 Try again !';
  }
  document.body.style.backgroundColor = '#222';
  number.textContent = '?';
  console.log('random Number :', randomNumber);
  if (Number(!guess.value)) {
    message.textContent = '⛔️ No number!';
  } else if (Number(guess.value) > 20 || Number(guess.value) < 0) {
    message.textContent = '❌ Number is not between 1 and 20';
  } else if (Number(guess.value) === randomNumber) {
    document.body.style.backgroundColor = '#60b347';
    number.textContent = randomNumber;
    message.textContent = '🎉 Correct Number!';
    randomNumber = Math.round(Math.random() * 20 + 1);

    highScore.textContent =
      highScore.textContent > score.textContent || !highScore
        ? highScore.textContent
        : score.textContent;
    localStorage.setItem('max', highScore.textContent);
  } else if (Number(guess.value) > randomNumber) {
    message.textContent = '📈 too high';
    score.textContent = Number(score.textContent) - 1;
  } else if (Number(guess.value) < randomNumber) {
    message.textContent = '📉 too low';
    score.textContent = Number(score.textContent) - 1;
  }
});
again_btn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#222';
  number.textContent = '?';
  score.textContent = 20;
  message.textContent = 'Start guessing...';
  guess.value = '';
});
//TODO :

// COMPLETE :create a random number between1 and 2

////COMPLETE if number is same as random we change body background-color;

////COMPLETE if number is great than number we change thr textContent
