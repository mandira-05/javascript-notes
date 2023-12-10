//hoisting

//example1 

console.log("example1");

// using test before declaring
//test=1;
console.log(test);   // undefined
//var test=1;  //initialization hoist nhi hota
var test;

//ye upr ka code convert hua


// using test before declaring
var test;
console.log(test); // undefined

//sirf var variable me hoisting chlta h ...let and const me nhi

//example2

console.log("variable hoisting ex2");

// program to display value
a = 5;
console.log(a);
var a; // 5


//ye upr ka code convert hua

var a;
a = 5;
console.log(a); // 5


//example3

console.log("variable hoisting ex3");

// program to display value
var a1 = 4;

function greet() {
    b = 'hello';
    console.log(b); // hello
    var b;
}

greet(); // hello
console.log(b);

//b variable ka hoisting hoga, but function k andar hi..puree code k andar nhi

//function hoisitng

console.log("function hoisting ex1");


greet();

function greet() {
    console.log('Hi, there.');
}


console.log("function hoisting ex2");


greet1();

let greet1 = function() {
    console.log('Hi, there.');
}

//agar function ko as a variable use kia ttoh error ayega hi...
//var use kia h toh alag error ata h and let use kia toh alag error ata h..
//abi k liye let hi use kia h

//hoisting avoid krna h mostly

