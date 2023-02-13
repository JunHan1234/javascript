interface Profile { //3개의 type으로 구성된 Profile이라는 새로운 type을 만들었다.
    userId: number
    userName: string
    nickName: string
}

function printUserName(profile: Profile) {
    console.log(profile.userId)
}

const profile: Profile = {
    userId: 1,
    userName: 'cain',
    nickName: 'hero'
}

printUserName(profile)
console.log(typeof profile)

//
interface Relationship {
    from: Profile
    to: Profile
}

const relationship: Relationship = {
    from: {
        userId: 1,
        userName: 'cain',
        nickName: 'hero'
    },
    to: {
        userId: 2,
        userName: 'abel',
        nickName: 'warrior'
    }
}

//상속.
interface Account extends Profile {
    email: string
    password: string
}

const account: Account = {
    userId: 1,
    userName: 'cain',
    nickName: 'hero',
    email: 'cain@gmail.com',
    password: 'cainpw'
}

//? 이용하기.
interface User {
    userId: number
    userName: string
    photoUrl?: string
}

let user: User = {
    userId: 1,
    userName: 'abel',
    photoUrl: 'face.jpg'
}

console.log(user) // { userid: 1, userName: 'abel', photoUrl: 'face.jpg' }

user = {
    userId: 2,
    userName: 'abel',
}

console.log(user) // { userId: 2, userName: 'abel' }

//
interface Shape {
    getArea(): number
    getPerimeter(): number
}

class Circle implements Shape {
    constructor(private radius: number) {}

    getArea() {
        return Math.PI * Math.pow(this.radius, 2) /*r^2 표현*/
    }

    getPerimeter(): number/*return type 명시가능.*/ {
        return 2 * Math.PI * this.radius
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    getArea(): number {
        return this.width * this.height
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height)
    }
}

const circle = new Circle(4)
const rectangle = new Rectangle(4, 6)

console.log(circle.getArea(), rectangle.getPerimeter())