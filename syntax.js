"use strict";
let Name = "Mirza Ahtesham Baig";
let age, weight;
let isMarried = false;
let marks = [44, 40, 56, 30, 59, 45, 41];
let days;
let passSubjects = marks.filter((marks) => { return marks >= 40; });
let failSubject = marks.find((marks) => marks < 40);
let totalMarks = marks.reduce((pre, cru) => pre + cru);
let father = ["Mirza Kaleem Baig", 58];
var direction;
(function (direction) {
    direction[direction["up"] = 1] = "up";
    direction[direction["down"] = -1] = "down";
    direction[direction["right"] = 2] = "right";
    direction[direction["left"] = -2] = "left";
})(direction || (direction = {}));
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
