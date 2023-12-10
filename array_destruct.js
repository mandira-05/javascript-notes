//destructuring assignment syntax is a js expression that makes it possible to unpack value from arrays, or properties from objects,
//into distinct variables

//array destructuring

const myprolang=['js','java','c','php','python'];

//in es5
console.log("in es5")
var top1=myprolang[0];
var top2=myprolang[1];
var top3=myprolang[2];

console.log("My fav pro lang is " +top1);


//now in es6 - array destruction

let [topp1,topp2,topp3,topp4,topp5] = myprolang //yaha pe 5 var ko ek saath declare kia h 
console.log("in es6")
console.log("My fav pro lang is " +topp3)


console.log(myprolang.length); //5

//display first and last element

let [toppp1,,,,toppplast] = myprolang; //pehla comma first variable khtm hua h islye dala h 
//console.log(`My fav prol lang is ${toppp1} and my least fave is ${toppplast}.`);  //My fav prol lang is js and my least fave is python.


let topppp1,topppp2;
[topppp1,topppp2] = myprolang;
console.log(`My fav prol lang is ${topppp1} and my 2nd fave is ${topppp2}.`);




