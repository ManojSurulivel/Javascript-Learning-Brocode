// object = A collection of related properties and/or methods.
//          can represent real world objects such as(people, products, places);
//          object = {key:value,
//                    function()}
//          properties are key:value pairs,
//          methods are functions

//Ex:1.
const person1 = {
    firstName: " Manoj",
    lastName:  "Kumar",
    age: 25,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Manoj!")},
    eat: function(){console.log("I am very Hungry")},
}

const person2 = {
    firstName: "Ashok",
    lastName:  "Raj",
    age: 30,
    isEmployed: false,
    sayHello: ()=> console.log("Hi! I am Manoj!"),
    eat: () => console.log("I am very Hungry"),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
console.log(person1.sayHello());
console.log(person1.eat());


console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
console.log(person2.sayHello());
console.log(person2.eat());



//Ex:2.
const fruits = [{name:"apple", color:"red", calories: 95},
                {name:"orange", color:"orange", calories: 45},
                {name:"banana", color:"yellow", calories: 105},
                {name:"coconut", color:"white", calories: 159},
                {name:"pineapple", color:"yellow", calories: 37}
               ];

const pushValue = fruits.push({name: "grapges", color:"purple", calories:77})
const popValue = fruits.pop();
const spliceValue = fruits.splice(1,2);

console.log(pushValue);
console.log(popValue);
console.log(spliceValue);



//------------ forEach() ------------------

const foreach = fruits.forEach(fruit => console.log(fruit.name))
console.log(foreach);

//------------ map() ------------------

const fruitName = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitName);
console.log(fruitColors);
console.log(fruitCalories);

//------------ filter() ------------------

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow")
const lowcalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruit = fruits.filter(fruit => fruit.calories >= 100);


console.log(yellowFruits);
console.log(lowcalFruits);
console.log(highCalFruit);

//------------ reduce() ------------------

const maxFruit = fruits.reduce((max,fruit)=>
                                fruit.calories > max.calories ? 
                                fruit : max);
console.log(maxFruit);


const minFruit = fruits.reduce((min,fruit)=>
                                fruit.calories < min.calories ? 
                                fruit : min);
console.log(minFruit);

//Ex:3: {key,value,pairs}
Object.keys(); //This will return the array of keys 
Object.values(); //This will return the array of values
Object.entries(); //This will return array of [key,value] pairs. Practice example for this - this might be asked)
   
let datas = {
 name: "Sai",
 lang: "English"
};
Object.keys(datas)  // ["name","lang"]
Object.values(datas) // ["Sai","english"]
Object.entries(datas) // [["name","Sai"],["lang","English"]]


// Ex:4
//Different ways to create object in javascript ? (Most asked)
//1. Object literal :
let userDetails = {
    name: "Saikrishna",
    city: "Hyderabad"
}

//2. Object constructor :
let userDetails1 = new Object();
userDetails.name = "Saikrishna";
userDetails.city = "Hyderabad";

//3. Object.Create() :
//This is used when we want to inherit properties from an existing object while creating a new object.
 

let animal = {
 name: "Animal name"
}
let cat = Object.create(animal);

//4. Object.assign() :
//This is used when we want to include properties from multiple other objects into new object we are creating.
 
let lesson = {
 lessonName: "Data structures"
};
let teacher= {
    teacher: "Saikrishna"
};
let course = Object.assign({},lesson,teacher);



//Ex:5
//Whats the difference between Object.freeze() vs Object.seal()
//Object.freeze:

let data = {
    a : 10, c : 20
};
Object.freeze(data);
data.a = 50;
data.c = 30;
console.log(data)
//output: {a: 10, c: 20} // It is cannot change the original value, because will make object immutable

//Object.seal:
let data1 = {
    a : 10, c : 20
};
Object.seal(data1);
data1.a = 50;
data1.c = 30;
console.log(data1)
//output: {a: 50, c: 30}  //It can be change the original value, because will make object mutable.








