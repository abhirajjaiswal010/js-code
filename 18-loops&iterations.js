//todo ==> type of loops
//& 1. for loops
//& 2. while loops
//& 3. do...while loops
//& 4. for...in loops
//& 5. for...of loops

//? array with elements  ==>["","",""]
//? array with objects ==>[{},{},{}]


//~ for...of & for...in loops differences

//JavaScript ke for...in aur for...of loops dono iteration ke liye use hote hain

//^ 1. for...in Loop
// Purpose: Object ke properties ya keys ko iterate karne ke liye.
// Kya iterate karta hai: Sirf keys (property names).
// Kahan use karein: Objects ya arrays ke indices ko access karna ho.

//? syntax 
// for (key in object) {
//   // code block to execute
// }

//todo ==> example with object

// const person = { name: "Abhiraj", age: 20, city: "Mumbai" };

// for (let key in person) {
//     console.log(key, ":", person[key]);
// }

// Output:
// name : Abhiraj
// age : 20
// city : Mumbai

//todo ==> example with array

// const arr = [10, 20, 30];

// for (let index in arr) {
//     console.log(index, ":", arr[index]);
// }

// Output:
// 0 : 10
// 1 : 20
// 2 : 30

//^ for...of loop

// Purpose: Iterables (jaise arrays, strings, maps, sets) ki values ko iterate karne ke liye.
// Kya iterate karta hai: Sirf values.
// Kahan use karein: Arrays, strings, sets, maps, ya iterables ki values ko access karna ho.

//?syntax : 
// for (value of iterable) {
//     // code block to execute
// }

//todo ==> example with array
// const arr = [10, 20, 30];

// for (let value of arr) {
//     console.log(value);
// }

// Output:
// 10
// 20
// 30

//todo ==> example with string 
// const str = "Abhiraj";

// for (let char of str) {
//     console.log(char);
// }

// Output:
// A
// b
// h
// i
// r
// a
// j

//todo ==> example of compare
// const arr = [10, 20, 30];

// // Using for...in
// for (let index in arr) {
//     console.log(index); // Output: 0, 1, 2 (indices)
// }

// // Using for...of
// for (let value of arr) {
//     console.log(value); // Output: 10, 20, 30 (values)
// }


//? kab kya use karein?
//* for...in:
// Jab aapko keys ya property names chahiye (jaise objects me).
// Objects ke liye for...in kaafi useful hai.
//* for...of:
// Jab aapko directly values chahiye (jaise arrays, strings, ya iterables me).
// Arrays, strings, sets, or maps ke liye best option hai.
