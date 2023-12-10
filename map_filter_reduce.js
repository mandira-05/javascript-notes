

const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
    {name: 'Keyboard', price:25},
    {name: 'Chair', price:59},
    {name: 'Rope', price:20},
    {name: 'Fan', price:350}
]

//filter
const filteredItems = items.filter((item) => {
    return item.price <=100
})

console.log("filter");
console.log(filteredItems);

//map
const filteredItems1 = items.map((item) => {
    return item.name
})

console.log("map");
console.log(filteredItems1);

//find

const filteredItems2 = items.find((item) => {
    //return item.price === 1000
    return item.price >20  ///returns very first item

})

console.log("find");
console.log(filteredItems2);

//for each

console.log("for each");
items.forEach((item) => {
    console.log(item)
})


//some
console.log("some");
const filteredItems3 = items.some((item) => {
    
    return item.price <=100  

})

console.log(filteredItems3); //true //checks if it has items less or equal to 100 price

//every
console.log("every");

const filteredItems4 = items.every((item) => {
    
    return item.price > 0  

})

console.log(filteredItems4); //true // check is all items are more than 0 price

//reduce
console.log("reduce");
//The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

const total = items.reduce((currentTotal,item) => {
    return item.price + currentTotal
},0)

console.log(total);

//includes

console.log("includes");

const a = [2,3,4,10,7]
const includes4 = a.includes(4);
console.log(includes4);  //true


