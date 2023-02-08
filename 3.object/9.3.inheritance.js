let animal = {
    animalName: 'animal'
}

//위 코드와 동일한 표현이다.
animal = new Object()
animal.animalName = 'animal'

//과제: 토끼를 object literal 및 constructor 로 만들어라.
//      토끼는 age = 3, property 를 갖고 있다.

let rabbit = {
    age: 3
}

rabbit = new Object()
rabbit.age = 3

console.log(animal.__proto__) //Object 생성자로 만들었기 때문에 Object prototype을 갖는다.
console.log(rabbit.__proto__) //마찬가지.

console.log(rabbit.animalName, rabbit.age)

animal = {
    walk() {
        console.log('animal walk')
    }
}

rabbit = {
    __proto__: animal //rabbit의 prototype을 object prototype에서 animal객체로 변경.
}

rabbit.walk()

let user = {
    userName: 'user'
}

let administrator = {
    __proto__: user //administrator is an user
}

console.log(administrator.userName)

administrator.userName = 'jonadan' //admin 속성으로 userName 추가했다.
console.log(administrator.userName)

animal = {
    animalName: 'animal',
    weight: 50,
    eat() {
        console.log(`${this.animalName} eat.`)
    }
}

rabbit = {
    rabbitName: 'rabbit',
    __proto__: animal //rabbit is an animal
}

let lion = {
    lionName: 'lion',
    __proto__: animal //lion is an animal //animal의 자식객체가 토끼, 사자 2개가 됨.
}

animal.eat()
rabbit.eat() //부모의 eat() 사용.
lion.eat()   //부모의 eat() 사용.

console.log(Object.keys(rabbit))

for(let key in rabbit)
    console.log(key) //자신의 속성을 본 뒤, 부모속성도 모두 바라본다.

let msg
for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key) //자신의 key 속성을 isOwn에 넣는다.
    msg = isOwn ? `child's key: ${key}` : `parent's key: ${key}`
    console.log(msg)
}