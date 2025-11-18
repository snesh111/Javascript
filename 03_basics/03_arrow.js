const user ={

    userName :"snesh",
    price :99,
    welcomeMessage : function(){
        console.log(`${this.userName},welcome to website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.userName="raju"
// user.welcomeMessage()
// console.log(this);

// function chai()
// {
//     let userName = "snesh"
//     console.log(this.userName);
    
// }
// chai()

// const chai1=function()
// {
//     let userName = "snesh"
//     console.log(this.userName);
    
// }
// chai1()


// const chai1 = ()=>
// {
//     let userName = "snesh"
//     console.log(this);
    
// }
// chai1()


// const addTwono = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwono(2,4))

// implicit return 
// const addTwono = (num1,num2)=> num1+num2
// const addTwono = (num1,num2)=> (num1+num2)
// const addTwono = (num1,num2)=> num1+num2
const addTwono = (num1,num2)=> ({userNAme:"snsh"})
console.log(addTwono(2,4))


