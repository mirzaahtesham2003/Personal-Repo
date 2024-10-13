//Declaring a variable string
let Name: string= "Mirza Ahtesham Baig";

//Declaring a variable number
let age, weight: number;

//Declaring a variable boolean
let isMarried: boolean = false;

//Declaring an array
let marks: Array<number> = [44, 40, 56, 30, 59, 45, 41];

//Array can also be declared like dis
let days: string[];

//Declaring Tuples, can be of similar or diffrent data types.
let father: [string, number] = ["Mirza Kaleem Baig", 58];

//Declaring an enum
enum direction {
    up = 1,
    down = -1,
    right = 2,
    left = -2
}

//Declaring a class

class familyMembers {
    name !: string;
    age !: number;
    #device !: string;
    profession !: string;

    constructor(name:string, age:number, device:string, profession:string ){
        this.name = name;
        this.age = age;
        this.#device = device;
        this.profession = profession;
    }

    printDataOfObject(){
        console.log(this.name);
    }

}

let person1= new familyMembers('Mirza Ahtesham Baig',21, 'IdeaPad 5, 2 in 1', 'Software Enggineer');



//In Filter function when passed an array, it filters out vales for which it is true 
let passSubjects: number[] = marks.filter((marks)=>{ return marks >= 40;});

//In find function it returns only single value (First) for true condition.
let failSubject: number | undefined = marks.find((marks)=> marks < 40);

//Reduce function returns a sigle value by given logic.
let totalMarks: number = marks.reduce((pre,cru) => pre + cru);


//Syntax for writing functions and it's parameters.

//Method 1
function add ( a:number , b:number ) : number{
    return a+b;
}

//Method 2
const sub = ( a:number , b:number ) : number => {
    return a-b;
}

//Method 3
const mul = function ( a:number , b:number ) : number {
    return a*b;
}

//Declating optional params in func.
function add1 ( a:number , b:number, c?:number ) : number{    //Here c is an optional param, just param?
    return c ? a+b+c : a+b ;                                  // if exist ? Yes : No;
}

//Declating default params.
function add2 ( a:number , b:number, c = 10 ) : number{      //Here c is required param, if a value is
    return a+b+c ;                                           //not passed then it uses default.
}

//Declating rest params in func.
function add3 ( a:number , b:number, ...c:number[]) : number{//Here c is an array and rest param,
    return (a + b + c.reduce((cru, pre) => cru+pre));        //could take 'n' number of values
}

//Genric function, can be useful for diff data types
function genric <type> (a :type[]) : type[]{
    return new Array<type>().concat(a);
}
let passNumbers = genric<number>([1,2,3,4,5]);
let passString = genric<string>(['a', 'b', 'c', 'd', 'e']);


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
console.log(`direction.up = ${dir}`);
console.log(father);
console.log(`add = ${add(1,2)}`);
console.log(`sub = ${sub(1,2)}`);
console.log(`mul = ${mul(1,2)}`);
console.log(`add1 = ${add1(1,2)}`);
console.log(`add1 = ${add1(1,2,3)}`);
console.log(`add2 = ${add2(1,2)}`);
console.log(`add2 = ${add2(1,2,3)}`);
console.log(`add3 = ${add3(1,2,3,4,5,6,7,8,9)}`); //Or can be passed : add3(1,2, ...[3,4,5,6,7,8,9])
console.log(person1);
