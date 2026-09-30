class Animal            //Parent Class //Super Class //Base Class
{
    eat()
    {
        console.log("Eating")
    }
    sleep()
    {
        console.log("Sleeping")
    }
}

class Dog extends Animal         //Child class //Sub Class //Drived Class
{
    bark()
    {
        console.log("Barking")
    }
}

let d = new Dog()
d.eat() 
d.sleep()
d.bark()

//inheritance a class that acquires/reuse properties and methods from Class using "extends" keyword is known as inheritance

//Type of Inheritance
//1. Single inheritance
//2. Multilevel inheritance
//3. Heirachical inheritance
//4. Hybrid inheritance

//5. Multiple Inheritance