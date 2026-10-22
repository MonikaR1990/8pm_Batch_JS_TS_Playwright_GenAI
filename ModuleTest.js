import { greet, add, sub } from '../JavaScript/Modules.js'

import { schoolName, pi } from '../JavaScript/Modules.js'

import { Person } from '../JavaScript/Modules.js'  //Normal Class

import Employee from '../JavaScript/Modules.js'    //default class

greet("Banu")

add(5, 6)

sub(20, 5)

console.log(schoolName)

function areaOfCircle(r)
{
    console.log(pi*r*r)
}

areaOfCircle(5)

let p1 = new Person("Raghu", 22)
p1.display()

let e1 = new Employee()
e1.display()
