let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr)

arr = [null, undefined, NaN]
console.log(arr)

arr = []
arr[0] = 'a'
arr[2] = 'c'

console.log(arr) //1번 index는 empty상태임을 확인.
console.log(arr[0])
console.log(arr[1]) //undefined //push로 값을 채울수 있을까?

console.log(arr.length)//undefined도 값으로써 취급한다.

//matrix
let matrix = [
    [1, 2],
    [3, 4]
]

let a = [1, 2]
let b = [2, 3]
let c = a.concat(b) //붙이기 API
console.log(c)

arr = []
arr.push(1) //밑바닥부터 집어넣는 method.
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.pop()) //가장 마지막에 넣은 data를 pop method로 꺼낸다.
console.log(arr)


arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift()) //가장 처음에 넣은 data를 shift method로 꺼낸다.
console.log(arr)

arr = [1, 2, 3]
arr.reverse()    //reverse() 로,
console.log(arr) //원소의 위치를 역순으로 바꾼다.

a = [0, 1, 2]
b = a.slice(1) //a[1]부터의 배열을 잘라서 b에 넣는다.
console.log(b, a)

arr = [0, 7, 8, 5]
arr.splice(0/*index부터*/, 2/*length*/, 1, 2, 3, 4) //arr[0]부터 length만큼 버리고, 뒤에 값들을 채운다.
console.log(arr)

arr = ['a', 'b', 'c']
console.log(arr.indexOf('b'))

arr.splice(arr.indexOf('b')) // 'b' 원소 이후로 다 잘라버린다.
console.log(arr)

arr = ['a', 'b', 'c']
//과제: splice()로 arr 에서 'b'만을 삭제하라.
arr.splice(arr.indexOf('b'), 1)
console.log(arr)

arr = ['a', 'b', 'c', 'b']
arr.splice(arr.indexOf('b'), 1)//처음으로 발견한 b값을 지운다.
console.log(arr)

console.log()//\n

arr = [4, 3, 1, 2]
let s = arr.sort()
console.log(arr, s)
//과제: s가 view object 인지를 확인하라.
console.log(s == arr) //true이므로 s는 view object이 아니다.

arr = [8, 11, 22, 23, 9]
console.log(arr.sort()) //sort()는 원소들을 정렬할때 string으로 취급하고 처리한다.

//해결법.
console.log(arr.sort((a, b) => a - b)) //오름차순 정렬로 callback을 넣어준다.
console.log(arr.sort((a, b) => b - a)) //내림차순 정렬로 callback을 넣어준다.

//collection의 대표적 작업. iterating.
arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

// 과제: 위와 다른 for로 arr을 iterating 하라.
for(let e of arr) console.log(e) //collection의 element를 뽑아낸다.
for(let key in arr) console.log(arr[key]) //arr를 object으로 보고 key값들을 뽑아낸다.

console.log()

//callback으로 사용할 function준비.
function print(e) {
    console.log(e)
}

function print2(e, i) {
    console.log(`[${i}]: ${e}`)
}

function print3(e, i, arr) {
    arr[i] = e.toUpperCase() //element를 대문자로 교체하겠다.
}

arr = ['a', 'b']

arr.forEach(print)

arr.forEach(print2)

arr.forEach(print3)
console.log(arr)

//
arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2) //map이 return한 배열은 주어(접두사)로 쓴 배열과 다르다. 
console.log(arr, arr2, arr == arr2)

//namespace로서 사용할 group 준비
//array와 비교하기 위해서 다양한 type들을 준비해본다.
let group = {
    title: 'art',
    students: ['winston', 'cal', 'maritha'],
    list() {
        this.students.forEach(studentName =>
            console.log(this.title, ':', studentName))
    }
}

group.list()

//arr도 객체이므로 join을 이용해 serializing 해보자.
arr = ['hello', 'world', 2]
let greeting = arr.join() //arr의 원소들을 string으로 저장. hr과제에서 사용하자.
console.log(greeting, typeof greeting)

console.log(arr.join('/'/*join의 구분자 지정.*/))
//과제: arr.join()에서 'helloworld2'를 return하라.
console.log(arr.join(''))

//toString을 이용한 serializing.
arr = [1, 2, 3]
str = arr.toString()
console.log(str, typeof str)

//
str = String(arr)
console.log(str, typeof str)

//serializing 할때 주로 사용하는 stringify.
str = JSON.stringify(arr)
console.log(str, typeof str)

//collection 읽기문법들.
const items = [
    {itemName: 'book', price: 1},
    {itemName: 'computer', price: 100},
    {itemName: 'book', price: 2}
]

const item = items.find(item => item.itemName == 'book') //find는 callback에서 true가 나오는 처음의 element를 return한다.
console.log(item)

//                   /*filter의 parameter는 2개이상 넣을 수 있다.*/
const interest = items.filter((item, i) => item.itemName == 'book') //callback에서 true인 값을 모조리 다 return.
console.log(interest)

//map을 이용한 html element로 return하기. hr과제에 이용.
const elements = items.map((item, i) => 
    `<div>${item.itemName}: ${item.price}</div>`)
console.log(elements)