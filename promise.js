//promises - is an object that keep track about whether a 
//certain event has happened already or not. Determines 
//what happens after the 
//events has happened

//promises are used to handle asynchronous operations

//promise k 3 stage hote h 

//10 baje call krna - ye ek task h 

//kal k 10am k pehle wo task pending hi h 
//stage 1:pending 
//..q ki idea nhi h 10am tk k wo call ayega ya nhi

//2nd stage-resovled -
//once wo event ka time hogya..mtlb 10am hua
//hum call krege ya nhi
//fullfiled ya reject

//3rd stage - reject -
//call nhi hi aaya

//callback hell se bachne k liye promise use krte h

//task - students ka API h

//1st - pehle roll no chahiye
//2nd name and age

//promise use krne k 2 tarike h - object and constructor

//jab new promise create krte h , tab hume ek feunction exceute krna hi padta h , wo fucntion executor h
//executor k pass 2 function h resolve and reject

const pobj = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let roll_no = [1,2,3,4,5];
        resolve(roll_no);   //mtlb roll_no mila h
        //reject('error while communicating'); //nhi mila roll no
    },2000);
});

//har ek task ko as promise lena h 
const getBiodata = (indexdata) => {
    return new Promise ( (resolve,reject) => {
        setTimeout ( (indexdata) => {
            let biodata = {
                name: 'mandira',
                age : 26
            }
            resolve (`My roll no. is ${indexdata}. My name is ${biodata.name} and i am ${biodata.age} years old.`);
        },2000,indexdata);
    });
}

//resolve pass hua toh aage kya hona chahiye o/p me ..us k liye then() use krte h 
pobj.then((rollno) => {  
    console.log(rollno);
    return getBiodata(rollno[1]);
    }).then ( (kuchbhi) => {
        console.log(kuchbhi);
    })
.catch( (error) => {  
    console.log(error);
});


//catch tab chalega jb resolve nhi chalega

//promise create krte h ..tab 2 methods hote h 
//then and catch
//then hume tb use krna h jab hum resolve pass kr rhe h and o/p show krana h 


