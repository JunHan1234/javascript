class Animal {
    constructor(animalName) {
        this.animalName = animalName
    }

    run(speed) {
        this.speed = speed
        console.log(this.animalName, this.speed, 'run.')
    }

    stop() {
        this.speed = 0
        console.log(this.animalName, this.speed, 'stop.')
    }
}

let animal = new Animal('animal')
console.log(animal)

animal.run(10)
console.log(animal) //animal의 speed property가 value 10으로 할당됨을 확인.

animal.stop()
console.log(animal) //animal의 speed property가 value 0으로 할당됨을 확인.

//extends
class Rabbit extends Animal {
    /* extends 하면 다음 코드가 자동 생성되는 꼴이다.
    constructor(...args) {
        super(...args)
    }
    */
   hide() {
        console.log(this.animalName, 'hide.')
   }
}

let rabbit = new Rabbit()
console.log(rabbit)

rabbit = new Rabbit('rabbit')
console.log(rabbit)
console.log(rabbit.animalName)
rabbit.run(100) //부모의 property 사용.
console.log(rabbit) //rabbit객체에 speed property가 생성됨을 확인.
rabbit.hide()

console.log() //\n

//extends 2번째 모양.
Rabbit = class extends Animal {
    constructor(rabbitName, color) {
        super(rabbitName)
        this.color = color
    }

    stop() {
        super.stop()//super에는 부모 객체가 들어간다.
        this.hide() //this에는 주어 객체가 들어간다.
    }

    hide() {
        console.log(this.color, this.animalName, 'hide.')
    }
}

rabbit = new Rabbit('rabbit', 'black')
console.log(rabbit)
rabbit.stop()
console.log(rabbit)

console.log(rabbit.__proto__ == Rabbit.prototype)