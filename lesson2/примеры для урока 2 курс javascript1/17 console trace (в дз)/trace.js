function hello() {
    alert('работает функция hello');
}

function world() {
    alert('работает функция world');
    console.trace();
}

function one() {
    hello();
    world();
}

one();
