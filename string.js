//string

//3 ways to create string


//strings example
const name = 'Peter';
const name1 = "Jack";
const result = `The names are ${name} and ${name1}`;

//Backticks are generally used when you need to include variables or expressions into a string. 

console.log(result);

console.log("example 2");

const name2 = 'My name is "Peter Parker".';
console.log(name2);

//accessing string chars

console.log("accessing string chars");

console.log("example 3");
const a = 'hello';
console.log(a[1]); // "e"

console.log("example 4");
const b = 'hello';
console.log(b.charAt(4)); // "e"

//strings r immutable

console.log("strings r immutable");

console.log("example 5");
let c = 'hello';
c[0] = 'H';
console.log(c); // "hello"

console.log("example 6");
let d = 'hello';
d = 'Hello';         //ye hi variable me dusra string assign kr skte h 
console.log(d); // "Hello"

//JavaScript is Case-Sensitive

console.log("JavaScript is Case-Sensitive");

const e = 'a';
const f = 'A'
console.log(e === f); // false

//JavaScript Multiline Strings
console.log("JavaScript Multiline Strings");

// using the + operator
const message1 = 'This is a long message ' +
    'that spans across multiple lines' + 
    'in the code.'

console.log("example 1");

console.log(message1);

// using the \ operator
const message2 = 'This is a long message \
that spans across multiple lines \
in the code.'

console.log("example 2");
    
console.log(message2);

//String Length

console.log("String Length");

const stringLen = 'hemllo';
console.log(stringLen.length); // 6

//String Object

//new keyword se b string create kr skte h 
//lekin strinf object avoid krna h use krne ko

console.log("String Object");

const a1 = 'shibi';
const b1 = new String('shibi');

console.log ("ex 1");
console.log(a1); // "hello"
console.log ("ex 2");
console.log(b1); // "hello"

console.log(typeof a1); // "string"
console.log(typeof b1); // "object"

//js string methods

console.log("other  String Methods");

const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5= text1.slice(1, 3);
console.log(result5); // "el"

//String() Function
console.log("converting other data to string");

const a2 = 225; // number
const b2 = true; // boolean

//converting to string
const result6 = String(a2);
const result7 = String(b2);

console.log(result6); // "225"
console.log(result7); // "true"

console.log(typeof result6); // "225"
console.log(typeof result7); // "true"



