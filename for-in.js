// for in

//objects pe loop krne k liye hota h for in loop

var obj = {
	name : "harsh",
	age: 24,
	city: "bhopal"
}

for (var key in obj) {
	console.log(key);
}

//to print values

console.log("print values");

let obj1 = {
	name : "harsh",
	age: 24,
	city: "bhopal"
}

for (let key in obj1) {
	console.log(obj1[key]);
}

//to print both
console.log("print both");
for (var key in obj) {
	console.log(`${key} -> ${obj[key]}`);
}

//updating values

console.log("updating values");

const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}


for ( let i in salaries) {

    // add a currency symbol
    let inc = 2000 + salaries[i];
    let salary='$'+inc;
    
    console.log(`${i} : ${salary}`);
}

//looping with string

console.log("for in loop for str");

const string = 'code';

// using for...in loop
for (let i in string) {
    console.log(string[i]);
}

//looping in arrays

console.log("for in loop for arrays");

const arr = [ 'hello', 1, 'JavaScript' ];

// using for...in loop
for (let x in arr) {
    console.log(arr[x]);
}
