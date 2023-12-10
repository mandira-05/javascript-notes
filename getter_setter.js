//getter setter

//js me 2 kinds of object properties h 
//-data properties
//-accessor properties

//pehle jo b use kie the sab data properties hi h 

console.log("example 1");

const student = {

    // data property
    firstName: 'Monica',
}  /// yaha pe ; dala toh o/p pe object likh k ata h , nhi dala toh  name ata h o/p me

console.log(student);

//accessor property

//get - to define a getter method to get the property value
//set - to define a setter method to set the property value

//java jaise hi h ye

console.log("example 2");

const student1 = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(student1.firstName); // Monica

// accessing getter methods
console.log(student1.getName); // Monica

// trying to access as a method
//console.log(student1.getName()); // error

//js setter

//setter methods are used to change the values of an object

console.log("example 3");

const student2 = {
    firstName: 'Mandira',
    
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student2.firstName); // Mandira

// change(set) object property using a setter
student2.changeName = 'Nikita';

console.log(student2.firstName); // Nikita

//2nd way to create getter and setter

console.log("example 4");

const student3 = {
    firstName: 'Monica'
}

// getting property
Object.defineProperty(student3, "getName", {
    get : function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student3, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student3.firstName); // Monica

// changing the property value
student3.changeName = 'Sarah';

console.log(student3.firstName); // Sarah

//ye 2nd wala tough h 


