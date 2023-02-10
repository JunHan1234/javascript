//key가 없는 collection. set. (그러므로, 중복값이 없다.)
let set = new Set()

let user1 = {userName: 'john'}
let user2 = {userName: 'pete'}

set.add(user1).add(user2).add(user1) //chaining.
console.log(set) //알아서 중복제거됨을 확인.

//검색
console.log(set.size)
console.log(set.has(user1), set.has(user2), set.has({})) //여기서 has는 value가 있느냐를 조사.

//삭제
console.log(set.delete(user1))
console.log(set)

set.add(user1)

//iterating.
for(let user of set) console.log(user)
//iterating. forEach.
set.forEach(val => console.log(val))

//Set 생성자 이용한 array집어넣어 set 만들기.
set = new Set([1, 2, 3])
console.log(set)

//string 집어넣기.
set = new Set('hello')
console.log(set) //l이 중복되어 제거됨을 확인.

let arr = Array.from(set) //key로 set을 넣는다. set을 Array로 변환.
console.log(arr)