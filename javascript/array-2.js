const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(function(number){
    return number * 2;
});

const ages = [18, 22, 15, 30, 12, 40];

const evenAges = ages.filter(function(age){
    return age % 2 === 0;
});

