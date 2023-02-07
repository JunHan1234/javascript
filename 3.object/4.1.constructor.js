let makeUser = function(userName, age) {
    return {
        userName: userName, //property name, property value 모양이 중복되는경우,
        age: age            //이 코드를 10번째 줄 코드와 같이 쓴다.
    }
}

makeUser = function(userName, age) {
    return {
        userName,
        age
    }
}

console.log(makeUser('doris', 57))

//생성자는 변수 첫 시작이름을 대문자로 쓴다.
function User(userName) {
    //this = {} //new를 사용하는 경우 첫부분에 이게 추가되는 효과
    this.userName = userName
    this.greet = () => console.log(`I am ${this.userName}.`)
    //return this //new를 사용하는 경우 마지막부분에 이게 추가되는 효과
}
/*
let user1 = User('bob')
console.log(user1) //객체 생성을 안하고 있음을 확인.
*/
let user1 = new User('bob') //new라는 연산자를 이용해 객체 생성.
console.log(user1)
user1.greet()
console.log(Object.keys(user1))

const user2 = new User('sarah')
user2.greet()

console.log() //줄바꿈

let str = String(1) //1을 string type으로 변환.
console.log(typeof str)

str = new String(1) //생성자를 이용하여 "객체 생성".
console.log(typeof str)

console.log() //줄바꿈

//지금까지 배운 객체 생성 방법 2가지: object literal, 생성자.

let human = new function() { //새로운 function객체 생성.
    this.humanName = 'meg'
    this.age = 27
}
console.log(typeof human, human.humanName, human.age)

function BigUser() {
    this.userName = 'amy'
    return {userName: 'beth'}
}

function SmallUser() {
    this.userName = 'lorie'
}

// 과제: new를 쓰지 않고, SmallUser().userName 을 고쳐서, error가 발생하지 않도록 하라.
console.log(BigUser().userName, SmallUser()?.userName)

console.log() //\n

const user = new Object()
console.log(user) //Object()을 이용한 빈 {} 생성.
user.age = 12

//view object
const person = Object.create(user)
console.log(person) //person객체에는 property가 없음을 확인. 그저, user를 바라보는(view) 역할.
console.log(person.age) //person객체를 통해 user의 property를 바라볼 수 있다.
console.log(person == user)

person.personName = 'mandarin' //person에 자신의 property를 얼마든지 추가 가능.
console.log(user) //person에 넣은 property가 user 객체에서 보일 리가 없다.