function add (a , b)
{
    c=a+b
    return c
}
console.log(add(2,3))

//do not have name => Anyonymus function => Function experssions
let sumOfInt =  function(c,d)
{
    return c+d
}

//another way of writing function using fatpipe
let sumOfNewInt = (e,f)=>e+f
console.log(sumOfNewInt(9,8))

// Var: global level/functional
// let: global level/block - it refer to main declaration.
//if both greet declare as var means Afternoon will be the output, if let means the output will be Morning
let greet = "Morning"
if(1==1)
{
    let greet = "Afternoon"
}
console.log(greet)

