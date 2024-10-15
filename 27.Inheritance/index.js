//inheritance = allows a new class to inherit 
//              properties and methods from an 
//              existing class (parent -> child)
//              helps with code reusability



//Ex:1.
class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";

    run(){
        console.log(`This ${this.name} is ruuning`);
    }
}
class Fish extends Animal{
    name="Fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "Hawk"
    fly(){
        console.log(`This ${this.name} is fly`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();