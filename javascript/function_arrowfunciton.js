function sum(a, b = 10) {
    return a + b;
}

const sumArrow2 = (a, b = 10) => {
    return a + b;
}

//Mesma coisa que a função acima
const sumArrow = (a, b = 10) => a + b;

const sumValue = sumArrow(5);
console.log(sumValue);