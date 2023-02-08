//object literal
let user1 = {
    userName: 'isabel',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}
//생성자를 쓰지않았으므로, object literal로 객체 생성하려면 code를 2번 적어야한다.
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

/*생략가능: global.*/greet() //최상위인 global이므로, greet function의 this객체가 가리키는 instance가 존재하지 않는다.

//call function의 기능. function을 call하는 기능.
//앞의 function.call -> call하는 function은 global에서 생성했던 greet()이다.
//function.call(parameter로 집어넣을 변수객체를 this 객체로 사용.)
greet.call(user1) // this.userName => user1.userName
greet.call(user2) // this.userName => user2.userName

//
user2 = {
    userName: 'colin'
}

user1.greet()
//user2.greet() //greet이라는 function이 없으므로 error.

// 과제: user1.greet을 이용해서, I am colin. 을 출력하라.
user1.greet.call(user2) //function.call(this로 사용할 객체)