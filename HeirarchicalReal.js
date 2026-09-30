class Person
{
    constructor(name, age, id)
    {
        this.name = name  //Mani  //Meenu
        this.age = age  //35    //22
        this.id = id //102  //676
    }
    showDetails()
    {
        console.log("Name: " + this.name) //Mani //Meenu
        console.log("Age: " + this.age) //35 //22
        console.log("ID: " + this.id) //102 //676
    }
}

class Doctor extends Person
{
    constructor(name, age, id, specialization)
    {   
        super(name, age, id)
        this.specialization = specialization  //ENT
    }
    showDoctorDetails()
    {
        super.showDetails() 
        console.log("Specialization: " + this.specialization)
    }
}

class Nurse extends Person
{
    constructor(name, age, id, shift)
    {
        super(name, age, id)
        this.shift = shift   //Night Shift
    }
    showNurseDetails()
    {
        super.showDetails()
        console.log("Shift: " + this.shift)   
    }
}

class Patient extends Person
{
    constructor(name, age, id, disease)
    {
       super(name, age, id)
       this.disease = disease
    }   
    showPatientDetails()
    {
        super.showDetails()
        console.log(this.disease)
    }
}



let d = new Doctor("Mani", 35, 102, "ENT")
d.showDoctorDetails()


let n = new Nurse("Meenu", 22, 676, "Night Shift")
n.showNurseDetails()

let p = new Patient("Raghu", 44, 777, "Virus Fever")
p.showPatientDetails()