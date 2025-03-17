// Write the program to create the interface and provide the interface as a type of the another type
// Objects with type Transaction
var transaction1 = {
    payerAccountNumber: 334,
    payeeAccountNumeer: 123,
};
var bankAc = {
    accoutNumber: 34455667,
    accoutHolder: 'Shubham Randive',
    balence: 40000,
    isActive: true,
    transaction: [transaction1]
};
console.log(bankAc);
