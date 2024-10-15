//For Each() = method used to iterate over the element
//             of an array and apply a specified function 
//             (callback) to each element

//             1.array .forEach(callback)
//             2.Element, index, array are provided

//Ex:1
let numbers = [1,2,3,4,5];

numbers.forEach(display)

function display(element){
    console.log(element)
}
//Ex:2.
let number1 = [1,2,3,4,5];
number1.forEach(double)


function double(element,index,array){
    array[index] = element * 2;
}

//Ex:3.
let number3 = [1,2,3,4,5];
number3.forEach(trible);


function trible(element,index,array){
    array[index] = element * 3;
}

//Ex:4.
let number4 = [1,2,3,4,5];
number4.forEach(square);


function square(element,index,array){
    array[index] = Math.pow(element, 2);
}

//Ex:5.
let number5 = [1,2,3,4,5];
number5.forEach(cube);

function cube(element,index,array){
    array[index] = Math.pow(element, 3);
}

//Ex:6.
let fruits = ["apple","orange","banana","coconut"]

fruits.forEach(display)

function display(element){
    console.log(element)
}

//Ex:7.
let fruits1 = ["apple","orange","banana","coconut"]

fruits1.forEach(upperCase)

function upperCase(element,index,array){
    array[index] = element.toUpperCase();
}


//Ex:8.
let fruits2 = ["apple","orange","banana","coconut"]

fruits2.forEach(lowerCase)

function lowerCase(element,index,array){
    array[index] = element.toLowerCase();
}

//Ex:8.
let fruits3 = ["apple","orange","banana","coconut"]

fruits3.forEach(capitalize)

function capitalize(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

