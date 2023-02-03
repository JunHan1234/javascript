/*
1.calculate.js callback 으로 refactoring 하라.
-, *, / 연산을 callback으로 처리한다.
*/

let minus = function(value1, value2) {
    return `${value1}` - `${value2}`
}

let multiple = function(value1, value2) {
    return `${value1}` * `${value2}`
}

let divide = function(value1, value2) {
    return `${value1}` / `${value2}`
}

let calculate = function(value1, value2, fn) {
    let result
    switch(fn) {
        case '-': result = minus(value1, value2); break
        case '*': result = multiple(value1, value2); break
        case '/': result = divide(value1, value2); break
        default: result = multiple(value1, value2)
    }
    return result
}

console.calculate(10, 5, minus)