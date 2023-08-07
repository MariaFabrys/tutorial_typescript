//interface is a contract

interface Human{
    name: string
    age?: number //optional
    [prop:string]: any //dynamic attribute (name)
    salute(middleName: string): void//type return

}

function welcomeHello(people: Human){

    console.log("Hello," + people.name)

}

function changeName(people: Human){
    people.name = 'Duda'
}

const people:Human = {
    name: "Maria",
    age: 18,
    salute(middleName: string){
        console.log('Hello, my name is '
        //"this" belongs to the object and the "middleName" parameter access

        + this.name + ' ' + middleName
        ) 
    }
}

welcomeHello(people)
changeName(people)
welcomeHello(people)
// welcomeHello({name: 'Eduarda', age: 18, height: 1.65 })
people.salute('Fabris')

//using class...

class Client implements Human {
    name: string = ''
    lastPurchase: Date = new Date
    salute(middleName: string){

        console.log('Hello, my name is '
        + this.name + ' ' + middleName
        ) 
    }

}

const myClient = new Client()
myClient.name = 'Chaol'
welcomeHello(myClient)
myClient.salute('Westfall')
console.log(myClient.lastPurchase)

//function interface

interface CalcFunction{
    (a: number, b: number): number
                            //return type number 

}
let Exponentiation: CalcFunction

Exponentiation = function(base: number, exp: number): number {
    //Math.pow(3,10)
    //3 ** 10
    return Array(exp).fill(base).reduce((t, a) => t * a)

}
console.log(Exponentiation(8, 2))
