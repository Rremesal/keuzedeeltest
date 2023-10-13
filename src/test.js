const f = require('./index');

function test() {
    if (f.calculate(10, '+', 15) === 15) {
        return true;
    }
    return false;
}

console.log(test())
