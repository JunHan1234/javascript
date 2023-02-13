let msg = 'hello'; //typescript의 datatype을 string type으로 정한 예다.
//msg = 1 //typescript는 변수의 datatype을 정한다. (static variable type.)
let val = 1;
let nullableStr = null; //union type |을 이용한 합집합.
nullableStr = 'Hi';
// nullableStr = undefined
let undefinedOrNumber;
undefinedOrNumber = 10;
undefinedOrNumber = undefined;
let numberOrStringOrNull = null;
numberOrStringOrNull = 1;
numberOrStringOrNull = 'Bye';
let isCompleted = true;
isCompleted = false;
// isCompleted = 0
//typescript를 javascript처럼 사용하고 싶을 경우.
let anyValue;
anyValue = undefined;
anyValue = 1;
anyValue = 'hello';
let a = 1;
let b = 'b';
let c = true;
