type Man = {
    manName: string
}

const man: Man = {
    manName: 'john'
}

type Men = Man[]
const men: Men = [
    {manName: 'neo'},
    {manName: 'john'}
]

type Color = 'red' | 'green' | 'blue'
let color: Color = 'red'
//color = 'yellow'

type Employee = Man & {
    job: string
} //Man에다가 job 속성 추가.

const employee: Employee = {
    manName: 'berg',
    job: 'programmer'
}