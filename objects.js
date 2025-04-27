const numbers = {
    100: 'one hundred',
    16: 'sixteen',
    '76 trombones': "song"
}

let newNumber = numbers['76 trombones']
console.log(newNumber)



const userReviews = {};

userReviews['queenBee49'] = 4.0;
userReviews.MrSmith78 = 3.5;

userReviews['queenBee49'] += 2;
userReviews['queenBee49']++;

console.log(userReviews)



const student = {
    firstName: 'David',
    lastName: 'Jones',
    strength: ['Music', 'Art'],
    exams: {
        midterm: 92,
        final: 88
    }
}

student.exams.avg = (student.exams.midterm + student.exams.final) / 2
console.log(student)



const game = {
    player1: {
        userName: 'David',
        playingAs: 'O'
    },
    player2: {
        userName: 'Boe',
        playingAs: 'X'
    },

    board: [
    ["O", null, "X"],
    [null, "O", "X"],
    ["X", null, "o"]
    ]
}
console.log(game)