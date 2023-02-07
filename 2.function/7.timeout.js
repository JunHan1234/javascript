function sayHi() {
    console.log('Hi')
}

setTimeout(sayHi, 1000) //1000ms(1초)가 지난 후 sayHi가 call되도록 하는 API.
//queue에는 sayHi function이 저장된다.

function greet(phrase, who) {
    console.log(phrase, who)
}
//setTimeout(functionName, ms, phrase parameter, who parameter)
setTimeout(greet, 2000, 'hello', 'knox')

let timeId = setTimeout(() => console.log('hoo'), 3000)
clearTimeout(timeId) //queue에 저장된 timeId 삭제. => 결과, hoo 가 출력이 안된다.(이미 삭제되었으므로.)