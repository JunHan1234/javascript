let add = function(a, b) {
    return a + b
}

//arrow function
//위 코드와 의미가 같다.
add = (a, b) => a + b
console.log(add(1, 2))

const double = n => 2 * n //arrow function은 return이라는 코드를 생략한 것이다.
console.log(double(2))
//parameter가 없어도 ()는 써야한다.
const greet = () => console.log('hello') //return을 아예 안한다.
greet()

add = (a, b) => {
    const result = a + b
    return result
}

console.log(add(1, 2))