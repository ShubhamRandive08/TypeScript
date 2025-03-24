// Create the ATM machine with the help of the interface and make the successfull transaction 
import { read } from 'fs';
import * as readline from 'readline'

let currntBal : number = 0;
let withdrowAmt : number = 0;
let depositeAmt :number  = 0;

const r1 = readline.createInterface({
    input :  process.stdin,
    output : process.stdout
})

r1.question('Enter Your Name : ',(name) => {
    console.log(`Welcom ${name}! in our ATM.. Have A GOOD DAY  !`)
})