interface Person {
  name: string,
  age: number
}

// Optional Properties
interface _Person {
  name: string,
  age: number,
  schooll?: string,
}


type DeveloperSeniorityType = "senior" | "mid" | "junior"
// type vs Interfaces -> you can use types inside classes like that
//the key distinction is that a type cannot be repoped to add new properties vs an interface which is always extendable
interface _Person {
  name: string,
  age: number,
  developerType: DeveloperSeniorityType
}


const person = {
  name: "enes",
  age: 24
}

function greet(person: Person) {
  return ` Hello ${person.name}`
}

greet(person)

// // function parameter could be anything. you can use it to gradually define types
// function greet(person:any) {
//   return ` Hello ${person.name}`
// }


// unknown is similar to any except it is safer because it is illegal to do anything with unknown value like a.b()

// type assertions
const x = "hello" as string

// never type use it in cases where you expect code to never get in there like switch case if else statements 

