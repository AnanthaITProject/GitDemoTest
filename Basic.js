console.log("Hello world")

//var can be redeclared
//let cannot be redeclared
//but bot var & let can be reinitiallized
//const cannot be reinitialized
 

var a= 2
var b=4.9
let c = "ABC"
let d = true
console.log(a+b)
console.log(typeof(a))
console.log(typeof(c))
console.log(typeof(d))

//below code will fall error because initially have declared by let, therefror cannot redeclare as var.
//var c = 4
var b = "Hello"
console.log(typeof(b))

//Reverse Boolean
console.log(!d)

const e = "hello"
console.log(e)

//const cannot redeclare again
//const e = 34
//console.log(e)
