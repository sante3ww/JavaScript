
let traineeName = "John Doe";
let age = 25;
let isActive = true;
console.log(`Trainee: ${traineeName}, Age: ${age}, Active: ${isActive}`);

function greetTrainee(name) {
    return `Welcome to the program, ${name}!`;
}
console.log(greetTrainee(traineeName));

for (let i = 1; i <= 5; i++) {
    console.log(`Step ${i}: Learning JavaScript Basics`);
}

let skills = ["HTML", "CSS", "JavaScript"];
skills.push("React");
console.log("Updated Skills:", skills);

let trainee = {
    name: "John Doe",
    age: 25,
    skills: skills,
    introduce: function() {
        return `Hi, I'm ${this.name}, skilled in ${this.skills.join(", " )}`;
    }
};
console.log(trainee.introduce());

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched successfully!"), 2000);
    });
}
fetchData().then(response => console.log(response));
