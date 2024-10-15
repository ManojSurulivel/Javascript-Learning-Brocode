//js


const increment = document.getElementById("incrementBtn");
const decrement = document.getElementById("decrementBtn");
const reset = document.getElementById("resetBtn");
let count = 0 ;

increment.onclick = function(){
    count++ ;
    countLabel.textContent = count ;
}

decrement.onclick = function(){
    count-- ;
    countLabel.textContent = count ;
}

reset.onclick = function(){
    count = 0 ;
    countLabel.textContent = count ;
}