//nested Objects = Objects inside of other Objects.
//        Allows you to represent more complex data structures
//        Child Object is enclosed by a parent Object

//               Person{Address{}, ContactInfo{}}
//               shoppingCart{keyBoard{}, Mouse{}, Monitor{}}


//Ex:1.
const person = {
    firstName: "Manoj",
    lastName: "Kumar",
    age: 25,
    isStudent: true,
    hobbies: [ "karate", "chess", "carrom"],
    address: {
        street:"Rajiv nagar",
        city: "Theni",
        state:"Tamilnadu",
        country: "India",
        pin: 625516
    }
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.address.city);
console.log(person.address.country);
console.log(person.hobbies[2]);


//Ex:2.
for(const property in person.address){
    console.log(person.address[property])
}




//Ex:3.
class Person{
    constructor(name,age,...address){
        this.name = name;
        this.age = age ;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street,city,country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Sandeep", 24, "59,Rajiv St.",
                                          "Cumbum", 
                                          "Theni");


const person2 = new Person("Aaru", 23, "59,Kalavasal St.",
                                          "Cumbum", 
                                          "Theni");


const person3 = new Person("Amutha", 45, "89D,Rajiv St.",
                                          "Cumbum", 
                                          "Theni")

console.log(person2.address)