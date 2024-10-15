//String methods:

//EX:1.  => IMPORTANT INTERVIEW QUESTIONS
let str = "joseph"
str[1] ="e"
console.log(str);
// In javascript we cannot modify the individual
// characters of the string by using their index.
// But we can create a new string with the desire modification.

//EX:2.
let str1 = "seph";
//Previous
str1[0] = "c";

//Modified
str1 = "drrtt";
console.log(str1);     //output: drrtt
//This will create a new string with the desire modification,
//So the strings are IMMUTABLE in JAVASCRIPT.


//1. charAt(index):
const str = "Hello";
console.log(str.charAt(1)); // Output: "e"
//2. charCodeAt(index)
const str1 = "Hello";
console.log(str1.charCodeAt(1)); // Output: 101 (Unicode for "e")
//3. concat(...strings)
const str2 = "Hello";
const str3 = "World";
console.log(str2.concat(str3)); // Output: "HelloWorld"
console.log(str2.concat(" ", str3)); // Output: "Hello World"
//4. includes(searchString, position)
const str4 = "Hello World";
console.log(str4.includes("World")); // Output: true
//5. indexOf(searchString, fromIndex)
const str5 = "HellWorl";
console.log(str5.indexOf("e")); // Output: 6
//6. lastIndexOf(searchString, fromIndex)
const str6 = "Hello World World";
console.log(str6.lastIndexOf("World")); // Output: 12
//7. match(regexp)
const str7 = "The quick brown fox";
console.log(str7.match(/fox/)); // Output: ["quick"]
//8. replace(searchValue, newValue)
const str8 = "Hello World";
console.log(str8.replace("World", "JavaScript")); // Output: "Hello JavaScript"
//9. replaceAll(searchValue, newValue)
const str9 = "Hello World World";
console.log(str9.replaceAll("World", "JavaScript")); // Output: "Hello JavaScript JavaScript"
//10. search(regexp)
const str10 = "Hello World";
console.log(str10.search(/World/)); // Output: 6
//11. slice(beginIndex, endIndex)
const str11 = "Hello World";
console.log(str11.slice(0, 7)); // Output: "Hello"
//12. split(separator, limit)
const str12 = "Hello World";
console.log(str12.split(" ")); // Output: ["Hello", "World"]
//13. substring(indexStart, indexEnd)
const str13 = "Hello World";
console.log(str13.substring(0, 5)); // Output: "Hello"
//14. toLowerCase()
const str14 = "Hello World";
console.log(str14.toLowerCase()); // Output: "hello world"
//15.toUpperCase()
const str15 = "Hello World";
console.log(str15.toUpperCase()); // Output: "HELLO WORLD"
//16. trim()
const str16 = "   Hello World   ";
console.log(str16.trim()); // Output: "Hello World"
//17. trimStart()
const str17 = "   Hello World";
console.log(str17.trimStart()); // Output: "Hello World"
//18. trimEnd()
const str18 = "Hello World   ";
console.log(str18.trimEnd()); // Output: "Hello World"
//19. padStart(targetLength, padString)
const str19 = "5";
console.log(str19.padStart(4, "0")); // Output: "0005"
//20. padEnd(targetLength, padString)
const str20 = "5";
console.log(str20.padEnd(6, "0")); // Output: "500000"
//21. startsWith(searchString, position)
const str21 = "Hello World";
console.log(str21.startsWith("Hello")); // Output: true
//22. endsWith(searchString, length)
const str22 = "Hello World";
console.log(str22.endsWith("World")); // Output: true
console.log(str22.endsWith("Hello")); // Output: false
//23. repeat(count)
const str23 = "Hello ";
console.log(str23.repeat(3)); // Output: "Hello Hello Hello "
//24. at(index)
const str24 = "Hello";
console.log(str24.at(-1)); // Output: "o"

//String slicing - Creating a substring  from a portion of an another string.

const fullName = "Bro Code"
let firstName = fullName.slice(0,3)
console.log(firstName)
