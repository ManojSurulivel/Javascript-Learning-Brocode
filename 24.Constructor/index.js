// constructor = special method for defining the 
//               properties and methods of objects.


//Constructor:
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
    
}

const cars = new Car("Fort","Mustang","2024","red");
const cars1 = new Car("Chevrolet","Camero","2025","blue");
const cars2 = new Car("Dodge","Charger","2026","silver");


console.log(cars.make);
console.log(cars.model);
console.log(cars.year);
console.log(cars.color);
cars.drive();

console.log(cars1.make);
console.log(cars1.model);
console.log(cars1.year);
console.log(cars1.color);
cars1.drive();

console.log(cars2.make);
console.log(cars2.model);
console.log(cars2.year);
console.log(cars2.color);
cars2.drive();





//BEFORE Objects:
const car1 = {
    make: "Ford",
    model: "Mustang",
    year: 2024,
    color: "red",
    drive: function(){console.log(`You drive the ${this.model}`)}
}
const car2 = {
    make: "Chevrolet",
    model: "Camero",
    year: 2025,
    color: "blue",
    drive: function(){console.log(`You drive the ${this.model}`)}
}
const car3 = {
    make: "Dodge",
    model: "Charger",
    year: 2026,
    color: "silver",
    drive: function(){console.log(`You drive the ${this.model}`)}
}
