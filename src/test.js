import { calculate } from ".";

function test() {
    if (calculate(10, '+', 15) === 15) {
        return true;
    }
    return false;
}

console.log(test())
