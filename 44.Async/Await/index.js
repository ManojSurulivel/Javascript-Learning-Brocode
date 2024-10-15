//Async/Await = Async = makes a function return a promise
//              Await = makes a async function wait for a promise

//        Allows you write asynchronous code in a synchronous manner
//        Async doesn't have resolve or reject parameters
//        Everything after Await is placed in an event queue



function walkDog(){
  
    return new Promise((resolve,reject)=>{
      
        setTimeout(()=>{
          
          const walkDog = false;
          
          if(walkDog){
            resolve("you walk the dog 🐶")
          }else{
            reject("You DIDN'T walk the dog");
          }
             
      },1500);
    })
  }


  function cleanKitchen(){
   
    return new Promise ((resolve,reject)=>{

         setTimeout(()=>{
           
           const cleanKitchen = true;
          
          if(cleanKitchen){
           resolve("you clean the Kitchen 🧹");
          }else{
            reject("You DIDN'T clean the kitchen");
          }
           
      },2500);
    })
  }
  
  function takeOutTrash(){
  
    return new Promise((resolve,reject)=>{

          setTimeout(()=>{
            
          const takeOutTrash = false;
            
          if(takeOutTrash){
           resolve("you take out the trash ♻️")
          }else{
            reject("You DIDN'T take out the trash");
          }
            
      },500);
    })
  }


async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        
        const cleanKitchen = await cleanKitchen();
        console.log(cleanKitchen);
    
        const takeOutTrash = await takeOutTrash();
        console.log(takeOutTrash);
    
        console.log("You finished all the chores!")    
    }
    catch(error){
        console.log(error)
    }

}
doChores()