/* symbol: unique identifier */
//symbol은 유일한 값이다.
let id = Symbol()
let id1 = Symbol('id')//parameter는 symbol에 대한 설명문.
let id2 = Symbol('id')//생성에는 영향을 끼치지 않는다.

console.log(id, id1, id2)

//유일한 값인지를 확인해본다.
console.log(id1 == id2)

console.log(id.toString()) //String으로 변환 후 console 출력.
console.log(typeof id)

//symbol type의 기본 property인, description을 이용한 설명문 출력.
console.log(id1.description, id2.description, id.description)