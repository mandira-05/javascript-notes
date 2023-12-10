console.log('hello world');

var a= 89;
//var a='dd';

console.log(a);

//let x;
//x = 5;
//console.log(x);

let t; // t is the name of the variable

console.log(t); // undefined

const b = 67;
//b = 3;  will gve error
console.log(b); 

// program to print a sentence

// passing string
console.log("I love JS");

// program to print variables values

// storing values
const greet = 'Hello';
const name = 'Jack';

console.log(greet + ' ' + name);

//data types

//JavaScript String
//String is used to store text. In JavaScript, strings are surrounded by quotes:

//Single quotes: 'Hello'
//Double quotes: "Hello"
//Backticks: `Hello`

//strings example
const name1 = 'ram';
const name2 = "hari";
const result = `The names are ${name1} and ${name2}`;
console.log(result);

///JavaScript Number
//Number represents integer and floating numbers (decimals and exponentials). For example,

const number4 = 3;
const number5 = 3.433;
const number6 = 3e5 // 3 * 10^5
console.log(number4+ " " +number5);
console.log(number6);

//A number type can also be +Infinity, -Infinity, and NaN (not a number). For example,
const number1 = 3/0;
console.log(number1); // Infinity

const number2 = -3/0;
console.log(number2); // -Infinity

// strings can't be divided by numbers
const number3 = "abc"/3; 
console.log(number3);  // NaN

//JavaScript BigInt

//In JavaScript, Number type can only represent numbers less than (253 - 1) and more than -(253 - 1). However, if you need to use a larger number than that, you can use the BigInt data type.
//A BigInt number is created by appending n to the end of an integer. For example,

// BigInt value
const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
//const result2 = value2 + 1; 
//console.log(result2); 

//JavaScript Boolean
//This data type represents logical entities. Boolean represents one of two values: true or false. It is easier to think of it as a yes/no switch. For example,

const dataChecked = true;
const valueCounted = false;
console.log(dataChecked); 
console.log(valueCounted); 

//JavaScript undefined
//The undefined data type represents value that is not assigned. If a variable is declared but the value is not assigned, then the value of that variable will be undefined. For example,


let n;
console.log(n); // undefined

//It is also possible to explicitly assign a variable value undefined. For example,

let n1 = undefined;
console.log(n1); // undefined

//JavaScript null
//In JavaScript, null is a special value that represents empty or unknown value. For example,

const number = null;


//JavaScript Symbol

//A value having the data type Symbol can be referred to as a symbol value. Symbol is an immutable primitive value that is unique. For example,

// two symbols with the same description

const v1 = Symbol('hello');
const v2 = Symbol('hello');

console.log(v1); 

console.log(v2); 

//JavaScript Object

//An object is a complex data type that allows us to store collections of data. For example,


const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
};

console.log(student);

//hoisting

//console.log(aa);
//var aa = 12;  //undefined


// program to display value
aa = 5;
console.log(aa);
var aa; // 5

console.log("Arithmetic  orperator");
let x = 5;
let y = 3;

// addition
console.log('x + y = ', x + y);  // 8

// subtraction
console.log('x - y = ', x - y);  // 2

// multiplication
console.log('x * y = ', x * y);  // 15

// division
console.log('x / y = ', x / y);  // 1.6666666666666667

// remainder
console.log('x % y = ', x % y);   // 2

// increment
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
console.log('x = ', x);     // 7

// decrement
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x);     // 5

//exponentiation
console.log('x ** y =', x ** y);

//comparison orperator
console.log("comparison orperator");
// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false

///read for equal to and strict equal to
https://www.freecodecamp.org/news/loose-vs-strict-equality-in-javascript/#:~:text=Triple%20equals%20(%3D%3D%3D)%2C%20also%20referred%20to%20as,they%20do%2C%20it%20returns%20false%20.

console.log("logical operator");
// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false


//JavaScript Bitwise Operators
console.log("bitwise operator");

// bitwise AND operator example

let bit1 = 12; 
let bit2 = 25; 

console.log("AND bitwise operator");
let resultb = bit1 & bit2; 
console.log(resultb); // 8 

// bitwise OR operator example
let bit3 = 12; 
let bit4 = 25; 

console.log("OR bitwise operator");
let resultb1 = bit3 | bit4; 
console.log(resultb1); // 29


// bitwise XOR operator example
let bit5 = 12; 
let bit6 = 25; 

console.log("XOR bitwise operator");
let resultb2 = bit5 ^ bit6; 
console.log(resultb2); // 21


//0	0	0 ^ 0 is 0
//0	1	0 ^ 1 is 1
//1	0	1 ^ 0 is 1
//1	1	1 ^ 1 is 0


// bitwise NOT operator example
let  bit7 = 12;

let resultb3 = ~bit7;
console.log("NOT bitwise operator");
console.log(resultb3); // -13

//JavaScript Left shift
let bit8 = 8;
let  bit9 = 1;

let resultb4 = a << b;
console.log("JavaScript Left shift bitwise operator");
// 1 ( 00000000000000000000000000010000 )
console.log(resultb4);

//JavaScript Sign-propagating right shift  >>

//JavaScript Zero-fill right shift >>>

//commenting is same as java

//JavaScript Type Conversions

//type conversion is the process of converting data of one type to another.

//There are two types of type conversion in JavaScript.

//Implicit Conversion - automatic type conversion
//Explicit Conversion - manual type conversion

//JavaScript Implicit Conversion

//Implicit Conversion to String

// numeric string used with + gives string type
let resultc1;

resultc1 = '3' + 2; 
console.log(resultc1) // "32"

resultc1 = '3' + true; 
console.log(resultc1); // "3true"

resultc1 = '3' + undefined; 
console.log(resultc1); // "3undefined"

resultc1 = '3' + null; 
console.log(resultc1); // "3null"

//Example 2: Implicit Conversion to Number
console.log("Example 2: Implicit Conversion to Number");

// numeric string used with - , / , * results number type

let resultc2;

resultc2 = '4' - '2'; 
console.log(resultc2); // 2

resultc2 = '4' - 2;
console.log(resultc2); // 2

resultc2 = '4' * 2;
console.log(resultc2); // 8

resultc2 = '4' / 2;
console.log(resultc2); // 2

//Example 3: Non-numeric String Results to NaN

// non-numeric string used with - , / , * results to NaN


console.log("Example 3: Non-numeric String Results to NaN");
let resultc3;

resultc3 = 'hello' - 'world';
console.log(resultc3); // NaN

resultc3 = '4' - 'hello';
console.log(resultc3); // NaN

//Example 4: Implicit Boolean Conversion to Number


// if boolean is used, true is 1, false is 0

let resultc4;

console.log("Example 4: Implicit Boolean Conversion to Number");

resultc4 = '4' - true;
console.log(resultc4); // 3

resultc4 = 4 + true;
console.log(resultc4); // 5

resultc4 = 4 + false;
console.log(resultc4); // 4


//Example 5: null Conversion to Number

// null is 0 when used with number
let resultc5;

console.log("Example 5: null Conversion to Number")

resultc5 = 4 + null;
console.log(resultc5);  // 4

resultc5 = 4 - null;
console.log(resultc5);  // 4

//Example 6: undefined used with number, boolean or null

// Arithmetic operation of undefined with number, boolean or null gives NaN

let resultc6;

console.log("Example 6: undefined used with number, boolean or null")

resultc6 = 4 + undefined;
console.log(resultc6);  // NaN

resultc6 = 4 - undefined;
console.log(resultc6);  // NaN

resultc6 = true + undefined;
console.log(resultc6);  // NaN

resultc6 = null + undefined;
console.log(resultc6);  // NaN


