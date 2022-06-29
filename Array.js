var marks = ["Hello","AD",1,26,4,2,96,97,123]

//redeclaring the array
submarks = marks.slice(1,8)
console.log(submarks)

// console.log(marks[3])
for (let index = 0; index < marks.length; index++) {
    const element = marks[index];
    console.log(element)   
}

//update index value
marks[6]=456
console.log("Updates index 6 value: "+marks[6])

//add one value
marks.push(987)
console.log("New array after add value: "+marks)

//delete last array in the list
marks.pop(987)
console.log("New array after delete last value: "+marks)

//Add value on first arrray
marks.unshift(567)
console.log("Add value on first arrray: "+marks)

console.log(marks.indexOf("AD"))//shows on which index the char located on array

console.log(marks.includes("JJJ"))//will check whether this value exist in the array and return true or false

var num = [34,53,89]
var sum = 0

for (let i = 0; i < num.length; i++) {
    sum = sum + num[i]   
}
console.log(sum)

//another method of sum using reduce
var sum1 = 0
let total = num.reduce((sum1,num)=>sum1+num,0)
//let total = num.reduce((Where the value will be added,Iterator)=>sum1+num,0)
console.log(total)

//practice reduce
var tscore = 0 
var Scores = [12, 13, 14 ,16]
let totalscore = Scores.reduce((tscore,Scores)=>tscore+Scores,0)
console.log(totalscore)

//create new array with even numbers of scores array 
var count = [12, 13, 14 ,16]
var evenScore =[]
for(var i=0; i<count.length; i++)
{
    if(count[i] %2 == 0)
    {
        //console.log(count[i]);
        evenScore.push(Scores[i])
    }
}
console.log(evenScore)

//filter condition
var filterCount= count.filter(count=>count%2==0)
console.log(filterCount)

// map: mapping/changing 1 value to new value, ex: [ 12, 14, 16 ] => [ 36, 42, 48 ]
var nsum = 0;
var mcount = []
var mapCount = filterCount.map(mcount=>mcount*3)
console.log(mapCount)
var newSumArray = mapCount.reduce((nsum,mcount)=>nsum+mcount,0)
console.log(newSumArray)

//sorting array

//sort string 
let fruits = ["Mango", "Durian", "Watermelon", "Apple"]
fruits.sort()
console.log(fruits)

//sort numbers
var numbers = [12, 67, 0042 ,1, 34]
numbers.sort()
console.log("Incorrect sort for numbers: "+numbers)


var nums = [12, 67, 004 ,1, 34]
nums.sort((a,b)=>a-b)//asc
console.log(nums)
nums.sort((a,b)=>b-a)//Desc
console.log(nums)


