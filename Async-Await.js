// function login()
// {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("1. Login Successful")
//             resolve()
//         }, 2000)
//     })
// }

// function searchTrain()
// {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("2. Train Found")
//             resolve()
//         }, 2000)
//     })
// }

// function selectSeat()
// {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("3. Select Seat")
//             resolve()
//         }, 2000)
//     })
// }

// function pay()
// {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("4. Payment Successful")
//             resolve()
//         }, 2000)
//     })
// }

// function getTicket()
// {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("5. Ticket Downloaded")
//             resolve()
//         }, 2000)
//     })
// }

// // login()
// //     .then(()=>searchTrain())
// //     .then(()=>selectSeat())
// //     .then(()=>pay())
// //     .then(()=>getTicket())
// //     .then(()=>console.log("Train Ticked Booking Completed"))
    
// //async/await ==> to handle async-await

// async function bookTrainTicket()
// {
//     await login()
//     await searchTrain()
//     await selectSeat()
//     await pay()
//     await getTicket()

//     console.log("6. Ticket Booked Successfully")
// }   

// bookTrainTicket()

//async ==> a function that contains asynchronus process (promise) 
//        ==> that always returs a promise 

//await ==> wait untill the promise is completed, then give the result


//Promise
// function login(username, password)
// {
//     return new Promise((resolve, reject)=>
//     {
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

// async function checkLogin() 
// {
//     try
//     {
//     const result = await login("Admin", "Admin@123")
//     console.log(result)
//     }
//     catch(error)
//     {
//         console.log(error)
//     }
// }

// checkLogin()

// //Promise
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


// async function verifyOTP() 
// {
//     try
//     {
//     const result = await otpVerify(1234) 
//     console.log(result)
//     }
//     catch(error)
//     {
//         console.log(error)
//     }
// }

// verifyOTP()

//Promise

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


async function checkResult() 
{
    try
    {
    const result = await interviewProcess(85)  
    console.log(result.status)
    }
    catch(error)
    {
        console.log(error)
    }
}

checkResult()
