// 데이터 타입, 연산자 실습

// 조건문 실습1
if(1+1 === 2) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM299:2 정답입니다
undefined
if(true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM345:2 정답입니다
undefined
if(!true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM360:4 틀렸습니다
undefined
if(0) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM400:4 틀렸습니다
undefined
if(1) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM476:2 정답입니다
undefined

// 조건문 실습2
if(profile.age >= 20) {
    console.log("성인입니다")
} else if(profile.age >= 8) {
    console.log("학생입니다")
} else if(profile.age > 0) {
    console.log("어린이입니다")
} else  {
    console.log("잘못 입력하셨습니다")
}