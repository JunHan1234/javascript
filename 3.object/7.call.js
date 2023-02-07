let user1 = {
    userName: 'isabel',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}
//생성자를 쓰지않았으므로, object literal로는 code를 2번 적어야한다.
let user2 = {
    userName: 'jade',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

user1.greet()
user2.greet() //주어(접두사)가 user2이므로 greet()을 call했을 때 jade를 불러온다.

//global
let userName = 'morpheus'

function greet() {
    console.log(`I am ${this.userName}.`)
}

/*생략가능: global.*/greet()

//call function의 기능.
//앞의 function.call function(parameter로 집어넣을 변수객체를 this 객체로 사용.)
greet.call(user1)
greet.call(user2)

//
user2 = {
    userName: 'colin'
}

user1.greet()
//user2.greet() //greet이라는 function이 없으므로 error.

// 과제: user1.greet을 이용해서, I am colin. 을 출력하라.
user1.greet.call(user2)