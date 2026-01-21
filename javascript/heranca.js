class Animal {
    constructor(name){
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const animal = new Animal('Simba');
const dog = new Dog("Bob");

animal.speak();
dog.speak();