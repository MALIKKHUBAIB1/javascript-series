// class SuperHeros {
//   superHeros = "superHeros"; // it same as the object declaration
//   getName() {
//     return this.superHeros; // if you access the superHeros property without then it is undefined becaus this getname function is pointing to the global object then you have to used the the this keyword instead of superheros
//   }
// }
// const hero = new SuperHeros();
// // console.log(hero.superHeros);
// console.log(hero.getName());

// contsructor keywors

class Animal {
  name = "ElePhant";
  // constructor will always call when you use new keyword or you make the object
  constructor(name) {
    this.name = name;
  }
  getName() {
    // this.getLastname()// this is function calling
    return this.name;
  }
  getLastname() {
    return this.lastname;
  }
}

class Dog extends Animal {
  leg = 4;
  constructor(name) {
    super("Jhon Doe"); // super keywors is the way to communicate with the parent object
  }
}
const dogName = new Dog();
console.log(dogName.getName(), dogName.leg); // message passing
