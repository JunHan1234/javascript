let promise = new Promise((resolve, reject) => setTimeout(() => resolve(10), 1000))

promise.then(console.log(1)) //then에서 promise를 return하므로 값들을 몇개든 이을 수 있다.
        .then(console.log(2)) //chaining.

promise.then(result => { //result는 한번 쓰면 뒤에서는 못쓴다.
    console.log(result)  //그러므로, 인위적으로 값이 이어지는 chaining을 만들어보자.
    return ++result
}).then(result => {
    console.log(result)
    return ++result
}).then(console.log)

//finally.
promise = new Promise((resolve, reject) => 
    setTimeout(() => resolve('complete'), 2000))

promise.then(console.log)
    .catch(e => console.log(e.message))
    .finally(() => console.log('finally')) //resolve가 실행되건 reject가 실행되건 상관없이 finally는 무조건 작동.