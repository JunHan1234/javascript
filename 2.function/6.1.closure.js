const age = 16

console.log(sayAge)

{
    let age = 10

    //{}안의 function declaration은 global scope에 변수 이름(sayAge: undefined)만 생성된다.
    //local scope이 실행된 후, sayAge function이 global scope에 저장됐던 변수에 저장된다.
    //그러나 sayAge function의 Environment값은 local scope이다.
    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }
    //function들의 output값은 Environment 값들을 따른다.
    sayAge()
    tellAge()
}

sayAge()