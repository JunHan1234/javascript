function sum(a: number, b: number): number/*선언문 끝부분에 return type적기.*/{
    return a + b
}

console.log(sum(1, 2))

function add(a: number, b: number, isDouble: boolean): number {
    const sum = a + b
    return isDouble ? sum * 2 : sum
}

let result: number = add(1, 2, true)
console.log(result)

function greet(userName: string, nullable?: boolean) { //return type을 정의 안할경우 node가 알아서 판단.
    if(nullable) return null                          //string | null 로 정의됨을 확인.
    else return `Hello, ${userName}.`
}

let greeting = greet('cain')
//let greeting = greet('cain', true)
console.log(greeting)