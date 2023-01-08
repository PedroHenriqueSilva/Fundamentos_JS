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

//métodos de arrays
const list = ['a', 'b', 'c', 'd', 'e', 'f']

console.log(list.length)
console.log(list[5])

list[6] = 'g'
console.log(list)

console.log(list[list.length - 2])

list.push('h')

console.log(list)

list.shift()
console.log(list)

list.unshift('z')
console.log(list)


//Objetos

const product = {
    name:"Camisa",
    price:"1,79", 
    inStock:true, 
    sizes:['p', 'm', 'g']
}

console.log(product.name)
console.log(product.price)
console.log(product.inStock)
console.log(Object.keys(product).length)


//estruturaas de repetição

const mylist= ['11','2','3']
let count = 0

while(count < mylist.length){
    console.log(mylist[count])
    count++
}

const mySecondList = ['a', 'b', 'c', 'd', 'e']

for(let count = 0; count<mySecondList.length;count++){

    console.log("Imprimindo: " + mySecondList[count])
}

const names = ['Pedro', 'Joao', 'Ana']

//foreach

names.forEach(function(n){
    console.log("Imprimindo:" +  n) 
})

const modificNames = names.map(function(n){
    if(n ==="Pedro" ){
        return(n = "Sr.Pedro")
    }else{
        return n
    }

}

)

console.log(modificNames)

const bigNumbers = [1,2,3,4,5,10,100].filter(function(number){
    return number >= 5
})

console.log(bigNumbers.length)

const sum = [1,2,3,4,5].reduce((total, number) =>{
    return total+number
})

console.log(sum)

//function
function nomeCompleto(nome, sobrenome){
    return "meu nome é: " + nome + " " + sobrenome
}

console.log(nomeCompleto('Pedro', 'Silva'))  
console.log(nomeCompleto('Joao', 'Antonio'))



//arrowFunction

const myArrowFunction = (a,b) => {
    return a + b
}
console.log(myArrowFunction(1, 5)) 
