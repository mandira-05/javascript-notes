//arrow function..thapa technical video 

//ex1 

//es5 me aise likhte the
console.log("ex1 normal function");

var sum = function() {
    var a= 5;
    var b = 10;
    return a+b;
}

console.log(sum());

//es6 
console.log("ex2 arroe function");

const sum2 = () => {
    var a = 10;
    var b = 10;
    return a+b;
}

console.log(sum2());

console.log("ex3 arroe function");

let a = 10;
let b = 60;
//const sum3 = () => { return a+b} 
const sum3 = () =>  a+b
console.log(sum3());

//multiple lines h toh return use krna padta h aur {} b use krna  arrow me


console.log("ex4 arroe function");

let a1 = 10;

const sum4 = (b) =>  a+b
console.log(sum4(7));

console.log("ex5 arroe function");


const sum5 = (a,b) =>  a+b
console.log(sum5(7,8));

