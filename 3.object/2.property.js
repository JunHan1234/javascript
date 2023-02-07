let user = {} //비어있는 블럭이 있는 user 객체(object) 생성.

//property 추가
user.height = 200
user['weight'] = 80

console.log(user.height, user.weight)

//property 삭제
delete user.weight
console.log(user.weight)

//property가 있는지 검색.
console.log('height' in user)
console.log('weight' in user)

//iterating
for(let key in user) console.log(user[key])

//user object에 userName 추가.
user.userName = 'parker'
//Object.keys라는 API를 이용한 user 원소들을 배열에 담아 return.
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

//--------------------------------------------------------------------------------
user = {
    greet: function() {console.log('hello')}
}

//과제: 위 코드를 arrow function으로 refactoring하라.
user = {
    greet: () => console.log('hello')
}
user = {
    greet() {
        console.log('hello')
    }
}

user.greet()

/* optional chaining */ //-> app을 계속 살리는게 목적.
user = {}
let address = {}
// key 값    = value 값
user.address = address
address.street = 'sejong'
console.log(user.address.street)
//console.log(user.city.cityName) //undefined의 properties는 읽을 수 없다가 출력됨.
console.log(user.city?.cityName) //optional chaining. 앱은 죽지 않고 undefined값 출력하고 해당 줄을 끝낸다.

let street
//street = user.city.street
street = user?.city?.street //optional chaining을 이용하여, city?에서 undefined값 return하고 끝.
console.log(street)

street = user?.city?.street ?? 'where' //undefined일 경우, return된 값을 뒤에 지정할 수 있다.
console.log(street)

//user?.address = 'sejong' //optional chaining은 할당연산자 오른편에 써야 문법에 맞다. (왼쪽에 쓰는 문법은 없다.)

user = null //user의 값이 없다 를 표현.
//user.greet() //null값을 읽을 수 없다가 출력됨.
/*중요! javascript style.*/
user?.greet() //user 객체가 있으면(null이 아니면,) greet()을 call하겠다. 없으면 무시하고 다음줄로 넘어간다.
//java style 대로 쓰지 말것! // 하지 말라는 예) if(user.greet() != null) user.greet()

user = {} //user 객체 생성.
//user.greet() //greet은 function이 아니다 가 출력됨.
console.log(user.greet?.()) //undefined가 출력되고 넘어간다.