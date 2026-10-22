//Promise is Object represents the eventual result of an asynchronous process

//I will give the result the result later that may be resolved or reject

//Prmise has 3 states
//1. Pending
//2. Fullfilled (resolved)
//3. Rejected

// let myPromise = new Promise((resolve, reject)=>{
//     let success = false

//     if(success)
//     {
//         resolve("Success")
//     }
//     else
//     {
//         reject("Failed")
//     }

// })

// // myPromise
// //     .then(result=>console.log(result))   //The callback to execute when the Promise is resolved.
// //     .catch(error=>console.log(error))   // The callback to execute when the Promise is rejected.

//     //resolve() ==> call .then() ==> result=>console.log(result) ==> the value "Success" passed into result and printed



// // function greet()
// // {
// //     console.log("Hello")
// // }

// // greet()

// function login(username, password)
// {
//     return new Promise((resolve, reject)=>{

//         setTimeout(()=>{
//             if(username === "Admin" && password === "Admin@123")
//             {
//                 resolve("Login Successful")        
//             }
//             else
//             {
//                 reject("Login Failed")
//             }
//         }, 3000)
//     })
// }

// login("Admin", "Admin@123")
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))

/*
 Login
    |
user enters username, password
    |
Promise
    |
  Pending
    |       |
Success    Failure
(resolve)  (reject)
*/

// function otpVerify(otp)
// {
//     return new Promise((resolve, reject)=>{
//         console.log("Verifying OTP")

//         setTimeout(()=>{
//             if(otp === 1234)
//             {
//                 resolve("OTP verified successfully")
//             }
//             else
//             {
//                 reject("Invalid OTP")
//             }
//         }, 3000)
//     })
// }
// otpVerify(1234)
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))


function otpVerify(otp)
{
        setTimeout(()=>{
            if(otp === 12345)
            {
                console.log("OTP Verified Successfully")
            }
            else
            {
                console.log("Invalid OTP")
            }
        },3000)
}

otpVerify(12345)

function interviewProcess(candidateScore)
{   
    return new Promise((resolve, reject)=>{
        console.log("HR: Your Interview is completed")

        console.log("HR: We will update your status in 3 days")
        
        setTimeout(()=>{
            if(candidateScore>=80)
            {
                resolve({
                    status: "Selected",
                    company: "TCS",
                    role: "Software Test Engineer",
                    salary: 1000000 
                })
            }
            else
            {
                reject("Sorry!! Another candidate matched our requirements")
            }
                
        }, 3000)
    })
}

interviewProcess(74)
    .then(result=>console.log(result.status))
    .catch(error=>console.log(error))