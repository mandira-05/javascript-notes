//spread operator

//spread operator allows an iterable to expand in places where 0+ arguements are expected.
//It is mostly used in variable array where there is more than 1 values are expected
//It allows us the privelege to obtain a list of parameters 
//from an array. Syntax of Spread operator is same as Rest parameter but it works completely opposite of it.

//rest and spread operator dono same dikhte h 

//spread apply() ko replace krta h
//array ko as a value print krwata h
//concatenate b krta
//replace krta h copy() ko

//es5 me
function sum(a,b,c) {
	console.log(a+b+c);
}
sum(1,5,2);  //8

var arrVal = [1,5,3];
console.log(...arrVal);

console.log("ex 2");
sum.apply(null,arrVal);  //9

console.log("ex 3");
sum(...arrVal);  //9 

console.log("concatenate");
let arr1=[1,2,3];
let arr2=[4,5,6];

arr1 = arr1.concat(arr2);  //in es5
console.log(arr1); //[1, 2, 3, 4, 5, 6]


console.log("concatenate using spread");

let arr3=[1,2,3];
let arr4=[4,5,7];
let arr5=[6,8,9]

arr3 = [...arr3,...arr4,...arr5];  //in es6
console.log(arr3); // [1, 2, 3, 4, 5, 7, 6, 8, 9]

console.log("copy() using spread");

//in es5
let arrc1=[1,2,3];
let arrc2=arrc1;
console.log(arrc2); //[1, 2, 3]

//but abi 2nd araay me 2 elemnts add krna h toh push krna padta h 
console.log("push k baad 2nd array me");
arrc2.push(4,5);
console.log(arrc2); // [1, 2, 3, 4, 5]
//lekin yaha pe array1 me b push hogya elemnts
console.log(arrc1);

//ye aisa nhi hona chahiye islye spread operator use krte h

let arrc3=[1,2,3];
//let arrc4=[...arrc3];
let arrc4=[...arrc3,4,5]; //yaha pe abi push dalne ki zarurat nhi
//let arrc4=[...arrc3,4,5,...arrc6]; ...yaha pe aise aage dusra arraya add ho skta
console.log("spread operator use ");
console.log(arrc4); //[1, 2, 3, 4, 5]
console.log(arrc3);//[1, 2, 3]



