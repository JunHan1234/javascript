let age

function src() {
    let user = {
        userName: 'amanda'
    }

    a(user)
    console.log() //줄바꿈
    b(user)
}

function a(user) {
    user[Symbol('age')] = 12 //a function만의 property를 만들고 싶을때, symbol사용.
    console.log(user)
}

function b(user) {
    console.log(Object.keys(user))
    console.log(user.userName)
    console.log(user)
}

src()