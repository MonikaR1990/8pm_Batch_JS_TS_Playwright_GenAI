//Synchronus ==> Executing the task one after another, in sequence. The next task start only after the current task finishes

// console.log("Task 1")
// console.log("Task 2") 
// console.log("Task 3")

//ASynchronus

// console.log("Task 1")

// setTimeout(()=> {
//     console.log("Task 2")
// }, 3000)                       //delay process

// console.log("Task 3")          //

//Asynchronous

//you place order
//The kitchen starts preparing food\
//While waiting, we can talk to your friends
//When the food is ready, you eat


//schedules a task to run after 2 seconds

console.log("Hai")
setTimeout(()=>{  
    console.log("Everyone")  //executes a function once after a specified time 
}, 3000) 
console.log("Hello")


setInterval(()=>{   //executes the function repeatedly at specified time interval until it stopped
    console.log("Hello")
}, 3000)

//Asynchronous process handles in three ways
//1. Callback
//2. Promise
//3. Async-Await