//Objects

let name  = "Bala"

console.log(name)

let age = 22

let id = 101
 
let school = "ABC School"

//Object Literal way

let student = {     
    name: "Bala",   //Property //key values
    age: 22,
    id: 101,
    "school name": "ABC School"
}

//Object is a collection of key-value pairs used to store related infrmation and functionality

//Object is not primitive data type


//Object Constructor way

let employee = new Object()

employee.name="Mani"
employee.age = 32
employee.id = 101

console.log(employee)

console.log(student)

//To Access the Objects properties

//Dot notation

console.log(student.name)

console.log(employee.age)

console.log(student["school name"])

//Bracket Notation

console.log(student["school"])

const s1 = {
    name: "Meena",
    age: 21
}

const key = "name"

console.log(student[key])

//Add Property to an Object

const person = {
    name: "Priya",
    age: 25,
    isPresent: true,
    skills: ["Java", "JavaScript", "Python"],
    address: {
        city: "Trichy",
        pin: 620001
    },
    greet: function()
    {
        return this.name
    }

}



console.log(person)

person.salary = 50000 //add property
person.id = 101

console.log(person)

//update an existing property

person.age = 26

console.log(person)

//Delete Property

delete person.id

console.log(person)

console.log(person.skills[1])

console.log(person.skills)

console.log(person.address.city)

console.log(person.greet())

//Object on Method with Parameters
const calculator = {
    add: function(a, b)
    {
        console.log(a+b)
    },
    sub: function(a, b)
    {
       console.log(a-b) 
    },
    mul: function(a, b)
    {
       console.log(a*b) 
    },
    div: function(a, b)
    {
       console.log(a/b) 
    }

}