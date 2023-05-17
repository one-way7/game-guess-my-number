'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const message = document.querySelector('.message'),
        checkBtn = document.querySelector('.check'),
        restartBtn = document.querySelector('.again'),
        guessInput = document.querySelector('.guess'),
        scoreDisplay = document.querySelector('.score'),
        highScoreDisplay = document.querySelector('.highscore'),
        resultScorePanel = document.querySelector('.number');

    let secretNumber = Math.trunc(Math.random() * 20) + 1;

    let score = 20,
        highScore = 0;

    const showResult = () => {
        const inputValue = +guessInput.value;

        if (!inputValue) {
            message.textContent = 'Enter a number';
            return;
        } else if (inputValue > 20) {
            message.textContent = 'Wrong number';
            return;
        }

        score--;
        scoreDisplay.textContent = `${score}`;

        if (!score) {
            checkBtn.disabled = true;
            message.textContent = 'You loose! :(';
            return;
        }

        if (inputValue === secretNumber) {
            message.textContent = 'YOU GUESSED IT!';

            if (score > highScore) {
                highScoreDisplay.textContent = score;
                highScore = score;
            }

            document.body.classList.add('victory');
            resultScorePanel.textContent = secretNumber;
            checkBtn.disabled = true;
            guessInput.disabled = true;
            return;
        } else if (inputValue > secretNumber) {
            message.textContent = 'Too high!';
        } else {
            message.textContent = 'Too low!';
        }
    };

    const restart = () => {
        score = 20;
        scoreDisplay.textContent = score;

        guessInput.value = '';
        message.textContent = 'Start guessing...';
        resultScorePanel.textContent = '?';

        guessInput.disabled = false;
        checkBtn.disabled = false;

        document.body.classList.remove('victory');

        secretNumber = Math.trunc(Math.random() * 20) + 1;
    };

    checkBtn.addEventListener('click', showResult);
    restartBtn.addEventListener('click', restart);
});