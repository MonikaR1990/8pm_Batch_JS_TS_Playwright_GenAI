//ES6 features

//1. let and const

//let age = 25
//age = 27   //Allow Re-assign
//let age = 29 //Not Allow Re-Declaration
//hoisting (reference error) ==> cannot use variable before declaration
//let is block level scope

const ename = "Mani" 
//ename = "Muthu"  //Not Allow Re-Assign
//const ename = "Ram" //Not Allow Re-Declaration
//hoisting (reference error) ==> cannot use variable before declaration
//const is block level scope

// {
//     let lname = "Ram"
// }
// console.log(lname)

//2. Arrow Function

//A shorter way of write function

add(5, 5)

function add(a, b)
{
    console.log(a+b)
}

//sum(5, 5)

let sum = (a, b)=>console.log(a+b)  //arrow function (anonymous function)

//short
//normal function we call before the function defination, but arrow function variable not able call before the function definaition
//normal function callback used in callback is difficult but arrow function is easy in callbacks

setTimeout(function greet(){
    console.log("Hello")
}, 3000)

setTimeout(()=>{
    console.log("Hello")
}, 3000)


//3. Template Literals

let fname = "Rani"
let age = 25
let city = "Trichy"

console.log("My Name is " + fname + " and my age is " + age + " and my native is " + city)
console.log("My Name is" , fname , "and my age is",  age , "and my native is " , city)

console.log(`My name is ${fname} and my age is ${age} and my native is ${city}`)

//4. Default Parameter

function greetings(name = "Guest")
{
    console.log(`Welcome ${name}`)
}


greetings() //Welcome Guest (When caller does not pass the value the default parameter provide default value)
greetings("Priya") //Welcome Priya

function login(username = "testuser@gmail.com", password = "Test@123")
{
    console.log(username)
    console.log(password)
}

login()
login("priya@gmail.com", "priya@123")

//5. Destructuring

//Extract values from arrays and objects into variables

//Array Destructuring

const colors = ["Red", "Blue", "Green"]

const [first, second] = colors

console.log(first)
console.log(second)

const student = {
    name: "Ram",
    sage: 22,
    id: 101
}

console.log(student.name)  //Ram

const { name, sage, id } = student

console.log(name)  //Ram

//6. Spread Operator (...) 

const a = [1, 2, 3]
const b = [...a, 4, 5]

console.log(b)

const user = { 
    name: "Raji",
    age: 25
}

const updateUser = {
    ...user,
    id: 101
}

//Copies or Expand array and object values 