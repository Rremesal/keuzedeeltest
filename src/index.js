export function calculate(x, operator ,y) {

    let result = 0;

    switch(operator) {
        case '+':
            result = x + y;
        break;
        case '-':
            result = x - y;
        break;
        case '/':
            result = x / y;
            break;
        case '*':
            result = x * y;
    }
    
    return result
}