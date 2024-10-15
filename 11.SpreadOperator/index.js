//spread operator = ...allows an iterable such as an 
//                 array or string to be expanded into 
//                 separate elements(unpacks the elements)

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(minimum,maximum);

let username = "Manoj Kumar";
let letters = [...username].join("-");
console.log(letters)

//we can create shollow copy with spread operator:⬇️
let fruits = ["apple","orange","banana","coconut"];
let vegetable = ["carrots","celery","potatoes"];

let foods = [...fruits,...vegetable,"eggs","milk"];
console.log(foods);