//spread와 비슷한 문법 destruct. react과제에 사용.
//차이점?
let arr = ['ilya', 'kantor']
// destruct 할당연산자'=' collection //firstName, lastName같이, 변수를 n개 선언하는것이다.
let [firstName, lastName] = arr //arr의 key들을 흩뿌려 firstName과 lastName의 value로 저장.
console.log(firstName, lastName)

//변수의 개수가 안맞는경우
let [one, two] = [1, 2, 3]
console.log(one, two) //남는 변수는 throw함.

let [three, four] = [3]
console.log(three, four)

let [one2, three2] = [1, 2, 4]
console.log(one2, three2)

//
let s = 'i am'
let [a, b, c] = s
console.log(a, b, c) //i 와 space문자와 a까지 쪼개져서 변수에 각각 담김을 확인. m은 버려진다.

//변수.split(구분자) = 구분자를 기준으로 변수값을 쪼갠다. => join과 split은 음양으로 사용하면 된다.
arr = s.split(' ')
console.log(arr)

let [a2, b2] = arr //변수 a2, b2를 선언. 그리고 split했던 arr를 흩뿌려 할당.
console.log(a2, b2)

//할당 연산자 오른편에 set을 넣어보자.
let [a3, b3] = new Set(arr)
console.log(a3, b3)

//destruct로 arr를 iterating.
let user = {
    userName: 'oscar',
    age: 6
}

let entries = Object.entries(user) //user object을 entries 배열로 변환.
console.log(entries)

for(let [key, value] of entries)
    console.log(key, value)

//destruct로 map을 iterating.
let map = new Map([
    ['userName', 'oscar'],
    ['age', 6]
])

for(let [key, value] of map)
    console.log(key, value)

//넘쳐난 element를 담고 싶을때. 배열 rest (...)이용
let [x, y, ...rest] = [1, 2, 3, 4]
console.log(x, y, rest)

//기본값 undefined대신 내 맘대로 기본값을 정하기.
let [x2, y2=10] = [1]
console.log(x2, y2)

//object의 property value들을 동일 property name변수들에 할당하는법
let options = {
    title: 'menu',
    width: 100,
    height: 200
}
//{}를 이용함을 확인. 순서가 달라도 알아서 동일명 변수에 각각 잘 담긴다.
let {title, height, width} = options
console.log(title, height, width);

({title, height, width} = options)
console.log(title, height, width)