"use strict";

//function declaration
function addition(a, b) {
    return a + b;
}

//function expression
const show = function (a, b) {
    console.log(a, b);
};

//arrow functions

//без параметров и одна команда в функции
const sayHello = () => console.log("hello");
//тоже самое, но в формате function declaration
function sayHello2() {
    return console.log("hello");
}

//без параметов и несколько команд в функции
const func1 = () => {
    const a = 5;
    console.log(a);
};

//один параметр
const oneParam = num => console.log(num);
//тоже самое, но в формате function declaration
function oneParam2(num) {
    return console.log(num);
}

//несколько параметров + фигурные скобки
const someParams = (num1, num2) => {
    const a = num1 + num2;
    console.log(a);
};

//несколько параметров + одна команда
const paramsCommand = (num1, num2) => num1 + num2;

//если есть фигурные скобки и хотим получить результат
const result = (num1, num2) => {
    return num1 + num2;
};