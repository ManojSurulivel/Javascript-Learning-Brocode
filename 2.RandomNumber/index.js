//Random Number Generator :

let myButton = document.getElementById("myButton");
let label1  = document.getElementById("Label1");
let label2  = document.getElementById("Label2");
let label3  = document.getElementById("Label3");


let min = 0  ;
let max  = 9 ;
let randomNum1;
let randomNum2;
let randomNum3;



myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;

}