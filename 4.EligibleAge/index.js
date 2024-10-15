//if, else with eligible age

const myText  = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit")
const resultElement = document.getElementById("resultElement");
let age = 0;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age)

    if(age >= 100){
        resultElement.textContent = `you are TOO OLD to enter this site`
        }else if(age == 0){
            resultElement.textContent = `You can't enter, your just born`
        }else if(age >=18){
            resultElement.textContent = `you are old enough to enter this site`
        }
        else if(age < 0 ){
            resultElement.textContent = `you are age can't be below 0`
        }
        else{
            resultElement.textContent = `you must be 18+ to enter this site`
        }
}