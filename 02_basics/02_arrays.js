const marval_heros = ["thor ","ironman","spiderman"]
const dc_heros = ["superMan","batMan","Flash"]

// marval_heros.push (dc_heros)
// console.log(marval_heros);

// const allheros = marval_heros.concat(dc_heros)
// console.log(allheros);

// spread out
const new_heros = [...dc_heros,...marval_heros]
console.log(new_heros);


const anotherArray = [12,13,14,15,[13,4,67,88],[45,24,55],[56,34,46,78]]
console.log(anotherArray.flat(4));

console.log(Array.isArray("snesh"))
console.log(Array.from("snesh"))
console.log(Array.from({name :"snesh "}));  //keys and value tht why

 const score=100
 const score2=200
const score3=300
console.log(Array.of(score,score2,score3));
