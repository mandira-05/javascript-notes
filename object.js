//objects

//object non-primitive data type h...yaha pe class ki zarurat nhi h oject banane k liye

//ex1

console.log("example1");

const student = {
    firstName: 'ram',
    class: 10
};

console.log(student);

//yaha pe key: value pair hota h 
//for eg: firstName - key h and ram - value h

//ex2

console.log("example 2");

const person = { 
    name: 'John',
    age: 20
};
console.log(typeof person); // object

const person1 = { name: 'Johnny', age: 21 };
console.log(person1); // {name: 'Johnny', age: 21}

//3 ways to create object

//1] Using object literal  ... we r using this for now
//2] By creating instance of Object directly
//3] By using constructor function

//js object properites
//key:value pair ko properties bolte h 

//name: 'John',  ..ye dono properties h
//age: 20

//accessing object properties

console.log("example 3");

var a = {
	age: 24,
	name: "meimei",
	email: "uueu@gmail.com", 
	
}
console.log(a.name); // meimei
console.log(a["email"]); // uueu@gmail.com


console.log("example 4");

let b = {
	name: "meow",
	email: "meow@gmail.com", 
    phone_no : 36584930,
	
}
console.log(b.phone_no); // 36584930
console.log(b["email"]); // meow@gmail.com


//JavaScript Nested Objects

console.log("example 5");

// nested object
const student1 = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student1.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student1.marks.science); // 70

//JavaScript Object Methods

console.log("example 6");
var c = {
	age: 28,
	name: "gojo",
	email: "gojo@gmail.com", 
	kuchbolo: function(){ 
        console.log("object k andar k function ko method bolte h ")
    } 
}

c.kuchbolo();  //object k andar k function ko method bolte h 
console.log(c);  //{age: 28, name: 'gojo', email: 'gojo@gmail.com', kuchbolo: ƒ}

console.log(c.kuchbolo);   //ye pura function code print krega

//ƒ (){ 
//    console.log("object k andar k function ko method bolte h ")
//}

console.log(c.email);


//to update object property
console.log("example 6 - to update object property");
c.name="gojo satoru" // o/p me chnge hoga c object me
console.log(c);


///to delete a property
console.log("example 6 - to delete a property");
delete c.age;
console.log(c); //{name: 'gojo', email: 'gojo@gmail.com', kuchbolo: ƒ}


//example 7

console.log ("example 7");

//ye blank object h

var d = {} ;

d.name = "tom";
d.greet = function() {
    console.log("hello tom!");
}

console.log(d);

console.log(d.greet);
d.greet();

//this keyword

console.log ("example for this keyword");

const persont = {
    name: 'John',
    age: 30,

    // accessing name property by using this.name
    greet: function() { 
        let age=21;
        console.log('The name is' + ' ' + this.name); 
        console.log('The age is' + ' ' + age); //21
        console.log(' ye global var ka age - The age is' + ' ' + this.age); 
    }
};

persont.greet();
