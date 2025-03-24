// Create the program to implements the interface with function

interface MathOperation {
    (a : number , b : number) : number
}

const add1 : MathOperation = (x,y) => x + y

console.log(add1(5,10))

// Extending interfaces
interface Person {
    name : string;
    age : number;
}

interface Employee extends Person{
    empId : number
}

const employee : Employee = {
    empId : 30,
    name : 'Shubham',
    age : 32
}

console.log(employee)