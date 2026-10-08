//Array ==> Array is a data structure which is used to store multiple data/value in one variable

//Array is based on Index. Index starts from "0"

let name = "Mani"

console.log(name)  //Mani

let names = ["Bala", "Mani", "Ram"]   //Literal way  //string[]

let numbers = new Array(1, 2, 3, 4, 5)  //Constructor Way  //number[]

console.log(numbers) 

console.log(names)
console.log(names[0])
console.log(names[1])
console.log(names[2])   //Read 

//CRUD
names[2] = "Ramuu"      //Update

console.log(names)

//Array important property ==> length

console.log(names.length)  //total numbers of elements or values
console.log(numbers.length)

//Add values to Array

names.push("Hari")  //Add the element at the end

names.unshift("Meena") //Add the element at the first
console.log(names)

//Remove

names.pop() //Removes the last Elemet

names.shift() //Removes the first element 

names.shift()

console.log(names)

//let data = []  //Empty Array

let data = ["Bala", 1, true, "Meena", undefined]   //tuple

for(let d of data)
{
    console.log(d)
}

//splice() and slice()

//splice() ==> this method is used to add, remove, modify elements from an array
//it transforms the original array

let fruits = ["Apple", "Banana", "Cherry", "Mango", "Guva"]

fruits.splice(1, 2)

console.log(fruits)

fruits.splice(0, 0, "Orange", "Papaya")

console.log(fruits)

fruits.splice(2) 

console.log(fruits)


//1 --> Start Index
//2 --> How Many elements need to remove

//slice() ==> method used to extract the portion of array and store them in a new array

let users = ["Mani", "Priya", "Hari", "Kavin", "Muthu", "Rani"]

for(let u of users)
{
    console.log(u)
}    

//const newUsers = users.slice(2, 5)

//console.log(newUsers)

// const updatedUser = users.slice(1)

// console.log(updatedUser)

const updatedUser = users.slice(-1)

console.log(updatedUser)

//1 --> Start Index  //Include
//2 --> End Index    //Exclude


//slice() and splice()

//slice()
//new array return
//not modify the original array
//extraction purpose



//splice()
//modify the original array
//add, remove, update

let course = ["Java", "JS", "Python", "C#", "C", "C++", "Java"]


//for loop

for(let i = 0; i<course.length; i++)
{
    console.log(course[i])
}    

for(let lang of course)
{
    console.log(lang)
}

let arr1 = [1, 2, 3]
let arr2 = [ 4, 5]

//concat()

console.log(arr1.concat(arr2))

//includes()

console.log(course.includes("Java"))
console.log(course.includes("Ruby"))

//indexOf

console.log(course.indexOf("C++"))

console.log(course.indexOf("Java"))

console.log(course.lastIndexOf("Java"))

//join()

console.log(course.join("@"))

//find() ==>returns the first matcing element in an array

let num1 = [10, 20, 30, 40, 50]

let num2 = num1.find(x=>x>30)  //40  //number
console.log(num2)

//filter() ==>Returns all matching elements

const num3 = num1.filter(x=>x>30)  //number[]
console.log(num3)

//map() ==> It transforms each elements in an array
const num4 = num1.map(x=>x+100)
console.log(num4)

console.log(num1.every(x=>x>20)) //checks whether all elements in an array satisfies the condition
console.log(num1.some(x=>x>20)) //check whether atleast one elements in an array satisfies the condition

//Destructuting

let colors = ["Red", "Blue", "Green"]

console.log(colors[2])

const [c1, c2, c3] = colors 

console.log(c1)
console.log(c2)
console.log(c3)

const user = ["John", 101, "Tester"]

console.log(user[0])
console.log(user[1])
console.log(user[2])

const [uname, uid, jobtitle] = user

console.log(uname)
console.log(uid)
console.log(jobtitle)

//Spread Operator (...) //takes the elements from an array and spread them into another array 

let a = [1, 2]
let b = [...a, 3, 4]

console.log(b)

//Rest Operator (...) //Rest Operator collects multiple remaining values and stores them in a single variable

const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const [first, second, third, ...rest] = values

console.log(first) //10
console.log(second) //20
console.log(third) //30

console.log(rest)



