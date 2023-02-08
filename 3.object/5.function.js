//function의 정체는 객체이다.
function sayHi(myName, ...jobs) {
    console.log(`Hi, I am ${myName}.`)
}

sayHi('john')

console.log(typeof sayHi)
console.log(sayHi.name)//function type의 기본 API 'name'
console.log(sayHi.length)//function type의 기본 API 'length',
// 여기서 length는 function에 들어가는 parameter 개수를 의미한다. 쓰이지 않는 parameter는 무시됨을 확인.

//object literal
let user = {
    sayHi() {},
    sayBye() {}
}

console.log(user.sayHi.name) //function type의 기본 API name을 이용하여 function의 이름을 읽는다.
console.log(user.sayBye.name)

sayHi = function() {
    console.log('hi')
    sayHi.count++
}

sayHi.count = 0 //sayHi 객체에 property 'count'를 넣어준다.
console.log(sayHi)
sayHi() //sayHi function이 call 될때마다, count가 ++된다.
console.log(sayHi)
sayHi()
console.log(sayHi)

console.log(`call count: ${sayHi.count}.`)