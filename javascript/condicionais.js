const sum = 1 + 2;

if (sum === 2) {
    console.log("Sum is 2!");
} else if (sum === 3){
    console.log("Sum is 3!");
} else {
    console.log("Sum is not 2!");
}


// if (sum === 2) {
//     number = 2;
// } else {
//     number = 4;
// }
// mesma coisa que o de cima
let number = sum === 2 ? 2 : 4;


// &&
// ||

const sum1 = 2 + 2;
const sum2 = 3 + 3;

if (sum1 === 4 && sum2 === 6){
    console.log("Both sums are correct!");
}


if (sum1 === 4 || sum2 === 13){
    console.log("Both sums are correct!");
}

const car = 'Audi';

switch (car) {
    case 'Mercedes':
        console.log("You have a Mercedes!");
        break;
    case 'Ferrari':
        console.log("You have a Ferrari!");
        break;
    case 'Audi':
        console.log("You have an Audi!");
        break;
}