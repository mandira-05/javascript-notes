// rest 

//rest parameter is an improved way to handle function parameter, allowing us to more easily handle 
//various i/p as parameters in a function.
//rest parameter syntax allows us to represent an indefinite number of arguements as an aray

//es5

function sum(a,b,e,d,f,g) {
	console.log(a+b);
}

sum(1,2,3,4,5,6);  //3 ... pehle 2 parameters hi liye h idr



//es6
function sum1(...inputs) {  //ye 3 dot rest operator h 
	//console.log(a+b); //3 
	//console.log(inputs);  ///yaha pe array lia h  ... o/p [1, 2, 3, 4, 5, 6]
	console.log(...inputs); //1 2 3 4 5 6
	let total = 0;
	for (let i of inputs) {
		total+=i;
	}
	console.log(total); //21
}

sum1(1,2,3,4,5,6); 

console.log("example3");
function fun(a,b,...c) {
	console.log(`${a} ${b}`); //Ronaldo Neymar
	console.log(c); //['Pele', 'Messi', 'Edan']
	console.log(c[0]);  //Pele
	console.log(c.length); //3
	console.log(c.indexOf('Edan')); //2

}
fun('Ronaldo','Neymar','Pele','Messi','Edan');


