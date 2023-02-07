/* symbol: unique identifier */
//symbol은 유일한 값이다.
let id = Symbol()
let id1 = Symbol('id')//parameter는 symbol에 대한 설명문(discription)
let id2 = Symbol('id')//생성에는 영향을 끼치지 않는다.

console.log(id, id1, id2)

//유일한 값인지를 확인해본다.
console.log(id1 == id2)

console.log(id.toString()) //String으로 변환 후 console 출력.
console.log(typeof id)

//symbol type의 기본 property인, description을 이용한 설명문 출력.
console.log(id.description, id1.description, id2.description)

let user = {
    userName: 'neo'
}

let userId = Symbol('userId')
user.userId = 1 //userId property를 생성하고 value 1을 할당.
user[userId] = 2//Symbol type userId를 user의 property로 삽입한다.

console.log(user)

//과제: user 를 iterating 해서, key 들을 출력하라.
for(let key in user) console.log(key) //symbol은 감춰지는것을 확인.

console.log(Object.keys(user)) //API를 이용해도 symbol은 감춰져서 안보이는것을 확인.

console.log() //줄바꿈

id1 = Symbol.for('regNo') //for function의 parameter는 key로 사용된다.
id2 = Symbol.for('regNo') //동일한 key 사용.
console.log(id1 == id2) //global하게 사용하고 싶으면 for function 사용!

let key = Symbol.keyFor(id1) //id1의 key값을 알아본다.
console.log(key, typeof key)

id1 = Symbol.for('regNo') //global symbol - parameter를 key라고 부른다.
id2 = Symbol('regNo')     //local symbol  - parameter를 discription이라 부른다.
console.log(id1 == id2)

console.log(Symbol.keyFor(id1), Symbol.keyFor(id2))