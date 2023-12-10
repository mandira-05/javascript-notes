//js Symbol

//symbols are immutable and unique

// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 == value2); // false

console.log(typeof value1);

//
console.log("Access Symbol Description");

const x = Symbol('hey');
console.log(x.description); // hey

//Add Symbol as an Object Key

console.log("Add Symbol as an Object Key");

let id = Symbol("id");

let person = {
    name: "Jack",
    age: 20,

    // adding symbol as a key
    [id]: 123 // not "id": 123
};

console.log(person); // {name: "Jack", Symbol(id): 123}

//symbols ko for...in me iterate nhi kr skte h 

for (let key in person) {
    console.log(`${key} -> ${person[key]}`);
}

