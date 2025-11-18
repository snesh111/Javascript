function Myname (){

    console.log("s");
    console.log("n");
    console.log("e");
    console.log("s");
    console.log("h");
}
// Myname()

// function addNumber (number1,number2){

//        let result = number1+number2
//        return result 
// }

//  const result = addNumber(2,1)
// console.log(result);

// function UserLoggedIn (userName){
//         if (userName === undefined)
//             {
//                 console.log("pl enter usr name"); 
//             }
//             return
//         return `${userName} just logged in `
// }
// console.log(UserLoggedIn());

function addTocard( user0,...user1){
            return user1
 }
// console.log(addTocard(20,200))


const MainUser ={

        UserName : "snesh",
        userId : "01"
}

function handlingObject (anyobject){
    console.log(`user name is ${anyobject.UserName},user Id is ${anyobject.userId}`);       
}

// handlingObject (MainUser)

const myArray =[100,334,556,765]

function returnsscondvalue (getarray){
    return getarray[1]
}
console.log(returnsscondvalue(myArray));
