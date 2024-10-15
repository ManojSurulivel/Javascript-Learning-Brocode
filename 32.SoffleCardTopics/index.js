//SoffleCard Topics:

//Ex:1.
const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

cards.sort(()=> Math.random() - 0.5);

console.log(cards);



//Ex:2.
const cards1 = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

shuffle(cards1);

function shuffle(array){
    for(let i= array.length - 1; i > 0; i--){
       const random = Math.floor(Math.random() * (i+1));

       [array[i], array[random]] = [array[random], array[i]];
    }
}

console.log(cards1);