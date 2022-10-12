// Type Annotations

// let myName: string = "Enes";
// let isHuman: boolean = true;
// let myFavNumber: number = 43;

// const add = (x: number, y: number) => {
//   return x+y;
// }

// Inferred Types

// this is inferred, ts now that myName is string
let myName = "enes"
// function parameters can be inferred

const numbers = [1,2,3]
// numbers.push("1")  string is not assignable to array of numbers


// Union Types 
const numbersAndStrings = [1,2,3, "Enes"]
//  same as 
//const numbersAndStrings: (string | number)[] = [1,2,3, "Enes"]
// let x: string | number = "3"


