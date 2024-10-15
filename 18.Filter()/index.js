//.filter() = create a new array by filtering out elements.


//Ex:1.
let numbers = [1,2,3,4,5,6,7];

let evenNums = numbers.filter(isEven);
console.log(evenNums)

function isEven(element){
    return element % 2 === 0;
}

//Ex:2.
let number1 = [1,2,3,4,5,6,7];

let evenNums1 = number1.filter(isOdd);
console.log(evenNums1)

function isOdd(element){
    return element % 2 !== 0;
}

//Ex:3.
const ages = [16,17,18,19,20,25,30,60];

const Adult = ages.filter(isAdult);
console.log(Adult);

function isAdult(element){
    return element >=18;
}

//Ex:4.
const age1 = [16,17,18,19,20,25,30,60];

const Child = age1.filter(isChild);
console.log(Child);

function isChild(element){
    return element <=18;
}

//Ex:5.
const words = ["apple","orange","banana","kiwi","coconut","pomegranate"];

const shortWords = words.filter(getShortWords)
console.log(shortWords);

function getShortWords(element){
    return element.length <=6;
}

//Ex:6.
const words1 = ["apple","orange","banana","kiwi","coconut","pomegranate"];

const LongWords = words1.filter(getLongWords)
console.log(LongWords);

function getLongWords(element){
    return element.length > 6;
}
