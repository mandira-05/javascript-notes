//do while

// program to display numbers
let i = 1;
const n = 5;

// do...while loop from 1 to 5
do {
    console.log(i);
    //console.log("heheh");
    document.write("gegegge <br>");
    document.write("sehseih <br>");
    i++;
} while(i <= n);

//ex2

// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum

let sum = 0;
let number = 0;

do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
    console.log(`The sum is ${sum}.`);
} while(number >= 0)

console.log(`final The sum is ${sum}.`);

