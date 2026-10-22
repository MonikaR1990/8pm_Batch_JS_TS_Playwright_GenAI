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

//Array of Objects

let teacher = [
    {name: "Priya", subject: "Maths"},
    {name: "Ram", subject: "English"},
    {name: "Raj", subject: "Science"},
]

console.log(teacher[2].name)
console.log(teacher[2].subject)

let laptop = {
    brand: "HP",
    price: 42000,
    ram: "4GB",
    generation: 5
}

console.log(laptop.brand)
console.log(laptop.price)

//for...in loop

for(let key in laptop)
{
    console.log(key)
}


for(let k in laptop)
{
    console.log(laptop[k])
}

//Object.freeze(laptop)

// laptop.brand = "Dell"  //update
// laptop.warranty = 2    //add
// delete laptop.generation //


console.log(laptop)

Object.seal(laptop) //existing property can update

laptop.brand = "Dell"  //update
laptop.warranty = 2    //add
delete laptop.generation //Delete

console.log(laptop)

//Destructuring

let player = {
    pname: "Sachin",
    pnumber: 10,
    prank: 1
}

console.log(player.pname)

//Extracting the properties from the object and store them directly into variables

// const {pname, pnumber, prank} = player

// console.log(pname)
// console.log(pnumber)
// console.log(prank)

const updatePlayer = {
    ...player,     //spread operator 
    city: "Mumbai",
    isRetierd: true
}

console.log(updatePlayer)

const { pname, pnumber, } = updatePlayer  //rest operator

console.log(pname)
console.log(pnumber)

console.log(remaining)

//Object.keys
console.log(Object.keys(updatePlayer))

//Object.values
console.log(Object.values(updatePlayer))

//Object.entries
console.log(Object.entries(updatePlayer))


//Object.assign
let obj1 = { a: 1 }
let obj2 = { b: 2 }

let obj3 = Object.assign(obj1, obj2, { c: 3 })
console.log(obj3)