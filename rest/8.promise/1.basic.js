//Promise(executor) // executor는 callback이다.
//node가 넣어줄 callback parameter 2개를 기술한다.
 //실행되면, promise객체의 property인 state의 value가 resolved로 바뀌고, 
 //'done'은 promise객체의 result의 value가 된다.
let promise = new Promise((resolve, reject) => resolve('done'))

//resolve에 들어갈 method, reject에 들어갈 method 준비.
//resolve handler(consumer), reject handler(error handler)를 then의 parameter로 준비.
//promise.then(console.log, console.log)
//promise.then(console.log, null)
promise.then(console.log)//resolve handler만 등록하고 끝내도 된다.
promise.catch(console.log)//reject handler만 등록하고 싶을땐 catch를 쓴다.
//실행된 후, promise 객체의 property인 result의 value가 return된다.

// 과제: 1초 뒤에, resolve 하라
promise = new Promise((resolve, reject) => 
    setTimeout(() => resolve('done'), 1000))
promise.then(console.log, console.log)

//
promise = new Promise((resolve, reject) => 
    setTimeout(() => reject(new Error('error')), 2000)) //'error'가 result의 value가 된다.
promise.then(result => console.log(1, result),/*resolve handler가 실행될 경우 실행할 method.*/
            result => console.log(2, result))/*error handler가 실행될 경우 실행할 method.*/