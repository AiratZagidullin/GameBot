'use strict'

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const gameBot = function () {
    let randomNum = parseInt(Math.random() * 100);
    let userNum = prompt('Угадай число от 1 до 100');
    let attempt = 10;

    const guessNumber = function () {
        if (userNum === null || userNum === false) {
            alert('Игра окончена')
            return userNum()
        } else if (isNumber(userNum)) {
            userNum = +userNum;
            attempt--;

            if (attempt > 0) {
                if (userNum > randomNum) {
                    userNum = prompt('Загаданное число меньше, осталось попыток ' + attempt);
                } else if (userNum < randomNum) {
                    userNum = prompt('Загаданное число больше, осталось попыток ' + attempt);
                } else if (userNum === randomNum) {
                    userNum = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
                    if (userNum === true) {
                        return gameBot();
                    } else {
                        return guessNumber();
                    }
                }
            } else {
                userNum = confirm('Попытки закончились, хотите сыграть еще?')
                if (userNum === true) {
                    return gameBot();
                } else {
                    return guessNumber();
                }
            }

        } else {
            userNum = prompt('Введи число!');
        }
        return guessNumber();
    }
    guessNumber();
}

gameBot();