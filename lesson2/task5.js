"use strict";

// 5 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических
// операций
// (использовать функции из задания 4) и вернуть полученное значение.

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

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "add":
            return add(arg1, arg2);
        case "sub":
            return sub(arg1, arg2);
        case "mul":
            return mul(arg1, arg2);
        case "div":
            return div(arg1, arg2);
    }
}

console.log(mathOperation(2, 3, "add" ));
console.log(mathOperation(8, 6, "sub" ));
console.log(mathOperation(5, 2, "mul" ));
console.log(mathOperation(18, 3, "div")) 