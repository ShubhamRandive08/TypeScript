// type User = {
//     name ?: string
//     age ?: number
//     address ?: string
//     gender ?: string
// }
var user1 = {
    username: "shubh00971617@gmail.com",
    password: "Kingsr@08",
};
var user2 = {
    username: "sonala00971617@gmail.com",
    password: "Sonala@08",
};
var username = "shubh00971617@gmail.com";
var password = "Kingsr@08";
function validationUser(user) {
    if (user.username === username && user.password === password)
        console.log("".concat((user.username, user.password), " : Access Granded for this user"));
    else
        console.log("".concat((user.username, user.password), " : Access Denied for this user"));
}
console.log(validationUser(user1));
console.log(validationUser(user2));
