//JAVASCRIPT

1. DYNAMICALLY TYPED LANGUAGE
let a;
a = 0;
console.log(a) // 0
a = "Hello"
console.log(a) // "Hello"

//Javascript is a dynamically typed language.
//It means all type checks are done at run time  When program is executing ).
//So, we can just assign anything to the variable and it works fine.
//Typescript is a statically typed language. All checks are performed at compile time.

2. What are the different datatypes in javascript ? (Most asked)

//Primitive datatypes:
"String, number, boolean, null, undefined, Bigint, symbol"
//Non-Primitive datatypes:
"Object, Array, Date"

3. What is Hoisting in javascript ? (Most asked)

//* In other scripting/server side languages, variables or functions must be declared before using it.
//* In javascript, variables and functions can be used before declaring it. The javascript compiler 
//  moves all the declarations of variables and functions on top. so there will not be any error. This is called hoisting.

4. What are the various things hoisted in javascript ?

//*   Function declarations: Fully hoisted.
//*   var - Hoisted
//*   Arrow functions: Not hoisted
//*   Anonymous Function expressions: Not hoisted
//*   let and const - Hoisted but not initialized. (Temporal dead z
//*   class declarations - Hoisted but not initialized.
//    https://stackabuse.com/hoisting-in-javascript/

5. What is temporal dead zone ?
//It is a specific time period in the execution of javascript code where 
//the variables declared with let and const exists but cannot be accessed until the value is assigned.
//Any attempt to access them result in reference errors.


6. What are the differences let, var and const ? (Most asked)
Scope:
// Variables declared with var are function scoped.( available through out the function where its declared )
// or global scoped( if defined outside the function ).
// Variables declared with let and const are block scoped.

Reassignment:
// var and let can be reassigned.
// const cannot be reassigned.
Hoisting:
// var gets hoisted and initialized with undefined.
// let and const - gets hoisted to the top of the scope but does not get assigned any value.(temporal dead zone).

7. List out some key features of ES6 ? (Most asked)

//  ⭐️ Arrow functions,
//  ⭐️ Let and Const declarations. 
//  ⭐️ Destructuring assignment 
//  ⭐️ Default parameters
//  ⭐️ Template literals
//  ⭐️ Spread and Rest operators 
//  ⭐️ Promises
//  ⭐️ Classes
//  ⭐️ Modules
//  ⭐️ Map, Set, Weakmap, Weakset

8. What are limitations of arrow functions in javascript ?
// ⭐️ Arrow functions are introduced in ES6. They are simple and shorter way to write functions in javascript.

// ⭐️ Arrow functions cannot be accessed before initialization.
// ⭐️ Arrow function does not have access to arguments object.
// ⭐️ Arrow function does not have their own this. Instead, they inherit this from the surrounding code at the time the function is defined.
// ⭐️ Arrow functions cannot be used as constructors. Using them with the 𝙣𝙚𝙬 keyword to create instances throws a TypeError.
// ⭐️ Arrow functions cannot be used as generator functions.

9.Whatʼs the spread operator in javascript ?
// ⭐️ Spread operator is used to spread or expand the elements of an iterable like array or string into individual elements.

Uses:
//⭐️ Concatenating arrays.
let x = [1,2];
let y = [3,4];
let z = [...x,...y] ⇒⇒ 1,2,3,4

//⭐️ Copying arrays or objects.
let a = [...x] // 1,2

//⭐️ Passing array of values as individual arguments to a function.
function createExample(arg1,arg2){
  console.log(arg1,arg2);
}
createExample(...a)

10. What is rest operator in javascript ?
//Rest operator is used to condense multiple elements into single array or object.
//This is useful when we dont know how many parameters a function may receive and you want to capture all of them as an array.

//Ex: 1.
function Example(...args){
    console.log(args)
}
Example(1,2,3,4);



11. What is destructuring ?

//It is introduced in Es6.
//It allows us to assign the object properties and array values to distinct variables.

const user = {
    "age": 10,
    "name": "Saikrishna"
}
const {age,name} = user;
console.log(age,name) // 10,"Saikrishna"
const [a,b] = [1,2];
console.log(a,b) // 1,2

12.let x = 5;
let y;

y = x>3 ? x<4 ? 3 : 2 : 1

console.log(y) give output and explain?
ChatGPT said:
ChatGPT
The code you've provided uses a nested ternary (conditional) operator to assign a value to y based on the value of x. Let's break it down step by step and explain the output.

Code:
javascript
Copy code
let x = 5;
let y;

y = x > 3 ? (x < 4 ? 3 : 2) : 1;

console.log(y);
How the Ternary Operator Works:
The ternary operator follows the syntax:

javascript
Copy code
condition ? trueExpression : falseExpression;
If the condition is true, the trueExpression is executed.
If the condition is false, the falseExpression is executed.
In your case:

x > 3 ? — This is the first condition:

x = 5, so x > 3 is true. Therefore, the true branch is executed, which is:
javascript
Copy code
x < 4 ? 3 : 2
x < 4 ? 3 : 2 — Now we evaluate this nested condition:

x = 5, so x < 4 is false. As a result, the false branch is executed, and y is assigned the value 2.
Final Output:
javascript
Copy code
console.log(y); // Output: 2
Explanation:
Since x > 3 is true, the code evaluates the nested ternary x < 4 ? 3 : 2.
x < 4 is false, so the false branch (2) is chosen, and y is set to 2.
Thus, the final output is 2.
















