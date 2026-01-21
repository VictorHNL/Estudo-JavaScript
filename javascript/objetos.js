const person = {
    firstName: "Victor",
    lastName: "Hugo",
    age: "20",
    hobbies: ['Assistir animes', 'Jogar', 'Ler livros'],
    dog: {
        name: "Simba",
        age: 3
    }
}

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

// Destructuring - Mesma coisa que o código acima
const {
    firstName, 
    lastName, 
    age, 
    hobbies, 
    dog: {name: dogName, age: dogAge}
} = person;

const read = person.hobbies[2];

console.log(person.dog.name, person.dog.age);

// --------------------------------------------------------

const todos = [
    {
        id: 1,
        description: 'Estudar Javascript',
        isCompleted: true
    },
    {
        id: 2,
        description: 'Estudar HTML',
        isCompleted: true,
    },
    {
        id: 3,
        description: 'Estudar CSS',
        isCompleted: false,
    }
]

const descriptionOfLastTodo = todos[2].description;
console.log(descriptionOfLastTodo);
