// Primitive data type
let age : number = 23;
let tname : string = "Shubham"
let isActive : boolean = true
// let bigInt : bigint = 34n
// let uniqueId : symbol = Symbol('id')
let emptyValue : null = null
let notAssigned : undefined = undefined

// Object type
let person : {name : string, age : number } =
{
    name : 'Shubham',
    age : 80
}

// Array types
let nums : number[] = [1,2,3,4,5]
let str : string[] = ['Shubham', 'Randive']

    // Using generic syntax,
    let values : Array<number> = [1,2,3,4]

// Tuple type 
let users : [string, number ] = ['Shubham', 87]


// Enum type 
enum Role {
    Admin,
    User, 
    Guest
}

let userRole : Role = Role.Admin
console.log(userRole)

// Enum 
enum Status {
    Success = 200,
    NotFound = 404,
    Error = 500
}

console.log(Status.Success)  // 200

// Any type
let randomValue : any = 'Hello'
randomValue = 34
randomValue = true

// void 
function logMessage() : void {
    console.log('This is function return nothing')
}

// Union type
let value : string | number
value = 'Shubham'
value = 30

// interface
interface Car {
    brand : string,
    model : String
}

let myCar : Car = { brand : "Toyoto", model : 'Corolla' }


// Class
class Person {
    name : string
    age : number

    constructor(name : string, age : number){
        this.name = name
        this.age = age
    }

    greet() : void {
        console.log(`Hello, My name is ${this.name}`)
    }
}

let userMe : Person = new Person('Shubh', 23)
userMe.greet()

