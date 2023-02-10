/*
4.class/home/2.jajangmyeon.js 를 promise 로 refactoring 하라.
*/
class Food {
    constructor(taste, foodName) {
        this.taste = taste
        this.foodName = foodName
    }
}

class Chef {
    constructor(taste) {
        this.taste = taste
    }

    async cook(foodName) {
        let promise = new Promise((resolve, reject) =>
            setTimeout(() => resolve(new Food(this.taste, foodName)), 1000))
        let result = await promise
        return result
    }
}

class Waiter { //손님과 waiter사이의 Promise가 return.
    async order(foodName, chef) {
        return await Promise.resolve(chef.cook(foodName))
    }
}

const chef1 = new Chef('달콤한')
const chef2 = new Chef('매운')
const waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)
waiter.order('짬뽕', chef2)

waiter.order('짬뽕', chef2).then(console.log)