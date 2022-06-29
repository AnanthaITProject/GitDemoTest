//if i want the this class to used  by other class, ill add module.exports = 

module.exports = class Person {
    age = 25

    //Getter method
    get location()
    {
        return "Germany"
    }

    //Constructor is method which executes by defalt when u create object of the class
    constructor(firstName, lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
    }

    //methods
    fullName()
    {
        console.log(this.firstName+this.lastName)
    }

}

//Note: below code are only commented out because using this class in other class page

// let person = new Person("Darshini", "Anantharooban")
// let person1 = new Person("Happy", "Life")
// console.log(person.age)
// console.log(person.location)
// person.fullName()
// person1.fullName()
