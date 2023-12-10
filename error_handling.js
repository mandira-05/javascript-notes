//error handling  in js and async/await

//promise me fulfill nhi hua toh usko handle krna 

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
//pobj.then((rollno) => {  
//    console.log(rollno);
 //   return getBiodata(rollno[1]);
 //   }).then ( (kuchbhi) => {
//        console.log(kuchbhi);
//    })
//.catch( (error) => {  
//    console.log(error);
//});


async function getData() {   //promises ka jo data ata usko return krne k liye use krte h  
    try {

    
        const rollnodata=await pobj;
        console.log(rollnodata);
   
        const biodatas = await getBiodata(rollnodata[1]);
        console.log(biodattas);

        return biodatas;
    } catch (error) {
        //console.log(`The error is ${error}`);
        alert(`The error is ${error}`);
    }

}

const getname = getData().then((myname) => { 
    console.log(myname);
});



