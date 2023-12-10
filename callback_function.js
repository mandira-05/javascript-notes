//any function that is passed as an arguemnt is called callback function

//callback function is a function that is to be executed after afetr another function has finished executing 

//setTimeout(function() {
//	console.log("2 sec baad chala");
//},2000);


//callback function tab chlta h jab koi code/function complete hota h 
//upr k function ko js, after 2 secs baad run krta h 
//mtlb jab wo code baad me chlta h ..usko ek function me dalte h and 
//wo jab complete hoga tab run krna h ...wo ek normal function hi h ...but baad me complete hoga islye 
//callback functions bolte h 


//ye asynchronous js h 

console.log("ex 1");

const funA = () => {
    setTimeout(function() {
        console.log(`welcome FunA`);
        funB();
    },3000);
    
}

const funB= () => {
    console.log(`welcome FunB`);
}

funA();
//funB();

//yaha pe pehle funcB run hua fir Fun A run hua..wait nhi kia

//agr funA run krana h pehle toh callback use krna h 


console.log("ex 2");

//yaha pe dusre function ka refernce dia h 

const perOne = (friend,callfrnd) => {
    console.log(`I am busy rn. I am talking to ${friend}. I will call u back.  `);
    callfrnd();
}

const perTwo = () => {
    console.log(`hey call kr`)
}

perOne("Mandira",perTwo);  //yaha pe perTwo callback function h 
//perTwo();
