//function declaration = define a resuable block of 
//                       code that performs a specific task.

const numbers = [1,2,3,4,5,6];

const squares = numbers.map(square);
console.log(squares);

function square(element){
    return Math.pow(element, 2)
}



//function expressions = a way to define functions as 
//                       values or variables

//  1. Callbacks in asynchronous operations
//  2. Higher Order Functions
//  3. Event Listeners

const hello = function(){            //==> Variables
    console.log("Hello")
}

setTimeout(function(){               //==> Values
    console.log("GoodBye");
},5000)


//Ex:1.
const numbers1 = [1,2,3,4,5,6,7,8];

const squares1 = numbers1.map(function(element){
    return Math.pow(element, 2)
});
console.log(squares1);

//Ex:2.
const numbers2 = [1,2,3,4,5,6,7,8];

const cubes = numbers2.map(function(element){
    return Math.pow(element, 3)
})
console.log(cubes);

//Ex:3.
const numbers3 = [1,2,3,4,5,6,7,8];

const evenNums = numbers3.map(function(element){
    return element % 2 === 0 ;
})
console.log(evenNums);

//Ex:4.
const numbers4 = [1,2,3,4,5,6,7,8];

const oddNums = numbers4.map(function(element){
    return element % 2 !== 0 ;
})
console.log(oddNums);

//Ex:5.
const numbers5 = [1,2,3,4,5,6,7,8];

const total = numbers5.reduce(function(accumulator, element){
    return accumulator + element;
})
console.log(total);


//Slice and Splice
Slice:
//If we want to create an array that is subset of existing array with out changing the original array, then we will use slice.
      
let arr = [1,2,3,4];
let newArr = arr.slice(1,3);
//slice(startIndex, EndIndex)
console.log(newArr) // [2,3]


Splice:
//If we want to add/delete/replace the existing elements in the array, then we will use splice.
 
//Ex:1
let arr1 = [1,2,3,4,5,0,10];
let newArr1 = arr1.splice(2,4,8,9,6);
// splice(startIndex,numberOfItemsToRemove,replaceElements)
console.log(arr1); //  [1,2,8,9,6,10]
console.log(newArr1); // [3,4,5,0]

//Ex:2
let arr2 = [1,2,3,4,5,0,10];
let newArr2 = arr2.splice(3,2,9,8);
// splice(startIndex,numberOfItemsToRemove,replaceElements
console.log(arr2); // [1, 2, 3, 9, 8, 0, 10]
console.log(newArr2); //[4, 5]
