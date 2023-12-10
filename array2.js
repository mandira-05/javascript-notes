//multi-dimensional array

//ways to create multi dim array
//1st
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];
console.log(data);

//2nd
let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

// multidimensional array
let studentsData = [student1, student2, student3];
console.log(studentsData);

//Access Elements of an Array

console.log("access multidim array elements");

let x = [
    ['Jack', 24],
    ['Sara', 23], 
    ['Peter', 24],
    ];
    
// access the first item 
console.log(x[0]); // ["Jack", 24]
    
// access the first item of the first inner array
console.log(x[0][0]); // Jack
    
// access the second item of the third inner array
console.log(x[2][1]); // 24

x.push(['mandira', 26]) //addd at last
console.log(x);

//add element in middle of element
x[1][2] = 'kara';

console.log(x);

//same using push

// using push()
let studentsData1 = [['Jack', 24], ['Sara', 23],];
studentsData1[1].push('hello');

console.log(studentsData1); // [["Jack", 24], ["Sara", 23, "hello"]]

//splice b use kr skte h ..ek particular index pe add krne ko

//remove elements

console.log("remove elemnets from outer array");


let studentsData2 = [['Jack', 24], ['Sara', 23],];
studentsData2.pop();

console.log(studentsData2); // [["Jack", 24]]

console.log("remove the element from the inner array");

// remove the element from the inner array
let studentsData3 = [['Jack', 24], ['Sara', 23]];
studentsData3[1].pop();

console.log(studentsData3); // [["Jack", 24], ["Sara"]]

//splice

console.log("splice use kr k element remove krna h");

let studentsData4 = [['Jack', 24], ['Sara', 23],];

// removing 1 index array item
studentsData4.splice(1,1);
console.log(studentsData4); // [["Jack", 24]]

let studentsData5 = [['Jack', 24], ['Sara', 23],['Pooja', 26],];
console.log('iterating over the studentsData');
studentsData5.forEach((student) => {
    student.forEach((data) => {
        console.log(data);
    });
});

console.log("using loop");

for(let i = 0; i < studentsData5.length; i++){

    // get the length of the inner array elements
    let innerArrayLength = studentsData5[i].length;
    
    // looping inner array elements
    for(let j = 0; j < innerArrayLength; j++) {
        console.log(studentsData5[i][j]);
    }
}

