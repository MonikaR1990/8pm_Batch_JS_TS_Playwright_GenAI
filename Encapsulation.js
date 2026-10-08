class BankAccount
{
    #balance = 50000        //protected (cutomer can't change the value directly)

    showBalance()
    {
        return this.#balance
    }

    deposit(amount)
    {
        if(amount>0)
        {
            this.#balance += amount
        }
    }

    withdraw(amount)
    {
        if(amount<this.#balance)
        {
            this.#balance -= amount
        }
    }

}

let ba1 = new BankAccount()
console.log(ba1.showBalance())
ba1.deposit(10000)
console.log(ba1.showBalance())

/*
    #balance
    deposit() - Method to modify the data
    showBalance() --> Method to access the data

*/