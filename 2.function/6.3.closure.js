function makeFn() {
    let userName = 'parker'

    function displayUserName() {
        console.log(userName)
    }

    return displayUserName
}

let myFn = makeFn()

myFn()