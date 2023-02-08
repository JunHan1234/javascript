//기본 type: primitive type.
//객체를 기본타입으로 바꾸는 작업: serializing

//object -> 기본타입
let date1 = new Date(2023, 2, 7)
let date2 = new Date(2023, 2, 6)

//자동으로 number type들로 변경됨.
console.log(date1 - date2) //결과값은 ms단위이다. (86400초 = 1440분 = 24시간 = 1일)

let user = {
    userName: 'amanda',
    age: 20,
    //symbol type의 key를 나타낼 때 []를 쓴다. toPrimitive는 method. hint를 parameter로 받아서 return.
    [Symbol.toPrimitive](hint) {
        return hint == 'string' ? this.userName : this.age
    }
}

let user2 = {
    age: 30,
    [Symbol.toPrimitive]() {
        return this.age
    }
}

console.log(`${user}`) //back tick을 넣으면 hint가 string이기때문에 userName을 return.
console.log(user > user2) //parameter로 default 값이 들어가기때문에 age를 return받아 값을 비교한다.
console.log(user + 50)    //parameter로 string 아닌 expression이 들어가기 때문에 user에서 age를 return받아 연산한다.
console.log(user2 + 50)

user = {
    userName: 'neo',
    age: 11,
    //과거에 했던 방법. 문자로 바꾸는 상황에 이용.
    toString() {
        return this.userName
    }
}
console.log(user + '') //user객체에서 먼저 toPrimitive를 찾아보고 없으면 toString을 찾아 실행시킨다.

//과거의 방법. 숫자로 바꾸는 상황에 이용.
user.valueOf = function() {
    return this.age
}
console.log(user + 100) //user객체에서 먼저 toPrimitive를 찾아보고 없으면 valueOf을 찾아 실행.

console.log() //\n

userStr = JSON.stringify(user) //user객체를 JSON형태의 문자로 바꿔준다.
console.log(userStr)
console.log(typeof userStr) //string으로 잘 변환됨을 확인.