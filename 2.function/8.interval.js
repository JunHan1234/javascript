//1초 간격으로 tick을 출력.
let timeId = setInterval(() => console.log('tick'), 1000) //ctrl + c = 강제종료

setTimeout(() => {
    clearInterval(timeId) //interval을 queue에서 삭제한다.
    console.log('stop') //삭제 후 출력문.
}, 3000) //3초 뒤에 queue에서 삭제.