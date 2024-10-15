//Date Objects = Objects that contain values that represent 
//               dates and times these date objects can be 
//               changed and formatted.

//Ex:1.
const date = new Date();
console.log(date)

//Ex:2.
const dates = new Date(2024,0,1,2,3,4, 5);
console.log(dates);

//Ex:3.
const date1 = new Date("2024-01-02T12:00:002");
console.log(date1);


//Ex:3.
const date2 = new Date();

const year = date2.getFullYear();
const month = date2.getMonth();
const days  = date2.getDate();
const hour = date2.getHours();
const minutes = date2.getMinutes();
const seconds = date2.getSeconds();
const dayOfWeek = date2.getDay();
 
console.log(year);
console.log(month);
console.log(days)
console.log(hour)
console.log(minutes)
console.log(seconds)
console.log(dayOfWeek)


//Ex:4.

const dates1 = new Date();

dates1.setFullYear(2024);
dates1.setMonth(0);
dates1.setDate(0);
dates1.setHours(0);
dates1.setMinutes(0);
dates1.setSeconds(0);


console.log(dates1);


//Ex:5.
const date3 = new Date("2023-12-31");
const date4 = new Date("2024-12-31");

if(date4 > date3){
    console.log("HAPPY NEW YEAR!")
}
