"use strict";

/**
 * Функция округляет число до сотых.
 * @param {number} number число для округления.
 * @returns {number}
 */
function roundToHundredths(number) {
    return parseInt(number * 100) / 100;
}

/**
 * Функция конвертирует рубли в другую валюту.
 * @param {number} roubles величина в рублях.
 * @param {string} currency поддерживаются значения "dollar" и "euro".
 * @throws {Error} если передана не поддерживаемая валюта, то будет
 * выброшена ошибка.
 * @returns {number}
 */
function convertCurrency(roubles, currency) {
    let currencyCost = 0;
    switch(currency) {
        case "dollar":
            currencyCost = 66;
            break;
        case "euro":
            currencyCost = 75;
            break;
        default:
            throw new Error("Не верная валюта: " + currency);
    }
    return roundToHundredths(roubles / currencyCost);
}

let inDollars = convertCurrency(100, "dollar");
console.log("Ваша сумма в долларах: " + inDollars);
let inEuros = convertCurrency(100, "euro");
console.log("Ваша сумма в евро: " + inEuros);
let inYens = convertCurrency(100, "yena");
console.log("Ваша сумма в йенах: " + inYens);