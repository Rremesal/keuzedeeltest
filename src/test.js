const f = require('./index');

function test() {
    if (f.calculate(10, '+', 15) === 25) {
        return true;
    }
    return false;
}

console.log(test())
