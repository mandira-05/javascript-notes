//function is first class citizen

//functions ko ek variable ki tarah use kr skte ho , usko firstclass function bolte h 

//const thankYou = function() {
//    console.log("do dod od");
//}
//thankYou();

//1st point - in js we can assign a function to a variable, which is called method

const youtube = {
    name : "Mandira",
    qualif : function() {
        console.log("BE Comp");
    }
}

youtube.qualif();

//2nd point - pass function as an aruguemnt

const myName = () => {
    return "hello";
}

//sayHi ek fucntion h jisko as a parameter lia h 
const greeting = (sayHi, name) => {
    console.log(sayHi()+ " "+ name);
}
greeting(myName,"Mandira");
//yaha pe sayHi k paramter pe upr ka function pass kia h and ek name
//myName - isko callback function bolte h 

//3rd point - return function

function a() {
    return function b() {
        console.log("frhfu");
    }
}

a(); //o/p me kuch dikehga nhi

a()(); //frhfu

console.log ("2nd way to return func");
const c = a();
c();


