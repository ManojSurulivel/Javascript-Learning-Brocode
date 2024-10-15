// this = reference to the object where THIS is used
//         (the object depends on the immediate context)
//          person.name = this.name

//Ex:1.
const person1 = {
    name: "MAnoj",
    favFood: "Biriyani",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const person2 = {
    name: "Sandeep",
    favFood: "Fish",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.eat();
person2.eat();


//Ex:2.
//Arrow function does not have own 'this' :

const person3 = {
    name: "Sandeep",
    favFood: "Fish",
    sayHello: ()=>console.log(`Hi! I am ${this.favFood}`),
    eat: ()=> console.log(`${this.name} is eating ${this.favFood}`),
}

person3.sayHello();
person3.eat();

//"Hi! I am undefined"
//"Sandeep is eating undefined"
