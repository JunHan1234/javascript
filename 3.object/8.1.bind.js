let user = {
    userName: 'madona',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

user.greet()

setTimeout(user.greet, 100) //setTimeout의 parameter로 user라는 주어는 필요치 않다.

let fn = user.greet
setTimeout(fn, 200)

//call back. (function의 parameter로 function을 넣은 경우이다.) 앞의 주어 function을 call.
//queue에는 function이 들어와야하므로, function과 return값을 적어준다.
setTimeout(() => user.greet(), 300)