//global 객체가 생성되는 순간,
// userName 변수와 sayHi function의 property가 생성된다.
let userName = 'neo'
sayHi() //sayHi function을 call하면, nodejs는 이미 만들어진 property를 read한다.

function sayHi() { //function 선언은 property생성시 이미 값을 할당받고 시작된다.
    console.log('Hi', userName)
}

sayHi() //sayHi()가 call되면 local scope이 생성{}되고 실행.

//----------------------------------------------------------------------

//sayHello() // global LE에서 sayHello property의 첫 값이 uninitialized이므로,
//             function call이 불가능한 것이다.
const sayHello = function() {
    console.log('Hello,', userName)
}

sayHello()