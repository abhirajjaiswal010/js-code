//~ foreach()
//forEach() JavaScript ka ek method hai jo arrays ke har element ko individually process karne ke liye use hota hai. Iska use iteration ke liye kiya jata hai, aur ye original array ko change nahi karta. forEach() kuch perform karta hai (e.g., print karna, update karna), lekin kuch return nahi karta.

//? syntax
//array.forEach(callback(currentValue, index, array), thisArg);

//todo ==> examples

//? ==> Example 1: Printing Array Elements
const numbers = [10, 20, 30, 40];
numbers.forEach((num) => console.log(num));
// Output:
// 10
// 20
// 30
// 40


//? ==>Example 2: Using Arrow Function
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// Output:
// 0: apple
// 1: banana
// 2: cherry


//? ==>Example 5: Iterating an Array of Objects
const users = [
  { name: 'Abhiraj', age: 20 },
  { name: 'Ankit', age: 22 }
];

users.forEach(user => {
  console.log(`${user.name} is ${user.age} years old`);
});
