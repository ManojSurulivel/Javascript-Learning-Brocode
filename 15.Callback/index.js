// callback = a function that is passed as an argument
//            to another function.

//            used to handle asynchronous operations: such as
//            1. Reading a file
//            2. Network requests
//            3. Interacting with database
// These activities Take some time to complete, 
// know with javascript we don't
// nessesery wait for a process to finish before
// continuing with the rest of the program

// Ex: if we want to read a file, if we takes long time 
// read a file javascript my continuing one with 
// the rest of the program. we made time to display the content
// to the file before finish reading it, that's for 
// the a callbacks command, we telling javascript. 
// "Hey, when you're done, call this next."
// when you done reading the file then display the contents, 
// only after the process is complete

//Ex:1.
hello();
goodBye();

function hello(){
    setTimeout(function(){
        console.log("Hello!");

    },5000);
}
function goodBye(){
    console.log("GoodBye")
}
//OUTPUT:
//GoodBye!
//Hello!


//Ex:2.
hello(goodBye);

function hello(callback){
    console.log("Hello!");
    callback();
}
function goodBye(){
    console.log("GoodBye!")
}
//OUTPUT:
//Hello!
//GoodBye!


//Ex:3.
hello(leave);

function hello(callback){
    console.log("Hello!");
    callback();
}
function leave(){
    console.log("LEAVE!")
}
function goodBye(){
    console.log("GoodBye!")
}
//OUTPUT:
//Hello!
//LEAVE!

//By using callbacks we are 
//carenty that the function passed in, than execute next.

sum(displayPage, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(){
    document.getElementById("myH1").textContent = result;
}