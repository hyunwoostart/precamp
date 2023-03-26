let persons = [
    {name: "철수", age: 17},
    {name: "영희", age: 22},
    {name: "도우너", age: 5},
    {name: "그루트", age: 65},
    {name: "도비", age: 3}
]
undefined
for(let count = 0; count < persons.length; count++) {

    if(persons[count].age >= 19) {
        console.log("성인입니다")
    } else {
        console.log("미성년자입니다")
    }
}
// VM4922:6 미성년자입니다 
// VM4922:4 성인입니다
// VM4922:6 미성년자입니다
// VM4922:4 성인입니다
// VM4922:6 미성년자입니다
undefined

for(let count = 0; count < persons.length; count++) {

    if(persons[count].age >= 19) {
        console.log(persons[count].name+"님은 성인입니다")
    } else {
        console.log(persons[count].name+"님은 미성년자입니다")
    }
}
// VM5491:6 철수님은 미성년자입니다
// VM5491:4 영희님은 성인입니다
// VM5491:6 도우너님은 미성년자입니다
// VM5491:4 그루트님은 성인입니다
// VM5491:6 도비님은 미성년자입니다


for(let k = 0; k < fruits.length; k++) {
    console.log(`${fruits[k].number} ${fruits[k].title}`)
}
// VM7503:2 1 레드향
// VM7503:2 2 샤인머스켓
// VM7503:2 3 산청딸기
// VM7503:2 4 한라봉
// VM7503:2 5 사과
// VM7503:2 6 애플망고
// VM7503:2 7 딸기
// VM7503:2 8 천혜향
// VM7503:2 9 과일선물세트
// VM7503:2 10 귤
undefined