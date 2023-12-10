//callback hell

//aftr 2sec koi studnet ka roll no fetch krna h , 
//fir 2sec k baad inme se koi b 1 student ka name and age pta lagana
//fir 2sec k baad uska gender pta lagana h

//ek callback k andar dusra callback - nested callback ko

const getRollNo =() => {
    setTimeout( () => {
        console.log('API get roll no.');
        let roll_no = [1,2,3,4,5];
        console.log(roll_no);

        setTimeout( (roll_no)=> {     //first wale settimeout pe depend h 
            const biodata = {
                name : 'mandira',
                age : 26
            }
            console.log(`My roll no is ${roll_no}. My name is ${biodata.name} and i am ${biodata.age} years old`);

            setTimeout( () => {
                biodata.gender='Female';
                console.log(`My roll no is ${roll_no}. My name is ${biodata.name} 
                and i am ${biodata.age} years old. I am ${biodata.gender}`);

            },biodata.name)


        },2000,roll_no[1])
    },2000);
}

getRollNo();


