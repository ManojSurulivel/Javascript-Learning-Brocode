//Promise = An object that manages asynchronous operations.
//          Wrap a promise Object around {asynchronous code}
//          "I promise to return a value"
//          PENDING => RESOLVED OR REJECTED
//          new promise((resolve,reject) => {asynchronous code})

//The first promise was rejected, we dont even attempt  to resolve these other promises

//DO THESE CHORES IN ORDER

//1. WALK THE DOG
//2  CLEAN THE KITCHEN
//3. TAKE OUT THE TRASH


//Ex:1
function walkDog(callback){
    setTimeout(()=>{
         console.log("you walk the dog 🐶")
         callback();
    },1500);
}
function cleanKitchen(callback){
    setTimeout(()=>{
         console.log("you clean the Kitchen 🧹");
         callback();
      
      
 
    },2500);
}
function takeOutTrash(callback){
    setTimeout(()=>{
         console.log("you take out the trash ♻️")
         callback();
         
    },500);
}

walkDog(()=>{
  cleanKitchen(()=>{
    takeOutTrash(()=> console.log("You finished all the chores!"))
  });
});
//We can't complete by callbackhell



//Ex:2.
function walkDog(){
  
    return new Promise((resolve,reject)=>{
      
        setTimeout(()=>{
          
          const walkDog = true;
          
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

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores")})
         .catch(error => console.error(error));

















































