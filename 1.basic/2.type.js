let foo = "I am a string." //""를 쓰면 string type이다.
foo = 'So am I' //''도 string type이다.
foo = `back tick` //``도 string type이다.

//인용문으로 ""를 사용할 경우 ''로 감싸야 string type으로 해메지 않고 인식한다.
foo = 'He said, "javascript is awesome"'
//escape 문자로 인용문구를 쓸수도 있다.
foo = "He said, \"javascript is awesome\""
//number type이다.
foo = 1
//똑같이 number type이다.
foo = 1.0

//console.log() -> console에 출력.
//terminal node 2.type 실행하고 Infinity 출력을 확인하자.
console.log(1 / 0)
//terminal node 2.type 실행하고 NaN 출력을 확인하자. (NaN: Not a Number)
console.log('a' / 1)

console.log() //줄바꿈

//data type을 조사하는 function isFinite()
//variable type : dynamic type(동적 타입) = duck type
foo = 1 //1을 담았기에 number type
console.log(isFinite(foo))  //숫자인가? -> true.
console.log(isNaN(foo))     //숫자가 아닌가? -> false.
foo = 'a' //'a'를 담았기에 string type
console.log(isFinite(foo))  //숫자인가? -> false.
console.log(isNaN(foo))     //숫자가 아닌가? -> true.

console.log() //줄바꿈

foo = '1'
console.log(parseInt(foo))  //return값은 number type이다.
console.log(foo + 1) //string type +(붙이기 연산자) number type = string type.
console.log(parseInt(foo) + 1) //return값이 number type인지 확인하라의 답.

console.log() //줄바꿈

foo = 'a'       //number type으로 변환 불가일 경우, 값은 NaN.
foo = '100px'   //javascript의 태생은 browser이기 때문에 px(픽셀)을 숫자로 알아서 변환 가능.
foo = '+1'      //알아서 잘 type 변환한다.
foo = '-1'      
foo = '123456-7890123' //알아서 123456만 parseInt하고 끝.
console.log(parseInt(foo))

foo = '1.6'
console.log(parseInt(foo))     //.6은 내림처리하고 parseInt
console.log(parseFloat(foo))

let a = Infinity * 2    //Infinity
let b = NaN * 2         //NaN
let c = Infinity * NaN  //NaN
console.log(a, b, c)

//big int type: 2**53 - 1 bit를 초과하면 big int이다.
foo = 1n

//boolean type
const okay = true
const fail = false

//null: Intinity NaN null은 서로 다른 값이다.
let val = null
console.log(typeof val) //typeof 연산자가 console에 return한 값은 모두 string이다.

//값을 할당한 적이 없는경우. 기본값은 undefined 할당.
let val2
console.log(val2)
val2 = undefined // 기술할 수도 있다.
console.log(typeof val2)

//Symbol(), String(), Number()는 생성자이다.
//symbol type
let id = Symbol('id') // return 값이 Symbol type 이다.
console.log(typeof id)

//casting
val = 1
val = String(val) //String function을 이용해서 val을 String type으로 casting.
console.log(typeof val)

val = '6' / '2' //String type -> Number type casting
console.log(val)

val = false / true //boolean type -> Number type casting
console.log(val)

val = '1'
val = Number(val)
console.log(typeof val)

//boolean type true -> number type 1
console.log(Number('1'), Number(true))
//space 문자, empty String, null, false 모두 number type 0
console.log(Number(' '), Number(''), Number(null), Number(false))
//모두 NaN으로 출력.
console.log(Number('a'), Number(undefined), Number(NaN))

// Boolean function은 값이 있다없다로 판별.
//값이 있으므로 true
console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' '))
//값이 없으므로 false
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN))
/*
// a값이 undefined이면, false이므로, if문을 건너뛰고 else문 출력.
if(a) {

} else {
    errMsg~
}
*/