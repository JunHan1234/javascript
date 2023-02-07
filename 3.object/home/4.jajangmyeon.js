/*
2.function/home/3.jajangmyeon.js 를 객체지향으로 refactoring 하라
*/
function Recipe() {
    this.recipe1 = foodName => `달콤한 ${foodName}.`
    this.recipe2 = foodName => `매운 ${foodName}.`
}

function Food(recipeFoodName) {
    this.recipeFoodName = recipeFoodName
}

function Chef() {
    this.cook = recipeFoodName => new Food(recipeFoodName)
}

function Waiter() {
    this.getOrder = food => food
}

const recipe = new Recipe()
const chef = new Chef()
const waiter = new Waiter()

waiter.getOrder(chef.cook(recipe.recipe1('짜장면')))
waiter.getOrder(chef.cook(recipe.recipe2('짜장면')))
waiter.getOrder(chef.cook(recipe.recipe2('짬뽕')))