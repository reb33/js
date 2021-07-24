"use strict";

function getDay() {
    let dayNum = new Date().getDay();
    switch (dayNum) {
        case 1:
            return "Понедельник";
        case 2:
            return "Вторник";
    }
}

let result = getDay();
alert(result);