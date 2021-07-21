"use strict";

//Рассчитаем доход за месяц в интернет магазине

let phonePrice = 899;
let phonesSold = 410;

let tvPrice = 1028;
let tvSold = 100;

let tabletPrice = 450;
let tabletsSold = 900;

let income = (phonePrice * phonesSold) + (tvPrice * tvSold) + (tabletPrice * tabletsSold);
alert("Магазин заработал: " + income);