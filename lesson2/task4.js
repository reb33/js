"use strict";

// 4 Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
// и возвращать результат.
// Обязательно использовать оператор return.

/**
 * сложение
 */
function add (a, b){
    return a+b;
}

/**
 * вычитание
 */
function sub (a, b){
    return a-b;
}

/**
 * умножение
 */
function mul (a, b){
    return a*b;
}

/**
 * деление
 */
function div (a, b){
    return a/b;
}

console.log(add(2, 3));
console.log(sub(8,6));
console.log(mul(5,2));
console.log(div(18, 3));
