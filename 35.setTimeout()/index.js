//setTimeout() = function in JavaScript that allows you to schedule
//the execution of a function after an amount of time(milliseconds)
//Times are approximate 
//(varies based on the workload of the Javascript runtime env.)

//  setTimeout(callback,delay);
//  clearTimeout( (timeoutId) = can cancel a timeout before it triggers )  

//Ex:1.
function sayHello(){
    window.alert("Hello");
}
setTimeout(sayHello, 3000)

//Ex:2.
setTimeout(function(){
    window.alert("Hello World")
},3000);

//Ex:3.
const timeoutId = setTimeout(() => window.alert("Hello"), 3000);

clearTimeout(timeoutId);

//Ex:4.
var  timeOutId1;

function startTimer(){
    timeOutId1 = setTimeout(() => window.alert("Hello"), 7000);
    console.log("STARTED");
} 

function clearTimer(){
    clearTimeout(timeOutId1);
    console.log("CLEARED");
}