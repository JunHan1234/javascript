let promise = new Promise((resolve, reject) =>
    setTimeout(() => reject('hello'), 1000))

console.log(promise)

setTimeout(() => console.log(promise), 1100)

promise.catch(result => console.log(result))

//
promise = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('world')), 2000))

promise.then(result => console.log('resolve', result),
            result => console.log('reject', result))

//자연스럽게 생긴 error상태를 강제로 연출해보았다.
promise = new Promise((resolve, reject) =>
    setTimeout(() => {throw new Error('king')}, 3000)) //arrow function안에 명령문(여기선 throw)이 있으면 {}를 적어준다.

promise.catch(console.log)