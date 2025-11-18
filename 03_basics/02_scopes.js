//global scope
const a=23


if (true)
{
let a =12
var b =20         //block
const d=23
// console.log(a);

}
// console.log(a);
// // console.log(b);


function One()
{
    const userName ="snesh"

    function Two()
    {
        const website="youtube"
        console.log(userName);
        
    }
    // console.log(website);

    Two()
    
}
// One()

function addOne(num)
{
    return num+1
}
// console.log(addOne(5))

console.log(addTwo(3))
const addTwo = function(num2)
{
    return num2+2
}


