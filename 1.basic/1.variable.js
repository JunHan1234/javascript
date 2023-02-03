`use strict` //최근 문법으로 검사설정 하기이다.

//_로 변수선언은 옛날 문법이다.
/* 주석처리1 */
// 주석처리2

/* variable */
let user //변수 선언 (variable), 줄 단위로 명령 하나다.
let user2 //script 내에서 변수명은 유일해야한다.
//let 2user //변수명은 문자로 시작해야한다.
let _user
let $user

let userName //신세대 선호. camel case
let user_name //구세대 선호. snake case

const x = 1 //상수 선언 (constant)
//x = 2 //constant에 값 교체 불가. terminal에서 폴더 경로로 간 후 node 1.variable 입력, 실행하고 오류를 확인하라.

let y
y = 1
y = 2