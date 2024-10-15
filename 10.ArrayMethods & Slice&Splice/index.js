//array = a variable like structure that can 
//        hold more than 1 value,
// variable can hold 1 value
// array can hold many.

let fruits = ["apple","orange","banana","coconut"];

//fruits.push("coconut");
//fruits.pop();
//fruits.unshift("mango");
//fruits.shift();

let numOfFruits = fruits.length;
let index = fruits.indexOf("mango");

console.log(numOfFruits);
console.log(index);

//1.
for(let i=0; i < fruits.length; i++){
    console.log(fruits[i])  
}
//OUTPUT:
//apple
//orange
//banana
//coconut

//2.
for(let i=0; i < fruits.length; i+=2){
    console.log(fruits[i])
}
////OUTPUT:
//apple
//banana

//3.
for(let i=1; i < fruits.length; i+=2){
    console.log(fruits[i])
}
//OUTPUT:
//orange
//coconut

//4.
for(let i= fruits.length; i >=0 ; i--){
    console.log(fruits[i])
}
//OUTPUT:
//undefined
//coconut
//banana
//orange
//apple

//5.
for(let i= fruits.length - 1; i >=0; i--){
    console.log(fruits[i])
}
//OUTPUT:
//coconut
//banana
//orange
//apple


//6.
fruits.sort().reverse();

for(let fruit of fruits){
   console.log(fruit)
}
//OUTPUT:
//orange
//coconut
//banana
//apple


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