//Variables 
//It is a container which is used to store a data

//var
//let
//const

let name = "Bala"

let age = 12

//var

var ename = "Meena"  //Declartion

ename = "Bala"  //Re-assign

var ename = "Mani"  //Re-Declaration

console.log(ename)

//Var allowed Re-assign and redeclaration

var city = "Chennai"
var city = "Trichy"

console.log(city)

//let

let sname = "Ravi" //Declaration

sname = "Babu"  //Re-assign

//let sname = "Mona" //We can't redeclare the value of the varaiable

console.log(sname)

//Var allowed only re-assign and not suuport redeclaration

//const

const lname = "Mathu" //declaration

//lname = "Janani" // not allowed re-assign also

console.log(lname)

const country = "India"

//country = "USA" //Error  //not allowed re-assign

//const country = "France" //not support re-declaration

//Block Scope

{
    var a = 10
    console.log(a)
}

console.log(a)

{
    let b = 10
    console.log(b)
}

//console.log(b)

{
    let c = 10
    console.log(c)
}

//console.log(c)

//var is not block level scope (function scoped)
//let is block level scope
//const is also a block level scope


console.log(x) //hoisting

var x = 10


console.log(y) //hoisting

let y = 10

console.log(z) //hoisting

const z = 10

/*               var               let                  const
Features       old JS              ES6                   ES6
Reassignmnet    Yes                Yes                   No
Redeclaration   Yes                No                    No
Scope           Function Scope     Block Scope           Block Scope
Hoisting        Yes                Yes                   Yes
            (undefined, no error)  (Reference Error)     (Reference Error)
Initialization   not must          not must              must



*/

var p; //Declaration

p = 200

let q; //Declaration

q = 300

const r = 500;

 




