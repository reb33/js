"use strict";
/**
 * Функция возвращает день недели на русском языке.
 * Первая буква заглавная.
 * @returns {string}
 */
function getDay() {
    let dayNum = new Date().getDay();
    let day = "";
    switch (dayNum) {
        case 1:
            day = "Понедельник";
            break;
        case 2:
            day = "Вторник";
            break;
        case 3:
            day = "Среда";
            break;
        case 4:
            day = "Четверг";
            break;
        case 5:
            day = "Пятница";
            break;
        case 6:
            day = "Суббота";
            break;
        case 0:
            day = "Воскресенье";
            break;
        default:
            day = false;
    }
    return day;
}

alert(`Сегодня ${getDay()}`);