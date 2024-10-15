//CallbackHell() = situation in JavaScript where callbacks 
//                 are nested within other callbacks to the 
//                 degree where the code is difficult to read .
//                 Old pattern to handle asynchronous functions.
//                 Use Promises + async/await to avoid Callback Hell.

// Nesting callbacks inside other callbacks.if we have lort 
//of tasks to complete to an order, it can complete manageable  


//Ex:1.
function task1(){
  setTimeout(()=>{
    console.log("task 1")
  },2000)
}
function task2(){
  setTimeout(()=>{
    console.log("task 2")
  },1000)
}function task3(){
  setTimeout(()=>{
    console.log("task 3")
  },3000)
}function task4(){
  setTimeout(()=>{
    console.log("task 4")
  },1500)
}

task1();
task2();
task3();
task4();
console.log("All tasks complete");


//Ex:2.
function task1(callback){
    setTimeout(()=>{
      console.log("task 1");
      callback();
    },2000)
  }
  function task2(callback){
    setTimeout(()=>{
      console.log("task 2");
          callback();
    },1000)
  }
  function task3(callback){
    setTimeout(()=>{
      console.log("task 3");
          callback();
    },3000)
  }
  function task4(callback){
    setTimeout(()=>{
      console.log("task 4");
          callback();
    },1500)
  }
  
  task1(()=>{
    task2(()=>{
      task3(()=>{
        task4(()=>{
                  console.log("All tasks complete");
        })
      })
    })
  })
  
  // Nesting callbacks inside other callbacks.if we have lort 
//   of tasks to complete to an order, it can complete manageable  //very difficult.
  
  