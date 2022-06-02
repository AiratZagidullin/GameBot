'use strict'

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const gameBot = function () {
    let randomNum = parseInt(Math.random() * 100);
    let userNum = prompt('Угадай число от 1 до 100');

    const guessNumber = function () {
        if (userNum === null) {
            alert('Игра окончена')
            return userNum
        } else if (isNumber(userNum)) {
            userNum = +userNum;

            if (userNum > randomNum) {
                userNum = prompt('Загаданное число меньше');
            } else if (userNum < randomNum) {
                userNum = prompt('Загаданное число больше');
            } else if (userNum === randomNum) {
                alert('Поздравляю, Вы угадали!!!');
                return userNum;
            }
        } else {
            userNum = prompt('Введи число!');
        }
        return guessNumber();
    }
    guessNumber();
}

gameBot();