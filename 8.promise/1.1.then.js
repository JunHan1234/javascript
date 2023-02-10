let promise = new Promise((resolve, reject) =>
    setTimeout(() => resolve('hello'), 1000))
console.log(promise) //즉시실행이므로 resolve되기 전.

setTimeout(() => console.log(promise), 1100) //resolve된 후

promise.then(result => console.log(result))