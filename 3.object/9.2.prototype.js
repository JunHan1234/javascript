let obj = {} //{}는 new Object 생성자를 짧게 줄여 표현한 것.

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype) //Object 생성자로 만들었으므로 당연히 true.

obj = new Object()
console.log(obj.__proto__)
console.log(Object.prototype.__proto__) //Object type의 prototype의 prototype은 없다. Object.prototype은 최상위 class.

console.log(obj.toString())

let arr1 = [1, 2] //아래 코드를 줄여쓴 것.
let arr2 = new Array(1, 2)
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)

console.log(Array.prototype.__proto__) //Array는 object의 자식이다.
console.log(Object.prototype) //결과 동일.
console.log(Array.prototype.__proto__ == Object.prototype) //따라서 같다.
console.log(arr2.toString()) //Array의 toString method를 사용.

let one = new Number(1)
console.log(one.toString())

function User() {}
let user = new User()
console.log(user.toString()) //user객체에 toString()이 없으므로,User prototype으로 가서 찾고, 없으므로 Object prototype의 toString method를 사용.
console.log(obj.toString())