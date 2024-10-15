//function = A section of resusable code .
//           Declare code once, use it whenever you want.
//           call the function to execude that code.

function add(x,y){
    return x+y
}
add(5,3)

function subtract(x,y){
    return x+y
}
subtract(5,2)

function mutiply(x,y){
    return x+y
}
mutiply(5,3)

function divide(x,y){
    return x+y
}
divide(8,4)

function isEven(){
    return number % 2 === 0 ? "true" : "false" 
}
isEven()

function isValidEmail(email){
   return email.includes("@") ? "true" : "false"
}
console.log(isValidEmail("hello@fed.com"));
