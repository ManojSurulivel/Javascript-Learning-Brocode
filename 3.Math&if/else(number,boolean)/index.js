// 3.Math - Build in objects that 
//          provide in collection of properties

let x = 38.59;
let y = 64;
let z;

z = Math.round(x)
z = Math.floor(x)
z = Math.ceil(x)
z = Math.trunc(x)
z = Math.pow(x,y)
z = Math.sqrt(x)
z = Math.log(x)
z = Math.sin(x)
z = Math.cos(x)
z = Math.tan(x)
z = Math.abs(-x)

let min = Math.min(x,y)
let max = Math.max(x,y)
console.log(min,max)


//IF/ELSE  (number)

let amir = 18;
let ashik = 20;

if(amir >= 18){
    console.log("your are eligible")
}else{
    console.log("your not eligible")
}



let button = document.getElementById("myButton");
let display = document.getElementById("display")

var time;

button.onclick = function(){
    var time = 13;
    
    if(time < 12){
        `now: ${'Good Morning!'}`
    }else{
        ("Good Afternoon!")
    }

    display.textContent = time
}



// IF/ELSE  (Boolean)

let isStudent = true;

if(isStudent){
    console.log("Eligible")
}else{
    console.log("not eligible")
}

let age = 18;
let hasLicense = false;

if(age >= 18){
    console.log("your are eligible for license")

    if(hasLicense){
     console.log("you are your license")
    }else{
        console.log("your not eligible for driving")
    }

}else{
    console.log("your not eligible for licence")
}