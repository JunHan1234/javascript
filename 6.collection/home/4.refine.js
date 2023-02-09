/*
refine() 이 정제된(중복 제거된) 배열을 return 토록 하라.
*/

let user = {userName: 'scott'}
let fn = () => 1
let arr = ['ucal', user, 'toby', fn, 'ucal', user, 1, 1, fn]

function refine(arr) {
    return Array.from(new Set(arr))
}

console.log(refine(arr))