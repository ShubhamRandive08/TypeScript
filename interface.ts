// Write the program to create the interface and provide the interface as a type of the another type

interface Transaction { // Interface 1
    payerAccountNumber : number;
    payeeAccountNumeer : number;
}

interface BankAccount { // Interface 2
    accoutNumber : number;
    accoutHolder : string;
    balence : number;
    isActive : boolean;
    transaction : Transaction[]
}

// Objects with type Transaction
const transaction1 : Transaction = { // Create the object with type Transaction
    payerAccountNumber : 334,
    payeeAccountNumeer : 123,
}

const bankAc : BankAccount = { // Create the object with type BackAccoutn
    accoutNumber : 34455667,
    accoutHolder : 'Shubham Randive',
    balence : 40000,
    isActive : true,
    transaction : [transaction1] 
}

console.log(bankAc) // Print the bankAc object