// type User = {
//     name ?: string
//     age ?: number
//     address ?: string
//     gender ?: string
// }

// function login(userData : User) : User{
//     return userData
// }

// console.log(login({name : 'Shubham', age : 23, }))

type UserAuth = {
  username: string;
  password: string;
  token?: string;
};

const user1: UserAuth = {
  username: "shubh00971617@gmail.com",
  password: "Kingsr@08",
};

const user2: UserAuth = {
  username: "sonala00971617@gmail.com",
  password: "Sonala@08",
};

let username = "shubh00971617@gmail.com";
let password = "Kingsr@08";

function validationUser(user: UserAuth) {
  if (user.username === username && user.password === password)
    console.log(`${(user.username, user.password)} : Access Granded for this user`);
  else console.log(`${(user.username, user.password)} : Access Denied for this user`);
}

console.log(validationUser(user1));
console.log(validationUser(user2));
