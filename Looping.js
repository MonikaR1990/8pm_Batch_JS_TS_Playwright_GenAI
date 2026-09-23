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

                                              
//