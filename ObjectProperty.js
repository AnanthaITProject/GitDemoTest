//object is collection of properties

let person = {
    firstPerson : "Tim",
    lastPerson : "Jerry",
    age: 45,
    fullName: function()
    {
        console.log(this.firstPerson+this.lastPerson)
    }
}

//print out functions
console.log(person.fullName())

console.log(person.firstPerson)

//access by array
console.log(person['lastPerson'])

//change properties value
person.firstPerson = "jack"
console.log(person.firstPerson)

//to check does the properties have the string or not
console.log('lastPerson' in person)

//add new property
person.age = 26
console.log(person.age)
console.log(person)

//delete properties
delete person.firstPerson
console.log(person)

//print all value of javascript object
for(let key in person)
{
    console.log(person[key])
}

