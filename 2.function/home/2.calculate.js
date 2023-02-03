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

let calculate = function(value1, value2, Fn) {
    let result
    switch(Fn) {
        case minus: result = minus(value1, value2); break
        case multiple: result = multiple(value1, value2); break
        case divide: result = divide(value1, value2); break
        default: result = multiple(value1, value2)
    }
    return result
}

console.log(calculate(10, 5))