class Person
{
    constructor(name)  //local variable
    {
        this.name = name
    }
    displayName()
    {
        console.log(this.name)
    }
}

class Employee extends Person
{
    constructor(name, empId)
    {
        super(name) //child class to access the parent class constructor
        this.empId = empId
    }
    displayEmployeeDetails()
    {
        super.displayName()
        console.log(this.empId)
    }
}

class Manager extends Employee
{
    constructor(name, empId, dept)
    {
        super(name, empId)
        this.dept = dept
    }
    displayManagerDetails()
    {   
        super.displayEmployeeDetails()
        console.log(this.dept)
    }
}

// let e = new Employee("Bala", 101)
// e.displayEmployeeDetails()

let m = new Manager("Bala", 101, "IT")
m.displayManagerDetails()


//this --> it refers the current object or instance
//super --> child classed to access the parent class constructor and method

//for constructor access ==> super(parent class constructor value) --> super()
//for method access ==> super.parentcalssmethodName() 