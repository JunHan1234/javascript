//iterable object
let range = {
    from: 1,
    to: 3,

    //Symbol.iterator의 조건 2개 symbol.iterator & next()
    [Symbol.iterator]() {
        this.current = this.from //current 속성을 가진 this객체 return.
        return this
    },

    next() {
        if(this.current <= this.to)
            return {
                done: false,
                value: this.current++
            }
        else //current값이 4가되는경우 return.
            return {
                done: true //iterating이 끝났음을 표현.
            }
    }
}
//num이 collection으로 볼 경우. range가 [Symbol.iterator]를 call한다(this객체가 return되어 생성.).
//그리고 for에서 next를 반복 call한다.
for(let num of range) //range에 iterator 객체인 this객체가 들어간다.
    console.log(num)

console.log()

//위 지저분한 코드를 개선시킨 문법, generator.
function* generator() { //generator는 function* & yield를 꼭 써줘야 한다.
    let val = 1
    while(val <= 3) yield val++ //return을 generator에서는 yield로 표현.
}

for(let num of generator()/*generator()가 객체를 call*/)
    console.log(num)

let g = generator()
console.log(g, ',', typeof g)

//다양한 type의 값을 구현하고 싶을때.
function* gen() {
    yield 1
    yield ['a', 'b']
    yield function(){}
}

for(let val of gen())
    console.log(val)

function* gen2() {
    yield* generator()//30번째 줄 generator function을 yield.
    yield* ['a', 'b'] //각각의 element를 쪼개서 return(yield)한다.
    yield 9
}

for(let val of gen2())
    console.log(val)