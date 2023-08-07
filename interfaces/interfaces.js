"use strict";
//interface is a contract
function welcomeHello(people) {
    console.log("Hello," + people.name);
}
function changeName(people) {
    people.name = 'Duda';
}
const people = {
    name: "Maria",
    age: 18,
    salute(middleName) {
        console.log('Hello, my name is '
            //"this" belongs to the object and the "middleName" parameter access
            + this.name + ' ' + middleName);
    }
};
welcomeHello(people);
changeName(people);
welcomeHello(people);
// welcomeHello({name: 'Eduarda', age: 18, height: 1.65 })
people.salute('Fabris');
//using class...
class Client {
    constructor() {
        this.name = '';
        this.lastPurchase = new Date;
    }
    salute(middleName) {
        console.log('Hello, my name is '
            + this.name + ' ' + middleName);
    }
}
const myClient = new Client();
myClient.name = 'Chaol';
welcomeHello(myClient);
myClient.salute('Westfall');
console.log(myClient.lastPurchase);
let Exponentiation;
Exponentiation = function (base, exp) {
    //Math.pow(3,10)
    //3 ** 10
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(Exponentiation(8, 2));
