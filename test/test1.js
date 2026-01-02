//const name = '주효준'
//let age = 30
//const color = ['red', 'blue']

const object = {
    name : '주효준',
    age : 30,
    color : ['red', 'blue']
}

console.log(object.age)


if(object.age > 29){
    console.log('true')
}else{
    console.log('false')
}

//컬러의 인덱스가 0번쨰가 레드일 경우에는 참으로 출력하고 아닐경우에는 거짓으로 출력한다

if(object.color[0] ==='red'){
    console.log('True')
}else{
    console.log('false')
}