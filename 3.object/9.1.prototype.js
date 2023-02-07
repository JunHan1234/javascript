//function의 prototype
let animal = {
    isAlive: true
}

function Rabbit(rabbitName) { //new가 작동할때 비로소 Rabbit function은 생성자가 된다.
    this.rabbitName = rabbitName
}
//function객체.prototype //생성자 안에는 prototype이 존재한다.
console.log(Rabbit.prototype) //plain object -> prototype의 객체이다.

let rabbit = new Rabbit('black')
console.log(rabbit.isAlive)

Rabbit.prototype = animal //plain object 에다가 animal 할당.
console.log(Rabbit.prototype)

rabbit = new Rabbit('white')
//Rabbit객체에 isAlive property가 없으므로,
//prototype객체로 가서 참조하고 있으면 출력한다.
console.log(rabbit.isAlive)