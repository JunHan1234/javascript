//function의 prototype
let animal = {
    isAlive: true
}

function Rabbit(rabbitName) { //new가 작동할때 비로소 Rabbit function은 생성자가 된다.
    this.rabbitName = rabbitName //prototype에 속성값들이 저장된다.
}
//function객체.prototype //생성자 안에는 prototype이 존재한다.
console.log(Rabbit.prototype) //plain object -> prototype의 객체이다.

let rabbit = new Rabbit('black')
console.log(rabbit.isAlive)

Rabbit.prototype = animal //Rabbit이 가리키던 prototype 주소에다가 animal 객체주소로 바꿔서 할당.
console.log(Rabbit.prototype)

rabbit = new Rabbit('white')
//Rabbit객체에 isAlive property가 없으므로,
//prototype객체로 가서 참조하고 있으면 출력한다.
console.log(rabbit.isAlive)


function Duck(duckName) {
    this.duckName = duckName
}

console.log(Duck.prototype) //plain object.
console.log(Duck.prototype.constructor) //Duck function을 가리킨다. ==> 여기서 prototype과 Duck function은 서로가 서로를 가리키고 있는것을 알 수 있다.
console.log(Duck.prototype.constructor == Duck) //true임을 확인.

let duck = new Duck('duck')
console.log(duck.__proto__)//duck객체의 prototype값을 읽는다. == Duck.prototype
console.log(duck.__proto__.constructor)// == Duck.prototype.constructor

let duck2 = new Duck('duck2')
console.log(duck2.__proto__ == duck.__proto__) //true. 두 객체의 prototype이 같음을 확인.

let duck3 = new duck.__proto__.constructor('duck') //Duck.prototype.constructor('duck')
//duck객체에 constructor에는 parameter가 없으므로, 
//부모 객체인 Duck의 constructor를 찾고, 마찬가지로 parameter가 없으므로
//그 prototype의 constructor를 이용한다.
duck3 = new duck.constructor('duck') 
console.log(duck3)