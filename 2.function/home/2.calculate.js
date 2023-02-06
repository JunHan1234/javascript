/*
1.calculate.js callback 으로 refactoring 하라.
-, *, / 연산을 callback으로 처리한다.
*/

function minus(value1, value2) {
    return value1 - value2
}

function multiply(value1, value2) {
    return value1 * value2
}

function divide(value1, value2) {
    return value1 / value2
}
//callback을 이용하는것은 calculator parameter로 function이 들어가야한다.
function calculator(value1, value2, op = multiply) {
    return op(value1, value2)
}

console.log(calculator('10', '5', minus))
console.log(calculator('10', '5', divide))
console.log(calculator('10', '5'))