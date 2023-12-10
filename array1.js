//arrays

//2 ways to create array

//1] using array literal

const array1 = ["eat", "sleep"];
console.log(array1);

//2] Using the new keyword

const array2 = new Array("eat", "sleep");
console.log(array2);


//other examples

const myList = [ ];

// array of numbers
const numberArray = [ 2, 4, 6, 8];

// array of strings
const stringArray = [ 'eat', 'work', 'sleep'];

// array with mixed data types
const newData = ['work', 'exercise', 1, true];


//ek array k andar array,object.functions b store hote h 

const newData1 = [
    {'task1': 'exercise'},
    [1, 2 ,3],
    function hello() { console.log('hello')}
];

console.log(newData1);

//accessing slements

console.log(newData1[1]); // [1, 2 ,3]


console.log(newData1[0]);


//add elements

console.log("add elements");

let dailyActivities = ['eat', 'sleep'];

dailyActivities.push('exercise');

console.log(dailyActivities);  //['eat', 'sleep', 'exercise']


dailyActivities.unshift('work');
console.log(dailyActivities);  // ['work', 'eat', 'sleep', 'exercise']

console.log("chnge exisitng");
dailyActivities[2] = 'cry';
console.log(dailyActivities); //['work', 'eat', 'cry', 'exercise']

console.log("try like this to add at end");
dailyActivities[5] = 'try';
console.log(dailyActivities); //['work', 'eat', 'cry', 'exercise', empty, 'try']

//remove elememts

console.log ("remove elements");

let dailyActivities1 = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities1.pop();
console.log(dailyActivities1); // ['work', 'eat', 'sleep']

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities1.pop();

//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities1);  // ['work', 'eat']

let dailyActivities2 = ['work', 'eat', 'sleep', 'exercise'];

// remove the first element

console.log ("remove elements using shift");
dailyActivities2.shift();
console.log(dailyActivities2); //  ['eat', 'sleep', 'exercise']

//array length

const dailyActivities3 = [ 'eat', 'sleep'];

// this gives the total number of elements in an array
console.log(dailyActivities3.length); // 2


//other array methods
console.log("other methods");

let dailyActivities4 = ['sleep', 'work', 'exercise', 'cry']
let newRoutine = ['eat'];

// sorting elements in the alphabetical order
dailyActivities4.sort();
console.log("sorted");
console.log(dailyActivities4); // ['cry', 'exercise', 'sleep', 'work']

//finding the index position of string
const position = dailyActivities4.indexOf('work');
console.log("index position");
console.log(position); // 3

// slicing the array elements
const newDailyActivities = dailyActivities4.slice(1);
console.log("slice");
console.log(newDailyActivities); // ['exercise', 'sleep', 'work']

// concatenating two arrays
const routine = dailyActivities4.concat(newRoutine);
console.log("concatenate");
console.log(routine); // ['cry', 'exercise', 'sleep', 'work', 'eat']

//for each loop arrays pe hi chlta h 

console.log("for each ex1");

var a = [1,2,3,4,5,65,12,54,0];
a.forEach(function(val) {   // ... ye anonymous function h 
	console.log(val+2);
});

console.log("ex2 for each");
var b = [1,2,3,4,5,65,12,54,0];
b.forEach(function(val) {    //... yaha pe value me original 1 ka value nhi ata but uska copy ata h 
	console.log(val+2);
});

console.log(b); // orignal wala chnge nhi hua h [1, 2, 3, 4, 5, 65, 12, 54, 0]


console.log("using splice");

var arr = [1,2,3,4,5,6,7];
arr.splice(2,1);    //o/p  [1,2,4,5,6,7]


//arr.splice(2,2);    //o/p  [1,2,5,6,7]

console.log(arr);


