//arrow functions = a concise way to write function expressions 
//                 good for simple functions that you use only 
//                 once(parameters) with=>some code.

//Ex:1.
const hello = () => console.log("Hello EveryOne");
hello();



//EX:2.
const hello1 = (name) => console.log(`Hello ${name}`);
hello1("Manoj");



//Ex:3.
const hello2 = (name,age) => {console.log(`Hello ${name}`)
                              console.log(`You are ${age} years old!`)};
hello2("Manoj",25);



//Ex:4.
const numbers = [1,2,3,4,5,6,];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);