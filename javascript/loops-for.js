// for (let index = 0; index < 10; index++) {
//     console.log(`Index: ${index}`);
// }

const cars = ['Ford', 'Chevrolet', 'Toyota', 'Honda', 'Nissan'];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

for (let car of cars){
    console.log(car);
}

cars.forEach(function(car, index){
    console.log(index); 
    console.log(car);
});