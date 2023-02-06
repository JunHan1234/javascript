const age = 16

function init() { //일반 block이 아닌 function block이기 때문에,
    // local 내부의 function declaration은 global LE에 영향을 주지 않는다.
    let age = 10

    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()
    tellAge()
}

init()