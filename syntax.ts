let Name: string= "Mirza Ahtesham Baig";
let age, weight: number;
let isMarried: boolean = false;
let marks: Array<number> = [44, 40, 56, 30, 59, 45, 41];
let days: string[];
let passSubjects: number[] = marks.filter((marks)=>{ return marks >= 40;});
let failSubject: number | undefined = marks.find((marks)=> marks < 40);
let totalMarks: number = marks.reduce((pre,cru) => pre + cru);
let father: [string, number] = ["Mirza Kaleem Baig", 58];   //Tuples

enum direction {
    up = 1,
    down = -1,
    right = 2,
    left = -2
}

age = 21;
weight = 73.5;
let formattedName: string = Name.toUpperCase();
let dir: direction = direction.up;
console.log(`Full name : ${formattedName}`);
console.log(`Age = ${age}`);
console.log(`Weight = ${parseInt(weight.toString())}`);
console.log(isMarried);
console.log(passSubjects);
console.log(`Marks of failed subject : ${failSubject}`);
console.log(`Total marks = ${totalMarks}`);
console.log(dir);
console.log(father);