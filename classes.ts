// class Person {
//   name: string;
//   age: number;
//   dogName: string;

//   constructor(name: string, age: number, dogName: string){
//     this.name = name,
//     this.age = age,
//     this.dogName = dogName
//   }
// }

// below code is the same as above

class Person {
  constructor(public name: string, public age: number, public dogName: string) {}
}


// protected properties -> only within classes and classes that extend protected property class
// private properties -> only accessible within class
 