// object literals 
const mysym=Symbol("key1")
const user = {
    name :"snesh",
    [mysym] : "key1",
    age : 18,
    emailid : "raju@gamil.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday","sunday"]

}
// console.log(user.age)
// console.log(user["emailid"]);
// console.log(user[mysym]);

// console.log(user.emailid = "raj@gmail.com")
// // Object.freeze(user)
// console.log(user.emailid = "rajshakar@gmail.com")
// console.log(user.emailid)

user.greeting  = function()
{
console.log("helloo");

}
user.greetingTwo  = function()
{
console.log(`hello  user ${this.name}`);

}

console.log(user.greeting());
console.log(user.greetingTwo());

