function sayOdd(num) {
    console.log(`${num} is an odd number.`)
}

function sayEven(num) {
    console.log(`${num} is an even number.`)
}

function lookNum(fn1, fn2) {
    const num = parseInt(Math.random() * 10) + 1
    if(num % 2 != 0) fn1(num) //fn1, fn2를 callback이라 한다.
    else fn2(num)
}

lookNum(sayOdd, sayEven) //call back으로 parameter를 불러온다.
//call back으로 분리시켜 놓아야 수정에 시간이 적게 들어, 유지보수가 좋다.

//다음과 같이 callback function만 수정 or 추가하여,
// lookNum function은 건드리지 않고, 재사용이 가능하다. (확장성이 좋아진다.)
function sayOdd2(num) {
    console.log(`${num} 은 홀수입니다.`)
}

function sayEven2(num) {
    console.log(`${num} 은 짝수입니다.`)
}

lookNum(sayOdd2, sayEven2)

//-----
let chef1 = function(food) {
    return `달콤한 ${food}.\n`
}

let chef2 = function(food) {
    return `매운 ${food}.\n`
}

let waiter = function(food, chef) {
    return chef(food)
}
//waiter를 부른다.
console.log(waiter('짜장면', chef1),
            waiter('짜장면', chef2),
            waiter('짬뽕', chef2))