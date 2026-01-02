//number
let x = 2
//console.log(x)

//string
let name = '효준'
//console.log(name)

//boolean
const marry = false
//console.log(marry)

//array
const array = [1, 2, 3, 4, 5]
//console.log(array)
//console.log(array[2])

// null , udefined

// obj ({key : value})
const object = {
name : '주효준',
age : 29,
country : '중랑구',
favoriteColor : ['red','blue'] 
}

console.log(object)
console.log(object.country)



console.log(object.name+object.country)
console.log("중랑구"+"박성현")

const result = 20 < 18
console.log(result)

console.log("내나이는"+ object.age +"입니다")
console.log('내이름은'+object.name+'입니다')
console.log('내가좋아하는색깔은'+object.favoriteColor[0]+'입니다')
console.log(`내가 좋아하는 색상은 ${object.favoriteColor[1]} 입니다`)

// if(조건문){동작}
 
const age = 30
if(age > 20){
    console.log('주효준')
}else{
    console.log('박성현')
}

// 점수 score를 받아서 
// 90 이상일 경우에는 A
// 80 이상일 경우에는 B
// 그 외에는 C


// && (앤드 : 반드시 이걸 사용하면 전부 참이어야 true 반환 아닐경우 false) || (조건중 하나만 일치해도 true 전부다 아닐경우만 false)
const score = 90
if(score >= 90){
    console.log('A')
}else if(score > 80 && score < 90){
    console.log('B')
}else{
    console.log('C')
}

const arr = [0,1,2,3,4]

console.log(arr.length)

for(let i = 0; i < arr.length; i++){
    console.log("박성현")
}

// for문을 사용할건데 0 보다 크고 3 보다 작을경우에는 상위권이 출력되게 해주고 3보다 크고 5보다 작을경우에는 하위권이 출력되게 해주세요.
// for문은 0부터 5까지

const num = 4

for(let i = 0; i < 5; i++){
    if(num > 0 && num < 3){
        console.log("상위권")
    }else if(num > 3 && num < 5){
        console.log("하위권")
    }
}


/*for(){
    if(){
        console.log("상위권")
    } else{
        console.log('하위권')
    }
}*/

const a = true
let b = 1
// 만약에 a 가 진짜일경우에는 b에 1을 더해주고, 아닐경우에는 1을 빼주세요.

if(a===true){
    b = b + 1
}else{
    b = b - 1
}

console.log(b)

// c가 진짜일 경우에는 철수가 출력되게 가짜일 경우에는 민수가 출력되게

let c = false

if(c===true){
    console.log("철수")
}else{
    console.log("민수")
}







