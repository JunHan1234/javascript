//function의 정체는 객체이다.
function sayHi(myName, ...jobs) {
    console.log(`Hi, I am ${myName}.`)
}

sayHi('john')

console.log(typeof sayHi)
console.log(sayHi.name)//function type의 기본 key 'name'
console.log(sayHi.length)//여기서 length는 parameter 개수를 의미한다.

//object literal
let user = {
    sayHi() {},
    sayBye() {}
}

console.log(user.sayHi.name) //function의 name을 읽는다.
console.log(user.sayBye.name)

sayHi = function() {
    console.log('hi')
    sayHi.count++
}

sayHi.count = 0 //sayHi 객체에 property 'count'를 넣어준다.
sayHi() //sayHi function이 call 될때마다, count가 ++된다.
sayHi()

console.log(`call count: ${sayHi.count}.`)