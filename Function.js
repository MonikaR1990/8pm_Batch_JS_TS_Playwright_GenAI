
greet()

function greet()     //function definition //function without parameter
{
    console.log("Hello Everyone")
}

greet()   //function call

greet()


greet()


function add(a, b) //function with multiple parameter
{
    console.log(a+b)
}

add(6, 5) 

add(6, 5)

function greetings(name)  //function with single parameter
{
    console.log("Hello " + name)
}

greetings("Bala")

function sum(a, b)
{
    console.log(a+b)
}

sum(6, 7)

//void is just performs the action

// const result = sum(5, 2)
// console.log(result)

function sum(a, b)
{
    return a+b
}

console.log(sum(5, 3))

const result = sum(5, 6) + 4  //8 return back the value
console.log(result)

function salaryCalculation(basic, hra, allowance)
{
    let salary = basic + hra + allowance
    return salary
}

let bonus = 5000
let updatedSalary = salaryCalculation(15000, 3000, 2000) + bonus
console.log(updatedSalary)


console.log(sub(5, 2))

const sub = function(a, b) //anonymus function
{
    return(a-b)
}

console.log(sub(5, 2))