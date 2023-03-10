//일반 export한 것은 {}와 함께 이름을 정확히 입력해야함.
import {greet, add} from './1.named.mjs'

//as로 구분하기 위한 이름을 지어주고 export했던 field들을 전부 *(all)로 가져올 수 있다.
import * as named from './1.named.mjs'

//export default한것은 import시 이름을 바꿔줄 수 있다.
import div from './2.default.mjs'

console.log(greet, add(1, 3))
console.log(named.greet, named.add(1, 2)) //named라는 별명으로 구분한 module을 사용.

console.log(div(4, 2))