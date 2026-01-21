const names = ['Ana', 'Juana', 'Carlos', 10, false];

const joao = names[1];

names.push('Paulo');
names.unshift('Mariana');

names.pop();
names.pop();
names.pop();

names[3] = "Gustavo";

const indexOfFCarlos = names.indexOf('Carlos');

console.log(names);