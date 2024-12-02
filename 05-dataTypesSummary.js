//type of data types
//* 1. primitive types
//* 2. non-primitive types

//!primitive data types
//? => 7 types of p-data types
//1.string
//2.number
//3.boolean
//4.null
//5.undefined
//6.symbol
//7.BigInt

//! non-primitive data types
//? =>  one core types is object
//from onject derived types are below :-
//array;functions;date;set;map;WeakSer;WeakMap.

//*--------------------------------------------------------

//! array
const heros = ["a", "b", "c", "d", "e", "f", "g"];
console.log(heros);

//! object
let myObj = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(myObj);

//! function

let myFunction = function (name) {
  return `hello ,${name}`;
};

console.log(myFunction("abhiraj"));

//todo => typeof output of data types as below
//1.undefined => undefined
//2.boolean => boolean
//3.number => number
//4.BigInt => bigint
//5.string => string
//6.symbol => symbol
//7. null => object

//* ---non-premitive data types -----

//1. object => object
//2. array => object
//3. function => function
