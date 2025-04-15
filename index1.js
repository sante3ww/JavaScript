// Math object & property Random number
let randomCubeNumber = Math.floor(Math.random() * 9) + 1
let print = `Ваше число ${randomCubeNumber}`
// Functions parseInt & parseFloat
let numberFromString = parseInt(randomCubeNumber)
console.log(print)
console.log(`Число взятое с "print": ${numberFromString}`)
//
let string = "3"
let string2 = string + 1.5
let numberFromString2 = parseFloat(string2)
console.log(typeof string2, string2)
console.log(typeof numberFromString2, numberFromString2)



