//~filter()
//filter() JavaScript ka ek method hai jo arrays ke saath use hota hai.Ye ek nayi array banata hai un elements ke saath jo ek diye gaye condition (callback function) ko pass karte hain. Original array change nahi hota.

//? syntax
array.filter(callback(element, index, array), thisArg);

//todo  ==> example

//? -> even number filter
const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers1.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

//? -> Filter strings based on length

const words = ["apple", "banana", "kiwi", "mango"];
const longWords = words.filter((word) => word.length > 4);
console.log(longWords); // Output: ["apple", "banana"]

//? -> Filter objects from an array

const students = [
  { name: "Abhiraj", grade: 85 },
  { name: "Ankit", grade: 60 },
  { name: "Anshu", grade: 92 },
];

const topStudents = students.filter((student) => student.grade > 80);
console.log(topStudents);
// Output: [{ name: "Abhiraj", grade: 85 }, { name: "Anshu", grade: 92 }]

//todo -> use case
// filter() kaafi useful hai jab aapko kisi array ke kuch specific elements chahiye ho, jaise:

// Odd/even numbers alag karna.
// Array se empty ya unwanted values hatana.
// Objects ke andar specific criteria match karna.

//todo => advance example
//? Remove Falsy Values
//You can use filter() to remove all falsy values like null, undefined, 0, false, and "" from an array.
const mixedArray = [0, "hello", false, null, 42, undefined, "", "world"];
const truthyValues = mixedArray.filter((value) => value);
console.log(truthyValues);
// Output: ["hello", 42, "world"]

//?  Filter Positive Numbers
const numbers = [-3, -2, -1, 0, 1, 2, 3];
const positiveNumbers = numbers.filter((num) => num > 0);
console.log(positiveNumbers);
// Output: [1, 2, 3]

//? Filter Even Numbers with a Mistake
const numbers3 = [1, 2, 3, 4, 5, 6];
let evenNumbers1 = numbers3.filter((num) => {
  num % 2 === 0; // Missing 'return' keyword
});
//console.log(evenNumbers1);
//! =>Output: [] (empty array, because undefined is returned)
//! =>Mistake: Forgetting to return a value from the callback function.
//! =>Fix: Add the return keyword or use an arrow function without curly braces for implicit return:
evenNumbers1 = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
// Output: [2, 4, 6]

//? Filter Array of Objects
const students1 = [
  { name: "Abhiraj", grade: 85 },
  { name: "Ankit", grade: 60 },
  { name: "Ajay", grade: 90 },
];

const topStudents2 = students1.filter((student) => student.grade > 75);
console.log(topStudents2);
// Output: [{ name: "Abhiraj", grade: 85 }, { name: "Ajay", grade: 90 }]

//? Filter and Chain Other Methods
const numbers4 = [1, 2, 3, 4, 5, 6];
const squaresOfEven = numbers4
  .filter((num) => num % 2 === 0) // Filter even numbers
  .map((num) => num * num); // Square the filtered numbers
console.log(squaresOfEven);
// Output: [4, 16, 36]
