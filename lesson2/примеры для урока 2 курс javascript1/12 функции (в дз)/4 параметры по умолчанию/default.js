"use strict";

/**
 * Функция возвращает скидку.
 * @param {number} величина скидки, максимум 30%. По умолчанию 10%.
 * @returns {number}
 */
function setDiscount(discount = 10) {
    if (discount > 30) {
        return 30;
    }
    return discount;
}

let order1Discount = setDiscount(15);
alert(order1Discount); 

let order2Discount = setDiscount();
alert(order2Discount); 