let user = {
    userName: 'kelly',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css'],
    wife: null
}

let json = JSON.stringify(user) //user객체를 json 문법으로 변환.
console.log(json)

//
user = {
    userName: 'jessie',
    room: {
        roomNumber: 23,
        participants: ['john', 'ann']
    },
    greet() {
        return 'hello'
    },
    [Symbol('id')]: 123,
    color: undefined
}
//json 변환시, method, symbol, undefined 가 버려짐을 볼 수 있다.
console.log(JSON.stringify(user))

//
let room = {
    roomNumber: 23
}
//property key가 객체인 경우.
let meetup = {
    title: 'conference',
    room
}

console.log(JSON.stringify(meetup)) //잘 변환됨을 확인.

//JSON으로 변활될 형태를 바꾸고 싶을때, toJSON method를 이용한다.
room.toJSON = function() { return this.roomNumber }
let s = JSON.stringify(meetup)
console.log(s)

//json을 다시 user객체로 변환하기. parsing.
user = JSON.parse(json)
console.log(user)
console.log(typeof user)