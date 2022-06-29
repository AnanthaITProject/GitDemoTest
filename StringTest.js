let day = "Tuesday "
let test = "Test"
console.log(day.length)

//substring
let subDay = day.slice(0,4)
console.log(subDay)
console.log(day[1])//u

//split string
let splitString = day.split("s")
console.log(splitString)
console.log(splitString[1])
//to trim white space : ex behind the tuesday got space
console.log("Before: "+day+test)
console.log("After: "+day.trim()+test)

//compare string value
let date = "2"
let nextDate = "8"
//parseInt helps to convert String to Int
let diff = parseInt(nextDate)-parseInt(date) 
console.log(diff)
//convert int to string
diff.toString()

let newQuote = day+"is Funday"
console.log(newQuote)
console.log(newQuote.length)
console.log(newQuote.indexOf("day"))//
//start search start from specified index
console.log(newQuote.indexOf("day",5))
//to count how many times the string have occured
let val = newQuote.indexOf("day")
let count = 0;
while(val!== -1)
{
    count++
    val = newQuote.indexOf("day",val+1)
}
console.log(count)