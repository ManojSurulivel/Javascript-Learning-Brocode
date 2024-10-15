//Destructuring = destructuring value from arrays and objects,
//              then assign them to variables in a convenient way
//             [] = to perform array destructuring
//             {} = to perform object destructuring

//Example: 1.
//Swap the value of two variables

let a= 1;
let b= 2;

[a,b] = [b,a];

console.log(a);
console.log(b);

//Example: 2.
//Elements in an array.

const colors = ["red","blue","black","green","white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//Example: 3.
//Assign array elements to variables.

const colors1 = ["red","blue","black","green","white"];

const [firstColor,secondColor,thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(extraColors);

//Example: 4.
//Extract values from objects.


const person1 = {
    firstName: "Manoj",
    lastName: "Kumar",
    age: 25,
    job: "SoftwareDeveloper",
    address: "Theni",
    pin: 625516
}


const person2 = {
    firstName1: "Ashok",
    lastName2: "Kumar",
    ages: 25,
    addreses: "Theni",
    pins: 625516
}

const {firstName,lastName,age,job,address,pin} = person1;
console.log(firstName);
console.log(lastName)
console.log(age);
console.log(address);


const {firstName1,lastName2,ages,jobs="unemployee",addreses,pins} = person2;
console.log(firstName1);
console.log(lastName2)
console.log(ages);
console.log(addreses);
console.log(pins);
console.log(jobs);


//Example:5.
//Destructure in function parameter,

const person = {
    firstName: "Manoj",
    lastName: "Kumar",
    age: 25,
    job: "SoftwareDeveloper",
    address: "Theni",
    pin: 625516
}

function displayPerson({firstName,lastName,age,job,address,pin}){
    console.log(`name : ${firstName} ${lastName}`);
    console.log(`age : ${age}`);
    console.log(`address: ${addreses} ${pin}`)
    console.log(`job: ${job}`)

}
displayPerson(person)
