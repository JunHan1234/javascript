let user = {
    userName: 'leo'
}

function greet() {
    console.log(`I am ${this.userName}.`)
}

greet()

//this객체안에 user객체를 집어넣은 greet function을 return.
//function.bind(this객체로 사용할 객체)
//call과의 차이: bind는 앞의 주어 function을 return. call은 앞의 주어 function을 call.
let fn = greet.bind(user)
fn() //greet.bind(user)()

//setTimeout(fn, 100)

user = {
    userName: 'john',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

// 과제: fn 에 user.greet을 할당하라.
//             greet의 this 엔 user가 담겨있다.
fn = user.greet.bind(user)
fn() //user.greet.bind(user)()
//setTimeout(fn, 200) //setTimeout에는 function이 들어간다.
console.log(fn == user.greet)