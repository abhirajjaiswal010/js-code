//! ==> FUNCTIONS
//? ==> A function is a block of code designed to perform a particular task. Functions are executed when they are invoked (called).

//? ==> Syntax:
//function functionName (Parameters){
//code block
//return value; //optional
//}

//? parameter  ==> when function is define
//? argument ==> when function is call

//todo ==> example
// function addTwoNumber(num1, num2) {
//   console.log(num1 + num2);
// }
// addTwoNumber(4,"5"); //45
// addTwoNumber(5,"a"); //5a
// addTwoNumber("a","b"); //ab
// addTwoNumber(5,null); //5

//todo  ==> undefined conditions
// let result = addTwoNumber(5,6)
// console.log("result : ",result); // result : undefined

//! by changing fxn code line
function addTwoNumber(num1, num2) {
  return num1 + num2;
  //let result = (num1 + num2); //this will throw error because console.log is not inside the function retrun is executed
}
let result = addTwoNumber(5, 6);
console.log("result : ", result); //result : 11

//todo ==> type of function

//*1.function declaration

// function greet(name) {
//   return `Hello, ${name}!`;
// }
// console.log(greet("Abhiraj")); // Hello, Abhiraj!

//*2 function expression
//? function can be stored in a variable
// greet = function (name) {
 // return `Hi, ${name}!`;
//};
//console.log(greet("Abhiraj")); // Hi, Abhiraj!

//*3 Arrow function
//? A shorter syntax introduced in ES6
//? syntax :
//const functionName =(parameters) => {
//function body
//}
//? example :
let square = x=>x*x
console.log(square(5));// 25

//*4 anonymous function
//? it is a function that dous not have a name .
//? syntax : 
// function (para)
// {
   //fxn  body
// }
//? example :
// setTimeout(function () {
//   console.log("This message appears after 3 seconds.");
// }, 3000);
//? IIFE ==> immediately invoked function expression
// (function () {
//   console.log("This is an immediately invoked function.");
// })();


//todo ==> using of "..."-> rest parameters
//? use "..." to handle multiple argument as an array
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

function name(...String) {
  return String;
  
}

console.log(name("abhi","raj"));
function calculateCardPrice(...num1) //rest operator "...""
{
return num1
}
console.log(calculateCardPrice(2,400,500))
//output ==> [2,400,500]


//todo ==> function with objects
const user ={
  username : "abhiraj",
  price : 200
}
function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
  
}
handleObject(user)
