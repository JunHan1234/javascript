function add(a, b) {
    return a + b
}
//parameter가 rest(남는)하는경우.
//default는 rest parameter를 버린다.
console.log(add(1, 2, 3))

//...args 의 정체는 배열이다. (... -> rest parameter)
add = function(...args) {
    let tot = 0
    for(let arg of args/*iterating*/) tot += arg
    return tot
}

console.log(add(1), add(1, 2, 3))

function printName(firstName, lastName, ...titles) {
    console.log(firstName, lastName)
    //각 배열 객체의 값에 접근
    console.log(titles[0], titles[1], titles[2])
    console.log(titles.length)
}

printName('adam', 'smith', 'operator', 'consul') //빈 titles[2] 부분은 undefined로 출력된다.

//parameter가 없는 경우 arguments 객체가 기본 준비된다.
// 유지보수 곤란하므로 사용하진 말자.
function showName() {
    console.log(arguments.length)
    console.log(arguments[0], arguments[1])
}

showName()
showName('erica', 'terry')

//spread 예제, 가장 큰 수를 나타내는 method.
console.log(Math.max(1, 2, 3))

//배열 객체 생성.
let arr = [1, 2, 3]
console.log(Math.max(arr)) //배열을 못읽어 NaN이 출력됨을 확인.
//배열 arr의 값들을 spread하여 그 중 가장 큰 수를 console에 출력.
console.log(Math.max(...arr))

let arr2 = [4, 5, 6]
console.log(...arr2) //spread.
/* 과제: 위 코드를 ... 를 안 쓰는걸로 refactoring 하라. */
console.log(arr2[0], arr2[1], arr2[2])
//spread.
console.log(...arr, ...arr2)
console.log(Math.max(...arr, ...arr2))
console.log(Math.max(0, ...arr, 7, ...arr2, 8))

/*  react에서의 spread 사용
    x = {a, b}
    y = {...x, c} */

//기존에 있던 배열 복제.
arr = [0, ...arr2, 9]
console.log(arr)