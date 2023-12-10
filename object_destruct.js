//destructuring assignment syntax is a js expression that makes it possible to unpack value from arrays, or properties from objects,
//into distinct variables


const bioData = {
	name: "mandira",
	age: 26,
	deg: 'BE',
	hobby: {
		first : 'sleep',
		sec: 'cry'
	}
}

console.log(`my name is ${bioData.name}`);

//abi destructuring

//ye order me hi hona chahaiye...array ,object dono k liye

console.log("ex 2");
//let name,age,deg;
//({name,age,deg} = bioData);

let {name,age,deg} = bioData;  
console.log(`my name is ${name} and age is ${age}`);

//yaha pe iska name and upr object ka name same hona chhaiye nad chnge krna h toh
console.log("ex3")

//let {name:myname,age:ages,deg} = bioData;  
//let {name:myname,age:ages} = bioData;  //this wrks
//console.log(`my name is ${myname} and age is ${ages}`); //this wrks

console.log("ex4")
let {name:myname,age:ages,deg:degree,hobby} = bioData; 
console.log(`my name is ${myname} and age is ${ages} and i love ${hobby.sec}. ` );

