console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")


//Looping

//for loop
//while loop
//do..loop

/*
1
2
3
4
5 
*/
for(let i = 1; i<=5; i++)
{
    console.log(i)
}

for(let i = 1; i<=5; i++)
{
    console.log("Hello")
}

//start --> check --> execute --> increment --> check again ---> excute

for(let i = 2; i<=20; i+=2) //i = i + 2
{
    console.log(i)
}

for(let i = 1; i<=20; i+=2) //odd number
{
    console.log(i)
}

for(let i = 1; i<=100; i++)
{
    console.log("Notification Sent to user: " + i)
}    

let sum = 0

for(let i = 1; i<=5; i++)
{
    sum += i            //sum = sum + i       // i = 1   sum = 1
}                                             // i = 2   sum = 3
console.log(sum)                              // i = 3   sum = 6
                                              // i = 4   sum = 10
                                              // i = 5   sum = 15
                                              // i = 6

let str = "Welcome"  //string length = total nu.of character = 7
let rev = "" //empty
for(let i = str.length-1; i>=0; i--)
{
    rev += str[i] // rev = rev + str [i]
}

console.log(rev)
/*
i = 6    6>=0   rev = "" + str[6]  rev = e
i = 5    5>=0   rev = e + str[5]   rev = e + m = em 
i = 4    4>=0   rev = em + str[4]  rev = em + o = emo
i = 3    3>=0   rev = emo + str[3] rev = emo + c = emoc
i = 2    2>=0   rev = emoc + str[2]  rev  = emoc + l = emocl
i = 1    1>=0   rev = emocl + str[1]  rev = emocl + e = emocle
i = 0    0>=0   rev = emocle + str[0]  rev = emocle + w = emoclew
i = -1   -1>=0  
*/

//While Loop ==> when you don't know the count of how many times it mainly based on a condition

let i = 6  //initialization

while(6<=5) //condition check
{
    console.log(i)
    i++  //increment
}

let password = ""   //"1234"

while(password !== "1234")     // "" != "1234" (true)
{                                password = "1234"
    password = "1234"
}                              // "1234" != "!234" (false)

console.log("Login Successful")

//do while loop  //must execute at least once without checking condition

let j = 6
do
{
    console.log(j)
    j++
} while(j<=5) //first execute code and then check condition

//even though the condition fails initialy, the code excute once
const prompt = require("prompt-sync")()

let pin;

do
{
    pin = prompt("Enter Pin: ")
}while("pin" !== "1234")

console.log("Account Opened")

//for loop --> Whenever we know the number of iteration count 
//while loop -->  Used when the iteration count is unknown, depends on the condition
//do..while --> Used code must execute atleast once before checking the condition







//for...of