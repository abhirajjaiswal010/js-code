// Conditional statements ==> in JavaScript control the flow of code execution based on certain conditions. They evaluate logical expressions and execute specific blocks of code depending on whether the conditions are true or false.

//todo ==> type of conditional statements

//* 1. "if " statement
// Executes a block of code if the condition evaluates to true.

//!syntax
// if (condition) {
//   // Code to execute if condition is true
// }

//*2 . "if...else" statement
// Provides an alternative block of code if the condition evaluates to false.

//!syntax
// if (condition) {
//   // Code if condition is true
// } else {
//   // Code if condition is false
// }

//*3 . "if...else if...else" Statement

//Evaluates multiple conditions in sequence.

//! syntax
// if (condition1) {
//   // Code for condition1
// } else if (condition2) {
//   // Code for condition2
// } else {
//   // Code if all conditions are false
// }

//*4 . "switch" statement

//Handles multiple conditions by matching a value against case clauses.
//!syntax
// switch (expression) {
//   case value1:
//     // Code for value1
//     break;
//   case value2:
//     // Code for value2
//     break;
//   default:
//   // Code if no case matches
// }

//*5 ternary expression
//! syntax
// condition ? expressionIfTrue : expressionIfFalse;

//todo ==> example of ternary expression
let age = 18;
let message = age >= 18 ? "You are an adult." : "You are a minor.";
//console.log(message); // Output: "You are an adult."

//todo ==> nested ternary operator.
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";

//console.log(grade); // Output: "B"

//todo ==> example
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  //console.log((childsAllowance = 10));
} else {
  //console.log((childsAllowance = 5));
}

//todo ==> example

let cheese = "Cheddar";

if (cheese) {
  //console.log("Yay! Cheese available for making cheese on toast.");
} else {
  //console.log("No cheese on toast for you today.");
}

//todo ==> Nested if ... else

let temperature = 30;

if (temperature >= 45) {
  //console.log(`sunny cause of ${temperature}`);
} else if (temperature < 45) {
  //console.log(`rainy cause of ${temperature}`);
} else if (temperature <= 20) {
  //console.log(`winter cause of ${temperature}`);
}

//todo ==> logical operator

//* AND ==> &&
//return true if both condition is true
//* OR ==> ||
//return true if atleast one condition is true
//* NOT ==> !
//invert a boolean value (true becomes false and vice versa)
//* Nullish coalescing operator ==> ??
//return the right-hand operand if the left-hand operand is null or undefined ; otherwise ,return the left-hand operand.

//*---example---*//
let userName = null;
let defaultName = "Guest";

let displayName = userName ?? defaultName;
// console.log(`Welcome, ${displayName}!`);
//output ==>  Welcome, Guest!


