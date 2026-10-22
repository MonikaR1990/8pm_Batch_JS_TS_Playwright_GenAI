//Callback

function greet(callback)
{
    console.log("Hello...")
    callback()
}

function sayHi()
{
    console.log("Hi...")
}

//greet(sayHi)

//Callback is a function passed as parameter to the another function, which is executed later

function orderFood(callback)
{
    console.log("Food is being Prepared")

    setTimeout(()=>{
        console.log("Food is Ready")
        callback()
    }, 3000)
}

function foodDeliver()
{
    console.log("Food has been deliver to the customer")
}

//orderFood(foodDeliver)


function processPayment(amount, callback)
{
    console.log("Processing Payment: " + amount)

    setTimeout(()=>{
        const paymentSuccess = true

        if(paymentSuccess)
        {
            callback("Success", amount)
        }
        else
        {
            callback("Failed", amount)
        }
    }, 3000)
}

function paymentResult(status, amount)
{
    if(status === "Success")
    {
        console.log("Payment of Rs. ", amount, "Completed Successfully")
    }
    else
    {
        console.log("Payment of Rs. ", amount, "Failed")
    }
   
}

//processPayment(5000, paymentResult)

//Callback Hell Problem

function login(callback)
{
    console.log("1. Login Successful")

    setTimeout(()=>{
        callback()
    }, 2000)
}

function getProfile(callback)
{
    console.log("2. Profile Loaded")

    setTimeout(()=>{
        callback()
    }, 2000)
}

function getOrder(callback)
{
    console.log("3. Order Received")

    setTimeout(()=>{
        callback()
    }, 2000)
}

function makePayment(callback)
{
    console.log("4. Payment Successful")

    setTimeout(()=>{
        callback()
    }, 2000)

}

function check()
{
    
}

//Call back Hell Problem

login(()=>{
    getProfile(()=>{
        getOrder(()=>{
            makePayment(()=>{
                console.log("5. Process Completed")
            })
        })
    })
})

test('Test1', ()=>{
     
})

