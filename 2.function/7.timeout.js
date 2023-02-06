function sayHi() {
    console.log('Hi')
}

setTimeout(sayHi, 1000) //1000ms(1초)가 지난 후 sayHi가 call되도록 하는 function.

function greet(phrase, who) {
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'knox')

let timeId = setTimeout(() => console.log('hoo'), 3000)
clearTimeout(timeId)