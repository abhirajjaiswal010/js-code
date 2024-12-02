//treat all JS code as newer version
//you may or may not need to write this
"use strict";

//alert(3+3) // we are using nodejs,not browser
//! code should be readability

//*----------------------------------------------------------------

//todo -- datatypes
//primitive data types
// 1. string
// 2. number
// 3. boolean
// 4. undefined
// 5. null
// 6.bigint
// 7.symbol

//*----------------------------------------------------------------

//* string
let name = "abhiraj";
//*number
let age = 19;
//*boolean
let trueorfalse = true;
//*bigint
//*null

console.table([name, age, trueorfalse]);

//*----------------------------------------------------------------

//! null and undefined data types

//undefined -> indicates the absence of value .
//null -> indicates the absence of an object .
let a;
let b = null;
console.table([a, b]); // undefined

//todo -> testing undefined and null
let x;
let y = null;

console.log(x == y); // true //cause of loosely equal
console.log(x === y); // false //cause of they are different types

//todo -> typeof test in null and undefined
let notAssigned;
console.log(typeof notAssigned); // "undefined"

let empty = null;
console.log(typeof empty); // "object"

//*----------------------------------------------------------------
//! number data types

// Integer
let intNum = 42;
console.log(intNum + " = " + typeof intNum); // "number"

// Floating-point (decimal)
let floatNum = 3.14;
console.log(floatNum + " = " + typeof floatNum); // "number"

// Scientific notation
let sciNum = 5e3; // 5 * 10^3 = 5000
console.log(sciNum + " = " + typeof sciNum); // "number"

// Negative number
let negNum = -10;
console.log(negNum + " = " + typeof negNum); // "number"

//* Infinity: A value that represents positive infinity. It results from calculations like division by zero.
let inf = 1 / 0;
console.log(inf); // Infinity
console.log(typeof inf); // "number"

//* -Infinity: A value that represents negative infinity.
let negInf = -1 / 0;
console.log(negInf); // -Infinity
console.log(typeof negInf); // "number"

//* NaN (Not-a-Number): Represents a computational error or an invalid number. It's of type number.
let notANum = "hello" / 2;
console.log(notANum); // NaN
console.log(typeof notANum); // "number"

//*----------------------------------------------------------------

//! bigInt  

//* the "number" type can handle  i.e., no. beyond 2^53-1 or less than -2^53-1. 


//*features 
//1. Can handle numbers larger than the Number type's safe range.
//2. BigInt is created by appending n to the end of an integer literal or by using the BigInt() constructor.
//3.You cannot directly mix BigInt with Number types in operations.

//* using 'n' suffic 
const a0= 1234567890123456789012345678901234567890n;
console.log(a0); // 1234567890123456789012345678901234567890n

//* using 'BigInt()' constructor
const a1 = BigInt("1234567890123456789012345678901234567890");
console.log(a1); // 1234567890123456789012345678901234567890n

//!error - TypeError
//You cannot mix BigInt and Number types directly:
// const a3 = 10n;
// const b3 = 20;
// console.log(a3 + b3); 
// TypeError: Cannot mix BigInt and other types
//Nan

//! You must explicitly convert Number to BigInt or vice versa:
const a4 = 10n;
const b4 = 20;
console.log(a4 + BigInt(b4)); // 30n

//!drawback of BigInt 

//Cannot Use in Math Methods:
// console.log(Math.sqrt(16n)); // TypeError


//No Decimal Support:
// const value = 1.5n; // SyntaxError

//*----------------------------------------------------------------


//* a Symbol is a unique and immutable data type introduced in ES6 (ECMAScript 2015). It is primarily used as a unique identifier for object properties to avoid naming conflicts.

//todo -> without description 
const sym = Symbol();
console.log(sym); // Symbol()
//todo -> with description
const sym1= Symbol("description");
console.log(sym1); // Symbol(description)


//!it will further simplify
