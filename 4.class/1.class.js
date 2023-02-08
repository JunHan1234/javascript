//react에서 쓰지 않는 기법이다.
class User {
    constructor(userName) {
        this.userName = userName
    }

    sayHi() {
        console.log(`Hi, I am ${this.userName}.`)
    }
}

let user = new User('john')
console.log(user.userName)
user.sayHi()

//User('john') //class constructor는 new없이는 사용불가능하다.

class Animal {
    constructor() {
        this.animalName = 'animal'
    }

    run() {
        console.log(`${this.animalName} run.`)
    }

    stop() {
        console.log(`${this.animalName} stop.`)
    }
}

let animal = new Animal()
console.log(animal.animalName)
animal.run()
animal.stop()

function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase)
        }
    }
}

User = makeClass('hello') //User class를 만든다.
new User().sayHi() //new를 이용하여 User class의 객체를 생성해서 sayHi()를 call해본다.