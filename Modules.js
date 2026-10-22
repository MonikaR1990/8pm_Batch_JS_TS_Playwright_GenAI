export function greet(name)
{
    console.log("Hello" , name)
}

export function add(a, b)
{
    console.log(a+b)
}

export function sub(a, b)
{
    console.log(a-b)
}


export let schoolName = "ABC School"

export let pi = 3.14

export class Person
{
    constructor(name, age)
    {
        this.name = name
        this.age = age
    }
    display()
    {
        console.log("Person Name " , this.name)
        console.log("Person Age ", this.age)
    }
}

// let p = new Person("Bala", 22)
// p.display()









//greet("Banu")

//export ==> Send a function, variable, class from one file another file
//import ==> Receive and use that function, variable, class in another file

export default class Employee
{
    display()
    {
        console.log("Employee")
    }
}

//export default let city = "AGS" //wrong

// let city = "Chennai"

// export default city;

//multiple default value canot use in singlr file