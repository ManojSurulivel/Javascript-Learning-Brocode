//rest parameters =  (...rest) 1.A parameters prefixed with
//                   three dots
//         2.allow a function work with a variable number 
//           of arguments by bundlling them into an array        
//         3.spread = expand an array into separete elements 
//         4.rest = bundles seperate elements into an array 

//ex:1.⬇️
function openFridge(...foods){
    console.log(...foods);
}
const food1 = "pizza";
const food2 ="hamburger";
const food3 = "hotDog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1,food2,food3,food4,food5)


//Ex:2.⬇️
function getFood(...foods){
    return foods;
}
const food11 = "pizza";
const food12 ="hamburger";
const food13 = "hotDog";
const food14 = "sushi";
const food15 = "ramen";

const foods = getFood(food11,food12,food13,food14,food15);
console.log(foods)


//Ex:3.⬇️
function sum(...numbers){
    let result = 0 ;
    for(let number of numbers){
        result += number;

    }
    return result;
}
const total = sum(1,2,3,4,5);
console.log(` your total is $${total}`);


//Ex:4.⬇️
function getAverage(...numbers){
    let result = 0 ;
    for(let number of numbers){
        result += number;

    }
    return result/ numbers.length;
}
const totalMark = getAverage(75,100,85,90,50)
console.log(totalMark);


//Ex:5.⬇️
function combineStrings(...strings){
    return strings.join(" ")
}
const fullName = combineStrings("Mr.", "spongebob", "squarepants", "III");
console.log(fullName)