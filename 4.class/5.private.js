class CoffeeMachine {
    #waterAmount //private key를 준비한다.

    get waterAmount() {
        return this.#waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this.#waterAmount = 2 * waterAmount
    }
}

console.log(CoffeeMachine.prototype) //prototype은 텅 비어있음을 확인.

let machine = new CoffeeMachine()
//private의 효과.
//machine을 조회해도 waterAmount property(key)가 안보임을 확인.
console.log(machine)

machine.waterAmount = 1 //setter 작동
console.log(machine.waterAmount) //getter 작동

//machine.#waterAmount = 1 //private field에는 직접 접근 불가.(getter setter로만 접근 가능.)