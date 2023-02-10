console.log(Date())
console.log(typeof Date())

let date = new Date() //date function의 값과 new로 얻은 값이 다르다.
console.log(date)
console.log(typeof date)
console.log(date.toLocaleDateString()) //날짜값만 string 출력.

date = new Date('2023-02-10T01:37:30.999Z') //(UTC시각)년-월-일Time시:분:초.msZ
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

console.log(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getUTCHours(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
    date.getDay() //요일. 일요일=0 부터 시작한 값.
)
//time stamp 
console.log(date.getTime())//단위는 ms
console.log(Date.now())

date = new Date(0) //time stamp값을 넣어준다.(기준)
console.log(date) //출발선의 값. 여기서부터 1씩 더한 값이 time stamp의 값이다.

date = new Date(1000 * 60 * 60 * 24)
console.log(date)

date = new Date(-1000 * 60 * 60 * 24)
console.log(date)