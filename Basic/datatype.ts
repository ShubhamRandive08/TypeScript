let num : number = 43
let strzDatatype : string = 'Shubham'
let isActiveData : boolean = true
// let BigNum : bigint = 34n
let Empty : null  = null
// let uniqueID : symbol = Symbol('id')
let undefinedValue : undefined = undefined

console.log(num)
console.log(strzDatatype)
console.log(isActiveData)
// console.log(BigNum)
console.log(Empty)
// console.log(uniqueID)
console.log(undefinedValue)

// Object
let users_name = {
    name : 'Shubham',
    age : 21,
    add : 'Chakreshwarwadi',
    contact : '8530871617'
}

console.log(users_name)

type Num = number;
let userNum : Num = 34;
console.log(typeof(userNum))

type User = {
    name ?: string;
    age ?: number;
    address ?: string;
}

let userData : User = {
    name : 'Shubham'
}

console.log(userData.name)


function login(){
    return 3
}

console.log(login())