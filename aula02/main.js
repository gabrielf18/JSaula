const cars = ['gol', 'fusca', 'tesla']

console.log(cars)


const[firstCar, secondCar, thirdCar] = cars

console.log(firstCar)
console.log(secondCar)
console.log(thirdCar)



const pessoa = {
    nome: 'Gabriel',
    idade: 21,
    cidade: 'Caraguatatuba'
}

const {nome, idade, cidade:city} = pessoa

console.log(city)

const end = {
    rua: 'Pedro Leandro',
    numero: 181,
    bairro: 'Massaguaçu'
}

const user = {
    email: 'user@gmail.com',
    userName: 'Gabriel',
    ...end
}

// Destructing

const {userName, rua} = user

console.log(`olá ${userName}, sua rua é ${rua}`)

const filme = ['Lord of the Rings', 2000, 'Tolkien', 'Peter Jackson']

const [, , autor] = filme

console.log(`O autor do filme é o ${autor}`)



/* --------------FUNCÇÕES------------------*/

function soma(valor1, valor2) {
    return valor1 + valor2
}

function sub(a, b) {
    return a - b
}

function mult(a, b) {
    return a*b
}

function div(a, b) {
    console.log(a/b)
}

console.log(soma(2, 3))
console.log(sub(7, 3))
console.log(mult(2, 9))
div(30, 10)

const calculadora = {
    sum: function (a, b){
        return a+b
    },
    sub: function (a,b){
        return a-b
    },
    mult: function(a,b) {
        return a*b
    },
    div: function(a,b) {
        return a/b
    }
}

console.log(calculadora.sum(10, 5))
console.log(calculadora.sub(10, 5))
console.log(calculadora.div(10, 5))
console.log(calculadora.mult(10, 5))


const multiplicaTudo = (a, b, c, d ) => a * b * c * d


console.log(multiplicaTudo(5,4,3,2))


class Car {
    constructor(name, year) {
        this.name = name
        this.year = year
    }
    showCar() {
        console.log(`O nome é ${this.name} ano ${this.year}`)
    }
}

const car1 = new Car('Fiesta', 2014)

console.log(car1.name)

car1.showCar()



class Calculadora {
    constructor(a, b){
        this.a = a
        this.b = b
    }
    soma() {
        return console.log(this.a + this.b)
    }
    sub() {
        return console.log(this.a - this.b)
    }
    div() {
        return console.log(this.a / this.b)
    }
    mult() {
        return console.log(this.a * this.b)
    }
}

const calcular = new Calculadora(10, 2)

calcular.soma()
calcular.sub()
calcular.div()
calcular.mult()