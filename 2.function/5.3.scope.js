//function 안의 local scope

const greeting = 'hello' //global scope

function say(userName/*userName변수는 local scope이다.
                        say를 call할 때 userName변수가 생긴다.*/) {//local scope 생성.
    console.log(greeting, userName)
}

say('john')