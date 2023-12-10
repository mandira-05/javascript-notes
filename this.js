//this

//this keyword refers to the object it belongs

//this keyword jab akela use hota h toh global object return hoga
//window..yaha pe global object h 



//ex 1
console.log("example 1");
console.log(this); // ye refer krega window object ko

//jab hum ek noraml regular function me this use krte h wo b window object ko hi refer krta h 

//ex2

console.log("example 2");
function sum() {
    name1="nene";
    var add=2+4;
    console.log("sum of 2 nos.: " +add);
    console.log("name using this keyword"+ this.name1);   
    console.log(this);
}

sum();

//in a method, this refers to owner object

//ex3

//

console.log("ex 3");

const thapa = {
    name: "mandira",
    qualify : "BE",
    sum: function() {
        var add=2+4;
        console.log("sum of 2 nos.: " +add);
        console.log(this.name); //mandira
        console.log(this);  //yaha pe object ka contxt print krega
    }
}

thapa.sum();  

//sum of 2 nos.: 6
//{name: 'mandira', qualify: 'BE', sum: ƒ}


//agar strict mode me use kia this keyword toh... o/p me undefined show krta h
//for example 2


