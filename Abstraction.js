//Abstraction 

class Car
{
    start()
    {
        this.#startEngine()
        console.log("Car Started")
    }

    #startEngine()              //Private Method
    {
        console.log("Engine Started Internally")
    }

}

let c = new Car()
c.start()


class BankAccount
{
    withdraw(amount)
    {
        this.#checkBalance(amount)
        this.#proceessTrascation(amount)
    }

    #checkBalance(amount)
    {
        console.log("Checking Amount Balance: ", "Rs", amount )
    }

    #proceessTrascation(amount)
    {
        console.log("Processing Amount: ", "Rs", amount )
    }
}


let ba = new BankAccount()
ba.withdraw(5000)

//Abstraction ==> Hide Complexity
//Encapsulation ==> Protect Data