//if 조건문이 true이면 {}블럭 실행.
if(true) {}
//if 조건문이 false이면 if {}건너뛰고, else {}블럭 실행.
if(false) {} else {}

//undefined가 false이므로 블럭을 건너뛴다.
if(undefined) {console.log(1)}
//이하 동문.
if(null) {console.log(1)}
if(0) {console.log(1)}

//if 조건문이 true이므로 결과 출력.
if(-1) {console.log(1)}
//삼항 연산자 조건문이 true이므로 좌항 실행.
console.log(true ? 1 : 0)

let val

switch('boo') {
//case 문은 한줄에 명령문이 2개라서, 각각의 명령문을 구별하기 위해 ; 를 넣었다.
    case 'bar': val = 'bar'; break
    case 'baz': val = 'baz'
    default: val = 'all right'
}

console.log(val)