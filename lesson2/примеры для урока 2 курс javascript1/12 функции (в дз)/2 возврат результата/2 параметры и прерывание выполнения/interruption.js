/**
 * Функция вычисляет сумму параметров.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
    return a + b;
    //этот alert никогда не выполнится.
    alert("Hello, world!");
}

alert(sum(4, 1));