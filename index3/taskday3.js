let buyerName = 'Anna'

let coffee;
let espresso = 1;
let latte = 2;
let americano = 3;

let size;
let SMALL_SIZE = 4;
let MEDIUM_SIZE = 5;
let LARGE_SIZE = 6;

let sale;


// Выбирает любой кофе из трех
let randomCoffee = Math.floor(Math.random() * 3) + 1
switch(randomCoffee) {
    case 1:
        espresso = 'espresso';
        coffee = espresso;
        break;
    case 2: 
        latte = 'latte';
        coffee = latte;
        break;
    case 3:
        americano = 'americano';
        coffee = americano;
        break;
    default:
        console.log("error1")
}


// Выбирает любой размер из трех
let randomSize = Math.floor(Math.random() * 3) + 4
switch(randomSize) {
    case 4:
        SMALL_SIZE = 'small';
        size = SMALL_SIZE;
        break;
    case 5: 
        MEDIUM_SIZE = 'medium';
        size = MEDIUM_SIZE;
        break;
    case 6:
        LARGE_SIZE = 'large';
        size = LARGE_SIZE;
        break;
    default:
        console.log("error2")
}


// Выбирает с молоком или без
let milk = Math.random() < 0.5
switch(milk) {
    case true:
        milk = 'with milk';
        break;
    case false:
        milk = 'without milk'
        break;
    default:
        console.log("error3")
}



size === LARGE_SIZE ? sale = 'with 10% sale !' : sale = '!';

console.log(`${buyerName} will buy ${size} ${coffee} ${milk} ${sale} `)




