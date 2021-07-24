const riddle = parseInt(Math.random() * 100);

/**
 * Функция позволяет рекурсивно угадать переданное число. 
 * @param {number} num загаданное число
 * @returns {void}
 */
function guess(num) {
    let answer = parseInt(prompt("Угадайте число от 0 до 100"));
    if (answer > num) {
        alert("Ваше число слишком большое");
    } else if (answer < num) {
        alert("Ваше число слишком маленькое");
    } else if (answer == num) {
        alert("Вы угадали");
        return;
    } else {
        alert("Необходимо ввести число!");
    }
    guess(num);
}

guess(riddle);