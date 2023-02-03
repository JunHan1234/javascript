let val = 1 + 2 * 3 / 2
console.log(val, 5 % 2, 4 ** 2, 4 ** (1/2)) // %나머지, 제곱, 루트

let i = 1
console.log(++i, i++)

//붙이기 연산자
let foo = 'hello'
let bar = 'world'
console.log(foo + ' ' + bar)
console.log(1 + '2', '1' + '2')

//String type 앞에 +연산자를 붙여쓰면 number type으로 casting된다.
console.log(1 + +'2')

//true or false(1 || 0),
console.log(1 || 0, 0 || 1) //1을 읽고 이미 true이므로 1을 return, 0을 읽고 false이므로 뒤를 마저읽어서 true값 찾고 return.
//true and false(1 && 0)
console.log(1 && 0, 0 && 1)

console.log(1 && 2, 2 && 1) //마지막으로 읽은 true값을 return. false가 있는경우 false를 return.

//중요!
//foo && A논리 // foo가 true이면 A논리까지 읽어서 false인지 알아내고 전개.
//bar = baz || createBar() // baz 값을 읽고 true이면 우변을 읽지 않고 bar에 baz값 대입.

console.log() //줄바꿈

let c = 3 - (a = 1 + 2)
console.log(c)

let d = 2
d *= 2
console.log(d)

console.log() //줄바꿈

//비교 연산자. return값이 boolean
//대부분 number가 아닌 값들이 number로 자동 변환처리를 거치고 비교연산을 수행해서 boolean값 return.
console.log('2' > 1, '01' == 1) //알아서 string type을 number type으로 변환처리함을 확인가능.
console.log(false == 0, '0' == 0, '' == false) //전부 number로 변환처리된 후 boolean type return한다.
console.log(true > 1) //boolean이 number로 변환처리됨을 확인가능.

console.log(1 == '1', 1 != '1')   //equivalent: data type이 number로 변환된 후 연산.
console.log(1 === '1', 1 !== '1') //identical:  data type까지 같은지 다른지 신경쓰는 연산.

//문자의 비교연산
//number type(unicode)로 변환 후 비교연산 수행함.
//'a' = 97, 'A' = 65, '0' = 48
console.log('z' > 'a', 'ac' > 'ab', 'bee' > 'be', 'a' > 'A')

console.log(null > 0, null >= 0/*예외: null이 숫자 0으로 변환된 후 비교연산 수행*/, null == 0)
console.log(undefined > 0, undefined >= 0, undefined == 0) //전부 false로 return되는 패턴.
console.log(NaN > 0, NaN >= 0, NaN == 0) //전부 false로 return되는 패턴.

console.log(undefined == undefined, null == null, NaN == NaN)