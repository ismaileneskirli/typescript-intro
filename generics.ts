function sortItems<T>(items: T[], compareFn: (a: T, b: T) => number): T[] {
  return items.sort(compareFn);
}


// T can be anything.
// by using generics you get to define type when using the function


const numbers = [1,2,5,3,4]
const sortedNumbers = sortItems <number> (numbers, (a,b) => a-b)

const names = ["enes", "ahmet", "david"]
const sortedNames = sortItems <string> (names, (a,b) => a.localeCompare(b)) 