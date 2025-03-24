// Create the program to extends the interface

interface Person {
    name : string;
    age : number;
}

interface Employee extends Person {
    empId : number;
}

const empl : Employee = {
    name : 'Shubh',
    age : 21,
    empId : 0o1
}

console.log(empl)

