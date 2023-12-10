//ex1

console.log("example1");

function hello () {
	console.log("hello");
}

hello();   //...function call


//ex2
console.log("example2");
function abcd (a,b,c) {   //..ye var wala variable h ..isme 12,13,14 value gaya h ...ye jo value hold krte h wo..parameteres h 
	console.log(a,b,c);  //...yaha value print hua h
}

abcd(12,13,14);  // ...function call   ...yaha pe jo values daale h wo arguments h  

//ex3

console.log("example3");

// program to print the text
// declaring a function
function greet(name) {
    console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
greet(name);

//ex4

console.log("example4");

// program to add two numbers using a function
// declaring a function
function add(a, b) {
    console.log(a + b);
}

// calling functions
add(3,4);
add(2,9);

//ex5

console.log("example 5");


// program to add two numbers
// declaring a function
function add1(a, b) {
    return a + b;
}

// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
let result = add1(number1,number2);

// display the result
console.log("The sum is " + result);


//agr 2 functions ka name same h toh ...last wala hi run hoga..pehle waale nhi hoge run


//ex6

console.log("example 6");

function getInfo(){  
    return "hello javatpoint! How r u?";  
}

let t=getInfo();

console.log(t);

//functions expressions

console.log("example 7");

// program to find the square of a number
// function is declared inside the variable
let x = function (num) { return num * num };
console.log(x(4));

// can be used as variable value for other variables
let y = x(3);
console.log(y);

//varaible scope

//global scope

console.log ("global variable ex1");

// program to print a text 
let a = "hello";

function glo_ex1 () {
    console.log(a);
}

glo_ex1(); // hello

//variable a function k andar access kr skte h 

console.log ("global variable ex2");

// program to show the change in global variable
let a1 = "hello";

function glo_ex2() {
    a1 = 3;
}

// before the function call
console.log(a1);   ///hello print hota h 

//after the function call
glo_ex2();
console.log(a1); // 3

//dont use globals variables

//variable can be used w/o declaring it

console.log ("global variable ex3");

function glo_ex2() {
    y = "hello,3rd "
}

glo_ex2();

console.log(y); // hello,3rd


//local scope

//ex1

console.log("local var ex1");

// program showing local scope of a variable
let loc1 = "hi";

function local_ex1() {
    let b = "World"
    console.log(loc1 + b);
}

local_ex1();
//console.log(loc1 + b); // error

//let variable scoped...ek block me hi chalega us k bahar nhi

console.log("local var ex2");
// program showing block-scoped concept
// global variable

let loc2 = 'Hello';

function local_ex2() {

    // local variable
    let loc3 = 'World';

    console.log(loc2 + ' ' + loc3);

    if (loc3 == 'World') {

        // block-scoped variable
        let loc4 = 'go';

        console.log(loc2 + ' ' + loc3 + ' ' + loc4);
    }

    // variable loc4 cannot be accessed here
    //console.log(loc2 + ' ' + loc3 + ' ' + loc4);
}

local_ex2();



