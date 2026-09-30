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

class Dog extends Animal    //Child class //Sub Class //Drived Class
{
    bark()
    {
        console.log("Barking")
    }
}

class Cat extends Animal
{
    meow()
    {
        console.log("Meowing")
    }  
}

class Lion extends Animal
{
    roar()
    {
        console.log("Roaring")
    }
}

class Puppy extends Dog
{
    play()
    {
        console.log("Playing")
    }
}

class Kitten extends Cat
{
    dancing()
    {
        console.log("Dancing")
    }
}


let l = new Lion()
l.eat()
l.sleep()
l.roar()