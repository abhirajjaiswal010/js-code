//* destructuring in js and spread operator 
//what is destructuring
// The destructuring syntax is a JavaScript syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. 
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]


//^ Array destructuring 
//?const [a,b]=array;
//ex
// const array = [10, 20];
// const [a1, b1] = array;
// console.log(a1,b1);   // a = 10, b = 20

//? const [a, ,b]=array
//ex
// const array = [10, 20, 30];
// const [a1, , b1] = array;// a = 10, b = 30

//^ object destructuring
//? const { a, b } = obj;
let {fname:a1,lname:b1}={fname:"abhiraj",lname:"jaiswal"}
console.log(a1,b1)


//! spread operator 

//? Spread syntax (...) ek aisa JavaScript feature hai jo kisi iterable (jaise array ya string) ko expand kar deta hai un jagahon par jahan zero ya zyada arguments (function calls ke liye) ya elements (array literals ke liye) ki zarurat hoti hai.
//^in array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // arr2 becomes [1, 2, 3, 4, 5]
//^ in object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3,a:4 }; // obj2 becomes { a: 1, b: 2, c: 3 }
console.log(obj2);

