let json = '{age: 30}'

try {
    let user = JSON.parse(json)

    // 과제: user가 있으면, user.age를 출력하라.
    user && console.log(user.age)

    if(user.age) console.log(user.age) //java style
    else throw new SyntaxError('user.age가 없습니다.') //else를 쓰려면 7번째줄에서 삼항연산자를 쓰거나, 9번째줄처럼 if구문을 쓴다.
} catch(e) {
    if(e instanceof SyntaxError)
        console.log('ERROR] ' + e.message)
    else throw e
}