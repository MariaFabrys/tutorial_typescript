"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//string
let name = 'Maria';
console.log(name);
//number
let age = 18;
console.log(age);
//boolean
let haveHobby = true;
console.log(haveHobby);
//types any
let minhaIdade;
minhaIdade = 18;
console.log(typeof minhaIdade);
minhaIdade = '18';
console.log(typeof minhaIdade);
//array
let hobby = ["read", "study", "write"];
console.log(hobby[0]);
console.log(typeof hobby);
hobby = [100];
//tuplas
let address = ["flowers", 123, "street one"];
console.log(address);
//enums
var Colors;
(function (Colors) {
    Colors[Colors["gray"] = 0] = "gray";
    Colors[Colors["green"] = 1] = "green";
    Colors[Colors["red"] = 2] = "red";
    Colors[Colors["purple"] = 3] = "purple";
})(Colors || (Colors = {}));
let myColor = Colors.red;
console.log(myColor);
