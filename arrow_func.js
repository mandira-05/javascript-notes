//arrow function

//this 

const user = {
    username: "mandira",
    price: 90,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        //console.log(this);
    }

}

//user.welcomeMessage(); //this keyword current context(value) uthata h
//user.username="sam"; //yaha pe contxt(value) chnge kr dia
//user.welcomeMessage();

console.log(this); //global me koi context nhi h islye kuch print nhi hua ..aur browser me window dikha  rha h..
//q ki window global contxt h

function chai() {
    let username="meoe"
    console.log(this.username); 
}

// chai(); //

//const chai = () => {
//    let username = "mandira"
//    console.log(this);  //o/p blank hi hoga
//}

//chai()

//arrow function 

//ye explicit return h

const addTwo = (num1,num2) => {
    return num1+num2
}

console.log(addTwo(3,4))

// { } me likha toh return keword dalna hi hoga

//arrow with implicit return

const addTwo2 = (num1,num2) => (num1+num2)
console.log(addTwo2(3,3))


//abi object return krna hoga toh { parenthese} use krna hi h 

const addTwo3 = (num1,num2) => ({username: "hkf"})
console.log(addTwo3(2,3))


