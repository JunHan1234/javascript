// global scope 지구 안의 작은 scope
// 지구에 a라는 변수 생성.
let a = 1

// 지구 안에 아시아를 만들었다.
{ //아시아에서 지구 scope 사용가능.
    console.log(a)
} //아시아 끝.

// 지구 안에 유럽 생성.
{ // local scope
    let a = 2 //변수명의 중복은 scope별로 판단함을 알 수 있다.
    console.log(a)
} //유럽 끝.

console.log(a) //global scope.