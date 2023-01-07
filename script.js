console.log("ola mundo")

console.error("erro")
console.warn("Este é um aviso")
console.log("Esta é uma mensagem")

var x = 10

//mais modernos
let y = 20

const z = 100

console.log(x,y,z)

y = 25

console.log(y)

const nome = "Pedro"

const sobrenome = "Silva"

console.log("meu nome é: ", nome,"", sobrenome)

//para descobrir o tipo de dado utilizamos o typeof   
console.log(typeof nome)
console.log(typeof y)

const isbollean = false

console.log(isbollean)
console.log(typeof isbollean)

let surname = null

console.log(surname)
console.log(typeof surname)

surname = "Silva"

console.log(surname)
console.log(typeof surname)

let age
console.log(age)
console.log(typeof age)

const languagens = ["JS", "PHP", "Python"]
console.log(languagens)
console.log(typeof languagens)

const user = {email: "Pedro@gmail.com", password:"123", age:"30"}
console.log(user)
console.log(typeof user)

//métodos de strings
const fullName = "Pedro Silva" 

console.log(fullName.length)

const stringToArray = "Pedro Silva Henrique"

console.log(stringToArray.split(' '))

console.log(fullName.toLowerCase())
console.log(fullName.toUpperCase())

console.log(fullName.indexOf('Silva'))
console.log(fullName.slice(7,13))