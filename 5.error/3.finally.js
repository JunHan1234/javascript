function laugh(cnt) {
    if(cnt <= 0/*0이하를 걸러냄.*/ || Math.trunc(cnt) != cnt/*실수값을 걸러냄.*/)
        throw new Error('반복 횟수는 자연수이어야 합니다.') //if구문이 true이면 이 줄이 실행됨.

    let phrase = ''
    for(let i = 0; i < cnt; i++) phrase += 'ha '

    return phrase
}

let diff
let start = Date.now()

try {
    console.log(laugh(3))
    laugh(3.1)
} catch(e) {
    console.log(e.message)
} finally { //try 블럭의 성공실패에 관계없이 무조건 실행.
    diff = Date.now() - start
}

console.log(`작동 시간: ${diff}ms.`)