//1.access input handler with button

// let button;

// document.getElementById("myBtn").onclick = function() {
//     button = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `JavaScript: ${button}`;
// }

//2.Counter with Js

// const increment = document.getElementById("incrementBtn");
// const decrement = document.getElementById("decrementBtn");
// const reset = document.getElementById("resetBtn");
// let count = 0 ;

// increment.onclick = function(){
//     count++ ;
//     countLabel.textContent = count ;
// }

// decrement.onclick = function(){
//     count-- ;
//     countLabel.textContent = count ;
// }

// reset.onclick = function(){
//     count = 0 ;
//     countLabel.textContent = count ;
// }

//3.Math - Build in objects that provide in collection of properties
// let x = 38.59;
// let y = 64;
// let z;

// z = Math.round(x)
// z = Math.floor(x)
// z = Math.ceil(x)
// z = Math.trunc(x)
// z = Math.pow(x,y)
// z = Math.sqrt(x)
// z = Math.log(x)
// z = Math.sin(x)
// z = Math.cos(x)
// z = Math.tan(x)
// z = Math.abs(-x)

// let min = Math.min(x,y)
// let max = Math.max(x,y)
// console.log(min,max)

//Random Number Generator

// let random = Math.floor(Math.random() * 8)  + 2

// let min = 1 ;
// let max  = 6 ;


// let randomNum = Math.floor(Math.random()* (max-min)) + min; 
// console.log(randomNum)



// let myButton = document.getElementById("myButton");
// let label1  = document.getElementById("Label1");
// let label2  = document.getElementById("Label2");
// let label3  = document.getElementById("Label3");


// let min = 0  ;
// let max  = 9 ;
// let randomNum1;
// let randomNum2;
// let randomNum3;



// myButton.onclick = function(){
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;

// }


//IF/ELSE  (number)
// let amir = 18;
// let ashik = 20;

// if(amir >= 18){
//     console.log("your are eligible")
// }else{
//     console.log("your not eligible")
// }



// let button = document.getElementById("myButton");
// let display = document.getElementById("display")

// var time;

// button.onclick = function(){
//     var time = 13;
    
//     if(time < 12){
//         `now: ${'Good Morning!'}`
//     }else{
//         ("Good Afternoon!")
//     }

//     display.textContent = time
// }


//(boolean)
//let isStudent = true;

// if(isStudent){
//     console.log("Eligible")
// }else{
//     console.log("not eligible")
// }

// let age = 18;
// let hasLicense = false;

// if(age >= 18){
//     console.log("your are eligible for license")

//     if(hasLicense){
//      console.log("you are your license")
//     }else{
//         console.log("your not eligible for driving")
//     }

// }else{
//     console.log("your not eligible for licence")
// }


//Eligible age are not:

// const myText  = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit")
// const resultElement = document.getElementById("resultElement");
// let age = 0;

// mySubmit.onclick = function(){

//     age = myText.value;
//     age = Number(age)

//     if(age >= 100){
//         resultElement.textContent = `you are TOO OLD to enter this site`
//         }else if(age == 0){
//             resultElement.textContent = `You can't enter, your just born`
//         }else if(age >=18){
//             resultElement.textContent = `you are OLD enough to enter this site`
//         }
//         else if(age < 0 ){
//             resultElement.textContent = `you are age can't be below 0`
//         }
//         else{
//             resultElement.textContent = `you must be 18+ to enter this site`
//         }
// }

//.checked = property that determines the checked state of an HTML 
//             checkbox or radio button element

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult =document.getElementById("subResult")
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){
//     if(myCheckBox.checked){
//         subResult.textContent = `You are Subscribed!` ;
//     }
//     else{
//         subResult.textContent = `You are Not Subscribed!` ;
//     }

//     if(visaBtn.checked){
//         paymentResult.textContent = `You are Paying with Visa!` ;
//     }
//     else if(masterCardBtn.checked){
//         paymentResult.textContent = `You are Paying with masterCart!` ;
//     }
//     else if(payPalBtn.checked){
//         paymentResult.textContent = `You are Paying with payPal!` ;
//     }
//     else{
//         paymentResult.textContent = `You must select a payment type!` ;

//     }
// }


//ternary operator = a shortcut to if{} else{} statements
//                   helps to assign a variable based on a condition 
//                   condition ? codeIfTrue : codeIfFalse

// let age =  12;
// let message = age >= 18 ? "you are an adult " : "you are an minor!";
// console.log(message)

// let time = 5;
// let greeting = time < 12 ? "Good Morning!" : "GoodAfternoon"
// console.log(greeting)

// let isStudent = false;
// let messages =  isStudent ? "your a student" : "your NOT  a student"
// console.log(messages);

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);


//switch statement:

// let day = 5;

// if(day == 1){
//     console.log(`It is Monday`)
// }else if(day ==2){
//     console.log(`It is Tuesday`)
// }
// else if(day == 3){
//     console.log(`It is WednesDay`)
// }else if(day == 4){
//     console.log(`It is Thursday`)
// }else if(day == 5){
//     console.log(`It is Friday`)
// }else if(day == 6){
//     console.log(`It is SaturDay`)
// }else if(day == 7){
//     console.log(`It is Sunday`)
// }
// else{
//     console.log(`${day} is not a day`)
// }



// let day = 63;
 
// switch(day){
//     case 1:
//         console.log("It is Monday")
//         break;
//     case 2:
//         console.log("It is TuesDay")
//         break;
//     case 3:
//         console.log("It is WednesDay")
//         break;
//     case 4:
//         console.log("It is ThursDay")
//         break;
//     case 5:
//         console.log("It is Friday")
//         break;
//     case 6:
//         console.log("It is SaturDay")
//         break;
//     case 7:
//         console.log("It is SaturDay")
//         break;
//     default:
//         console.log(`${day} is NOT a day`)    

// }


// //String methods:

// //1. charAt(index):
// const str = "Hello";
// console.log(str.charAt(1)); // Output: "e"
// //2. charCodeAt(index)
// const str1 = "Hello";
// console.log(str1.charCodeAt(1)); // Output: 101 (Unicode for "e")
// //3. concat(...strings)
// const str2 = "Hello";
// const str3 = "World";
// console.log(str2.concat(str3)); // Output: "HelloWorld"
// console.log(str2.concat(" ", str3)); // Output: "Hello World"
// //4. includes(searchString, position)
// const str4 = "Hello World";
// console.log(str4.includes("World")); // Output: true
// //5. indexOf(searchString, fromIndex)
// const str5 = "HellWorl";
// console.log(str5.indexOf("e")); // Output: 6
// //6. lastIndexOf(searchString, fromIndex)
// const str6 = "Hello World World";
// console.log(str6.lastIndexOf("World")); // Output: 12
// //7. match(regexp)
// const str7 = "The quick brown fox";
// console.log(str7.match(/fox/)); // Output: ["quick"]
// //8. replace(searchValue, newValue)
// const str8 = "Hello World";
// console.log(str8.replace("World", "JavaScript")); // Output: "Hello JavaScript"
// //9. replaceAll(searchValue, newValue)
// const str9 = "Hello World World";
// console.log(str9.replaceAll("World", "JavaScript")); // Output: "Hello JavaScript JavaScript"
// //10. search(regexp)
// const str10 = "Hello World";
// console.log(str10.search(/World/)); // Output: 6
// //11. slice(beginIndex, endIndex)
// const str11 = "Hello World";
// console.log(str11.slice(0, 7)); // Output: "Hello"
// //12. split(separator, limit)
// const str12 = "Hello World";
// console.log(str12.split(" ")); // Output: ["Hello", "World"]
// //13. substring(indexStart, indexEnd)
// const str13 = "Hello World";
// console.log(str13.substring(0, 5)); // Output: "Hello"
// //14. toLowerCase()
// const str14 = "Hello World";
// console.log(str14.toLowerCase()); // Output: "hello world"
// //15.toUpperCase()
// const str15 = "Hello World";
// console.log(str15.toUpperCase()); // Output: "HELLO WORLD"
// //16. trim()
// const str16 = "   Hello World   ";
// console.log(str16.trim()); // Output: "Hello World"
// //17. trimStart()
// const str17 = "   Hello World";
// console.log(str17.trimStart()); // Output: "Hello World"
// //18. trimEnd()
// const str18 = "Hello World   ";
// console.log(str18.trimEnd()); // Output: "Hello World"
// //19. padStart(targetLength, padString)
// const str19 = "5";
// console.log(str19.padStart(4, "0")); // Output: "0005"
// //20. padEnd(targetLength, padString)
// const str20 = "5";
// console.log(str20.padEnd(6, "0")); // Output: "500000"
// //21. startsWith(searchString, position)
// const str21 = "Hello World";
// console.log(str21.startsWith("Hello")); // Output: true
// //22. endsWith(searchString, length)
// const str22 = "Hello World";
// console.log(str22.endsWith("World")); // Output: true
// console.log(str22.endsWith("Hello")); // Output: false
// //23. repeat(count)
// const str23 = "Hello ";
// console.log(str23.repeat(3)); // Output: "Hello Hello Hello "
// //24. at(index)
// const str24 = "Hello";
// console.log(str24.at(-1)); // Output: "o"

// //String slicing - Creating a substring  from a portion of an another string.

// const fullName = "Bro Code"
// let firstName = fullName.slice(0,3)
// console.log(firstName)


//NUMBER GUSSING GAME
// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum ;

// let attempts = 0;
// let guess;
// let running = true;

// while(running){
//    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
//    guess = Number(guess)

//    if(isNaN(guess)){
//    window.alert("please enter a valid number");
//    }else if(guess < minNum || guess > maxNum){
//     window.alert("please enter a valid number")
//    }else{
//     attempts++;
//     if(guess < answer){
//         window.alert("TOO LOW TRY AGAIN!")
//     }else if(guess > answer){
//         window.alert("TOO HIGH! TRY AGAIN!");
//     }else{
//         window.alert(`CORRECT! The answer was ${answer}. It took you${attempts} attempts`);
//         running = false ;

//     }
//    }

// }


// 6.function = A section of resusable code .
//           Declare code once, use it whenever you want.
//           call the function to execude that code.

// function add(x,y){
//     return x+y
// }
// add(5,3)

// function subtract(x,y){
//     return x+y
// }
// subtract(5,2)

// function mutiply(x,y){
//     return x+y
// }
// mutiply(5,3)

// function divide(x,y){
//     return x+y
// }
// divide(8,4)

// function isEven(){
//     return number % 2 === 0 ? "true" : "false" 
// }
// isEven()

// function isValidEmail(email){
//    return email.includes("@") ? "true" : "false"
// }
// console.log(isValidEmail("hello@fed.com"));

//Variable scope = Where a variable is recognized
//                 and accessible(local & global)


// function function1(){
//     let x=1;
//     console.log(x)
// }

//TEMPERATURE CONVERSION PROGRAM

// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;

// function convert(){
//     if(toFahrenheit.checked){
//       temp = Number(textBox.value);
//       temp = temp * 9 /5 + 32;
//       result.textContent = temp.toFixed(1) + "°F";
//     }
//     else if(toCelsius.checked){
//         temp = Number(textBox.value)
//         temp = (temp - 32) + (5/9);
//         result.textContent = temp.toFixed(1) + "°C";
//     }
//     else{
//         result.textContent = "Select a unit"
//     }
// }

//array = a variable like structure that can 
//        hold more thn 1 value,
// variable can hold 1 value
// array can hold many.

// let fruits = ["apple","orange","banana","coconut"];

// //fruits.push("coconut");
// //fruits.pop();
// //fruits.unshift("mango");
// //fruits.shift();

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("mango");

// console.log(numOfFruits);
// console.log(index);

// //1.
// for(let i=0; i < fruits.length; i++){
//     console.log(fruits[i])  
// }
// //OUTPUT:
// //apple
// //orange
// //banana
// //coconut

// //2.
// for(let i=0; i < fruits.length; i+=2){
//     console.log(fruits[i])
// }
// ////OUTPUT:
// //apple
// //banana

// //3.
// for(let i=1; i < fruits.length; i+=2){
//     console.log(fruits[i])
// }
// //OUTPUT:
// //orange
// //coconut

// //4.
// for(let i= fruits.length; i >=0 ; i--){
//     console.log(fruits[i])
// }
// //OUTPUT:
// //undefined
// //coconut
// //banana
// //orange
// //apple

// //5.
// for(let i= fruits.length - 1; i >=0; i--){
//     console.log(fruits[i])
// }
// //OUTPUT:
// //coconut
// //banana
// //orange
// //apple


// //6.
// fruits.sort().reverse();

// for(let fruit of fruits){
//    console.log(fruit)
// }
// //OUTPUT:
// //orange
// //coconut
// //banana
// //apple



//11.spread operator = ...allows an iterable such as an 
//                 array or string to be expanded into 
//                 separate elements(unpacks the elements)

// let numbers = [1,2,3,4,5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(minimum,maximum);


// let username = "Manoj Kumar";
// let letters = [...username].join("-");
// console.log(letters)

// //we can create shollow copy with spread operator:⬇️
// let fruits = ["apple","orange","banana","coconut"];
// let vegetable = ["carrots","celery","potatoes"];

// let foods = [...fruits,...vegetable,"eggs","milk"];
// console.log(foods);



//   12. REST PARAMETERS = (...rest) 1.A parameters prefixed with
//                three dots
//         2.allow a function work with a variable number of arguments 
//           by bundlling them into an array        
//         3.spread = expand an array into separete elements 
//         4.rest = bundles seperate elements into an array 
//ex:1.⬇️
// function openFridge(...foods){
//     console.log(...foods);
// }
// function getFood(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 ="hamburger";
// const food3 = "hotDog";
// const food4 = "sushi";
// const food5 = "ramen";

// //openFridge(food1,food2,food3,food4,food5)

// const foods = getFood(food1,food2,food3,food4,food5);
// console.log(foods)

// //Ex:2.⬇️
// function sum(...numbers){
//     let result = 0 ;
//     for(let number of numbers){
//         result += number;

//     }
//     return result;
// }
// const total = sum(1,2,3,4,5);
// console.log(` your total is $${total}`);


// //Ex:3.⬇️
// function getAverage(...numbers){
//     let result = 0 ;
//     for(let number of numbers){
//         result += number;

//     }
//     return result/ numbers.length;
// }

// const totalMark = getAverage(75,100,85,90,50)
// console.log(totalMark);


// //Ex:4.⬇️
// function combineStrings(...strings){
//     return strings.join(" ")
// }
// const fullName = combineStrings("Mr.", "spongebob", "squarepants", "III");
// console.log(fullName)


//14. DiceRollerr

// function rollDice(){
//     const numOfDice = document.getElementById("numOfDice").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages");
//     const values = [];
//     const images = [];

//     for(let i=0; i < numOfDice; i++){
//         const value = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
//         images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}" >`);
//     }

//         diceResult.textContent = `dice: ${values.join(', ')}`;
//         diceImages.innerHTML = images.join('');
    
// }

//15.Random Password Generator

// function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     const numberChars = "0123456789"
//     const symbolChars = "!@#$%^&*()_+-=";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowercase ? lowercaseChars : "";
//     allowedChars += includeUppercase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";

//    if(length <= 0){
//       return `(password length must be at least 1)`
//    }
//    if(allowedChars.length === 0){
//       return `(At least 1 set of character needs to be selected)`;
//    }
//    for(let i = 0 ; i < length; i++){
//       const randomIndex = Math.floor(Math.random()* allowedChars.length);
//       password += allowedChars[randomIndex]
//    }
//     return password;
//   }
  
//   const passwordLength = 10;
//   const includeLowercase = true;
//   const includeUppercase = true;
//   const includeNumbers = true;
//   const includeSymbols = true;
  
//   const password = generatePassword(passwordLength, 
//                                     includeLowercase, 
//                                     includeUppercase, 
//                                     includeNumbers, 
//                                     includeSymbols);

// console.log(`Generate password: ${password}`)

//16.Callback
//Ex:1.
// hello();
// goodBye();

// function hello(){
//     setTimeout(function(){
//         console.log("Hello!");

//     },5000);
// }
// function goodBye(){
//     console.log("GoodBye")
// }

//Ex:2.
// hello(goodBye);

// function hello(callback){
//     console.log("Hello!");
//     callback();
// }
// function goodBye(){
//     console.log("GoodBye!")
// }
//OUTPUT:
//Hello!
//GoodBye!

//Ex:3.
// hello(leave);

// function hello(callback){
//     console.log("Hello!");
//     callback();
// }
// function leave(){
//     console.log("LEAVE!")
// }
// function goodBye(){
//     console.log("GoodBye!")
// }
//OUTPUT:
//Hello!
//LEAVE!


// sum(displayPage, 1, 7);

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }

// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
//}

//             array .forEach(callback)
//Ex:1.

// let numbers = [1,2,3,4,5];

// numbers.forEach(display)

// function display(element){
//     console.log(element)
// }

//Ex:2.
// let number1 = [1,2,3,4,5];
// number1.forEach(double)


// function double(element,index,array){
//     array[index] = element * 2;
// }

// //Ex:3.
// let number2 = [1,2,3,4,5];
// number2.forEach(double)


// function double(element,index,array){
//     array[index] = element * 2;
// }

// //Ex:4.
// let number3 = [1,2,3,4,5];
// number3.forEach(trible);


// function trible(element,index,array){
//     array[index] = element * 3;
// }

// //Ex:5.
// let number4 = [1,2,3,4,5];
// number4.forEach(square);


// function square(element,index,array){
//     array[index] = Math.pow(element, 2);
// }

// //Ex:6.
// let number5 = [1,2,3,4,5];
// number5.forEach(cube);

// function cube(element,index,array){
//     array[index] = Math.pow(element, 3);
// }

// //Ex:7.
// let fruits = ["apple","orange","banana","coconut"]

// fruits.forEach(display)

// function display(element){
//     console.log(element)
// }

// //Ex:3.
// const students = ["spongebob","Patrick","squidward","Sandy"];
// const studentUpper = students.map(upperCase);

// console.log(studentUpper)

// function upperCase(element){
//     return element.toUpperCase();
// }

// //Ex:4.
// const student = ["SPONGEBOB", "PATRICK", "SQUIDWARD", "SANDY"]

// const studentLower = student.map(lower);
// console.log(studentLower);

// function lower(element){
//     return element .toLowerCase();
// }

// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius * 2;
//     }

//     static getCircumference(radius){
//         return 2* this.PI * radius;
//     }

//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));


// class User{
//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }

 
// }

// const user1 = new User("Spongebob");
// //const user2 = new User("Patrick");
// //const user3 = new User("Sandy");

// //user1.sayHello();
// //user2.sayHello();
// //user3.sayHello();
// console.log(user1.username);


//Clock Program
// const display = document.getElementById("display")
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start(){
//     if(!isRunning){
//         startTime = Date.now() - elapsedTime;
//         timer = setInterval(update, 10);
//         isRunning = true;
//     }
// }

// function stop(){
//    if(isRunning){
//     clearInterval(timer);
//     elapsedTime = Date.now() - startTime;
//     isRunning = false;
//    }
// }

// function reset(){
//     clearInterval(timer);
//     startTime = 0;
//     elapsedTime = 0;
//     isRunning = false;
//     display.textContent =  "00:00:00:00"
// }

// function update(){

//     const currentTime = Date.now();
//     elapsedTime = currentTime - startTime;

//     let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//     let minutes = Math.floor(elapsedTime / (1000 *60 ) % 60);
//     let seconds = Math.floor(elapsedTime / 1000 % 60);
//     let milliseconds = Math.floor(elapsedTime % 1000 / 10);
     
//     hours = String(hours).padStart(2,"0");
//     minutes = String(minutes).padStart(2,"0");
//     seconds = String(seconds).padStart(2,"0");
//     milliseconds = String(milliseconds).padStart(2,"0");

//     display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`

// }


fetch = ("person.json")
        .then(response => response.json)
        .then(value => console.log(value))
        .then(value => value.forEach(value => console.log(value.isEmployed)));