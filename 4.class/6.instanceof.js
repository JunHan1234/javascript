class A {}

class B extends A {}

let a = new A()
let b = new B()

console.log(a instanceof A, a instanceof B, a instanceof Object)
console.log(b instanceof A, b instanceof B, b instanceof Object)

console.log(typeof a, typeof b)
console.log(typeof A, typeof B) // class의 type은 function이다.