//! IIFE --> IMMEDIATELY INVOKE FUNCTION EXPRESSIONS
//? what is IIFE
//IIFE stands for Immediately Invoked Function Expression. It’s a JavaScript function that is executed immediately after being defined.

//An IIFE is a function that:
// 1.Is wrapped in parentheses to turn it into a function expression.
// 2.Is immediately invoked using ()

//? why use IIFE ?
// Encapsulation: Creates a private scope to avoid polluting the global namespace.
// Isolation: Avoids variable conflicts with other code.
// Initialization: Useful for initializing code, especially in modules.

//! SYNTAX ==>
//   (function () {                   
//     // Code here
// })();


//! alternate syntax ==>
//*
//  (() => {
//     // ES6 arrow function IIFE
// })();

//*
// +function () {
//     // Unary operator before the function
// }();

//*
//==>  !function () {
//     // Another valid syntax


//todo ==> example of IIFE

(function () {
  console.log("IIFE executed!");
})();



