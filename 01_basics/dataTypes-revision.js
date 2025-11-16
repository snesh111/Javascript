//primitive
// call by value copy of the og value all the changes  will happen in copy 
// 7 types -- string,number,boolean,undefined,null,symbol,BigInt

// const score = 100
// const scoreNumber = 123.1
// const isLoggedIn = true
// const emailId = null 
// let name;

// let id = Symbol("123")
// let numId = Symbol ("123")
// console.log( id == numId);



// reference type non- primitive 
// Array,objects,functions

// const myfunction = function ()
// {

// }

//  const array=["snesh" ,"dfjhdfh" ]



//stack (primitive)

// let myName = "snesh"
// let anotherName= myName
// anotherName = "chinnu"
// console.log(myName);





let user1 = {
    userEmail : "raja@gmail.com",
    uId : 18
}
console.log(user1);

let user2 = user1
console.log(user2);

user2.userEmail = "user2.gmail.com"
console.log(user2.userEmail);
console.log(user1.userEmail);

console.log(user1);

