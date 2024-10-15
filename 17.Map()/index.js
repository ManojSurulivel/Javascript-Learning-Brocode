//.map() = accepts a callback and applies that function
//        to each element of an array, then return a new array.

//Ex:1.
const numbers = [1,2,3,4,5];
const square  = numbers.map(square);

console.log(square);
function square(element){
    return Math.pow(element, 2)
}

//Ex:2.
const numbers1 = [1,2,3,4,5];
const cubes  = numbers1.map(cube);

console.log(cubes);
function cube(element){
    return Math.pow(element, 3)
}

//Ex:3.
const students = ["spongebob","Patrick","squidward","Sandy"];

const studentUpper = students.map(upperCase);
console.log(studentUpper)

function upperCase(element){
    return element.toUpperCase();
}

//Ex:4.
const student = ["SPONGEBOB", "PATRICK", "SQUIDWARD", "SANDY"]

const studentLower = student.map(lower);
console.log(studentLower);

function lower(element){
    return element .toLowerCase();
}

//Ex:5.
const dates = ["2024-1-10","2025-2-20","2026-3-30"];

const formattendDates = dates.map(formDates)
console.log(formattendDates);

function formDates(element){
    const parts = element.split("-")
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}


















