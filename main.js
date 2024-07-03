class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Car {
    constructor(makename, model, year, lincensePlate) {
        this.makename = makename;
        this.model = model;
        this.year = year;
        this.lincensePlate = lincensePlate;
    }

    assignOwner(person) {
        if (person.age > 18) {
            this.owner = person;
        } else {
            console.log("Owner must be above 18 years old.");
        }
    }

    displayInfo() {
        console.log(`Make: ${this.makename}, Model: ${this.model}, Year: ${this.year}, License Plate: ${this.lincensePlate}`);
        if (this.owner) {
            this.owner.displayInfo();
        }
        else {
            console.log("No owner assigned.");
        }
    }
}

const person1 = new Person('Igor', 33);
const person2 = new Person('Dima', 17);
const person3 = new Person('Anna', 24);

const car1 = new Car('BMW', 'X3', 2017, 'AE2509IE');
const car2 = new Car('Honda', 'CR-V', 2008, 'AE0889IE');


car1.assignOwner(person1);
car2.assignOwner(person2);
car2.assignOwner(person3);

car1.displayInfo();
car2.displayInfo();

