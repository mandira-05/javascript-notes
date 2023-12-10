//js constructor function

//other way to create object

console.log("example 1");

function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person = new Person();

console.log(person);

//function Person() - object constructor function h 

//new keyword use kia h  object create krne k liye from constructor


console.log("example 2");

//multiple objects create kia h , same constructor function use kr k

// constructor function
function Person1 () {
    this.name = 'John',
    this.age = 23,

     this.greet = function () {
        console.log('hello');
    }
}

// create objects
const person1 = new Person1();
const person2 = new Person1();

// access properties
console.log(person1.name);  // John
console.log(person2.name);  // John

//JavaScript Constructor Function Parameters


console.log("example 3");

// constructor function
function Person2 (person_name, person_age, person_gender) {

    // assigning  parameter values to the calling object
     this.name = person_name,
     this.age = person_age,
     this.gender = person_gender,
 
     this.greet = function () {
         return ('Hi' + ' ' + this.name);
     }
 }
 
 
 // creating objects
 const person3 = new Person2('John', 23, 'male');
 const person4 = new Person2('Sam', 25, 'female');
 
 // accessing properties
 console.log(person3.name); // "John"
 console.log(person4.name); // "Sam"
 
 console.log(person3.greet());

 console.log(person3);


 //constructor function vs object literal

//1st point -
//object literal se ek time pe ek hi object create kr skte h 
//constructor function se multiple object create kr skte h 

// using object literal
let person5 = {
    name: 'geto'
}

//constructor object

// using constructor function
function Person3 () {
    this.name = 'shoko'
}

let person6 = new Person3();
let person7 = new Person3();

//2nd point

//constructor fucntion se create kia hua objects unique hote h 
//same proprties b hote and aur ek new property b add kr skte h , ..koi b ek particular object k liye

function Person4 () {
    this.name = 'Sam'
}

let person8 = new Person4();
let person9 = new Person4();

// adding new property to person1
person8.age = 20;

//object literal me ek hi object bana skte h toh ..change/update krte h koi value ki property toh orignal waale me b chnge ho jaati h 
//aur agr ek object ko koi dusre object/variable me copy kr k b chnage / update kia toh original wala hi chnge hoga

//let person = {
//    name: 'Sam'
//}

//console.log(person.name); // Sam

//let student = person;

// changes the property of an object
//student.name = 'John';

// changes the origins object property
//console.log(person.name); // John


//prototype ka baad me dekhna h 


