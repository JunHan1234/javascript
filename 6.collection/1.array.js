//hr.jQuery의 준비!
//Array에는 다양한 type의 값들이 들어갈 수 있다.
let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr)

arr = [null, undefined, NaN]
console.log(arr)


arr = []
arr[0] = 'a' //object의 관점: arr[key] = value
arr[2] = 'c'

console.log(arr) //arr[1]은 empty상태임을 확인.
console.log(arr[0])
console.log(arr[1]) //undefined
//push로 값을 채워도 이미 arr[1]에는 undefined값이 있기 때문에, 비어있는 가장 밑바닥인 arr[3]에 값이 들어갈 뿐이다.
//console.log(arr.push[100])
console.log(arr.length)//undefined도 값으로써 취급한다. 따라서 길이는 3.

console.log() //\n
//matrix: 2차원 형태의 Array. Array속 Array.
let matrix = [
    [1, 2],
    [3, 4]
]

let a = [1, 2]
let b = [2, 3]
let c = a.concat(b) //주어와 목적어 붙이기 API
console.log(c)

//collection method 'push', 'pop' & 'shift', 'reverse', 'slice' & 'splice'
arr = []
arr.push(1) //밑바닥부터, 즉, 비어있는 index부터 집어넣는 method.
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
arr.splice(0/*index*/, 2/*length*/, 1, 2, 3, 4) //arr[0]부터 length만큼 버리고, 버린 부분에 값들을 끼워 채운다.
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
console.log(arr, s) //sort()를 사용하면 arr값을 정렬하고 arr에 정렬값을 return하는것을 확인할 수 있다.
//과제: s가 view object 인지를 확인하라.
console.log(s == arr) //true이므로 s는 view object이 아니다.

arr = [8, 11, 22, 23, 9]
console.log(arr.sort()) //sort()는 원소들을 정렬할때 string으로 취급하고 처리한다.

//해결법. sort()의 parameter로 callback을 넣어준다. (이 callback을 comparator라 한다.)
console.log(arr.sort((a, b) => a - b)) //오름차순 정렬로 callback을 넣어준다.
console.log(arr.sort((a, b) => b - a)) //내림차순 정렬로 callback을 넣어준다.

//collection의 대표적 작업. iterating.
arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++) //기본적인 iterating.
    console.log(arr[i])

// 과제: 위와 다른 for로 arr을 iterating 하라.
for(let e of arr) console.log(e) //arr가 collection경우의 element를 뽑아낸다. (of collection)
for(let key in arr) console.log(arr[key]) //arr를 object으로 보고 key값들을 뽑아낸다. (in object)

console.log() //\n

//callback으로 사용할 function들을 준비.
function print(e) { //element
    console.log(e)
}

function print2(e, i) { //element, index
    console.log(`[${i}]: ${e}`)
}

function print3(e, i, arr) { //element, index, collection
    arr[i] = e.toUpperCase() //element를 대문자로 교체하겠다.
}

arr = ['a', 'b']
//forEach() 를 사용한 iterating.
arr.forEach(print)
arr.forEach(print2)
arr.forEach(print3)
console.log(arr)

//
arr = [1, 2, 3]
//map이 return한 배열은 주어(접두사)로 쓴 배열과 다르다. 새로운 배열을 return.
//따라서, arr의 값이 새로이 바뀌는게 아니므로,
//새로운 변수 arr2에 return값을 담아서 사용해야한다.
let arr2 = arr.map(e => e * 2)
console.log(arr, arr2, arr == arr2)

//namespace로서 사용할 group 준비
//array와 비교하기 위해서 다양한 type들을 준비해본다. 둘다 결국 object.
let group = {
    title: 'art',
    students: ['winston', 'cal', 'maritha'],
    list() {
        this.students.forEach(studentName =>
            console.log(`${this.title}: ${studentName}`))
    }
}

group.list()

//arr도 객체이므로 join을 이용해 serializing 해보자. hr과제에서 사용하자.
arr = ['hello', 'world', 2]
//arr의 원소들을 string으로 저장. default 구분자는 ','이다.
let greeting = arr.join()
console.log(greeting, typeof greeting)

console.log(arr.join('/'/*join의 구분자 지정.*/))
//과제: arr.join()에서 'helloworld2'를 return하라.
console.log(arr.join(''))

//toString을 이용한 serializing. //toString은 구분자를 지정할 수 없다...
arr = [1, 2, 3]
str = arr.toString()
console.log(str, typeof str)

//String을 이용한 casting으로 serializing.
str = String(arr)
console.log(str, typeof str)

//json문법으로 serializing 할때 주로 사용하는 stringify.
str = JSON.stringify(arr) //object로서의 arr를 string으로 통짜 변환한다.
console.log(str, typeof str) //[]로 감싸진 구문이 string으로 변함을 확인.

//collection 읽기문법들.
const items = [
    {itemName: 'book', price: 1},
    {itemName: 'computer', price: 100},
    {itemName: 'book', price: 2}
]

const item = items.find(item => item.itemName == 'book') //find는 callback에서 처음 true가 나오는 element를 return한다.
console.log(item)

//            /*find와 filter의 parameter는 2개이상 넣을 수 있다.*/
//            2번째 parameter는 동일한 항목이 검색될 시, i(index)번째 나오는 true값을 return해준다.
const interest = items.filter((item, i) => item.itemName == 'book') //callback에서 true인 element를 모조리 다 return.
console.log(interest)

//map을 이용한 html element로 return하기. hr과제에 이용.
const elements = items.map((item, i) => 
    `<div>${item.itemName}: ${item.price}</div>`)
console.log(elements)

//reduce.
const totalPrice = items.reduce((total, item) => {
    total += item.price
    return total
}, 0/*reduce의 2번째 parameter에 total의 initial값 저장.*/) 
console.log(totalPrice)

//some & every. boolean을 return하는 callback으로 구성.
//itemName중에 'book'이 존재하는가?
let isExit = items.some(item => item.itemName == 'book') //한개 element만 true여도 true return.
console.log(isExit)
//itemName이 전부 'book'인가?
isExit = items.every(item => item.itemName == 'book') //모든 element가 true여야 true return.
console.log(isExit)