//closure : A function defined inside of another function,
//          the inner function has access to the variables
//          and scope of the outer function.
//          Allow for private variables and state maintenance
//          Used frequently in JS framework: React,Agular,vue

//Ex:1.
function outer(){
    let message = "Hello";

    function inner(){
        console.log(message)
    }
    inner()
}

outer();


//Ex:2.
function increment(){
    let count = 0;
    count++;
    console.log(`Count increased to ${count}`);
}

increment();
increment();
increment();
increment();
increment();


//Ex:3.
        let count = 0;
        count = 1000;
function increment(){
count++;
console.log(`Count increased to ${count}`);
}

increment();
increment();
increment();
increment();
increment();

//Ex:4.
function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }
    return {increment};

}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();

//Output:
"Count increased to 1"
"Count increased to 2"
"Count increased to 3"


//Ex:5.
function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }
    function getCount(){
        return count;
    }

    return {increment,getCount};

}

const counters = createCounter();

console.log(counters.count);
//Output: undefined

console.log(`The current count is ${counters.getCount()}`);



//Ex:6.
let score = 0;

function increaseScore(points){
    score += points;
    console.log(`+${points}pts`)
}

function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`);
}

function getScore(){
    return score;
}

increaseScore(5);
increaseScore(6);
increaseScore(3);

console.log(`The final score is ${getScore()}pts`)



//Ex:7
function createGame(){
    let score = 0;
  
  function increaseScore(points){
      score += points;
      console.log(`+${points}pts`)
  }
  
  function decreaseScore(points){
      score -= points;
      console.log(`-${points}pts`);
  }
  
  function getScore(){
      return score;
  }
    return {increaseScore, decreaseScore,getScore};
  }
  
  const game = createGame();
  
  
  game.increaseScore(5);
  game.increaseScore(6);
  game.increaseScore(3);
  
  console.log(`The final score is ${game.getScore()}pts`)






















