let day = 3;

// Switch case
switch(day) {
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
    case 3:
        console.log("wednsday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    case 7:
        console.log("sunday")
        break;
    defualt: 
        console.log("invalid day!")
}
// Ternary operator
let dayStatus = day >= 5 && day <= 7 ? 'free' : 'work';
console.log(dayStatus)