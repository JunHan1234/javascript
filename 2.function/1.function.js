function greet() {
    console.log('hello')
}

greet() //function은 call 하면 실행된다.

//function을 변수에 저장하여 사용.
let salute = function() {
    console.log('hi')
}
//salute라는 변수data를 read하고 function이므로 파라미터를 붙여서 call한다.
salute()
//salute라는 변수data를 read해보면 salute라는 이름의 function이다.
console.log(salute)

let sayHello = function(user, greeting) {
    return `${greeting}, ${user}`
}
console.log(sayHello('rebecca', 'hello'))

// 과제: HI 라고 인사하는 function 을 정의하고, 실행하라.
const sayHi = function() {
    console.log('HI')
}
const say = sayHi
say()

let shout = function() {
    return function() {
        console.log('yoo hoo')
    }
}
let speak = shout() //변수 speak에 function을 저장.
speak(); //저장된 function을 call

//1회용 function, 위 코드와 분별을 못하므로 ;으로 분별시켰다.
(function() {
    console.log('earth')
})()

let myFn = function(fn/*알아서 parameter로 function값이 들어오는구나 하고 취급. */) {
    const result = fn()
    console.log(result)
}
myFn(function() {
    return 'moon'
})

let argFn = function() {
    return 'star'
}
myFn(argFn)

//default parameter
let showMsg = function(from, msg='no message'/*할당 연산자를 쓰고 기본값 표기*/) {
    console.log(`${from}: ${msg}`)
}
showMsg('trinity', 'follow rabbit')
//본래 할당하지 않은 msg값은 default가 undefined로 처리됨.
//  -> 위에서 default를 no message로 설정했다.
showMsg('trinity')