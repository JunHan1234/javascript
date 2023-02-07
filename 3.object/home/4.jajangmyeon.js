/*
2.function/home/3.jajangmyeon.js 를 객체지향으로 refactoring 하라
*/
function Food(taste, foodName) {
    this.taste = taste
    this.foodName = foodName
}

function Chef(taste) {
    this.cook = foodName => new Food(taste, foodName)//chef가 cook으로 새로운 Food객체 생성.
}

function Waiter() {
    this.order = (foodName, chef) => chef.cook(foodName)//chef가 cook하도록 call하는 waiter.
}

const chef1 = new Chef('달콤한')
const chef2 = new Chef('매운')
const waiter = new Waiter()

console.log(waiter.order('짜장면', chef1))
waiter.order('짜장면', chef2)
console.log(waiter.order('짬뽕', chef2))