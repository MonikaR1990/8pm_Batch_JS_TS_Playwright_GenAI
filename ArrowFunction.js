//arrow function ==> short way to write a function

// function add(a, b)    //Normal Function
// {
//     console.log(a+b)
// }

const sum = (a, b)=>console.log(a+b)  //anonymus function

sum(6, 6)

// function greet()
// {
//     console.log("Hello")
// }


const greet = ()=>console.log("Hello")

greet()

// function greetings(name)
// {
//     let message = "Hello"
//     console.log(message + " " + name)
// }

const greetings = name=>
{
    let message = "Hello"
    console.log(message + " " + name)
}

greetings("Meenu")

//callback


// greet(function sayHello() {
//     console.log("Say Hi")
//     })

setTimeout(()=>{
    console.log("Hello")
    })


const  salaryCalculation = (basic, hra, allowance)=>
{
    let salary = basic + hra + allowance
    return salary
}

// let squareRoot = a => console.log(a*a)   //void type

// squareRoot(5)

// let squareRoot = a => {   //explicit retrun
//     return a*a
// }

// console.log(squareRoot(6)+4)

let squareRoot = a => a*a   //implicit return for just single line statement

console.log(squareRoot(4)+4)

