//Error = An Object that is created to represent a problem 
// that occurs occur often with user inut or establishing a connection
        
//try{} = Encloses code that might potencially cause an error.
//catch{} = catch and handle any thrown errors from try{}
//finally {}=(optional) Always executes.used mostly for cleanup
//   ex.close files,close connections, release resources.

//Ex:1
try{
    console.log("Hello");
    //NETWORK ERRORS
    //PROMISE REJECTION
    //SECURITY ERRORS
}
catch(error){
    console.error(error);
}
finally{
    //CLOSE FILES
    //CLOSE CONNECTIONS
    //RELEASE RESOURCES
    console.log("This always executes");
}
console.log("You have reached the end");

//Ex:2.
try{
const dividend = window.prompt("Enter a dividend:")
const divisor = window.prompt("Enter a divisor:")

   if(divisor == 0){
    throw new Error("You can't divide by zero!") 
   }
   if(isNaN(dividend) || isNaN(divisor)){
    throw new Error ("values must be a number!")

   }
const result = dividend/divisor;
console.log(result);
}catch(error){
    console.log(error);
}
console.log("You have reached the end!")