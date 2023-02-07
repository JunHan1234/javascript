//literal로써 객체 생성. {}
let user = {
    userName: 'frances',    //property name
    age: 70                 //property value
}

user = {
    userName: {
        first: 'bob',
        last: 'smith'
    },
    'nick name': 'tiger face', //property name에 띄어쓰기를 포함하고싶다면 ''로 감싸줘야 한다.
    age: 13,
    interests: ['music', 'movie'], //property value를 배열로 생성 가능하다.
    sing: () => console.log('lala')//property value를 function으로 생성 가능하다.
}

console.log(user.userName)
console.log(user.userName.first)
user.sing()

//user.'nick name'
//user.nick name
console.log(user['nick name']) //''로 표기한 property name은 []로 감싸준다.
console.log(user['userName']['first']) //[]를 이용해 출력하고 싶다면 property name, value들을 ''로 감싸준다.

//새로운 값을 할당.
user.userName.first = 'john'
user['age'] = 50
console.log(user.userName.first, user.age)

let key = 'nick name'
console.log(user[key]) //user의 nick name을 읽는다.
key = 'age'
console.log(user[key]) //user의 age를 읽는다.

let man = {
    manName: 'samuel',
    1: 'one',
    2: 'two',
}

//man.1 //숫자 모양일 경우 []를 이용해야 한다.
console.log(man['1'])