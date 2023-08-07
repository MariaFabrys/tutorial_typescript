//string
let name: string = 'Maria'
console.log(name)

//number
let age: number = 18
console.log(age)

//boolean
let haveHobby: boolean = true
console.log(haveHobby)


//types any

let minhaIdade: any
minhaIdade = 18
console.log(typeof minhaIdade)
minhaIdade = '18'
console.log(typeof minhaIdade)

//array
let hobby: any[] = ["read", "study", "write"]
console.log(hobby[0])
console.log(typeof hobby)

hobby = [100]

//tuplas
let address : [string, number, string]= ["flowers", 123, "street one"]
console.log(address)

//enums
enum Colors {
    gray,  //0
    green,
    red,
    purple
}
let myColor: Colors = Colors.red
console.log(myColor)

//

export{};
