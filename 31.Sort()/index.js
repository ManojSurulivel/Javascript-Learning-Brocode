//sort()= method used to sort elements of an array in place.
// sorts elements as strings in lexicographic order, not alphabetical
// lexicographic = (alphabet + number  + symbol) as strings

//Ex:1.
let fruits = ["apple","orange","banana","coconut","pineapple"]
fruits.sort()
console.log(fruits)


//Ex:2.
let numbers = [1,10,2,9,3,8,4,7,5,6];

numbers.sort((a,b) => a - b );
numbers.sort((a,b) => b - a );

console.log(numbers);


//Ex:3.
const people = [{name: "spongebob",age:30, gpa:3.0},
                {name: "patrick",age:37, gpa:1.5},
                {name: "squidward",age:51, gpa:2.5},
                {name: "sandy",age:27, gpa:4.0}];

people.sort((a,b)=> a.age - b.age);
people.sort((a,b)=> b.age - a.age);
people.sort((a,b)=> a.gpa - b.gpa);
people.sort((a,b)=> a.name - b.name);
people.sort((a,b)=> a.name.localeCompare(b.name));
people.sort((a,b)=> b.name.localeCompare(a.name));

console.log(people);