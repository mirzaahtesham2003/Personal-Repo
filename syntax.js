"use strict";
//Declaring a variable string
let Name = "Mirza Ahtesham Baig";
//Declaring a variable number
let age, weight;
//Declaring a variable boolean
let isMarried = false;
//Declaring an array
let marks = [44, 40, 56, 30, 59, 45, 41];
//Array can also be declared like dis
let days;
//Declaring Tuples, can be of similar or diffrent data types.
let father = ["Mirza Kaleem Baig", 58];
//Declaring an enum
var direction;
(function (direction) {
    direction[direction["up"] = 1] = "up";
    direction[direction["down"] = -1] = "down";
    direction[direction["right"] = 2] = "right";
    direction[direction["left"] = -2] = "left";
})(direction || (direction = {}));
//In Filter function when passed an array, it filters out vales for which it is true 
let passSubjects = marks.filter((marks) => { return marks >= 40; });
//In find function it returns only single value (First) for true condition.
let failSubject = marks.find((marks) => marks < 40);
//Reduce function returns a sigle value by given logic.
let totalMarks = marks.reduce((pre, cru) => pre + cru);
//Syntax for writing functions and it's parameters.
//Method 1
function add(a, b) {
    return a + b;
}
//Method 2
const sub = (a, b) => {
    return a - b;
};
//Method 3
const mul = function (a, b) {
    return a * b;
};
//Declating optional params in func.
function add1(a, b, c) {
    return c ? a + b + c : a + b; // if exist ? Yes : No;
}
//Declating default params.
function add2(a, b, c = 10) {
    return a + b + c; //not passed then it uses default.
}
//Declating rest params in func.
function add3(a, b, ...c) {
    return (a + b + c.reduce((cru, pre) => cru + pre)); //could take 'n' number of values
}
age = 21;
weight = 73.5;
let formattedName = Name.toUpperCase();
let dir = direction.up;
console.log(`Full name : ${formattedName}`);
console.log(`Age = ${age}`);
console.log(`Weight = ${parseInt(weight.toString())}`);
console.log(isMarried);
console.log(passSubjects);
console.log(`Marks of failed subject : ${failSubject}`);
console.log(`Total marks = ${totalMarks}`);
console.log(dir);
console.log(father);
console.log(`add = ${add(1, 2)}`);
console.log(`sub = ${sub(1, 2)}`);
console.log(`mul = ${mul(1, 2)}`);
console.log(`add1 = ${add1(1, 2)}`);
console.log(`add1 = ${add1(1, 2, 3)}`);
console.log(`add2 = ${add2(1, 2)}`);
console.log(`add2 = ${add2(1, 2, 3)}`);
console.log(`add3 = ${add3(1, 2, 3, 4, 5, 6, 7, 8, 9)}`);
