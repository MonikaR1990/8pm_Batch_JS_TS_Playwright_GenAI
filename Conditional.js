//Control Statements or Flow

//Conditional Statement
//Iteration Statement (Looping Statements)
//Jumping Statement

//Conditional Statement
//1. simple if
//2. if...else
//3. if..else..if (else if)
//4. Nested if
//5. Switch 

// if(5<=5) //true enter into block {} 
// {
//     console.log("Hello")
// }

if(5<5)
{
    console.log("Hello..Hi")
}
else
{
    console.log("Bye....")
}

//else...if...else (Multiple condition)

let mark = 32

if(32>=90 && mark<=100)
{
    console.log("Grade A")
}
else if(mark>=75 && mark<=89)
{
    console.log("Grade B")
}
else if(mark>=65 && mark<=74)
{
    console.log("Grade C")
}
else if(mark>=55 && mark<=64)
{
    console.log("Grade D")
}
else if(mark>=35 && mark<=54)
{
    console.log("Grade E")
}
else
{
    console.log("Fail")
}

let amount = 5000

if(amount>=10000)
{
    console.log("30% Discount")
}
else if(amount>=5000)
{
    console.log("20% Discount")
}
else if(amount>=2000)
{
    console.log("10% Discount")
}
else
{
    console.log("No Discount")
}

console.log("Shopping Completed")

//Nested if

let age = 17
let citizen = "American"
let hasVoterId = false


if(age>=25)
{
    if(citizen === "Indian")
    {
        if(hasVoterId)
        {
            console.log("Able to Vote")
        }
        else
        {
        console.log("Not Able to Vote")
        }
    }
    else
    {
        console.log("For Voting process Should be Indian")
    }
}
else
{
    console.log("Not Eligible for Vote")
}

//Switch Case
let day = 0  //global varible

switch(day)
{
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuseday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid Number")
}

// let a = 10
// let b = 2

// let op = "+"

// switch(op)
// {
//     case "+":
//         console.log(a+b)
//         break
//     case "-":
//         console.log(a-b)
//         break
//     case "*":
//         console.log(a*b)
//         break
//     case "/":
//         console.log(a/b)
//         break
//     default:
//         console.log("Invalid Operator")
// }

// let color = "Red"

// switch(color)
// {
//     case "Red":
//         console.log("STOP")
//         break
//     case "Green":
//         console.log("GO")
//         break
//     case "Yellow":
//         console.log("Ready")
//         break
//     default:
//         console.log("Wrong Signal")
// }

//Multiple values with same output
let days = "Monday"

switch(days)
{
    case "Saturday":
    case "Sunday":
        console.log('Week End')
        break
    default:
        console.log("Invalid Day")
        break
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Working day")
        break       
}