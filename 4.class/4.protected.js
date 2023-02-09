class CoffeeMachine {
    waterAmount = 0

    constructor(voltage) {
        this.voltage = voltage
    }
}
//this.으로도 객체에 추가시킬 수 있고, Coffee class에 property를 추가해도 객체에 key로 추가할 수 있다.
console.log(CoffeeMachine)
console.log(Object.keys(CoffeeMachine))
console.log(Object.keys(CoffeeMachine.prototype))

let machine = new CoffeeMachine(220)
console.log(machine)
console.log(Object.keys(machine))

console.log() //\n

//protected.
CoffeeMachine = class {
    _waterAmount //protect하고 싶은 key를 _를 사용해 먼저 준비한다.

    get waterAmount() {
        return this._waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this._waterAmount = 2 * waterAmount
    }
}

machine = new CoffeeMachine()
console.log(machine)

machine.waterAmount = 1 //할당 연산자를 이용하면, setter가 작동한다.
console.log(machine.waterAmount) //할당 연산자 없이 waterAmount를 이용하면, getter가 작동한다.

machine._waterAmount = 11
//protected가 안되고 waterAmount property에 바로 접근한것을 확인.
console.log(machine._waterAmount) //getter는 _변수를 이용해 접근하면 작동안한다.