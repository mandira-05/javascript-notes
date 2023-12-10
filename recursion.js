//recursion

//ex1

console.log("example 1");


// program to count down numbers to 1
function countDown(number) {

    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);


//ex2

console.log("example 2");


// program to find the factorial of a number
function factorial(x) {

    if (x === 0) {
        return 1;
    }

    else {
        return x * factorial(x - 1);
    }
}

const num = 5;

if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}

