//Inheritance: one class can inherit/acquire the properties, methods of another class.
//The class which inherits the properties of others is known as subclass (derieved class, child class)
//The class whose properties are inherited is known as superclass

const Person= require("./Method")
//inheriting person into child class
class Pet extends Person{

    //when it have same method name, it overwrites. else it will print what the output from parent class: Germany
    get location()
    {
        return "BlueCross"
    }
    
    constructor(firstName, lastName)
    {
        //call parent class constructor
        super(firstName,lastName)
    }
}

let pet = new Pet("Hazel", "Hershey")
pet.fullName()
console.log(pet.location)