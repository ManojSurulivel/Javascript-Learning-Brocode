//.reduce() = reduce the element of an array to a single value.

//Ex:1.
const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);

function sum(accumulater, element){
    return accumulater + element
}

//OR

const prices1 = [5, 30, 10, 25, 15, 20, 30, 25, 15];

const total1 = prices1.reduce(sum);
console.log(`$${total1.toFixed(1)}`);

function sum(previous, next){
    return previous + next;
}

//Ex:2.
const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
console.log(maximum);

function getMax(accumulater, element){
    return Math.max(accumulater, element);
}

//Ex:3.
const grades1 = [75, 50, 90, 80, 65, 95];

const minimum = grades1.reduce(getMin);
console.log(minimum);

function getMin(accumulater, element){
    return Math.min(accumulater, element);
}
