let json = '{"name": "john", "age": 30}' //json 언어로 된 객체를 string으로 준비
let user = JSON.parse(json) //json 언어를 string에서 객체로 parse해, user에 넣어 user객체로 만들기.
console.log(typeof json, typeof user)

json = '{age: 30}' //json언어가 아닌 string 준비.
//JSON.parse(json) //json언어로 작성하지 않았기 때문에 에러.

//앱을 살리는 목적의 try 블럭.
try {
    JSON.parse(json) //false가 나오면 catch 블럭에서 잡는다.
} catch {
    console.log('ERROR')
}

try {
    JSON.parse(json)
} catch(e) { //try 블럭에서 false가 나올 경우 무슨 error객체인지 e에 담고,
            //그 e의 property를 console에 출력해본다.
    console.log(e.name, '\n', e.message, '\n', e.stack)
}