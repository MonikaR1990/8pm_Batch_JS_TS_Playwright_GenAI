//Polymorphism
//Poly - Many
//Morph = form

//one name, many forms

//two Types
//1. Method Overloading (Compile time polymorphism)
//2. Method Overriding  (Run time ploymorphism)

class Animal    //Parent
{
    sound()
    {
        console.log("Animal Makes Sound")
    }
}
class Dog extends Animal //Child
{
    sound()
    {
        console.log("Barking")    
    }   
}
class Cat extends Animal
{
    sound()
    {
        console.log("Meow")
    }
}

let d = new Dog()
d.sound()

let c = new Cat()
c.sound()


//Method Overloading - Not working in Javascript
class Addition
{
    add(a, b)
    {
        console.log(a+b)
    }
    add(a, b, c)
    {
        console.log(a+b)
    }
    add(a, b, c, d)
    {
        console.log(a+b)
    }
}

class Payment
{
    pay()
    {
        console.log("Pay amount")
    }
}

class UPIPayment extends Payment
{
    pay()
    {
        console.log("Payment using UPI ID")
    }
}

class CreditCard extends Payment
{
    pay()
    {
       console.log("Payment using Credit Card Number") 
    }

}

class COD extends Payment
{
    pay()
    {
       console.log("Payment COD") 
    }

}


let p;

p = new UPIPayment()
p.pay()

p = new CreditCard()
p.CreditCard()


 
class Notification     //Parent Class
{
    send()
    {
       console.log("Sending notification") 
    }
}

class SMSNotification extends Notification
{
    send()
    {
        console.log("Sending Notification using SMS")
    }
}

class WhatsAPPNotification extends Notification
{
    send()
    {
        console.log("Sending Notification using Whatassp Messenger")
    }
}

class EmailNotification extends Notification
{
    send()
    {
        console.log("Sending Notification using Email")
    }
}

let n;

n = new SMSNotification()
n.send()

n = new WhatsAPPNotification()
n.send()