class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    static speak() {
        console.log('Hello');
    }
}

const person = new Person('Victor', 'Robles', 35);
console.log(person);

person.getFullName();

Person.speak();