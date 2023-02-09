//map collection. array는 key가 자동부여되는 반면, map은 key를 일일히 지정해줘야한다.
let map = new Map()

//map.set(key, value)
map.set('1', 'hello')
map.set(1, {userName: 'david'})
map.set(true, function fn() {})

//map.get(key) 하면, value return.
console.log(map.get('1'), map.get(1), map.get(true))
//map.has(key) 하면, boolean return.
console.log(map.has('1'), map.has(1), map.has(true), map.has(false))
//array의 length와 유사한 property.
console.log(map.size)

//delete가 성공하면 true, 실패하면 false.
console.log(map.delete(1), map.delete(2))
console.log(map)

//map을 깨끗이 청소.
map.clear()
console.log(map)

//
map = new Map()
map.set(1, 'amella').set(2, 'arery').set(3, 'adela') //chaining기법. map객체.set(값들.)
console.log(map)

// map을 iterating. //Map 생성자 안에 배열(matrix. [key, value])들을 넣을 수 있다.
let greens = new Map([
    ['cucumber', 500],
    ['tomato', 350],
    ['onion', 50]
])

for(let entry of greens)
    console.log(entry)


let keys = greens.keys() //key들만 뽑고싶은 경우.
console.log(keys)
for(let key of keys)
    console.log(key) //key들만 iterating.

let values = greens.values()
console.log(values)
for(let value of values)
    console.log(value) //value들만 iterating.

//forEach로 iterating.
greens.forEach((val, key) => console.log(key, val))

//map과 object사이에 공통점이 있으므로 object을 map으로 변환해보자.
let user = {
    userName: 'aiden',
    age: 50
}
//entry = property
let entries = Object.entries(user)
console.log(entries) //형태가 matrix.
console.log(new Map(entries)) //matrix를 Map 생성자 parameter에 넣어 Map으로 변환.

//반대로 map을 object으로 변환.
map = new Map()
map.set('apple', 1)
map.set('orange', 2)
map.set('pear', 3)
//entries 생성하여 return한 object를 fruits에 저장.
let fruits = Object.fromEntries(map)
console.log(fruits)