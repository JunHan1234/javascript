/*
1.calculate.js callback 으로 refactoring 하라.
-, *, / 연산을 callback으로 처리한다.
*/

function minus(value1, value2) {
    return `${value1 - value2}`
}

function multiple(value1, value2) {
    return `${value1 * value2}`
}

function divide(value1, value2) {
    return `${value1 / value2}`
}

let calculator = function(value1, value2, op='*') {
    let result
    switch(op) {
        case '-': result = minus(value1, value2); break
        case '*': result = multiple(value1, value2); break
        case '/': result = divide(value1, value2)
    }
    return result
}

console.log(calculator('10', '5', '-'))
console.log(calculator('10', '5', '/'))
console.log(calculator('10', '5'))