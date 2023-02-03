let i = 0
while(i < 2) {
    console.log(`while: ${i + 10}`) // template literal을 back tick으로 작성.
    i++
}

do {
    console.log('do')
} while(false)

for(let i = 0; i < 2; i++)
    console.log(`for: ${i}`) // template literal을 back tick으로 작성.

for(let i = 0; i < 5; i++) {
    if(i >= 2) break
    console.log(i)
}