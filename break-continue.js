//break examples


// program to print the value of i
for (let i = 1; i <= 5; i++) {
    // break condition     
    if (i == 3) {
        break;
    }
    console.log(i);
}

// program to find the sum of positive numbers
// if the user enters a negative numbers, break ends the loop
// the negative number entered is not added to sum

let sum = 0, number;

while(true) {

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));

    // break condition
    if(number < 0) {
        break;
    }

    // add all positive numbers
    sum += number;

}

// display the sum
console.log(`The sum is ${sum}.`);


//continue example

console.log("continue example1");

// program to print the value of i
for (let i = 1; i <= 5; i++) {

    // condition to continue    
    if (i == 3) {
        continue;
    }

    console.log(i);
}

console.log("continue example2");


// program to calculate positive numbers only
// if the user enters a negative number, that number is skipped from calculation

// negative number -> loop terminate
// non-numeric character -> skip iteration

let sum1 = 0;
let number1 = 0;

while (number1 >= 0) {

    // add all positive numbers
    sum1 += number1;

    // take input from the user
    number1 = parseInt(prompt('Enter a number: '));

    // continue condition
    if (isNaN(number1)) {
        console.log('You entered a string.');
        number1 = 0; // the value of number is made 0 again
        continue;
    }

}

// display the sum
console.log(`The sum is ${sum1}.`);
