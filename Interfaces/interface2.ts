// // Write the program to demonstate the use of the interfaces
// interface Emp {
//     name : string;
//     age : number;
//     address : string;
//     salaryNo : number;
//     ID : number;
// }

// const EMP1 : Emp = {
//     name : 'Shubham',
//     age : 21,
//     address : 'Kolhapur',
//     salaryNo : 1,
//     ID : 1,
// }



// console.log(EMP1.ID)

import * as readline from "readline"

const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r1.question("Enter your name : ", (name) => {
    console.log(`Hello, ${name} !`)
    r1.close();
})