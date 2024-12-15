//~ map() method
// The map() method in JavaScript is used to create a new array by applying a given function to every element of the original array. It does not modify the original array; instead, it returns a new array with the results of applying the provided function.


//? syntax ==>
  // const newArray = array.map((currentValue, index, array) => {
  //   // Return the transformed value
  // });
  

//^ key points:
// ==>The map() method returns a new array.
// ==>It does not modify the original array.
// ==>It can transform each element based on the logic you provide in the callback function.
// ==>The callback function is executed once for each element in the array.
// ==>The length of the resulting array is always the same as the original array.


//^ when to use 
// Transforming data: When you want to modify each element of an array based on some transformation and return a new array.

// Chaining methods: Since map() returns a new array, it is commonly used in method chaining.

//todo ==> examples
//? =>Example 1: Basic Example
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]


//? =>Example 2: Example 2: Using index and array

const numbers1 =[10,20,30]
const result1 = numbers1.map((num,index)=>{
  return `Index ${ index} : ${num}`
})

console.log(result1)


//? =>Example 3 : transforming an Array of objects

let users = [
  {name: 'abhiraj',age:24},
  {name: 'ankit',age:24},
  {name: 'aman',age:24},
]

let names =users.map(user => user.age*2);
console.log(names);
