"use strict";

/**
 * Функция возвращает случайное 4-х значное число в виде массива,
 * например: [2, 8, 6, 3];
 * @returns {Array}
 */
function getRandomNumberAsArray() {
    let generated = String(Math.random() * 100000000000000000);
    let result = [];
    for (let value of generated) {
        if (!result.includes(value)) {
            result.push(value);
        }
        if (result.length == 4) {
            return result;
        }
    }
}

function startGame() {
    let riddle = getRandomNumberAsArray();
    while (true) {
        let answer = prompt("Угадайте 4-х значное число").split("");
        let result = getBullsAndCowsCount(riddle, answer);
        console.log(
            `Ваш ответ: ${answer},     быков: ${result.bullsCount}, коров: ${result.cowsCount}\n`
        );    
        if (riddle.toString() === answer.toString()) {
            console.log("Вы победили");
            break;
        }
    }
    console.log("Загадка: " + riddle);
}

/**
 * Функция возвращает количество быков и коров.
 * @param {Array} riddle 
 * @param {Array} answer 
 * 
 * @returns {Object} obj - количество быков и коров
 * @returns {number} obj.bullsCount - количество быков
 * @returns {number} obj.cowsCount - количество коров
 */
function getBullsAndCowsCount(riddle, answer) {
    let bullsCount = getBullsCount(riddle, answer);
    let cowsCount = getCowsCount(riddle, answer);
    return {
        "bullsCount": bullsCount,
        "cowsCount": cowsCount - bullsCount, //из коров вычитаем тех, что оказались быками
    };
}

 /**
  * Функция возвращает количество быков.
  * @param {Array} riddle
  * @param {Array} answer
  * @returns {number}
  */
function getBullsCount(riddle, answer) {
    let count = 0;
    for (let i = 0; i < riddle.length; i++) {
        if (riddle[i] == answer[i]) {
            count++;
        }
    }
    return count;
}

/**
 * Функция возвращает количество коров, при этом коровы могут оказаться быками.
 * @param {Array} riddle 
 * @param {Array} answer 
 * @returns {number}
 */
function getCowsCount(riddle, answer) {
    let count = 0;
    for (let value of riddle) {
        if (answer.includes(value)) {
            count++;
        }
    }
    return count;
}

startGame();