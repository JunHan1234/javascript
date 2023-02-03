//반복문.

let i = 0
while(i < 2) {
    // template literal을 back tick으로 작성.
    // expression은 ${}(interpolation) 블럭 안에 기술한다.
    console.log(`while: ${i + 10}`)
    i++
}

do {
    console.log('do')
} while(false)

for(let i = 0; i < 2; i++)
// template literal을 back tick으로 작성 && Interpolation
    console.log(`for: ${i}`)

for(let i = 0; i < 5; i++) {
    if(i >= 2) break
    console.log(i)
}