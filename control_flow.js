//if else 

// check if the number is positive

console.log("if");
const number = prompt("Enter a number: ");  //user ko puchega number

// check if number is greater than 0
if (number > 0) {
 // the body of the if statement
  console.log("The number is positive");
}

console.log("The if statement is easy");

var a=20;  
if(a>10){  
document.write("value of a is greater than 10");  //broweser pe likh k ata h 
document.write("<br>");  
}  

//if ...else 

// check if the number is positive or negative/zero

console.log("if-else");

const number1 = prompt("Enter a number: ");

// check if number is greater than 0
if (number1 > 0) {
  console.log("The number is positive");
}
// if number is not greater than 0
else {
  console.log("The number is either a negative number or 0");
}

console.log("The if...else statement is easy");


var a1=21;  
if(a1%2==0){  
document.write("\n a is even number\n");  
document.write("<br>");  
}  
else{  
document.write("\n a is odd number \n");  
document.write("<br>");  
}  

//if ...else if

console.log("if...else-if");

// check if the number if positive, negative or zero
const number2 = prompt("Enter a number: ");


// check if number is greater than 0
if (number2 > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (number2 == 0) {  //yaha pe 3 baar = da;a toh and 0 value dia toh negative print hota h o/p me
  console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}

console.log("The if...else if...else statement is easy");



