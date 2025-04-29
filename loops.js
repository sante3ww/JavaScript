// For loops
for(let i = 1; i <= 10; i++) {
    console.log('hello')
}

for(let num = 1; num <= 20; num++) {
    console.log(`${num}x${num} = ${num*num} `)
}

const examScores = [98 ,45,34,65,76,71] 

for(let i = 0; i < examScores.length; i++) {
    console.log(i, examScores[i])
}



//For loops & Arrays
const myStudents = [
	{
		firstName : 'Zeus',
		grade     : 86
	},
	{
		firstName : 'Artemis',
		grade     : 97
	},
	{
		firstName : 'Hera',
		grade     : 72
	},
	{
		firstName : 'Apollo',
		grade     : 90
	}
];

for(i = 0; i < myStudents.length; i++) {
    let student = myStudents[i]
    // console.log(`${myStudents[i]}`)
    console.log(`${student.firstName} score is ${student.grade} `)
}
let total = 0
for(i = 0; i < myStudents.length; i++) {
    let student = myStudents[i]
    total += student.grade;
    console.log(total)
}

let avarage = total/myStudents.length
console.log(avarage)



// nested For loops
for(let i = 1; i <= 10; i++) {
	console.log('outer loop', i)
	for(let j = 5; j >= 0; j -=2){
console.log('inner loop', j)
	}
}



// game
const gameBoard = [
	[ 4, 32, 8, 4 ],
	[ 64, 8, 32, 2 ],
	[ 8, 32, 16, 4 ],
	[ 2, 8, 4, 2 ]
];

let totalScore = 0;

for(let i = 0; i < gameBoard.length; i++) {
	let row = gameBoard[i]
	console.log(row)
	for(let j = 0; j < row.length; j++){
		console.log(row[j])
		totalScore += row[j]
	}
}

console.log(totalScore)



// While loop
let k = 0;
while( k <=5 ) {
	console.log(k);
	k++
}
