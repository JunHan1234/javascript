/*
4.class/home/2.jajangmyeon.js 를 promise 로 refactoring 하라.
*/
class Food {
    constructor(taste, foodName) {
        this.taste = taste
        this.foodName = foodName
    }

    [Symbol.toPrimitive]() {
        return `${this.taste} ${this.foodName}.`
    }
}

class Chef {
    async cook(foodName) {
        let promise = new Promise((resolve, reject) =>
        setTimeout(() => resolve(new Food(taste, foodName)), 1000) ||
                        reject('영업종료'))
        let result = await promise
        return result
    }
}

class Waiter { //손님과 waiter사이의 Promise가 return.
    async order() {
        return await Promise.resolve(new Chef.cook)
    }
}

const chef1 = new Chef('달콤한')
const chef2 = new Chef('매운')
const waiter = new Waiter().order().then(console.log)

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)
waiter.order('짬뽕', chef2)

console.log(waiter.order('짬뽕', chef2))