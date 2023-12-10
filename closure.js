//closure

//agar ek fucntion k andar ek aur function h ...toh andar wala inner function h 
//inner function fir..apne parent function k variables access kr skta h aur global variables b

//A closure is combination of function and lexical environment withing which that function was decalred
//lexical environment ek chart hota h jisme ye likha hota h k apka particular function
//kis acheez ko access kr skta h aur kisko nhi , matlab it holds its scope and scope chain

let d = 1;
const outerFun = (a) => {
    let b = 10;
    const innerFun = () => {
        let sum = a+b+d;
        console.log(`sum of 2 nos. is ${sum}`)
    }
    //innerFun(); //ye nhi likha idr toh o/p me kuch ata nhi ...first
    return innerFun; //isko ab lexical scoping nhi bol skte
}

//outerFun(5); //sum of 2 nos. is 15 ...first
let inner = outerFun(5);
console.dir(inner);
inner(); //sum of 2 nos. is 15 ...first


//outer func ka scope khatam hone k baad , outer func memory se nikal gaya h and wo inner func return krta h run nhi q ki uska execution contetx b khtm hogya h 
//ye upr ka example 2nd time jo likha h wo closure ka example h 
//last me inner fun call kia..hume a,b ki value mili , qki in memory me inner func save hua h and wo o/p deta h 
//isko closure bolte h 


