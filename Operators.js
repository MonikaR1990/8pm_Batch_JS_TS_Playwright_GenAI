//Operators
//1. Arithmetic Operators
//2. Assignment Operators
//3. Comparison Operators
//4. Logical Operators
//5. Unary Operators
//6. Ternary Operators
//7. String Operators
//8. typeOf Operator

//Arithmetic Operators (+, -, *, /, %)

let a = 10
let b = 20

// a = a + 10

// a += 10   //a = a + 10

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

//Assignment Operators (=, +=, -=, *=, /=)

let c = 10

c += 5 //c = c + 5  ==> 15

c -= 5 //c = c - 5 ==> 10

c *= 5 // c = c * 5 ==> 50

c /= 5 // c = c / 5 ==> 10

//Comparison Operators (==, ===, !=, !==, >, <, <=, >=)

console.log(5==5)

console.log(5=="5") //doesn't consider the data type it only check the value

console.log(5==="5") //it check both value and datatype (strict equal)

console.log(5!="5")

console.log(5!=="5")

console.log(5>4) //true

console.log(5>5) //false

console.log(5<4)  //false

console.log(5>=5) //true

//Logical Operators (&&, ||, !)

console.log((5>=5) && (5==5) && (5==="5"))

console.log((5<5) || (5>5) || (5==="5"))

console.log(!true)

let isActive = false

console.log(!isActive)

//Unary Operators (+, -, ++, --)

let m = -5 //( - it defines the sign value of the number)

let x = 5

console.log(x++) //post increment  // x = 6

console.log(x--) // post decrement // x = 5

console.log(x)

console.log(++x) // pre increment // x = 6

console.log(--x) // pre decrement // x = 5

//Ternary Operators

let age = 25

let hasVoterID = true

const result = ((age>=18) && hasVoterID) ? "Eligible for Vote" : "Not Eligible for Vote"

console.log(result)

let n1 = 10
let n2 = 20

const n3 = (n1>n2) ? n1*2 : n1*3 
console.log(n3)

let color = "red"

let signal = ("color" === "red") ? "STOP" : "GO"
console.log(signal)

//String Operator

console.log(5+"Five") //concat

//typeOf()

let z

console.log(typeof(signal))
console.log(typeof(hasVoterID))
console.log(typeof(n3))

console.log(typeof(z))







