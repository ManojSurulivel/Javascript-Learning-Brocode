//JSON = (JavaScript Object Notation) data- interchange format used for exchanging data between 
//       a server and a web application JSON files {key:value} OR [value1,value2,valu3]

//       JSON.stringify() = converts a JS object to a JSON string.
//       JSON.parse()     = converts a JSON string to a JS Object.

//JSON Format:

//1. JSON.stringify()
const names = [
    {
    name:"pandi",
    age: 23,
    isEmployed:true
},{
    name:"surya",
    age: 30,
    isEmployed:false
},{
    name:"arul",
    age: 26,
    isEmployed:true
},{
    name:"aro",
    age: 21,
    isEmployed:true
},
]

const jsonString = JSON.stringify(names);
console.log(jsonString);

//output:
[{"name":"pandi","age":23,"isEmployed":true},
{"name":"surya","age":30,"isEmployed":false},
{"name":"arul","age":26,"isEmployed":true},
{"name":"aro","age":21,"isEmployed":true}]



//2.JSON.parse()
const person = `[{"name":"pandi","age":23,"isEmployed":true},
{"name":"surya","age":30,"isEmployed":false},
{"name":"arul","age":26,"isEmployed":true},
{"name":"aro","age":21,"isEmployed":true}]`

const jsonPerson = JSON.parse(person);
console.log(jsonPerson);

//output:
0: {name: 'pandi', age: 23, isEmployed: true}
1: {name: 'surya', age: 30, isEmployed: false}
2: {name: 'arul', age: 26, isEmployed: true}
3: {name: 'aro', age: 21, isEmployed: true}


fetch = (person.json)
        .then(response => response.json)
        .then(value => console.log(value))