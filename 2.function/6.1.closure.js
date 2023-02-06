const age = 16

console.log(sayAge)

{ //global le 생성시, 일반 block의 경우 이 안의 function declaration은 변수 이름이 global 객체에 소속된다.
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
    sayAge() //sayAge()의 Environment값은 태어난 곳, 즉 local le이므로, 참조하는 변수도 local에서 참조한다.
    tellAge()
}// global le에서 sayAge()의 function에서 local le의 주소값을 참조하므로, 종료되지않고 살아있다.

sayAge()