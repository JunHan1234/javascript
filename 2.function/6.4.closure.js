function makeCounter() {
    let count = 0

    return function() {
        return ++count
    }
}
//makeCounter가 call 될 때마다 새로운 LE객체를 생성하기 때문에,
//count값이 중복되지 않는다.
let counter1 = makeCounter()
let counter2 = makeCounter()

for(let i = 0; i < 2; i++)
    console.log(counter1())
for(let i = 0; i < 2; i++)
    console.log(counter2())