//현재의 promise 문법. asynchronous(비동기)
//async function
async function fn() {
    return 1 //async function의 return은 promise의 result다.
}

//resolve
let f = fn()
console.log(f) //async function의 내용물은 promise 객체이다.
//promise객체.then(handler)
f.then(console.log) //resolve hanlder

fn = async function() {
    return Promise.resolve(2) //직접 result값을 기술할 수도 있다.
}
fn().then(console.log)

//reject
fn = async function() {
    return Promise.reject(new Error(3))
}
fn().catch(e => console.log(e.message))

//async function body에서만 쓸 수 있는 await.
fn = async function() { //return값도 안쓰고, await을 사용하기 위해서만 만든 코드.
    let promise = new Promise((resolve, reject) =>
        setTimeout(() => resolve(4), 1000)) //promise가 오래 걸리는 작업이라면,
    let result = await promise //기다렸다가(await) 실행 후의 promise의 result값을 result에 담는다.(잠시 synchronous하게 만드는 효과.)
    console.log(result)
}
fn()

//
class Waiter {
    async order() {
        return await Promise.resolve('짜장면') //return써도 Promise.resolve의 result값을 return한다.
    }
}
//promise 객체.then(resolve handler)
new Waiter().order().then(console.log)